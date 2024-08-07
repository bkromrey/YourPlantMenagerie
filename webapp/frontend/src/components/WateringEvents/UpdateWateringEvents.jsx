// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

// bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const UpdateWateringEvent = () => {
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

  return (
    <div>
      <h2>Update Watering Event</h2>
      <br />



      <Form onSubmit={handleSubmit}>

      
          <Row>
              <Col>
                  <Form.Label >Date Watered</Form.Label>
                  <Form.Control
                      required
                      type="date"
                      name="wateringDate"
                      defaultValue={prevWateringEvent.wateringDate}
                      onChange={handleInputChange}
                      autoFocus
                  />
              </Col>
          </Row>

          <br /> 
          <Row>
              {/* <Col> */}
                  <Form.Label >Plant ID</Form.Label>
                  <Form.Control
                      type="number"
                      name="plantID"
                      defaultValue={prevWateringEvent.plantID}
                      onChange={handleInputChange}
                  />
              {/* </Col> */}
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

