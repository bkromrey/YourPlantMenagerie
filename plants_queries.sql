
-- Insert Statements for all tables

-- Query for add a new plant  with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO Plants (displayName, isInside, plantedDate) VALUES (:displayName, :isInside)

-- Query for add a new soiltype with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO SoilTypes (soilType, soilDescription) VALUES (:soilType, :soilDescription)

-- Query for add a new wateringevent functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO WateringEvents (wateringDate, plantID) VALUES (:wateringDate, :plantID)

-- Query for add a new fertilizingevent functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO FertilizingEvents (fertilizingDate, plantID) VALUES (:fertilizingDate, :plantID)


