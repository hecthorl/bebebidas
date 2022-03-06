import {
   useState,
   useContext,
   useEffect,
   createContext,
   useCallback
} from 'react'

const AppContext = createContext()
export const useGlobalContext = () => useContext(AppContext)

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppProvider = ({ children }) => {
   const [loading, setLoading] = useState(false)
   const [searchTerm, setSearchTerm] = useState('')
   const [cocktails, setCocktails] = useState([])

   const fetchDrinks = useCallback(async () => {
      setLoading(true)
      try {
         const res = await fetch(`${url + searchTerm}`)
         const { drinks } = await res.json()
         if (!drinks) {
            setCocktails([])
            setLoading(false)
            return
         }
         const newCocktails = drinks.map((item) => {
            const {
               idDrink,
               strDrink,
               strDrinkThumb,
               strAlcoholic,
               strGlass,
               strCategory
            } = item
            const drinks = {
               Alcoholic: '🚩 Yes',
               'Non alcoholic': '🏳️ No',
               'Optional alcohol': '❔ Optional'
            }
            const isAlcoholic = drinks[strAlcoholic]
            return {
               id: idDrink,
               name: strDrink,
               image: strDrinkThumb,
               alcohol: isAlcoholic,
               glass: strGlass,
               category: strCategory
            }
         })
         setLoading(false)
         setCocktails(newCocktails)
      } catch (err) {
         setLoading(false)
         console.log(err)
      }
   }, [searchTerm])

   useEffect(() => {
      fetchDrinks()
   }, [searchTerm, fetchDrinks])

   return (
      <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
         {children}
      </AppContext.Provider>
   )
}
// make sure use

export { AppContext, AppProvider }
