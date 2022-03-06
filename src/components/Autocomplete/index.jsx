import useSWR from 'swr'
import getCocktails from '../../services/getCocktails'
import Hit from '../Hit'

export default function Autocomplete({ track }) {
   const { data: cocktails, error } = useSWR(track, getCocktails)

   if (error) return <div>error</div>
   if (!cocktails) return <div>CARGANDO</div>
   return (
      <>
         {cocktails.map((item) => (
            <Hit key={item.id} {...item} />
         ))}
      </>
   )
}
