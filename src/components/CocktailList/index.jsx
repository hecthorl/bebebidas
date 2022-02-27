import Cocktail from 'components/Cocktail'
import Loading from 'components/Loading'
import { useGlobalContext } from 'context'
import './index.css'

const NotMatch = () => (
   <h2 className="section-title">No cocktails matched your search.</h2>
)

const CocktailList = () => {
   const { loading, cocktails } = useGlobalContext()

   if (loading) return <Loading />
   if (!cocktails.length) return <NotMatch />
   return (
      <section>
         <h2 className="section-title">cocktails</h2>
         <div className="cocktails-center">
            {cocktails.map(item => (
               <Cocktail key={item.id} {...item} />
            ))}
         </div>
      </section>
   )
}

export default CocktailList
