import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import PlantsRow from '../components/PlantsRow';


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
    return (



        // <div id="insert" 
        // className="modal show" 
        // style={{ display: 'block', position: 'initial' }}
        // >
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >

        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add New Plant</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>

            <form method="POST" id="addPlanet">
                <legend><strong>Add Plant</strong></legend>
                <fieldset class="fields">
                    <label> Display Name </label> <input type="text" name="displayName"/>
                    <label> Inside or Outside </label> <select name="isInside">
                        <option value="1">Inside</option>
                        <option value="2">Outside</option>
                        </select>
                    <label> Current Light </label> <select name="light">
                        <option value="0">&nbsp;</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                        </select>
                    <label> Plant Type </label> <select name="plantType">
                        <option value="0">&nbsp;</option>
                        <option value="1">Pothos</option>
                        <option value="2">String of Pearls</option>
                        <option value="3">Sungold Tomatoes</option>
                        </select>
                    <br/>
                    <br/>
                    <label> Watering Frequency (days)</label> <input type="number" name="waterInterval" value="7"/>
                    <label> Fertilizing Frequency (days)</label> <input type="number" name="fertilizerInterval" value="14"/>
                    <label> Date Planted</label> <input type="date" name="plantedDate" value="yyyy-MM-dd"/>
                </fieldset>
                <input class="btn" type="submit" id="addPlant" value="Add Plant"/>
                <input class="btn" type="button" value="cancel" onClick="browsePlant()"/>
            </form> 

            </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
        </Modal>
        // </div>
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
