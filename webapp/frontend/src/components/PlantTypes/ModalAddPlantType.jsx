
//import { AddFertilizingEvent } from "../components/FertilizingEvents/ModalAddFertilizingEvent";
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

function AddFertilizingEvent(){
    const [showInsertPopup, InsertPopup] = useState(false);

    const CloseButton = () => InsertPopup(false);
    const SaveButton = () => handleSubmit();
        // InsertPopup(false);
    
    const navigate = useNavigate();
      
    const [formData, setFormData] = useState({
        fertilizingDate: "",
        plantID: "",
    });
        
    const handleSubmit = async (e) => {
        // close the popup window
        InsertPopup(false);

        // TODO remove completely, this doesn't play nice with bootstrap stuff 
        // Prevent page reload
        // e.preventDefault();  

        // Create a new FertilizingEvent object from the formData
        const newFertilizingEvent = {
        fertilizingDate: formData.fertilizingDate,
        plantID: formData.plantID,
        };

        // TESTING - use this to ensure data is saved by form
        // alert(newFertilizingEvent.FertilizingEvent + ', ' + newFertilizingEvent.soilDescription); 

        try {
        const URL = import.meta.env.VITE_API_URL + "FertilizingEvents";
        const response = await axios.post(URL, newFertilizingEvent);
        if (response.status === 201) {

            //maybe TODO put something here to re-render the component?
            navigate("/FertilizingEvents");

        } else {
            alert("Error creating FertilizingEvent");
        }
        } catch (error) {
        alert("Error creating FertilizingEvents");
        console.error("Error creating FertilizingEvents:", error);
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
        fertilizingDate: "",
        plantID: "",
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
      

    ///////// ORIGINAL FORM 
    // return (
    //     <>
    //     <h2>Create Soil Type</h2>
    //     <form onSubmit={handleSubmit}>
    //         <label htmlFor="soilType">Soil Name</label>
    //         <input
        //         type="text"
        //         name="soilType"
        //         defaultValue={formData.soilType}
        //         onChange={handleInputChange}
    //         />
    //         <label htmlFor="soilDescription">Soil Description</label>
    //         <input
        //         type="text" // TODO make this a text box for a longer description
        //         name="soilDescription"
        //         defaultValue={formData.soilDescription}
        //         onChange={handleInputChange}
    //         />
    //         <br /><br />
    //         <Button type="submit">Submit</Button>
    //     </form>
    //     </>
    // );



      ////////////// MODAL STUFF
    return (

        <>
        <Button variant="success" onClick={() => InsertPopup(true)}>New Fertilizing Event</Button>

        <Modal
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showInsertPopup} onHide={CloseButton}>
        
          <Modal.Header closeButton>
            <Modal.Title>Add New Fertilizing Event</Modal.Title>
          </Modal.Header>
  
        <Modal.Body>
            <Form id="addPlant" onSubmit={handleSubmit}>

            <Container >
                <Row>
                    <Col>
                        <Form.Label htmlFor="fertilizingDate" >Name</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            name="fertilizingDate"
                            onChange={handleInputChange}
                            autoFocus
                        />
                    </Col>
                </Row>

                <br /> 
                <Row>
                    <Col>
                        <Form.Label htmlFor="plantID">Plant ID</Form.Label>
                        <Form.Control
                            type="text"
                            as="textarea" 
                            rows={3}
                            name="plantID"
                            onChange={handleInputChange}
                        />
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

export default AddFertilizingEvent;
