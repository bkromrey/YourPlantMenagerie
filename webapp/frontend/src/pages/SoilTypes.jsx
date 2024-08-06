// bootstrap components
import Button from 'react-bootstrap/Button';

// custom components
import SoilTypesTable from "../components/SoilTypes/SoilTypesTable";
import AddSoilType from "../components/SoilTypes/ModalAddSoilType";


// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app
function SoilTypesPage(){
    return (
        <>

        {/* header & description */}
        <h2>Soil Types</h2>
        <p>Describes the different types of soil that a plant can grow in.</p>

        {/* render the table */}
        <SoilTypesTable />
        <br/>

        {/* display the add new soil button */}
	    <AddSoilType />
        </>
    );
}

export default SoilTypesPage;
