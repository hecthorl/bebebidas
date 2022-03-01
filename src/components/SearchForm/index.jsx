import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context'
import './index.css'

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
      <section className="search-container">
         <div>Search for your Drink!</div>
         <form
            className="search-form"
            onSubmit={event => event.preventDefault()}
         >
            <div className="form-contianer">
               <input
                  type="text"
                  onChange={searchCocktail}
                  ref={searchValueRef}
               />
            </div>
         </form>
      </section>
   )
}

export default SearchForm
