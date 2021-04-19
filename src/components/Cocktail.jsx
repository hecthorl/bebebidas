import { Link } from 'react-router-dom';

const Cocktail = props => {
   const { image, name, id, info, glass } = props;
   return (
      <div className="cocktail">
         <div className="img-container">
            <img src={image} alt="cocktail" />
         </div>
         <div className="cocktail-footer">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            <Link className="btn btn-primary" to={`/cocktail/${id}`}>
               Details
            </Link>
         </div>
      </div>
   );
};

export default Cocktail;
