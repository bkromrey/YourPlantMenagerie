
//import { AddSoilType } from "../components/SoilTypes/ModalAddSoilType";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//TODO

function AddSoilType(){
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

        // Create a new SoilType object from the formData
        const newSoilType = {
        soilType: formData.soilType,
        soilDescription: formData.soilDescription,
        };

        // TESTING - use this to ensure data is saved by form
        // alert(newSoilType.soilType + ', ' + newSoilType.soilDescription); 

        try {
        const URL = import.meta.env.VITE_API_URL + "soilTypes";
        const response = await axios.post(URL, newSoilType);
        if (response.status === 201) {

            //TODO put something here to re-render the component?
            navigate("/soilTypes");

        } else {
            alert("Error creating SoilType");
        }
        } catch (error) {
        alert("Error creating SoilType");
        // alert(error); 
        console.error("Error creating SoilType:", error);
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
        <Button variant="success" onClick={() => InsertPopup(true)}>New Soil Type</Button>

        <Modal
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showInsertPopup} onHide={CloseButton}>
        
          <Modal.Header closeButton>
            <Modal.Title>Add New Soil Type</Modal.Title>
          </Modal.Header>
  
        <Modal.Body>
            <Form id="addPlant" onSubmit={handleSubmit}>

            <Container >
                <Row>
                    <Col>
                        <Form.Label htmlFor="soilType" >Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="soilType"
                            // defaultValue={formData.soilType}
                            onChange={handleInputChange}
                            autoFocus
                        />
                    </Col>
                </Row>

                <br /> 
                <Row>
                    <Col>
                        <Form.Label htmlFor="soilDescription">Description (Optional)</Form.Label>
                        <Form.Control
                            type="text" // TODO make this a text box for a longer description
                            name="soilDescription"
                            // defaultValue={formData.soilDescription}
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

export default AddSoilType;
