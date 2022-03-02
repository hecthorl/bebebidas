import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import Loading from '../../components/Loading'
import getCocktail from '../../services/getCocktail'
import './index.css'

const SingleCocktail = () => {
   const { id } = useParams()
   const { data: cocktail, error } = useSWR(id, getCocktail)
   if (error) return <div>failed to load</div>
   if (!cocktail) return <Loading />

   return (
      <section className="single-cocktail_container">
         <img src={cocktail.image} alt={cocktail.name} />

         <div className="drink-info">
            <h3>{cocktail.name}</h3>
            <div>
               <p>
                  <span className="drink-data">Type: </span>
                  {cocktail.category}
               </p>
               <p>
                  <span className="drink-data">Ingredients: </span>
                  {cocktail.ingredients}
               </p>
               <p>
                  <span className="drink-data">Info: </span>
                  {cocktail.info}
               </p>
               <p>
                  <span className="drink-data">Glass: </span>
                  {cocktail.glass}
               </p>
               <p>
                  <span className="drink-data">Instructions: </span>
                  {cocktail.instructions}
               </p>
            </div>
         </div>
      </section>
   )
}

export default SingleCocktail
