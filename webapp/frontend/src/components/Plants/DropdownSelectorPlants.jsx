// Code in this function heavily modified based on the logic for populating table rows in the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app



/* eslint-disable react/prop-types */
const PlantTypeSelectorOption = ({ PlantType }) => {

    return (
      // displays the plant's name but sets the value equal to the plant's primary key
      <option value={PlantType.plantTypeID}>{PlantType.commonName}</option>
    );
  };
  
  export default PlantTypeSelectorOption;
  