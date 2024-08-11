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
const HomeTableRowFertilizing = ({ PlantsDueFertilizing }) => {
    const nextFertilizingDate = PlantsDueFertilizing.NextFertilizingDate.slice(0,10);
    const todayDate = new Date().toISOString().slice(0,10);
    const pastDue = nextFertilizingDate < todayDate;
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();
  // Redirect to edit SoilType page


  return (
    {pastDue && 
    <tr class="pastDueRow">
      <td>{PlantsDueFertilizing.displayName}</td>

      {PlantsDueFertilizing.LastFertilizedDate &&
                        <td>{PlantsDueFertilizing.LastFertilizedDate.slice(0,10)}</td>
      }

      {!PlantsDueFertilizing.LastFertilizedDate &&
                        <td>none</td>
      }

      {PlantsDueFertilizing.NextFertilizingDate &&
                        <td>{PlantsDueFertilizing.NextFertilizingDate.slice(0,10)}</td>
      }

      {!PlantsDueFertilizing.NextFertilizingDate &&
                        <td>none</td>
      }

    </tr>
    }

    {!pastDue && 
        <tr class="pastDueRow">
          <td>{PlantsDueFertilizing.displayName}</td>
    
          {PlantsDueFertilizing.LastFertilizedDate &&
                            <td>{PlantsDueFertilizing.LastFertilizedDate.slice(0,10)}</td>
          }
    
          {!PlantsDueFertilizing.LastFertilizedDate &&
                            <td>none</td>
          }
    
          {PlantsDueFertilizing.NextFertilizingDate &&
                            <td>{PlantsDueFertilizing.NextFertilizingDate.slice(0,10)}</td>
          }
    
          {!PlantsDueFertilizing.NextFertilizingDate &&
                            <td>none</td>
          }
    
        </tr>}
  );
};

export default HomeTableRowFertilizing;
