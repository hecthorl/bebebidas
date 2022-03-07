import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import getCocktails from '../../services/getCocktails'
import './index.css'
import ShotglassIcon from './ShotglassIcon'

export default function Autocomplete({ track }) {
   const { data: cocktails, error } = useSWR(track, getCocktails)
   const navigate = useNavigate()

   if (error) {
      return (
         <div className="drink-not-found">
            <span>Drink not found</span>
            <span>
               <ShotglassIcon />
            </span>
         </div>
      )
   }
   if (!cocktails) {
      return (
         <div className="drink-not-found">
            <div className="lds-ripple">
               <div></div>
               <div></div>
            </div>
         </div>
      )
   }

   return cocktails.map(({ name, id, image, glass }) => (
      <button
         key={id}
         onClick={() => navigate(`/cocktail/${id}`)}
         className="autocomplete-container"
      >
         <img src={image} alt={name} />
         <div>
            <h6>{name}</h6>
            <span>{glass}</span>
         </div>
      </button>
   ))
}
