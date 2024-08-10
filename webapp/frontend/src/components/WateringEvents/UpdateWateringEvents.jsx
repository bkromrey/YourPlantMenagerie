// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import PlantSelectorOption from "./DropdownSelectorWateringEvents";


// bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const UpdateWateringEvent = () => {

    // pull in the information we need to dynamically populate the dropdown menus.
    // pull directly from the Plants table, not on the WateringEvents table's 
    // plantIDs because some plants might be absent from WateringEvents
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


  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevWateringEvent = location.state.WateringEvent;

  const [formData, setFormData] = useState({
    wateringDate:           prevWateringEvent.wateringDate || '' ,
    plantID:                prevWateringEvent.plantID || '',
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function isUpdate(){
    // Check if formData is equal to prevWateringEvent
    if (JSON.stringify(formData) === JSON.stringify({
      wateringDate:         prevWateringEvent.wateringDate || '',
      plantID:              prevWateringEvent.plantID || '',
    })) {
      alert("No changes made.");
      return false;
    }
    return true
  }

  const handleSubmit = async (event) => {
    // Stop default form behavior which is to reload the page
    event.preventDefault();
    // Check if formData is equal to prevWateringEvent
    if (isUpdate()){
      try {
        const URL = import.meta.env.VITE_API_URL + "WateringEvents/" + id;
        const response = await axios.put(URL, formData);
        if (response.status !== 200) {
          alert("Error updating watering event!");
        } else {
          alert(response.data.message);
          // Redirect to WateringEvents page
          navigate("/WateringEvents");
        // Citation for this line of code
        // Forces the page to reload to display the new data
        // URL: https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
        // Date Accessed: 5 August 2024
        window.location.reload();
        }
      } catch (err) {
        console.log("Error updating watering event:", err);
      }
    }
  };

  // alert(prevWateringEvent.wateringDate);
  // 2022-09-09T07:00:00.000Z

  // alert(prevWateringEvent.plantID);
  // test plant 5


  // CITATION FOR DATE STUFF
  // formats the already existing watering date in a way that the web UI can display nicely by slicing
  // DATE ACCESSED: 10 AUG 2024
  // URL: https://stackoverflow.com/questions/63987168/input-type-date-set-a-default-value-to-date-today 
  const prevDate = prevWateringEvent.wateringDate.slice(0,10);


  return (
    
    <div>
      <h2>Update Watering Event</h2>
      <br />

      <Form onSubmit={handleSubmit}>

          <Row >
              <Col xs={5}>
                  <Form.Label >Date</Form.Label>


                  <Form.Control
                      required
                      type="date"
                      name="wateringDate"
                      defaultValue={prevDate}
                      onChange={handleInputChange}
                  />
              </Col>

              <Col >
                  <Form.Label htmlFor="plantID">Plant Being Watered</Form.Label>
                    <Form.Select
                        name="plantID"
                        onChange={handleInputChange}
                        required
                        defaultValue={prevWateringEvent.displayName}
                        autoFocus
                        >
                        {/* use the map function to generate all of the options */}
                        {/* displays the plant's name but sets the value equal to the plant's primary key */}
                        {Plants.map((Plant) => (
                            <PlantSelectorOption key={Plant.plantID} Plant={Plant} fetchPlants={fetchPlants} />
                        ))}


                  </Form.Select>



              </Col>
          </Row>
          <br />
          <Container >
          <Row>
            <Col> 
              <Button variant="secondary" type="button" onClick={() => navigate("/WateringEvents")} >Cancel</Button>{' '}
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

export default UpdateWateringEvent;

