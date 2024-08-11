// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

import { useState, useEffect } from "react";
import TableRow from "./HomeTableRowWatering";
import axios from "axios";

// bootstrap components
import Table from 'react-bootstrap/Table';


const HomeTableWatering = () => {
  const [PlantsDueWatering, setPlantsDueWatering] = useState([]);

  const fetchPlantsDueWatering = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "NextWateringDate";
      const response = await axios.get(URL);
      setPlantsDueWatering(response.data);
    } catch (error) {
      alert("Error fetching Plants from the server.");
      console.error("Error fetching Plants:", error);
    }
  };

  useEffect(() => {
    fetchPlantsDueWatering();
  }, []);

  return (
    <div>

      {/* if Plants table is empty, throw an error */}
      {PlantsDueWatering.length === 0 ? (
        <div>
          <p>There are currently no plants due for watering.</p>
        </div>
        
      ) : (   
        // otherwise if Plants table has rows, display them nicely with bootstrap
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Plant</th>
              <th>Last Watered Date</th>
              <th>Next Watering Date</th>
            </tr>
          </thead>

          <tbody>
            {/* use the map function to generate each row within the table */}
            {PlantsDueWatering.map((PlantsDueWatering) => (
              <TableRow key={PlantsDueWatering.plantID} PlantsDueWatering={PlantsDueWatering} fetchPlantsDueWatering={fetchPlantsDueWatering} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default HomeTableWatering;