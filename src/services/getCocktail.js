import { BASE_URI } from '../utils/constants'

export default async function (id) {
   try {
      const res = await fetch(`${BASE_URI}/lookup.php?i=${id}`)
      const { drinks } = await res.json()
      const {
         strDrink: name,
         strDrinkThumb: image,
         strAlcoholic: info,
         strCategory: category,
         strGlass: glass,
         strInstructions: instructions,
         strIngredient1,
         strIngredient2,
         strIngredient3,
         strIngredient4,
         strIngredient5
      } = drinks[0]

      const ingredientsFiltered = [
         strIngredient1,
         strIngredient2,
         strIngredient3,
         strIngredient4,
         strIngredient5
      ].filter((item) => item && item)

      const ingredients = new Intl.ListFormat('en').format(ingredientsFiltered)

      return {
         name,
         category,
         image,
         ingredients,
         info,
         glass,
         instructions
      }
   } catch (err) {
      Error(err)
   }
}
