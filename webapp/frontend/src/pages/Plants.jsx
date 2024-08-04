import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BrowsePlant, InsertPlant, UpdatePlant, DeletePlant } from '../components/FormsPlants.jsx';


// Citation for this html file
// Date: 7/22/24
// Copied from AND Adapted from:
// Source URL: https://canvas.oregonstate.edu/courses/1967354/assignments/9690212#:~:text=page.%20Here%20is-,an%20example%20of%20what%20those%20files%20would%20look%20like,-Download%20an%20example

function showform(dowhat) {
    /*
    * four DIVS: browse, insert, update, delete
    * this function sets one visible the others not
    */
    if (dowhat == 'insert'){
        // document.getElementById('browse').style.display = 'none';
        // document.getElementById('insert').style.display = 'block';
        // document.getElementById('update').style.display = 'none';
        // document.getElementById('delete').style.display = 'none';
        alert('insert');
        // insertPlant();
        // <insertPlant />
    }
    else if (dowhat == 'update'){
        document.getElementById('browse').style.display = 'none';
        document.getElementById('insert').style.display = 'none';
        document.getElementById('update').style.display = 'block';
        document.getElementById('delete').style.display = 'none';
        alert('update');

    }
    else if (dowhat == 'delete'){
        document.getElementById('browse').style.display = 'none';
        document.getElementById('insert').style.display = 'none';
        document.getElementById('update').style.display = 'none';
        document.getElementById('delete').style.display = 'block';
        alert('delete');

    }
    else if (dowhat == 'all'){
        document.getElementById('browse').style.display = 'block';
        document.getElementById('insert').style.display = 'block';
        document.getElementById('update').style.display = 'block';
        document.getElementById('delete').style.display = 'block';
        alert('none');

    }
    // by default, display browse
    else {
        document.getElementById('browse').style.display = 'block';
        document.getElementById('insert').style.display = 'none';
        document.getElementById('update').style.display = 'none';
        document.getElementById('delete').style.display = 'none';
        alert('browse');

    }
}
function newPlant() { showform('insert'); }
// function updatePlant(pid) { showform('update'); }
// function deletePlant(pid) { showform ('delete'); }
// function browsePlant() { showform ('browse'); }
// function showAll() { showform ('all'); }

// forms



function PlantsPage(){

    return (
        <>

        <h1>disclaimer: this is still hardcoded data</h1>

        <BrowsePlant />

        <br/><br/>

        {/* call the function to make a new plant entry */}
        <InsertPlant />


        <br /><br />
        </>
    );
}

export default PlantsPage;