import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'
import './index.css'

export default function Cocktail(props) {
   const { image, name, id, category, glass, alcohol } = props

   const cocktailRef = useRef(null)

   useEffect(() => {
      const observer = new IntersectionObserver((e) => {
         e[0].target.style.display = 'none'
         if (e[0].isIntersecting) {
            e[0].target.style.display = 'block'
            // console.log(e[0])
         }
      })
      if (cocktailRef.current) {
         observer.observe(cocktailRef.current)
      }
      return () => {
         observer.unobserve(cocktailRef.current)
      }
   }, [])

   return (
      <div className="art-container">
         <article>
            <Tilt scale={1} transitionSpeed={200} className="img-container">
               <img
                  ref={cocktailRef}
                  alt={`Drink ${name}`}
                  loading="lazy"
                  src={image}
               />
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
