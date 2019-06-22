front=$(shell sudo docker-compose ps -q front)

# Init 
create-env:
	sh create_env.sh

# Build
build:
	sudo docker-compose build

# Init
init:
	sudo docker-compose up

# Access front
access-frontend:
	sudo docker exec -it $(front) bash


# Build for prod
build-prod:
	sudo docker exec -t $(front) ng build --prod


# Run the tests
tests:
	sudo docker exec -t $(front) ng test




