
-- Citation for this html file
-- Date: 7/23/24
-- Copied from AND Adapted from:
-- Source URL: https://canvas.oregonstate.edu/courses/1967354/assignments/9690212#:~:text=For%20example%2Cthe-,bsg_sample_data_manipulation_queries.sql,-Download%20bsg_sample_data_manipulation_queries.sql
-- Select Statements for relevant information

-- get relevant plant info and replace plantTypeID w/ common name
SELECT plantID, displayName, isInside, currentLight, PlantTypes.commonName AS "Plant Type"
FROM Plant
   INNER JOIN PlantTypes ON Plants.plantTypeID = PlantTypes.plantTypeID;

-- get all info from PlantTypes table
SELECT * FROM PlantTypes;

-- get all info from SoilTypes
SELECT * FROM SoilTypes;

-- get relevant watering info and replace plantID w/ display name
SELECT wateringDate AS "All Waterings", Plants.displayName AS "Plant Name" 
FROM WateringEvents
    INNER JOIN Plants ON WateringEvents.plantID = Plants.plantID;

-- get relevant fertilizing info and replace plantID w/ display name
SELECT fertilizingDate AS "All Fertilizings", Plants.displayName AS "Plant Name"
FROM FertilizingEvents
    INNER JOIN Plants ON FertilizingEvents.plantID = Plants.plantID;

-- get plant and soil relationship info and replace plantID w/ display name and soilID w/ soilType
SELECT Plants.displayName AS "Plant Name", SoilTypes.soilType 
FROM PlantSoils
    INNER JOIN Plants ON PlantSoils.plantID = Plants.plantID
    INNER JOIN SoilTypes ON PlantSoils.soilID = SoilTypes.soilID
ORDER BY "Plant Name";

-- get last watered date 
SELECT WateringEvents.plantID, Plants.displayName, MAX(WateringEvents.wateringDate) AS 'Last Watered Date' 
FROM WateringEvents 
JOIN Plants ON WateringEvents.plantID = Plants.plantID  
WHERE Plants.displayName = :displayName_Input;

-- get last fertilized date 
SELECT FertilizingEvents.plantID, Plants.displayName, MAX(FertilizingEvents.fertilizingDate) AS 'Last Fertilized Date' 
FROM FertilizingEvents 
JOIN Plants ON FertilizingEvents.plantID = Plants.plantID  
WHERE Plants.displayName = :displayName_Input;

-- get next watering date
SELECT WateringEvents.plantID, Plants.displayName, MAX(WateringEvents.wateringDate) AS 'Last Watered Date', DATE(MAX(WateringEvents.wateringDate)+ Plants.waterInterval) AS 'Next Watering Date' 
FROM WateringEvents 
JOIN Plants ON WateringEvents.plantID = Plants.plantID  
WHERE Plants.displayName = :displayName_Input;

-- get next fertilizing date
SELECT FertilizingEvents.plantID, Plants.displayName, MAX(FertilizingEvents.fertilizingDate) AS 'Last Fertilzied Date', 
DATE(MAX(FertilizingEvents.fertilizingDate) + Plants.waterInterval) AS 'Next Fertilzing Date' 
FROM FertilizingEvents 
JOIN Plants ON FertilizingEvents.plantID = Plants.plantID  
WHERE Plants.displayName = :displayName_Input;


-- Insert Statements for all tables

-- Query to add a new plant  with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO Plants (displayName, isInside, currentLight, plantTypeID, waterInterval, fertilizerInterval, plantedDate) 
VALUES (:displayName, :isInside_from_dropdown_Input, :currentLight_from_dropdown_Input, :plantTypeId_from_dropdown_Input, :waterInterval, :fertilizerInterval, :plantedDate_from_calendar);

-- Query to add a new plant type  with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO Plants (commonName, toxicCat, toxicDog, preferredLight, latinName) 
VALUES (:commonName, :toxicCat_from_dropdown_Input, :toxicDog_from_dropdown_Input, :preferredLight_from_dropdown_Input, :latinName);

-- Query to add a new soiltype with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO SoilTypes (soilType, soilDescription) VALUES (:soilType, :soilDescription)

-- Query to add a new wateringevent functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO WateringEvents (wateringDate, plantID) VALUES (:wateringDate_from_calendar, :plantID_from_dropdown_Input);

-- Query to add a new fertilizingevent functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO FertilizingEvents (fertilizingDate, plantID) VALUES (:fertilizingDate_from_calendar, :plantID_from_dropdown_Input)

-- associate a plant with a soilType (M-to-M relationship addition)
INSERT INTO PlantSoils (plantID, soilID) VALUES (:plantID_from_dropdown_Input, :soil_id_from_dropdown_Input);


-- Delete Functions

-- dis-associate a soil from a plant (M-to-M relationship deletion)
DELETE FROM PlantSoils WHERE plantID = :plant_ID_selected_from_plant_and_soil_list AND soilID = :soil_ID_selected_from_plant_and_soil_list;

-- delete a Plant
DELETE FROM Plants WHERE plantID = :plantID_selected_from_browse_Plants_page;


-- Update Functions

-- update a plant's data based on submission of the Update Plant form 
UPDATE Plants 
SET displayName = :displayNameInput, isInside= :isInside_from_dropdown_Input, currentLight = :currentLight_from_dropdown_Input, 
plantTypeID = :plantTypeId_from_dropdown_Input, waterInterval = :waterInterval_Input, fertilizerInterval = :fertilizerInterval_Input, plantedDate = :plantedDate_from_calendar_Input 
WHERE plantID= :plantID_from_the_update_form;

-- update a soil for a plant (M-to-M relationship update)
UPDATE PlantSoils SET plantTypeID = :plantTypeId_from_dropdown_Input, soilID = :soilID_from_dropdown_Input
WHERE plantID = :plant_ID_selected_from_plant_and_soil_list AND soilID = :soil_ID_selected_from_plant_and_soil_list;

