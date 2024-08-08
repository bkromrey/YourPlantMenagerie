// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

import axios from "axios";

import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';

function SuccessToast(){
  return(
    <Toast>
      <Toast.Header>Success</Toast.Header>
      <Toast.Body>Event was deleted successfully.</Toast.Body>
    </Toast>
  );
}


/* eslint-disable react/prop-types */
const TableRow = ({ Plant, fetchPlants }) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();
  // Redirect to edit Plant page
  const handleEdit = () => {
    // We can access the id (and query the Plant) with useParams() in the UpdatePlant component
    navigate("/Plants/edit/" + Plant.plantID, { state: { Plant } });
  };

  const deleteRow = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "Plants/" + Plant.plantID;

      const response = await axios.delete(URL);
      // Ensure that the Plant was deleted successfully
      if (response.status === 204) {
        <SuccessToast />  // TODO
        alert("Plant deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting Plant");
      console.log(err);
    }
    fetchPlants();
  };

  return (
    <tr key={Plant.plantID}>
      <td>{Plant.plantID}</td>
      <td>{Plant.displayName}</td>
      <td>{((Plant.isInside === 1) ? <p>Inside</p> : <p>Outside</p>)}</td> 
      <td>{Plant.currentLight}</td>
      <td>{Plant.plantTypeID}</td>
      <td>{Plant.waterInterval}</td>
      <td>{Plant.fertilizerInterval}</td>
      <td>{Plant.plantedDate.slice(0,10)}</td>
      <td>
        <Button onClick={handleEdit} variant="warning">Edit</Button>
      </td>
      <td>
        <Button onClick={deleteRow} variant="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default TableRow;