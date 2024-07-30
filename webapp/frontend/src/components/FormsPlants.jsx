import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import PlantsRow from '../components/PlantsRow';
import { useState } from 'react';


export function BrowsePlant(){
    return (
        <Table striped bordered hover>
        <tr>
            <th></th>
            <th></th>
            <th>id</th>
            <th>displayName</th>
            <th>isInside</th>
            <th>currentLight</th>
            <th>Plant Type</th>
            <th>waterInterval</th>
            <th>fertilizerInterval</th>
            <th>plantedDate</th>
        </tr>
        
        {/* call PlantsRow to populate cells */}

        {/* currently, using hardcoded values to display */}
        <PlantsRow />

        </Table>
    );
}



export function InsertPlant(){
    const [showInsertPopup, InsertPopup] = useState(false);

    const CloseButton = () => InsertPopup(false);
    const SaveButton = () => InsertPopup(false); 


    return (

        <>
        <Button variant="success" onClick={() => InsertPopup(true)}>New Plant</Button>

        <Modal
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showInsertPopup} onHide={CloseButton}>
        
        

          <Modal.Header closeButton>
            <Modal.Title>Add New Plant</Modal.Title>
          </Modal.Header>
  
        <Modal.Body>
            <Form method="POST" id="addPlant">

            <Container>
                <Row>
                    <Col>
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="displayName"
                            autoFocus
                        />
                    </Col>
                </Row>

                
                <Row>
                    <Col>
                        <Form.Label>Plant Type</Form.Label>
                        <Form.Select name="plantType">
                        <option value="0">&nbsp;</option>
                        <option value="1">Pothos</option>
                        <option value="2">String of Pearls</option>
                        <option value="3">Sungold Tomatoes</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label>Inside or Outside</Form.Label>
                        <Form.Select>
                            <option value="1">Inside</option>
                            <option value="2">Outside</option>
                        </Form.Select>
                    </Col>
                    <Col>
                    <Form.Label>Current Light</Form.Label>
                    <Form.Select name="light">
                        <option value="0">&nbsp;</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </Form.Select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label>Watering Frequency (days)</Form.Label>
                        <Form.Control
                            type="number" 
                            name="waterInterval" 
                            value="7"
                        />
                    </Col>
                    <Col>
                        <Form.Label>Fertilizing Frequency (days)</Form.Label>
                        <Form.Control
                            type="number" 
                            name="fertilizerInterval" 
                            value="14"
                        />
                    </Col>
                </Row>

            <Form.Label>Date Planted</Form.Label>
            <Form.Control
                type="date" 
                name="plantedDate" 
            />
          </Container>

                {/* TODO: fix the functions with onClick, below are our original HTML */}
                {/* <input class="btn" type="submit" id="addPlant" value="Add Plant"/>
                <input class="btn" type="button" value="cancel" onClick="browsePlant()"/> */}

            </Form>
        </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={CloseButton}>Close</Button>
            <Button variant="primary" onClick={SaveButton}>Save changes</Button>
          </Modal.Footer>


        </Modal>

        </>
    );
}



export function UpdatePlant(){
    return (
        <div id="update">
            <form method="POST" id="UpdatePlant">
                <legend><strong>Update Plant</strong></legend>
                <fieldset class="fields">
                <input type="hidden" name="plantID" id="updateplantID" value="1"/>
                <label> Display Name </label> <input type="text" name="displayName" value="Pothos in Living Room"/>
                    <label> Inside or Outside </label> <select name="isInside">
                        <option value="1" selected>Inside</option>
                        <option value="2">Outside</option>
                        </select>
                    <label> Current Light </label> <select name="light" value="Medium">
                        <option value="1">Low</option>
                        <option value="2" selected>Medium</option>
                        <option value="3">High</option>
                        </select>
                    <label> Plant Type </label> <select name="plantType" value="Pothos">
                        <option value="0">&nbsp;</option>
                        <option value="1" selected>Pothos</option>
                        <option value="2">String of Pearls</option>
                        <option value="3">Sungold Tomatoes</option>
                        </select>
                    <br/>
                    <br/>
                    <label> Watering Frequency (days)</label> <input type="number" name="waterInterval" value="7"/>
                    <label> Fertilizing Frequency (days)</label> <input type="number" name="fertilizerInterval" value="14"/>
                    <label> Date Planted</label> <input type="date" name="plantedDate" value="2023-01-15"/>
            </fieldset>
                <input class="btn" type="submit" id="UpdateSavePerson" value="Save Update Person"/>
                <input class="btn" type="button" value="cancel" onClick="browsePlant()"/>
            </form> 
        </div>
    );
}



export function DeletePlant(){
    return (
        <div id="delete" style="display: block">
        <form method="POST" id="deletePlant">
            <legend><strong>Delete Plant</strong></legend>
                <fieldset class="fields">
                <p>Are you positive that you want to delete this plant?</p>
                <input type="hidden" name="plantID" id="deleteplantID" value="1"/>
                <label><strong>ID:</strong></label> 1
                    <label> <strong>Plant:</strong> </label> Pothos in Living Room
                    
            </fieldset>
            <input class="btn" type="submit" id="DeletePlant" value="Delete Plant"/>
                <input class="btn" type="button" value="cancel" onClick="browsePlant()"/>
        </form> 
        </div>
    );
}
