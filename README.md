# Installation of this app

Peform `npm install` in the terminal of the root of the project to install the dependencies of the project
This will create the node_modules folder in the root of the project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Explaination of the architecture of the application
This application is developed using React and Typescript as the front-end frmaework

Application containes different components.
"DroneDeliverySimulator" - This is the main component which wraps up other components to create Flight Plans and 
show order, Drones and Store Stocks. It contains the logic to create flight plan by selecting order, drones, etc
and also to calculate the autonomy of the drone as well as stocks quantity as soon as the plan is created.
We assume that the autonomy of the drone is reduced by the 10 units when it is engaged in a flight plan.

The flightPlan, droneAutonomy, storestocks, and necessary fields to create a flight plan are passed as props
to FligihtplanForm components. 

"FlightPlanForm" - This is the component that contains the form to create the FlightPlan and a table that is updated
when a new FlightPlan is created.

### Logic to Show the real autonomy of the drone and stocks ###
To show the real autonomy of the drone, the "droneTable" component receives droneAutonomy as a props passed which is passed 
in the DroneDeliverySimulator where we compute the droneAutonmoy and likewise storeStocks are passed as props to StoreStocks component
The props helps us to show the real time data.
