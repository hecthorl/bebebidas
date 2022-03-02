import { useEffect } from 'react'

export default function useScrollSaver(scrollableDiv, pageUrl) {
   /* Save the scroll position */
   const handleScroll = () => {
      window.sessionStorage.setItem(
         `${pageUrl}-scrollPosition`,
         scrollableDiv.current.scrollTop.toString()
      )
   }
   useEffect(() => {
      if (scrollableDiv.current) {
         const scrollableBody = scrollableDiv.current
         scrollableBody.addEventListener('scroll', handleScroll)
         return function cleanup() {
            scrollableBody.removeEventListener('scroll', handleScroll)
         }
      }
   }, [scrollableDiv, pageUrl])

   /* Restore the saved scroll position */
   useEffect(() => {
      if (
         scrollableDiv.current &&
         sessionStorage.getItem(`${pageUrl}-scrollPosition`)
      ) {
         const prevScrollPos = Number(
            sessionStorage.getItem(`${pageUrl}-scrollPosition`)
         )
         scrollableDiv.current.scrollTop = prevScrollPos
      }
   }, [scrollableDiv, pageUrl])
}
