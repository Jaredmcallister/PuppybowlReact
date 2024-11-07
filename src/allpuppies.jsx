import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
const AllPuppies = () => {
  const [puppies, setPuppies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //Fetch the puppies
    const getPuppies = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players`);
      const allPuppies = await response.json();
      console.log(allPuppies.data.players);
      setPuppies(allPuppies.data.players);
    }
    getPuppies()
  }, []);


  //Map them out
  //Display them out in main 
  //Make a button/image that will lead to another page that will display players details
  // form post to creat a new player
  // form to search for players in the api
  // create a button to delete players
  // create the input for the search bar
  //to create state that will hold the value of the search term
  //use ternary to see if the puppy info is valid 
  //display the searched puppy 
  //make a form that will allow post method
  return (
    <>
      <nav>

      </nav>
      {puppies.map((puppy) => (
        <div key={puppy.id}>
          <h2>{puppy.name}
            <p>{puppy.breed}</p>
            <img onClick={() => { navigate(`/puppies/${puppy.id}`) }} src={puppy.imageUrl}
              height="350"
              width="250"
            />
          </h2>
        </div>
      ))}
      <h2>Hello! Puppies!</h2>

    </>
  )
}
export default AllPuppies;