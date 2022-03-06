export default async function () {
   try {
      const res = await fetch(
         'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      )
      const { drinks } = await res.json()
      const {
         strDrink: name,
         strDrinkThumb: image,
         strAlcoholic: info,
         strCategory: category,
         strGlass: glass
      } = drinks[0]
      return {
         name,
         category,
         image,
         info,
         glass
      }
   } catch (err) {
      return Error(err)
   }
}
