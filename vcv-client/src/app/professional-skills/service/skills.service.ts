import { Injectable } from '@angular/core';
import { Skills } from '../models/skills';
import { SkillElement } from '../models/skill-element';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

    skills = [
        new Skills(
            'Languages',
            [
                new SkillElement(
                    'Python',
                    'Proficent',
                    [
                        'Professionally: I have worked in 4 web applications using Python as a backend mainly in Flask, I also used this language in a project where I had to automate some processes.', 
                        'Non-professionally: I have worked in a few project that you can see in the Projects area. '
                    ]
                ),
                new SkillElement(
                    'TypeScript',
                    'Good',
                    [
                        'Professionally: I have worked in 4 web applications using Angular as frontend (Angular 4, 6 and 7).',
                        'Non-professionally: I have worked in two projects that you can see in the Projects area, in particular, this website. '
                    ]
                ),
                new SkillElement(
                    'JavaScript',
                    'Good',
                    [
                        'Professionally I worked a in the Control Panel Project. I had to implement some functions to handle the layout of the graphs in the Pentaho Dashboard.'
                    ]
                ),
                new SkillElement(
                    'Java',
                    'Medium',
                    [
                        'I practically studied the whole college degree in Java.', 
                        'Professionally I worked with Java in the Control Panel Project. There were some ETL that needed the client to upload some csv files, we implement some portlets in Java to handle the upload of files.'
                    ]
                ),
            ]
        ),
        new Skills(
            'Databases',
            [
                new SkillElement(
                    'MySQL',
                    'Good',
                    [
                        'Professionally: I have used MySQL as database in 3 projects, with different responsabilities from just read some data, create tables or the whole schema.', 
                        'Non-professionally: I have two personal projects where I have choose MySQL as my database. The Shopping list and the CRM.'
                    ]
                ),
                new SkillElement(
                    'SQL Server',
                    'Good',
                    [
                        'I have worked professionally in two projects that used SQL Server.'
                    ]
                ),
                new SkillElement(
                    'Datastore',
                    'Medium',
                    [
                        'I have worked professionally in on project where Datastore was the database.'
                    ]
                ),
                new SkillElement(
                    'Firestore',
                    'Medium',
                    [
                        'I have worked professionally in one project where Firestore was the database.'
                    ]
                ),
                new SkillElement(
                    'Elasticsearch',
                    'Basic',
                    [
                        'I worked in a project where I was in charge of implementing the change from Datastore database to Elasticsearch.'
                    ]
                )
            ]
        ),
        new Skills(
            'Cloud',
            [
                new SkillElement(
                    'Compute Engine',
                    'Good',
                    [
                        'Professionally: I have worked in 2 projects where I had to deploy and work some instances in Compute Engine (Linux and Windows Server)',
                        'Non-professionally: I have deployed lots of instances (I have done 2 Coursera courses where I have to deploy multiple instances) and I have one MySQL deployed in a Compute Engine instance.'
                    ]
                ),
                new SkillElement(
                    'App Engine',
                    'Good',
                    [
                        'Professionally: I have worked in 2 projects where the web application was deployed on App Engine.',
                        'Non-professionally: I have used App Engine Standard and Flexible for personal projects (Shopping list and CRM)'
                    ]
                ),
                new SkillElement(
                    'Datastore',
                    'Medium',
                    [
                        'I have worked professionally in on project where Datastore was the database.'
                    ]
                ),
                new SkillElement(
                    'Firestore',
                    'Medium',
                    [
                        'I have worked professionally in one project where Firestore was the database.'
                    ]
                ),
                new SkillElement(
                    'Kubernettes',
                    'Basic',
                    [
                        'Professionally: For one project, there were some web scrappers that were executed daily, I created a Kubernettes cluster, deploy them and automate their execution.'
                    ]
                )
            ]
        ),
        new Skills(
            'Git',
            [
                new SkillElement(
                    'Git',
                    'Good',
                    [
                        'I have used git in all the projects I have worked in, both professional and personal projects, adapting to different work methodologies depending on the company or the project.'
                    ]
                )
            ]
        ),
        new Skills(
            'Frameworks',
            [
                new SkillElement(
                    'Flask',
                    'Good',
                    [
                        'Professionally: I have worked in 3 projects where Flask was the framework choosen to develop the backend',
                        'Non-professionally:  I have worked in 1 project (CRM) where Flask was I choose Flask as the framework to develop the backend'
                    ]
                ),
                new SkillElement(
                    'Angular',
                    'Good',
                    [
                        'Professionally: I have worked in 4 web applications using Angular as frontend (Angular 4, 6 and 7).',
                        'Non-professionally: I have worked in a few project that you can see in the Projects area.'
                    ]
                ),
                new SkillElement(
                    'Django',
                    'Basic',
                    [
                        'I have worked professionally in on project where Django was the development framework.'
                    ]
                )
            ]
        ),
        new Skills(
            'Virtualization',
            [
                new SkillElement(
                    'Docker',
                    'Good',
                    [
                        'Professionally: I have worked with Docker in 3 projects where I containerized the environment. In almost all of them it was a Docker with node for the frontend and a Docker with Python for the backend.',
                        'Non-professionally: I containerized the environment in my CRM project and I plan to do it for now on in all the projects.'
                    ]
                ),
                new SkillElement(
                    'Docker-compose',
                    'Good',
                    [
                        'Professionally: I have worked in 2 projects where I used docker-compose to orchestrate the containers with docker-compose.',
                        'Non-professionally: I have also used in my CRM project.'
                    ]
                ),
                new SkillElement(
                    'Vagrant',
                    'Medium',
                    [
                        'Professionally: I used Vagrant to build an Ubuntu image that configured a VPN and installed Remmina client with a connection configured to allow me to access to the Production environment from my computer.',
                    ]
                )
            ]
        ),
        new Skills(
            'Automation',
            [
                new SkillElement(
                    'Jenkins',
                    'Medium',
                    [
                        'Professionally: I have worked in one project where I had modify a pipeline to be able to deploy the service in a Docker container remotely.',
                        'Non-professionally: In my CRM project I deployed a Jenkins server and create a pipeline that run the tests and deploy the app to App Engine.'
                    ]
                )
            ]
        ),
        new Skills(
            'Monitoring',
            [
                new SkillElement(
                    'NagiosXI',
                    'Basic',
                    [
                        'Professionally: I have just started to work in a project where I am going to use NagiosXI for infrastructure monitoring.'
                    ]
                )
            ]
        )
    ]


  constructor() { }

  getSkills() {
      return this.skills.map(skill => skill.name);
  }

  getSkill(skill: string): Skills {
      return this.skills.filter(skillElement => skillElement.name === skill)[0];
  }
}
