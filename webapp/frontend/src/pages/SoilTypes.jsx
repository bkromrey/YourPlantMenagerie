// import { BrowseSoilTypes, InsertSoilTypes, UpdateSoilTypes, DeleteSoilTypes } from '../components/FormsSoilTypes.jsx';
import { Routes, Route, Link } from "react-router-dom";
import CreateSoilType from "../components/SoilTypes/CreateSoilTypes";
import SoilTypesTable from "../components/SoilTypes/SoilTypesTable";
import UpdateSoilType from "../components/SoilTypes/UpdateSoilTypes";
// import AddSoilType from "../components/SoilTypes/ModalAddSoilType";


// bootstrap components
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// // original SoilTypesPage

// <p>placeholder for SoilTypes</p>


// <BrowseSoilTypes />

// <br/><br/>

// {/* call the function to make a new SoilTypes entry */}
// <InsertSoilTypes />


// <br /><br /> sd


// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app
function SoilTypesPage(){
    return (
        <>

      <h1>SoilTypes Page</h1>

      {/* TODO i don't like this at all, rework layout completely */}
      <nav>
        <ul>
          <li>
            <Link to="/SoilTypes">Soil Type Table</Link>
          </li>
          <li>
            <Link to="/SoilTypes/add">Add Soil Type</Link>
          </li>
        </ul>
      </nav>

      
      <Routes>
        <Route path="/" element={<SoilTypesTable />} />
        <Route path="/add" element={<CreateSoilType />} />
        <Route path="/edit/:id" element={<UpdateSoilType />} />
      </Routes>

      {/* TODO; implement the modal  */}
      <br/><br />
      <Button variant="success" onClick={() => InsertPopup(true)}>New Soil Type (this button not implemented yet)</Button>

      {/* <AddSoilType /> */}
        </>
    );
}

export default SoilTypesPage;