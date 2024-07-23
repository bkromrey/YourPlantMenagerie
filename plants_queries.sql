
-- Insert Statements for all tables

-- Query to add a new plant  with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO Plants (displayName, isInside, currentLight, plantTypeID, waterInterval, fertilizerInterval, plantedDate) 
VALUES (:displayName, :isInside_from_dropdown_Input, :currentLight_from_dropdown_Input, :plantType_id_from_dropdown_Input, :waterInterval, :fertilizerInterval, :plantedDate_from_calendar)

-- Query to add a new plant type  with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO Plants (commonName, toxicCat, toxicDog, preferredLight, latinName) 
VALUES (:commonName, :toxicCat_from_dropdown_Input, :toxicDog_from_dropdown_Input, :preferredLight_from_dropdown_Input, :latinName)

-- Query to add a new soiltype with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO SoilTypes (soilType, soilDescription) VALUES (:soilType, :soilDescription)

-- Query to add a new wateringevent functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO WateringEvents (wateringDate, plantID) VALUES (:wateringDate_from_calendar, :plant_id_from_dropdown_Input)

-- Query to add a new fertilizingevent functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO FertilizingEvents (fertilizingDate, plantID) VALUES (:fertilizingDate_from_calendar, :plantID_from_dropdown_Input)

-- associate a plant with a soilType (M-to-M relationship addition)
INSERT INTO PlantSoils (plantID, soilID) VALUES (:plant_id_from_dropdown_Input, :soil_id_from_dropdown_Input)




-- Select Statements for all tables

SELECT * FROM Plants;

SELECT * FROM PlantTypes;

SELECT * FROM SoilTypes;

SELECT * FROM WateringEvents;

SELECT * FROM FertilizingEvents;


