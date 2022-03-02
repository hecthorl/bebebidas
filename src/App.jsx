import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
import Layout from './Layout'
import Home from './pages/Home'

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/cocktail/:id" element={<SingleCocktail />} />
               <Route path="*" element={<Error />} />
            </Route>
         </Routes>
      </Router>
   )
}

export default App
