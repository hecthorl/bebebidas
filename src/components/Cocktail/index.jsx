// import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'
import useBoolean from '../../hooks/useBoolean'
import './index.css'

export default function Cocktail({
   image,
   name,
   id,
   category,
   glass,
   alcohol
}) {
   // const cocktailRef = useRef(null)
   const [value, setValue] = useBoolean(true)

   // useEffect(() => {
   //    const observer = new IntersectionObserver((e) => {
   //       if (e[0].isIntersecting) {
   //          console.log(e[0])
   //       }
   //    })
   //    if (cocktailRef.current !== null) {
   //       observer.observe(cocktailRef.current)
   //    }
   //    return () => {
   //       if (cocktailRef.current !== null) {
   //          observer.unobserve(cocktailRef.current)
   //       }
   //    }
   // }, [])

   return (
      <div className="art-container">
         <article>
            <Tilt
               // ref={cocktailRef}
               scale={1}
               transitionSpeed={200}
               className="img-container"
               tiltEnable={!value}
            >
               <img
                  // ref={cocktailRef}
                  alt={`Drink ${name}`}
                  loading="lazy"
                  src={image}
                  onLoad={setValue.off}
               />
               {value && (
                  <div id="ab">
                     <div />
                  </div>
               )}
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
