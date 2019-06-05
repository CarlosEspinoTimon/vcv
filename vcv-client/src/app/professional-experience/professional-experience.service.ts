import { Injectable } from '@angular/core';
import { ProfessionalExperience } from './professional-experience.model';
import { ProfessionalExperienceProject } from './professional-experience-project.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalExperienceService {

    experience = [
        new ProfessionalExperience(
            'Edosoft',
            'Full Stack Developer',
            new Date('01/04/2018'),
            new Date('01/01/2050'),
            [
                new ProfessionalExperienceProject(
                    'Control Panel',
                    'Pentaho BI Suite, MySQL, Liferay',
                    'In this project I used Pentaho BI Suite to create some ETLs, then create the MySQL queries to generate som KPI given by the client and then show them in a Pentaho Dashboard, this Dashboard was integrated in a Liferay platform, I worked of the automation of the execution of the ETL processes(some were executed daily and some monthly) and the initial deployment of them.'
                ),
                new ProfessionalExperienceProject(
                    'Database Integration',
                    'BPA Taskcentre, SQL Server, MySQL, Python and Webservices',
                    'I did almost everything in this project that consisted in an integration between the client\'s ERP (Navision) database with the website database MySQL, so all the changes made in the client database are also made in the website database. To do that I used the BPA Taskcentre to manage the tasks that transfer the information from one database to the other. Depending on the entity to transfer I had to work with Webservices or Python Scripts'
                ),
                new ProfessionalExperienceProject(
                    'Ethic Channel',
                    'Python (Flask), Angular 6 and Google Cloud Platform (Cloud Storage, Firebase, Cloud Firestore, Google KMS)',
                    'In this project I did little tasks both in backend and in frontend, however my main contribution was with the encryption of the complaints. This project consisted in an ethic channel where workers can report illicit activities anonymously.'
                ),
                new ProfessionalExperienceProject(
                    'Migration of Oracle Forms',
                    'Python (Flask), Angular 7, SQL Server, Docker, docker-compose',
                    'This project consisted in the Migration of Oracle Forms 6 to a more modern stack. I worked both in backend and in frontend I also was in charge to create the development environment with Docker and docker-compose, so all the developers would have the same environment and there were no dependency problems.'
                ),
                new ProfessionalExperienceProject(
                    'Collaborative agendas',
                    'Python (Flask), Angular 7, MySQL, Docker, docker-compose',
                    'This project consisted in a Collaborative Agenda where promoters can promote events in a local gobernment website. I worked both in backend and in frontend I also was in charge to create the development environment with Docker and docker-compose, so all the developers would have the same environment and there were no dependency problems.'
                )
            ],
            'https://edosoft.es/assets/images/logo-blue.png'
        ),
        new ProfessionalExperience(
            'ITER',
            'Computer Engineer',
            new Date('01/10/2017'),
            new Date('01/04/2018'),
            [
                new ProfessionalExperienceProject(
                    'Tetsuki',
                    'Python, Angular4, Docker, Google Cloud Platform (Kubernettes, App Engine, Datastore)',
                    'I worked in a project that collected tenders\' information from public websites. I used a variety of languages and technologies such us: Python for the web scrappers and the server backend, Docker and Kubernettes to deploy the scrappers.Google App Engine Standard for the application, Google Datastore as database (I did the migration to Elasticsearch) and Angular 4 for the web client.I also wrote some unit and functional test in Python.'
                )
            ],
            'https://www.cienciacanaria.es/scei2015/images/colaboradores/logo_ITER.jpg'
        ),
        new ProfessionalExperience(
            'Laureon',
            'Computer Engineer',
            new Date('01/03/2017'),
            new Date('01/09/2017'),
            [
                new ProfessionalExperienceProject(
                    'Laureon',
                    'Python (Django), Open Edx, Google Cloud Platform (Compute Engine)',
                    'I deployed an online platform to offer courses. The chosen platform was Open Edx, and was deployed on Google Cloud Platform.I worked on the integration of Vimeo in the platform and on the website where the courses where sold, that was written in Python using the Django.Framework.'
                )
            ],
            'https://www.laureon.es/static/img/og_image.15f7def9cd9e.png'
        )

    ];


  constructor() { }

  getCompanies() {
      return this.experience.map(experience => experience.company)
  }
  
  getExperience(company: string): ProfessionalExperience {
      return this.experience.filter(experience => experience.company === company)[0];
  }
}
