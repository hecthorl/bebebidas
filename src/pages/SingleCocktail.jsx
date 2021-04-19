import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [cocktail, setCocktail] = useState(null);

   const getCocktail = useCallback(async () => {
      setLoading(true);
      try {
         const res = await fetch(`${url + id}`);
         const { drinks } = await res.json();
         setLoading(false);
         if (!drinks) return setCocktail(null);
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
            strIngredient5,
         } = drinks[0];
         const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
         ]
            .filter(item => item && item)
            .join(', ');
         const newCocktail = {
            name,
            category,
            image,
            ingredients,
            info,
            glass,
            instructions,
         };
         setCocktail(newCocktail);
      } catch (err) {
         setLoading(false);
         console.log(err);
      }
   }, [id]);

   useEffect(() => {
      getCocktail();
   }, [id, getCocktail]);

   if (loading) return <Loading />;

   return (
      <section className="section cocktail-section">
         <Link to="/" className="btn btn-primary">
            Home
         </Link>
         <h2 className="section-title">{cocktail?.name}</h2>
         <div className="drink">
            <img src={cocktail?.image} alt={cocktail?.name} />
            <div className="drink-info">
               <p>
                  <span className="drink-data">name:</span>
                  {cocktail?.name}
               </p>
               <p>
                  <span className="drink-data">category: </span>
                  {cocktail?.category}
               </p>
               <p>
                  <span className="drink-data">ingredients: </span>
                  {cocktail?.ingredients}
               </p>
               <p>
                  <span className="drink-data">info: </span>
                  {cocktail?.info}
               </p>
               <p>
                  <span className="drink-data">glass: </span>
                  {cocktail?.glass}
               </p>
               <p>
                  <span className="drink-data">instructions: </span>
                  {cocktail?.instructions}
               </p>
            </div>
         </div>
      </section>
   );
};

export default SingleCocktail;
