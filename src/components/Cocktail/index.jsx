import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'
import './index.css'

export default function Cocktail({
   image,
   name,
   id,
   alcohol,
   glass,
   category,
}) {
   return (
      <div className="art-container">
         <article>
            <Tilt scale={1} transitionSpeed={200} className="img-container">
               <img src={image} alt={name} loading="lazy" />
            </Tilt>
            <div className="cocktail-body">
               <h3>{name}</h3>
               <div>
                  <div>
                     <h4>
                        Glass: <span>{glass}</span>
                     </h4>
                     <p>
                        Alcoholic: <span>{alcohol}</span>
                     </p>
                     <p>
                        Type: <span>{category}</span>
                     </p>
                  </div>
                  <Link className="btn detail" to={`/cocktail/${id}`}>
                     Details
                  </Link>
               </div>
            </div>
         </article>
      </div>
   )
}
