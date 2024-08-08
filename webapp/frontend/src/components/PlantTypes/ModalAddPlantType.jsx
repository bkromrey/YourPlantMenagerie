
//import { AddPlantType } from "../components/PlantTypes/ModalAddPlantType";
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

function AddPlantType(){
    const [showInsertPopup, InsertPopup] = useState(false);

    const CloseButton = () => InsertPopup(false);
    const SaveButton = () => handleSubmit();
        // InsertPopup(false);
    
    const navigate = useNavigate();
      
    const [formData, setFormData] = useState({
        commonName: "",
        latinName: "",
        toxicCat: "",
        toxicDog: "",
        preferredLight: "",
    });
        
    const handleSubmit = async (e) => {
        // close the popup window
        InsertPopup(false);

        // TODO remove completely, this doesn't play nice with bootstrap stuff 
        // Prevent page reload
        // e.preventDefault();  

        // Create a new PlantType object from the formData
        const newPlantType = {
            commonName: formData.commonName,
            latinName: formData.latinName,
            toxicCat: formData.toxicCat,
            toxicDog: formData.toxicDog,
            preferredLight: formData.preferredLight,
        };

        try {
        const URL = import.meta.env.VITE_API_URL + "PlantTypes";
        const response = await axios.post(URL, newPlantType);
        if (response.status === 201) {

            //maybe TODO put something here to re-render the component?
            navigate("/plantTypes");

        } else {
            alert("Error creating PlantType");
        }
        } catch (error) {
        alert("Error creating PlantTypes");
        console.error("Error creating PlantTypes:", error);
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
            commonName: "",
            latinName: "",
            toxicCat: "",
            toxicDog: "",
            preferredLight: "",
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
        <Button variant="success" onClick={() => InsertPopup(true)}>New Plant Type</Button>

        <Modal
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showInsertPopup} onHide={CloseButton}>
        
          <Modal.Header closeButton>
            <Modal.Title>Add New Plant Type</Modal.Title>
          </Modal.Header>
  
        <Modal.Body>
            <Form id="addPlant" onSubmit={handleSubmit}>

            <Container >
                <Row>
                    <Col>
                        <Form.Label htmlFor="commonName" >Common Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="commonName"
                            onChange={handleInputChange}
                            autoFocus
                        />
                    </Col>
                </Row>

                <br /> 
                <Row>
                    <Col>
                        <Form.Label htmlFor="latinName" >Latin Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="latinName"
                            onChange={handleInputChange}
                        />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Form.Label htmlFor="toxicCat">Toxic to Cats?</Form.Label>
                        <Form.Select
                            // type="text"
                            // as="textarea" 
                            // rows={3}
                            name="toxicCat"
                            onChange={handleInputChange}
                            >
                            <option>Yes</option>
                            <option>No</option>
                       </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label htmlFor="toxicCat">Toxic to Dogs?</Form.Label>
                        <Form.Select
                            // type="text"
                            // as="textarea" 
                            // rows={3}
                            name="toxicDog"
                            onChange={handleInputChange}
                            >
                            <option>Yes</option>
                            <option>No</option>
                       </Form.Select>
                    </Col>
                </Row>
                <br />
                <Row>

                    <Col>
                        <Form.Label htmlFor="preferredLight">Preferred Light</Form.Label>
                        <Form.Select
                            name="preferredLight"
                            onChange={handleInputChange}
                            >
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </Form.Select>
                    </Col>
                </Row>
          </Container>

            </Form>
        </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={CloseButton}>Close</Button>
            <Button variant="primary" onClick={SaveButton}>Submit</Button>
          </Modal.Footer>

        </Modal>

        </>
    );
}

export default AddPlantType;
