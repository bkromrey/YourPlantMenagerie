// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const UpdateSoilType = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevSoilType = location.state.SoilType;

  const [formData, setFormData] = useState({
    soilType:           prevSoilType.soilType || '' ,
    soilDescription:    prevSoilType.soilDescription || '',
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
      soilType:         prevSoilType.soilType || '',
      soilDescription:  prevSoilType.soilDescription || '',
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
        const URL = import.meta.env.VITE_API_URL + "soilTypes/" + id;
        const response = await axios.put(URL, formData);
        if (response.status !== 200) {
          alert("Error updating soil type!");
        } else {
          alert(response.data.message);
          // Redirect to SoilTypes page
          navigate("/soilTypes");
        }
      } catch (err) {
        console.log("Error updating soil type:", err);
      }
    }
  };

  return (
    <div>
      <h2>Update Soil</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Soil Name:</label>
          <input
            type="text"
            name="soilType"
            onChange={handleInputChange}
            required
            defaultValue={prevSoilType.soilType}
          />
        </div>
        <div>
          <label>Soil Description</label>
          <input
            type="text" // TODO update this to a text box for longer text entry
            name="soilDescription" 
            onChange={handleInputChange}
            required
            defaultValue={prevSoilType.soilDescription}
          />
        </div>

        <button type="button" onClick={() => navigate("/soilTypes")}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateSoilType;

