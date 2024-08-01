import Container from "react-bootstrap/esm/Container";
import {Link} from 'react-router-dom';


function Home(){
    return (
        <>
        <div>
            <h2>Your Plant Menagerie</h2>
            <p>A database driven web app to help you care for your house plants.</p>
            <p> For more information about this project click <Link to="/about">here</Link>.
            </p>
            
            <Container>
                <br/>
                <h2>These Plants Need Attention!</h2>
                <ul>
                    <li>Water me! (Pothos in living room)</li>
                    <li>Cherry tomatoes outside</li>
                </ul>
                <br/>

                
                <p>
                    More text here. I'm thinking we have a "quick view" dashboard of plants needing fertilizer or water, and we also present the user with a button that says "Record Watering Event" and likewise with fertilizer.
                </p>
                
            </Container>
        </div>
    </>
    );
}

export default Home;