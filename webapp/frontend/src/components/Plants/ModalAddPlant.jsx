``
//import { AddPlant } from "../components/Plants/ModalAddPlant";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlantTypeSelectorOption from "./DropdownSelectorPlants";

function AddPlant(){

    // pull in the information we need to dynamically populate the dropdown menus
    const [PlantTypes, setPlantTypes] = useState([]);

    const fetchPlantTypes = async () => {
        try {
            const URL = import.meta.env.VITE_API_URL + "PlantTypes";
            const response = await axios.get(URL);
            setPlantTypes(response.data);
        } catch (error) {
            alert("Error fetching Plant Types from the server.");
            console.error("Error fetching Plant Types:", error);
        }
        };
    
    useEffect(() => {
        fetchPlantTypes();
    }, []);
    

    const [showInsertPopup, InsertPopup] = useState(false);

    const CloseButton = () => InsertPopup(false);
    const SaveButton = () => handleSubmit();
        // InsertPopup(false);
    
    const navigate = useNavigate();
      
    const [formData, setFormData] = useState({
        displayName: "",
        isInside:"",
        currentLight:"",
        plantTypeID:"",
        waterInterval:"",
        fertilizerInterval:"",
        plantedDate:"",
    });
        
    const handleSubmit = async (e) => {
        // close the popup window
        InsertPopup(false);

        // Create a new Plant object from the formData
        const newPlant = {
        displayName: formData.displayName,
        isInside: formData.isInside,
        currentLight: formData.currentLight,
        plantTypeID: formData.plantTypeID ,
        waterInterval: formData.waterInterval,
        fertilizerInterval: formData.fertilizerInterval,
        plantedDate: formData.plantedDate,
        };


        try {
        const URL = import.meta.env.VITE_API_URL + "Plants";
        const response = await axios.post(URL, newPlant);
        if (response.status === 201) {

            //maybe TODO put something here to re-render the component?
            navigate("/Plants");

        } else {
            alert("Error creating Plant");
        }
        } catch (error) {
        alert("Error creating Plants");
        console.error("Error creating Plants:", error);
        }
        // Reset the form fields
        resetFormFields();

        // TODO - i don't like how it forces the entire page to reload, i just want to reload the component
        

        // Citation for this line of code
        // Forces the page to reload to display the new data
        // URL: https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
        // Date Accessed: 5 August 2024
        window.location.reload();
        

    };
      
    const resetFormFields = () => {
        setFormData({
        displayName: "",
        isInside:"",
        currentLight:"",
        plantTypeID:"",
        waterInterval:"",
        fertilizerInterval:"",
        plantedDate:"",
        });
    };
      
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,

        }));
        console.log(name);
        console.log(value);
    };
      
    return (

        <>
        <Button variant="success" onClick={() => InsertPopup(true)}>New Plant</Button>

        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showInsertPopup} onHide={CloseButton}>
        
          <Modal.Header closeButton>
            <Modal.Title>Add New Plant</Modal.Title>
          </Modal.Header>
  
        <Modal.Body>
            <Form id="addPlant" onSubmit={handleSubmit}>

            <Container >
            <Row>
              <Col>
                  <Form.Label htmlFor="displayName" >Display Name</Form.Label>
                  <Form.Control
                      required
                      type="text"
                      as="textarea"
                      name="displayName"
                      // value={ moment(prevPlant.fertilizingDate).subtract(10, 'days').calendar() }
                      onChange={handleInputChange}
                      autoFocus
                  />
              </Col>
          </Row>

          <br /> 
          <Row>
              {/* <Col> */}

                {/* TODO: we might want to get rid of this first option or default it to a 0 or 1 instead of "" to mitigate sql issues */}
                  <Form.Label >Inside/Outside</Form.Label>
                  <Form.Select
                      name="isInside"
                      onChange={handleInputChange}
                      
                  >
                      <option value="1" >Inside</option>
                      <option value="0" selected>Outside</option>
                  </Form.Select>
              {/* </Col> */}
          </Row>
          <br /> 

          <Row>
              {/* <Col> */}
                  <Form.Label >Current Light</Form.Label>
                  <Form.Select
                      name="currentLight"
                      onChange={handleInputChange}
                      
                  >
                    <option value="NULL" selected>Select Current Light</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </Form.Select>
              {/* </Col> */}
          </Row>

          <br /> 
          <Row>
            <Col>

            <Form.Label htmlFor="plantTypeID">Plant Type</Form.Label>
            <Form.Select
                name="plantTypeID"
                onChange={handleInputChange}
                required
                >
                
                {/* use the map function to generate all of the options */}
                {/* displays the plant's name but sets the value equal to the plant's primary key */}
                {PlantTypes.map((PlantType) => (
                    <PlantTypeSelectorOption key={PlantType.plantTypeID} PlantType={PlantType} fetchPlantTypes={fetchPlantTypes} />
                ))}


            </Form.Select>


            </Col>
          </Row>

          <br /> 
          <Row>
              {/* <Col> */}
                  <Form.Label >Water Interval (Days)</Form.Label>
                  <Form.Control
                      type="number"
                      name="waterInterval"
                      onChange={handleInputChange}
                      defaultValue={7}
                      
                  />
              {/* </Col> */}
          </Row>

          <br /> 
          <Row>
              {/* <Col> */}
                  <Form.Label >Fertilizer Interval (Days)</Form.Label>
                  <Form.Control
                      type="number"
                      name="fertilizerInterval"
                      onChange={handleInputChange}
                      defaultValue={14}
                      
                  />
              {/* </Col> */}
          </Row>

          <br /> 
          <Row>
              {/* <Col> */}
                  <Form.Label >Planted Date</Form.Label>
                  <Form.Control
                      type="date"
                      name="plantedDate"
                      onChange={handleInputChange}
                      
                  />
              {/* </Col> */}
          </Row>


          </Container>

            </Form>
        </Modal.Body>
  
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={CloseButton}>Close</Button> */}
            <Button variant="primary" onClick={SaveButton}>Submit</Button>
          </Modal.Footer>

        </Modal>

        </>
    );
}

export default AddPlant;
