// import React, { useState } from 'react';

// import { MdBackspace, MdRoute } from 'react-icons/md';
// import Favorite from './Favorite';

// function Run({ aRun, onEdit, onDelete }) {
//     return (
//         <tr>
//             <td class="favorite"><Favorite /></td>
//             <td class="runDate">{aRun.date_ran.slice(0,10)}</td>
//             <td class="runDistance">{aRun.distance}</td>
//             <td class="runLocation">{aRun.location_name}</td>
//             <td class="runNotes">{aRun.notes}</td>
//             <td class="delete"><MdBackspace onClick={() => onDelete(aRun._id)} /></td>
//             <td class="edit"><MdRoute onClick={() => onEdit(aRun)} /></td>
//         </tr>
//     );
// }

// export default Run;




function PlantsRow(){
    return (
        <>

            <tr>
                <td><a href="#" onClick="updatePlant('this.plantID')">Edit</a></td>
                <td><a href="#" onclick="deletePlant('this.plantID')">Delete</a></td>
                <td>1</td>
                <td>Pothos in Living Room</td>
                <td>1</td>
                <td>Medium</td>
                <td>Pothos</td>
                <td>6</td>
                <td>14</td>
                <td>2023-01-15</td>
            </tr>
            <tr>
                <td><a href="#" onClick="updatePlant('this.plantID')">Edit</a></td>
                <td><a href="#" onclick="deletePlant('this.plantID')">Delete</a></td>
                <td>2</td>
                <td >Pothos in Dining Room</td>
                <td>1</td>
                <td>Low</td>
                <td>Pothos</td>
                <td>7</td>
                <td>14</td>
                <td>2020-03-02</td>
            </tr>
            <tr>
                <td><a href="#" onClick="updatePlant('this.plantID')">Edit</a></td>
                <td><a href="#" onclick="deletePlant('this.plantID')">Delete</a></td>
                <td>3</td>
                <td>String of Pearls</td>
                <td>1</td>
                <td>High</td>
                <td>String of Pearls</td>
                <td>7</td>
                <td>0</td>
                <td>2024-04-17</td>
            </tr>
            <tr>
                <td><a href="#" onClick="updatePlant('this.plantID')">Edit</a></td>
                <td><a href="#" onclick="deletePlant('this.plantID')">Delete</a></td>
                <td>4</td>
                <td>Orange Cherry Tomatoes</td>
                <td>0</td>
                <td>High</td>
                <td>Sungold Tomatoes</td>
                <td>1</td>
                <td>28</td>
                <td>2024-06-01</td>
            </tr>
        </>
    );
}

export default PlantsRow;