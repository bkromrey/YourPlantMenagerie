# About
This is a simple database driven web app used to track the care and needs of your plants.

- Tired of killing all your houseplants? Looking to optimize yield in your vegetable garden? Gardening is a fantastic hobby for millions of people worldwide, but the more you delve into the hobby, the harder it is to keep track of all your plants' needs. Your Plant Menagerie tracks the care and upkeep of people's plants, so they focus more on their gardening hobby and less on their plant schedules. Information such as the soil a plant has been in or is currently in, a plant's currentLight versus its preferred light, and if its due to be watered are just some ways in which you can populate and utilize the database for future plant care ease. Track the UpkeepEvents of your Plants in multiple locations with the web-based database application. The application will be able to keep track of up to 500 of your houseplants and garden plants, to make sure you never have to guess when your plant needs care. 


# Frontend

Requires a .env file with the following three variables. Change ports as needed.

```
VITE_PORT=
REACT_SERVER_PORT= #used for hosting, different than VITE_PORT
VITE_API_URL=""
# for example, 'http://flip1.engr.oregonstate.edu:23428/api/' # should match backend PORT
```

To launch the frontend, do the following.

```
cd webapp/frontend
npm install
npm run dev -- --host
```

This is the dev version of the frontend. When we are ready to publish/upload this, we can use the publish option within Vite to do so. 



# Backend

Requires a .env file with the following three variables
```
DB_HOST="" 
DB_USER=""                   
DB_DATABASE=""              
DB_PASSWORD=""                 
PORT= #should match frontend's VITE_API_URL
```


To launch the backend, do the following.
```
cd webapp/backend
npm install
npm start -- --host
```

# REMINDER

(TODO - delete this after cleaning up and citing all the starter code)

If you have adapted the CS340 starter app code this should be clearly stated in the readme (e.g. "All code is based on the CS 340 starter code, with the exception of...") and also in the source code to describe the extent to which any non-original sources were used (e.g. "this module adapted from the starter code"). 



# Citations 

A large majority of the code is based on the CS340 starter code which can be found at https://github.com/osu-cs340-ecampus/react-starter-app\
Exceptions include some of the frontend framework which was generated directly from Vite (including App.jsx, components such as footer.jsx, navigation.jsx).

**App Scaffolding Provided by Vite**\
Used Vite to build the React scaffolding for this project.\
Date Accessed: 27 July 2024\
Version Used: create-vite@5.4.0\
URL: https://vitejs.dev/

**CS340 React Starter App**\
Modifed and adapted.\
Date Accessed: 1 August 2024\
URL: https://github.com/osu-cs340-ecampus/react-starter-app

**Icons from Font Awesome**\
Date Accessed: 27 July 2024\
URL: https://fontawesome.com/icons/leaf?f=classic&s=solid

**React Bootstrap** \
Styling modified from the sample code in the React Bootstrap documentation.\
Date Accessed: 25 July 2024\
URL: https://react-bootstrap.github.io/docs/components

**LinkContainer in react-router-bootstrap**\
Used the following resource as a model for our LinkContainer Router configuration\
Date: 27 July 2024\
URL: https://medium.com/how-to-react/use-react-router-link-with-bootstrap-315a8b88e129

