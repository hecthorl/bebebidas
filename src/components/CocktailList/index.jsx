import { useGlobalContext } from '../../context'
import Cocktail from '../Cocktail'
import Loading from '../Loading'
import './index.css'

const NotMatch = () => (
   <h2 className="section-title">No cocktails matched your search.</h2>
)

const CocktailList = () => {
   const { loading, cocktails } = useGlobalContext()

   if (loading) return <Loading />
   if (!cocktails.length) return <NotMatch />
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
