
function AboutPage(){
    return(
        <>
        <h1>Overview</h1>

        <p>
        Tired of killing all your houseplants? Looking to optimize yield in your vegetable garden? Gardening is a fantastic hobby for millions of people worldwide, but the more you delve into the hobby, the harder it is to keep track of all your plants' needs. Your Plant Menagerie tracks the care and upkeep of people's plants, so they focus more on their gardening hobby and less on their plant schedules. Information such as soil a plant has been in or is currently in, currentLight and preferred light are some ways in which you can populate the database for future plant care ease. Track the UpkeepEvents of your Plants in multiple locations with the web-based database application. The application will be able to keep track of up to 500 of your houseplants and garden plants, to make sure you never have to guess when your plant needs care. 
        </p>
        
        <h2>Assumptions</h2>
        <p>
            This database tracks last watered and last fertilized events, but as each plant may have different needs, the database does not necessarily advise when the next watering or fertilizing event is due. The intervals of these events are set at an individual Plant basis, not necessarily with a PlantType as the location and light levels that an individual plant receives are significant factors.
        </p>
        <p>
            Users are assumed to be of an age that they are caring for plants. We also assume that the person has access to a computer or tablet.
        </p>
        <p>
            For validation purposes, all dates will not allow future dates to be added. The default date for events will be the current date.
        </p>
        <h2>Limitations and Scalability</h2>
        
        <p>
            Like all databases, there will be limitations to ours. For now, the database does not have multiple users as an option, so someone could not see who watered the plant last. Also, plants cannot be grouped by location in a person's house.
        </p>
        <p>
            One way we want to combat data storage issues is by allowing users to delete watering and fertilizing data after a chosen number of months, as older data for these categories may not be as useful. The database could also archive plants that have not been interacted with for the past 16 months.
        </p>
        <p>
            For Security, as the assumption that this is a single user platform, we could implement an optional pin code to prevent unauthorized users from accessing or editing a person's personal plant database.
        </p>
        
        
        </>
    );
}

export default AboutPage;