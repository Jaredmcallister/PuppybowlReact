import { Routes, Route, Link, useNavigate } from "react-router-dom"
import AllPuppies from "./allpuppies";
import SinglePuppy from "./singlepuppy";
const App = () => {

  return (
    <>
      <nav>
        <Link to='/'>Home</Link>

      </nav>

      <Routes>
        <Route path="/" element={<AllPuppies />} />
        <Route path="/puppies/:id" element={<SinglePuppy />} />
      </Routes>
    </>



  )
};

export default App
