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


/* eslint-disable react/prop-types */
const HomeTableRowWatering = ({ PlantsDueWatering, fetchPlantsDueWatering }) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();
  // Redirect to edit SoilType page


  return (
    <tr key={PlantsDueWatering.plantID}>
      <td>{PlantsDueWatering.displayName}</td>


      {PlantsDueWatering.LastWateredDate &&
                        <td>{PlantsDueWatering.LastWateredDate.slice(0,10)}</td>
      }

      {!PlantsDueWatering.LastWateredDate &&
                        <td>none</td>
      }

      {PlantsDueWatering.NextWateringDate &&
                        <td>{PlantsDueWatering.NextWateringDate.slice(0,10)}</td>
      }

      {!PlantsDueWatering.NextWateringDate &&
                        <td>none</td>
      }

    </tr>
  );
};

export default HomeTableRowWatering;
