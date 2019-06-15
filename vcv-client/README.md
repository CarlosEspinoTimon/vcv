# VcvClient
This project is my personal web site where anyone can see my "virtual CV".

The project just consists in a, Angular 7 website. There is no backend as all the info is in the web client.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `/deployment/dist/` directory. Use the `--prod` flag for a production build.


## Deploy
This app can be deployed in Google App Engine, there is a configuration file called `app.yaml` in the `deployment/` directory. 

Once you have build the app, you can deploy the app by running: `gcloud app deploy` in the `deployment` directory. Beware that you have to have [initiated the cloud SDK](https://cloud.google.com/sdk/docs/initializing "Initializing Cloud SDK")