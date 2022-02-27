import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from 'components/Navbar'
import About from 'pages/About'
import Error from 'pages/Error'
import Home from 'pages/Home'
import SingleCocktail from 'pages/SingleCocktail'
import Cocktail from 'components/Cocktail'

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/xdd" element={<Cocktail />} />
            <Route path="/about" element={<About />} />
            <Route path="/cocktail/:id" element={<SingleCocktail />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </Router>
   )
}

export default App
