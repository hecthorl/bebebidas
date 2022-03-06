import useSWR from 'swr'
import getCocktails from '../../services/getCocktails'
import Cocktail from '../Cocktail'
import Loading from '../Loading'

import './index.css'

const NotMatch = () => (
   <h2 className="section-title">No cocktails matched your search.</h2>
)

const CocktailList = () => {
   const { data: cocktails, error } = useSWR(' ', getCocktails)

   if (error) return <NotMatch />
   if (!cocktails) return <Loading />
   return (
      <section className="cocktail_list-section">
         <div className="cocktails-center">
            {cocktails.map((item) => (
               <Cocktail key={item.id} {...item} />
            ))}
         </div>
      </section>
   )
}

export default CocktailList
