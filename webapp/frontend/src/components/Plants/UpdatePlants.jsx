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


const UpdatePlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevPlant = location.state.Plant;

  const [formData, setFormData] = useState({
    displayName:                prevPlant.displayName || '' ,
    isInside:                   prevPlant.isInside || '',
    currentLight:               prevPlant.currentLight || '',
    plantTypeID:                prevPlant.plantTypeID || '',
    waterInterval:              prevPlant.waterInterval || '',
    fertilizerInterval:         prevPlant.fertilizerInterval || '',
    plantedDate:                prevPlant.plantedDate || '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      
    }));
  };

  function isUpdate(){
    // Check if formData is equal to prevPlant
    if (JSON.stringify(formData) === JSON.stringify({
        displayName:                prevPlant.displayName || '' ,
        isInside:                   prevPlant.isInside || '',
        currentLight:               prevPlant.currentLight || '',
        plantTypeID:                prevPlant.plantTypeID || '',
        waterInterval:              prevPlant.waterInterval || '',
        fertilizerInterval:         prevPlant.fertilizerInterval || '',
        plantedDate:                prevPlant.plantedDate || '',
    })) {
      alert("No changes made.");
      return false;
    }
    return true
  }

  const handleSubmit = async (event) => {
    // Stop default form behavior which is to reload the page
    event.preventDefault();
    // Check if formData is equal to prevPlant
    if (isUpdate()){
      try {
        const URL = import.meta.env.VITE_API_URL + "Plants/" + id;
        const response = await axios.put(URL, formData);
        if (response.status !== 200) {
          alert("Error updating plant!");
        } else {
          alert(response.data.message);
          // Redirect to Plants page
          navigate("/Plants");
        // Citation for this line of code
        // Forces the page to reload to display the new data
        // URL: https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
        // Date Accessed: 5 August 2024
        window.location.reload();
        }
      } catch (err) {
        console.log("Error updating plant:", err);
      }
    }
  };

  return (
    <div>
      <h2>Update Plant</h2>
      <br />

      <Form id="updatePlants" onSubmit={handleSubmit}>
      
          <Row>
              <Col>
                  <Form.Label htmlFor="displayName">Display Name</Form.Label>
                  <Form.Control
                      required
                      type="text"
                      name="displayName"
                      // value={ moment(prevPlant.fertilizingDate).subtract(10, 'days').calendar() }
                      onChange={handleInputChange}
                      defaultValue={prevPlant.displayName}
                      autoFocus
                  />
              </Col>
          </Row>

          <br /> 
          <Row>
              {/* <Col> */}
                  <Form.Label htmlFor="isInside" >Inside/Outside</Form.Label>
                  <Form.Select
                      required
                      name="isInside"
                      onChange={handleInputChange}
                      defaultValue={prevPlant.isInside}
                      
                  >
                      <option value="1">Inside</option>
                      <option value="0">Outside</option>
                  </Form.Select>
              {/* </Col> */}
          </Row>
          <br /> 

          <Row>
              {/* <Col> */}
                  <Form.Label htmlFor="currentLight" >Current Light</Form.Label>
                  <Form.Select
                      name="currentLight"
                      onChange={handleInputChange}
                      defaultValue={prevPlant.currentLight}
                      
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </Form.Select>
              {/* </Col> */}
          </Row>

          <br /> 
          <Row>
              {/* <Col> */}
                  <Form.Label htmlFor="plantTypeID">Plant Type</Form.Label>
                  <Form.Control
                      type="number"
                      name="plantTypeID"
                      onChange={handleInputChange}
                      
                  />
              {/* </Col> */}
          </Row>

          <br /> 
          <Row>
              {/* <Col> */}
                  <Form.Label htmlFor="waterInterval">Water Interval (Days)</Form.Label>
                  <Form.Control
                      type="number"
                      name="waterInterval"
                      onChange={handleInputChange}
                      defaultValue={prevPlant.waterInterval}
                      
                  />
              {/* </Col> */}
          </Row>

          <br /> 
          <Row>
              {/* <Col> */}
                  <Form.Label htmlFor="fertilizerInterval">Fertilizer Interval (Days)</Form.Label>
                  <Form.Control
                      type="number"
                      name="fertilizerInterval"
                      onChange={handleInputChange}
                      defaultValue={prevPlant.fertilizerInterval}
                      
                  />
              {/* </Col> */}
          </Row>

          <br /> 
          <Row>
              {/* <Col> */}
                  <Form.Label htmlFor="plantedDate">Planted Date</Form.Label>
                  <Form.Control
                      type="date"
                      name="plantedDate"
                      onChange={handleInputChange}
                      value = {prevPlant.plantedDate}
                      
                  />
              {/* </Col> */}
          </Row>

          <br />
          <Container >
          <Row>
            <Col> 
              <Button variant="secondary" type="button" onClick={() => navigate("/Plants")} >Cancel</Button>{' '}
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

export default UpdatePlant;

