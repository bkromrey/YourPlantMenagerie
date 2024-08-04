import { useState } from 'react';

// bootstrap components
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




// function to dynamically build the rows within the table on the web ui
function PlantsRow(){
    return (
        <>
        
        <tbody>

            {/* TODO: use the map function to dynamically build these rows once we connect to database */}

            <tr>

                {/* <td><a href="#" onClick="updatePlant('this.plantID')">Edit</a></td> */}

                <td>1</td>
                <td>Pothos in Living Room</td>
                <td>1 (Yes)</td>
                <td>Medium</td>
                <td>Pothos</td>
                <td>6</td>
                <td>14</td>
                <td>2023-01-15</td>
                <td>
                    <Button variant="warning">Edit</Button>
                    {/* <a href="#" onClick="updatePlant('this.plantID')">Edit</a> */}
                    {/* <Button variant="warning" onClick={UpdatePlant() => UpdatePopup(true)}>Update Plant</Button> */}

                
                </td>
                <td>
                    {/* <a href="#" onclick="deletePlant('this.plantID')">Delete</a> */}
                    <Button variant="danger">Delete</Button>
                </td>
            </tr>
            <tr>

                <td>2</td>
                <td >Pothos in Dining Room</td>
                <td>1 (Yes)</td>
                <td>Low</td>
                <td>Pothos</td>
                <td>7</td>
                <td>14</td>
                <td>2020-03-02</td>
                <td>
                    <Button variant="warning">Edit</Button>
                    {/* <a href="#" onClick="updatePlant('this.plantID')">Edit</a> */}
                
                </td>
                <td>
                    {/* <a href="#" onclick="deletePlant('this.plantID')">Delete</a> */}
                    <Button variant="danger">Delete</Button>
                </td>
            </tr>
            <tr>

                <td>3</td>
                <td>String of Pearls</td>
                <td>1 (Yes)</td>
                <td>High</td>
                <td>String of Pearls</td>
                <td>7</td>
                <td>0</td>
                <td>2024-04-17</td>
                <td>
                    <Button variant="warning">Edit</Button>
                    {/* <a href="#" onClick="updatePlant('this.plantID')">Edit</a> */}
                
                </td>
                <td>
                    {/* <a href="#" onclick="deletePlant('this.plantID')">Delete</a> */}
                    <Button variant="danger">Delete</Button>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Orange Cherry Tomatoes</td>
                <td>0 (No)</td>
                <td>High</td>
                <td>Sungold Tomatoes</td>
                <td>1</td>
                <td>28</td>
                <td>2024-06-01</td>
                <td>
                    <Button variant="warning">Edit</Button>
                    {/* <a href="#" onClick="updatePlant('this.plantID')">Edit</a> */}
                
                </td>
                <td>
                    {/* <a href="#" onclick="deletePlant('this.plantID')">Delete</a> */}
                    <Button variant="danger">Delete</Button>
                </td>
            </tr>
            </tbody>
        </>
    );
}

export function BrowsePlant(){
    return (
        <>

        <Table striped bordered hover>

        <thead>
        <tr>

            <th>id</th>
            <th>Plant Name</th>
            <th>isInside</th>
            <th>currentLight</th>
            <th>Plant Type</th>
            <th>waterInterval</th>
            <th>fertilizerInterval</th>
            <th>plantedDate</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        
        {/* call PlantsRow to populate rows in table */}
        
        <PlantsRow />

        </Table>
        </>
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
                        <Form.Label>Plant Type (Optional)</Form.Label>
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
    
        // <div id="update">
        //     <form method="POST" id="UpdatePlant">
        //         <legend><strong>Update Plant</strong></legend>
        //         <fieldset class="fields">
        //         <input type="hidden" name="plantID" id="updateplantID" value="1"/>
        //         <label> Display Name </label> <input type="text" name="displayName" value="Pothos in Living Room"/>
        //             <label> Inside or Outside </label> <select name="isInside">
        //                 <option value="1" selected>Inside</option>
        //                 <option value="2">Outside</option>
        //                 </select>
        //             <label> Current Light </label> <select name="light" value="Medium">
        //                 <option value="1">Low</option>
        //                 <option value="2" selected>Medium</option>
        //                 <option value="3">High</option>
        //                 </select>
        //             <label> Plant Type </label> <select name="plantType" value="Pothos">
        //                 <option value="0">&nbsp;</option>
        //                 <option value="1" selected>Pothos</option>
        //                 <option value="2">String of Pearls</option>
        //                 <option value="3">Sungold Tomatoes</option>
        //                 </select>
        //             <br/>
        //             <br/>
        //             <label> Watering Frequency (days)</label> <input type="number" name="waterInterval" value="7"/>
        //             <label> Fertilizing Frequency (days)</label> <input type="number" name="fertilizerInterval" value="14"/>
        //             <label> Date Planted</label> <input type="date" name="plantedDate" value="2023-01-15"/>
        //     </fieldset>
        //         <input class="btn" type="submit" id="UpdateSavePerson" value="Save Update Person"/>
        //         <input class="btn" type="button" value="cancel" onClick="browsePlant()"/>
        //     </form> 
        // </div>
    
    const [showUpdatetPopup, UpdatePopup] = useState(false);

    const CloseButton = () => UpdatePopup(false);
    const SaveButton = () => UpdatePopup(false); 


    return (

        <>

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
