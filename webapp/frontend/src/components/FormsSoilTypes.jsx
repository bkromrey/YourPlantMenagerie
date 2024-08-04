// TODO currently not using this 


// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

// import { useState } from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

// bootstrap components
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




// function to dynamically build the rows within the table on the web ui
function SoilTypesRow(){

    const [SoilTypes, setSoilType] = useState([]);
    
    const fetchSoilTypes = async () => {
        try {
            const URL = import.meta.env.VITE_API_URL + "soilTypes";
            const response = await axios.get(URL);
            setSoilType(response.data);
        } catch (error) {
            alert("Error fetching SoilTypes from the server.");
            console.error("Error fetching SoilTypes:", error);
        }
    };

    useEffect(() => {
        fetchSoilTypes();
      }, []);

    return(
        <>
        {SoilTypes.map((SoilType) => (
            <tr key={SoilType.soilID}>
            <td>{SoilType.id}</td>
            <td>${SoilType.SoilTypeName}</td>
            <td>{SoilTypeDescription}</td>
            <td><Button variant="warning">Edit</Button></td>
            <td><Button variant="danger">Delete</Button></td>
            </tr>
            // <TableRow key={SoilType.id} SoilType={SoilType} fetchSoilTypes={fetchSoilTypes} />
          ))}
        </>
    );
 
}

export function BrowseSoilTypes(){
    return (
        <Table striped bordered hover>

        <thead>
        <tr>

            <th>Soil ID</th>
            <th>SoilType Name</th>
            <th>Soil Description</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        
        {/* call SoilTypesRow to populate rows in table */}
        <SoilTypesRow />

        </Table>
    );
}


export function InsertSoilTypes(){
  
}



export function UpdateSoilTypes(){
    
 
}



export function DeleteSoilTypes(){

}
