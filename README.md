# vcv

This project is a virtual curriculum vitae template. 

## __Getting Started__

To start developing in this project, you just have to clone the repository, meet the prerequisites and run the command shown in the Run the server section.

### Prerequisites

To work in this project you just have to have installed:

- Docker
- docker-compose

### Run the server

To run the app locally you have to be in the local_environment folder and run:

- `make create-env`
- `make build`
- `make init`

The first two are just for the first time.

The `make init` starts the service declared in the docker-compose.yaml sharing some ports (4200 for the app and 9876 for the tests) and volumes (sharing the code in your computer with the code inside the container). Once you run this command, you will start seeing the server logs, after the app finished compiling, you can go to http://localhost:4200/ and see the app running.

## __Working in the project__

As this project is build in a dockerized environment, the developers have to adapt to work with it.

### Install the modules, create components, services...

All this actions must be executed in the server that is inside the container, so first you have to get into the container with the following command:

`make access-frontend` 

Then you can do anything as you would normally do it to generate components, services...

### Running the tests

For the moment there are no tests implemented. However, if you want to run the them you can do it by:

`make tests`

## __Make it personal__

If you want to make this personal, you just have to modify 3 things:

- the content of the files in `vcv-client/src/assets` 
- the content of the \<title> tag in the `index.html`
- the about-me section

## __Deployment__

This project is prepared to be easily deployed in Google App Engine. Once you decide your app is ready to be deployed you just have to run the next command from the local_environmet folder (while the service is running):

`make build-prod `

This command builds the project and generates the needed files to deploy it in production. I changed the `angular.json` file to build the project inside the `vcv_client/GAE_deployment`  directory, with this approach is easy to control the files that are going to be uploaded to Google App Engine, as you have a limit of files allowed (10.000 files per version). In the `vcv_client/GAE_deployment` folder you also will find an `app.yaml`. 

Once you have it, you can deploy the app by running: `gcloud app deploy` in the `vcv_client/GAE_deployment` directory. Beware that you have to have [initiated the cloud SDK](https://cloud.google.com/sdk/docs/initializing "Initializing Cloud SDK")