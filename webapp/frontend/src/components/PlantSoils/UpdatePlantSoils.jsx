// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import PlantSelectorOption from "./PlantsDropdownSelectorPlantSoils";

import SoilTypeSelectorOption from "./SoilDropdownSelectorPlantSoils"


// bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const UpdatePlantSoil = () => {

    // pull in the information we need to dynamically populate the dropdown menus
    const [Plants, setPlants] = useState([]);
    
    const fetchPlants = async () => {
        try {
          const URL = import.meta.env.VITE_API_URL + "Plants";
          const response = await axios.get(URL);
          setPlants(response.data);
        } catch (error) {
          alert("Error fetching Plants from the server.");
          console.error("Error fetching Plants:", error);
        }
      };
    
    useEffect(() => {
        fetchPlants();
    }, []);

    // pull in the information we need to dynamically populate the dropdown menus
    const [SoilTypes, setSoilTypes] = useState([]);

    const fetchSoilTypes = async () => {
        try {
            const URL = import.meta.env.VITE_API_URL + "SoilTypes";
            const response = await axios.get(URL);
            setSoilTypes(response.data);
        } catch (error) {
            alert("Error fetching Soil Types from the server.");
            console.error("Error fetching Soil Types:", error);
        }
        };
    
    useEffect(() => {
        fetchSoilTypes();
    }, []);
    

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevPlantSoil = location.state.PlantSoil;

  const [formData, setFormData] = useState({
    plantID:               prevPlantSoil.plantID || '' ,
    soilID:                prevPlantSoil.soilID || '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function isUpdate(){
    // Check if formData is equal to prevPlantSoil
    if (JSON.stringify(formData) === JSON.stringify({
      plantID:         prevPlantSoil.plantID || '',
      soilID:              prevPlantSoil.soilID || '',
    })) {
      alert("No changes made.");
      return false;
    }
    return true
  }

  const handleSubmit = async (event) => {
    // Stop default form behavior which is to reload the page
    event.preventDefault();
    // Check if formData is equal to prevPlantSoil
    if (isUpdate()){
      try {
        const URL = import.meta.env.VITE_API_URL + "PlantSoils/" + id;
        const response = await axios.put(URL, formData);
        if (response.status !== 200) {
          alert("Error updating plant soils relationship!");
        } else {
          alert(response.data.message);
          // Redirect to PlantSoils page
          navigate("/PlantSoils");
        // Citation for this line of code
        // Forces the page to reload to display the new data
        // URL: https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
        // Date Accessed: 5 August 2024
        window.location.reload();
        }
      } catch (err) {
        console.log("Error updating plant soil relationship:", err);
      }
    }
  };

  return (
    <div>
      <h2>Update Plant Soils Relationship</h2>
      <br />



      <Form onSubmit={handleSubmit}>

          <Row>

            <Col>

            <Form.Label htmlFor="plantID">Plant</Form.Label>
            <Form.Select
                name="plantID"
                onChange={handleInputChange}
                required
                >
                
                {/* use the map function to generate all of the options */}
                {/* displays the plant's name but sets the value equal to the plant's primary key */}
                {Plants.map((Plant) => (
                    <PlantSelectorOption key={Plant.plantID} Plant={Plant} fetchPlants={fetchPlants} />
                ))}

            </Form.Select>

              </Col>

          <br /> 
            <Col>

            <Form.Label htmlFor="soilID">Soil Type</Form.Label>
            <Form.Select
                name="soilID"
                onChange={handleInputChange}
                required
                >
    
                {/* use the map function to generate all of the options */}
                {/* displays the plant's name but sets the value equal to the plant's primary key */}
                {SoilTypes.map((SoilType) => (
                    <SoilTypeSelectorOption key={SoilType.soilID} SoilType={SoilType} fetchSoilTypes={fetchSoilTypes} />
                ))}
            </Form.Select>
            </Col>
          </Row>

          <br />
          <Container >
          <Row>
            <Col> 
              <Button variant="secondary" type="button" onClick={() => navigate("/PlantSoils")} >Cancel</Button>{' '}
            </Col>
            
            <Col> 
              <Button variant="success" type="submit">Update</Button>{' '}
            </Col>
          
          
          </Row>

      </Container>

      </Form>

    </div>
  );
};

export default UpdatePlantSoil;

