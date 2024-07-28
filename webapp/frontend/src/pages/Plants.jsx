import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import PlantsRow from '../components/PlantsRow';

// Citation for this html file
// Date: 7/22/24
// Copied from AND Adapted from:
// Source URL: https://canvas.oregonstate.edu/courses/1967354/assignments/9690212#:~:text=page.%20Here%20is-,an%20example%20of%20what%20those%20files%20would%20look%20like,-Download%20an%20example


// function showform(dowhat) {
//     /*
//     * four DIVS: browse, insert, update, delete
//     * this function sets one visible the others not
//     */
//     if (dowhat == 'insert'){
//         document.getElementById('browse').style.display = 'none';
//         document.getElementById('insert').style.display = 'block';
//         document.getElementById('update').style.display = 'none';
//         document.getElementById('delete').style.display = 'none';
//     }
//     else if (dowhat == 'update'){
//         document.getElementById('browse').style.display = 'none';
//         document.getElementById('insert').style.display = 'none';
//         document.getElementById('update').style.display = 'block';
//         document.getElementById('delete').style.display = 'none';
//     }
//     else if (dowhat == 'delete'){
//         document.getElementById('browse').style.display = 'none';
//         document.getElementById('insert').style.display = 'none';
//         document.getElementById('update').style.display = 'none';
//         document.getElementById('delete').style.display = 'block';
//     }
//     else if (dowhat == 'all'){
//         document.getElementById('browse').style.display = 'block';
//         document.getElementById('insert').style.display = 'block';
//         document.getElementById('update').style.display = 'block';
//         document.getElementById('delete').style.display = 'block';
//     }
//     // by default, display browse
//     else {
//         document.getElementById('browse').style.display = 'block';
//         document.getElementById('insert').style.display = 'none';
//         document.getElementById('update').style.display = 'none';
//         document.getElementById('delete').style.display = 'none';
//     }
// }
// function newPlant() { showform('insert'); }
// function updatePlant(pid) { showform('update'); }
// function deletePlant(pid) { showform ('delete'); }
// function browsePlant() { showform ('browse'); }
// function showAll() { showform ('all'); }

function PlantsPage(){
    return (
        <>
        <Table striped border hover>
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

        {/* call the function to make a new plant entry */}
        {/* <Button variant="success">New Plant</Button>{newPlant()} */}
        <Button variant="success">New Plant</Button>{}

        <br /><br />
        </>
    );
}

export default PlantsPage;