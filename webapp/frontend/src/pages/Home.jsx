import { Routes, Route, Link } from "react-router-dom";

// custom components
import HomeTable from "../components/Home/HomeTable";

// Code in this function adapted from the CS340 starter code.
// Date Accessed: 4 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app


function HomePage(){
    return (
        <>

        {/* display either the route is needed for the edit function */}
        <Routes>

            
            <Route path="/" element={
                <>
                
                {/* header & description */}
                <h2>Your Plant Menagerie</h2>
            <p>A database driven web app to help you care for your house plants.</p>
            <p> For more information about this project click <Link to="/about">here</Link>.
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
                <p><strong>These plants are due for watering: </strong></p>

                {/* render the table */}
                <HomeTable />
                <br/>

                </> 
            } />

        </Routes>
        

        </>
    );
}



export default HomePage;
