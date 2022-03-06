import { useNavigate } from 'react-router-dom'

export default function Hit({ name, image, glass, id }) {
   const navigate = useNavigate()
   return (
      <button
         onClick={() => navigate(`/cocktail/${id}`)}
         className="autocomplete-container"
      >
         <img src={image} alt={name} />
         <div>
            <h6>{name}</h6>
            <span>{glass}</span>
         </div>
      </button>
   )
}
