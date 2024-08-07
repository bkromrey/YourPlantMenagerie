import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//TODO

function AddWateringEvent(){
    const [showInsertPopup, InsertPopup] = useState(false);

    const CloseButton = () => InsertPopup(false);
    const SaveButton = () => handleSubmit();
        // InsertPopup(false);
    
    const navigate = useNavigate();
      
    const [formData, setFormData] = useState({
        soilType: "",
        soilDescription: "",
    });
        
    const handleSubmit = async (e) => {
        // close the popup window
        InsertPopup(false);

        // TODO remove completely, this doesn't play nice with bootstrap stuff 
        // Prevent page reload
        // e.preventDefault();  

        // Create a new WateringEvent object from the formData
        const newWateringEvent = {
        soilType: formData.soilType,
        soilDescription: formData.soilDescription,
        };

        // TESTING - use this to ensure data is saved by form
        // alert(newWateringEvent.soilType + ', ' + newWateringEvent.soilDescription); 

        try {
        const URL = import.meta.env.VITE_API_URL + "WateringEvents";
        const response = await axios.post(URL, newWateringEvent);
        if (response.status === 201) {

            //maybe TODO put something here to re-render the component?
            navigate("/WateringEvents");

        } else {
            alert("Error creating WateringEvent");
        }
        } catch (error) {
        alert("Error creating WateringEvent");
        console.error("Error creating WateringEvent:", error);
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
        soilType: "",
        soilDescription: "",
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
        <Button variant="success" onClick={() => InsertPopup(true)}>Water A Plant</Button>

        <Modal
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showInsertPopup} onHide={CloseButton}>
        
          <Modal.Header closeButton>
            <Modal.Title>Log Watering Event</Modal.Title>
          </Modal.Header>
  
        <Modal.Body>
            <Form id="addPlant" onSubmit={handleSubmit}>

            <Container >
                <Row>
                    <Col>
                        <Form.Label htmlFor="WateringEvent" >Date Watered</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            name="wateringDate"
                            onChange={handleInputChange}
                            autoFocus
                        />
                    </Col>
                </Row>

                <br /> 
                <Row>
                    <Col>
                        <Form.Label htmlFor="plantID">Plant Watered</Form.Label>
                        <Form.Select>
                            type="select"
                            as="textarea" 
                            rows={3}
                            name="plantID"
                            onChange={handleInputChange}
                            <option>test 1</option>
                            <option>test 2</option>
                        </Form.Select>
                    </Col>
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

export default AddWateringEvent;
