import { Link } from 'react-router-dom'
import './index.css'

export default function Cocktail(props) {
   const { image, name, id, info, glass } = props
   return (
      <article>
         <div className="img-container">
            <img src={image} alt={name} />
         </div>
         <div className="cocktail-body">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            <Link className="btn btn-primary" to={`/cocktail/${id}`}>
               Details
            </Link>
         </div>
      </article>
   )
}
