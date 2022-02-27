import { useGlobalContext } from 'context'
import { useEffect, useRef } from 'react'

const SearchForm = () => {
   const { setSearchTerm } = useGlobalContext()
   const searchValueRef = useRef('')

   useEffect(() => {
      searchValueRef.current.focus()
   }, [])

   const searchCocktail = () => {
      setSearchTerm(searchValueRef.current.value)
   }
   return (
      <section className="section search">
         <form
            className="search-form"
            onSubmit={event => event.preventDefault()}
         >
            <div className="form-control">
               <label htmlFor="name">Search your favorite cocktail</label>
               <input
                  type="text"
                  name="name"
                  onChange={searchCocktail}
                  ref={searchValueRef}
               />
            </div>
         </form>
      </section>
   )
}

export default SearchForm
