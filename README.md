# Real Estate Assesment
Frontend React application with a simple backend project


## Technologies Used
* React
* Express
* Nodejs
& additional npm packages mentioned in the [resources section](#firstResource).

## Installation & Run
In order to run the app locally, you'll first need to clone this repository using the ```git clone``` command and then follow the steps:
1. Navigate to the project's folder and run ```npm i``` to install backend's dependencies.
2. Next, install the client app's dependencies: ```cd client``` followed by ```npm i```.
3. ``cd`` back to the project's root folder and run the command ``` npm run dev ``` to start both front and backend servers concurrently.

##### ** Getting a response from the backend server:
In order for the backend code to run succesfully, you'll need to provide the ```cliend_id``` and ```client_secret``` credientials:

* Navigate to the root folder of the project then head to ```/config``` directory.
* Open ```default.json``` file using a code editor and enter the required credientials
```
{
    "client_id":"[CLIENT_ID]",
    "client_secret":"[CLIENT_SECRET]"
}

```

## Resources
* <a name="firstResource" href="https://www.npmjs.com/package/react-burger-menu"> React Burger Menu</a>
* <a href="https://www.npmjs.com/package/bootstrap-steps" >Steppers</a>
