import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context'
import useBoolean from '../../hooks/useBoolean'
import Autocomplete from '../Autocomplete'

import './index.css'

const SearchForm = () => {
   const { setSearchTerm } = useGlobalContext()
   const searchValueRef = useRef('')
   const [flag, setFlag] = useBoolean()

   useEffect(() => {
      searchValueRef.current.focus()
      document.body.addEventListener('click', setFlag.off)

      return () => document.body.removeEventListener('click', setFlag.off)
   }, [])

   const searchCocktail = () => {
      setSearchTerm(searchValueRef.current.value)
      setFlag.on()
      if (searchValueRef.current.value === '') setFlag.off()
   }

   return (
      <section className="search-container">
         <div>Search for your Drink!</div>
         <form
            className="search-form"
            onSubmit={(event) => event.preventDefault()}
         >
            <input type="text" onChange={searchCocktail} ref={searchValueRef} />
            {flag && (
               <ul className="drink-search-container">
                  <Autocomplete track={searchValueRef.current.value} />
               </ul>
            )}
         </form>
      </section>
   )
}

export default SearchForm
