import './index.css'
export default function Loading() {
   return (
      <div className="loader-container">
         <div className="loader">
            {[...Array(25).keys()].map((_, i) => (
               <div className="dot" key={i} />
            ))}
         </div>
      </div>
   )
}
