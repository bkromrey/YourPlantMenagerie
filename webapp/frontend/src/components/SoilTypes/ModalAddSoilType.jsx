//TODO

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