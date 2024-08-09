
//import { AddFertilizingEvent } from "../components/FertilizingEvents/ModalAddFertilizingEvent";
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

import PlantSelectorOption from "./DropdownSelectorFertilizingEvents.jsx";

function AddFertilizingEvent(){


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




    const [showInsertPopup, InsertPopup] = useState(false);

    const CloseButton = () => InsertPopup(false);
    const SaveButton = () => handleSubmit();
    
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

    // CITATION FOR TODAY'S DATE STUFF
    // URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    // DATE ACCESSED: 8 AUG 2024
    const todayDate = new Date().toLocaleDateString("en-US");;

      
    return (

        <>
        <Button variant="success" onClick={() => InsertPopup(true)}>New Fertilizing Event</Button>

        <Modal
        size="lg"
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
                        <Form.Label htmlFor="fertilizingDate" >Fertilizing Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            name="fertilizingDate"
                            onChange={handleInputChange}
                            autoFocus
                            defaultValue={todayDate}

                        />
                    </Col>
                </Row>

                <br /> 
                <Row>
                    <Col>
                        <Form.Label htmlFor="plantID">Plant ID</Form.Label>
                        <Form.Select
                            name="plantID"
                            onChange={handleInputChange}
                            required
                        >
                        
                        {/* use the map function to generate all of the options */}
                        {/* displays the plant's name but sets the value equal to the plant's primary key */}
                        <option></option>
                        {Plants.map((Plant) => (
                            <PlantSelectorOption key={Plant.plantID} Plant={Plant} fetchPlants={fetchPlants} />
                        ))}


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

export default AddFertilizingEvent;
