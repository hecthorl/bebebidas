import { BASE_URI } from '../utils/constants'

export default async function getCocktails(track = ' ') {
   try {
      const res = await fetch(`${BASE_URI}/search.php?s=${track}`)
      const { drinks } = await res.json()
      if (!drinks.length) throw Error('No hay coincidencas')
      return drinks.map((item) => {
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
   } catch (error) {
      throw Error(error)
   }
}

/**
 * return fetch(`${BASE_URI}/search.php?s=${track}`)
      .then((res) => res.json())
      .then(({ drinks }) =>
         drinks.map((item) => {
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
      )
      .catch((err) => console.log(err))
 */
