// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateSoilType() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    soilType: "",
    soilDescription: "",
  });
  
  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();
    // Create a new SoilType object from the formData
    const newSoilType = {
      fname: formData.fname,
      lname: formData.lname,
      homeworld: formData.homeworld,
      age: formData.age,
    };

    try {
      const URL = import.meta.env.VITE_API_URL + "soilTypes";
      const response = await axios.post(URL, newSoilType);
      if (response.status === 201) {
        navigate("/soilTypes");
      } else {
        alert("Error creating SoilType");
      }
    } catch (error) {
      alert("Error creating SoilType");
      console.error("Error creating SoilType:", error);
    }
    // Reset the form fields
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormData({
      fname: "",
      lname: "",
      homeworld: "",
      age: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>Create BSG SoilType</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          defaultValue={formData.fname}
          onChange={handleInputChange}
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          defaultValue={formData.lname}
          onChange={handleInputChange}
        />
        <label htmlFor="homeworld">Homeworld</label>
        <input
          type="number"
          name="homeworld"
          value={formData.homeworld}
          onChange={handleInputChange}
        />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        <button type="submit">Create SoilType</button>
      </form>
    </>
  );
}

export default CreateSoilType;
