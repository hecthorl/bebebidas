export default function getCocktails(track) {
   const URI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
   return fetch(`${URI}?s=${track}`)
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
}
