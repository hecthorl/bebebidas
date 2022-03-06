import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context'
import Autocomplete from '../Autocomplete'

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
            onSubmit={(event) => event.preventDefault()}
         >
            <input type="text" onChange={searchCocktail} ref={searchValueRef} />
            {searchValueRef.current.value && (
               <ul className="drink-search-container">
                  <Autocomplete track={searchValueRef.current.value} />
               </ul>
            )}
         </form>
      </section>
   )
}

export default SearchForm
