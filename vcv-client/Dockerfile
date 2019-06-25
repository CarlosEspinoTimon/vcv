# base image
FROM node:9.6.1

# Assumes you have a package.json in the current dir
COPY . /code

RUN npm i npm@latest -g && \
    npm install -g @angular/cli@7.3.8

RUN groupmod -g 65530 node && usermod -u 65530 -g 65530 node

# Create a nonroot user
ARG USER_ID
ARG GROUP_ID
ARG username

RUN groupadd -g ${GROUP_ID} ${username} && \
    useradd -l -u ${USER_ID} -g ${username} ${username} && \
    install -d -m 0755 -o ${username} -g ${username} /home/${username} && \
    chown -R ${USER_ID}:${GROUP_ID} /usr/local 

RUN chown -R ${username} /code

USER ${username} 

WORKDIR /code

CMD npm install && ng serve --host 0.0.0.0 --port 4200 --poll=2000
