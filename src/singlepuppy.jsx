import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const SinglePuppy = () => {
  const [selectedPuppy, setSelectedPuppy] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPuppy = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players/${id}`);
      const jsonPuppies = await response.json();
      setSelectedPuppy(jsonPuppies.data.player);
      console.log(jsonPuppies);
    }
    getPuppy();
  }, []);
  return (
    <>
      <h2>{selectedPuppy.name}</h2>
      <img src={selectedPuppy.imageUrl}
        height="350"
        width="250">

      </img>


      <h2>{selectedPuppy.breed}</h2>


    </>
  )
}
export default SinglePuppy