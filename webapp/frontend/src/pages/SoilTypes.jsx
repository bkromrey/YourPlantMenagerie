// bootstrap components
import Button from 'react-bootstrap/Button';
import { Routes, Route, Link } from "react-router-dom";

// custom components
import SoilTypesTable from "../components/SoilTypes/SoilTypesTable";
import AddSoilType from "../components/SoilTypes/ModalAddSoilType";
import UpdateSoilType from '../components/SoilTypes/UpdateSoilTypes';
import CreateSoilType from '../components/SoilTypes/CreateSoilTypes';


// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app
function SoilTypesPage(){
    return (
        <>




        {/* header & description */}
        <h2>Soil Types</h2>
        <p>Describes the different types of soil that a plant can grow in.</p>

        {/* display either the route is needed for the edit function */}
        <Routes>
            <Route path="/edit/:id" element={<UpdateSoilType />} />
            {/* <Route path="/add" element={<CreateSoilType />} /> */}

            {/* render the table */}

            {/* <SoilTypesTable />  */}
            <Route path="/" element={
                <>
                <SoilTypesTable />
                <br/>

                {/* display the add new soil button */}
                <AddSoilType />
                </> 
            } />

        </Routes>
        

        </>
    );
}

export default SoilTypesPage;
