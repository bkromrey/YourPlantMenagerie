// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdateSoilType = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevSoilType = location.state.person;

  const [formData, setFormData] = useState({
    fname: prevSoilType.fname || '',
    lname: prevSoilType.lname || '',
    homeworld: prevSoilType.homeworld || '',
    age: prevSoilType.age || '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function isUpdate(){
    // Check if formData is equal to prevSoilType
    if (JSON.stringify(formData) === JSON.stringify({
      fname: prevSoilType.fname || '',
      lname: prevSoilType.lname || '',
      homeworld: prevSoilType.homeworld || '',
      age: prevSoilType.age || '',
    })) {
      alert("No changes made.");
      return false;
    }
    return true
  }

  const handleSubmit = async (event) => {
    // Stop default form behavior which is to reload the page
    event.preventDefault();
    // Check if formData is equal to prevSoilType
    if (isUpdate()){
      try {
        const URL = import.meta.env.VITE_API_URL + "people/" + id;
        const response = await axios.put(URL, formData);
        if (response.status !== 200) {
          alert("Error updating person");
        } else {
          alert(response.data.message);
          // Redirect to people page
          navigate("/people");
        }
      } catch (err) {
        console.log("Error updating person:", err);
      }
    }
  };

  return (
    <div>
      <h2>Update Person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            onChange={handleInputChange}
            required
            defaultValue={prevSoilType.fname}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            onChange={handleInputChange}
            required
            defaultValue={prevSoilType.lname}
          />
        </div>
        <div>
          <label>Homeworld:</label>
          <input
            type="number"
            name="homeworld"
            onChange={handleInputChange}
            defaultValue={prevSoilType.homeworld}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            onChange={handleInputChange}
            required
            defaultValue={prevSoilType.age}
          />
        </div>
        <button type="button" onClick={() => navigate("/people")}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateSoilType;

