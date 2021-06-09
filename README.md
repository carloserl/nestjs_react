# nestjs-react

English
Full Stack Node (nestjs) and React project

backend Node (nestjs)

- CRUD REST API of the Hits Model (CREATE, READ, UPDATE, DELETE)
- Every period of time a Cron Job is executed that loads the Hits Model, uses the story_id code as a reference, does not overwrite the hits already registered.
  Additionally, a verification parameter is added if the record has been deleted by the frontend.
- The backend is dockerized

frontend React

- The frontend shows a list of all hits loaded from the backend.
- The frontend shows the list in order of created in a defined format.
- The frontend allows you to delete the hits and they appear again in the list. They are not deleted, a parameter is modified so that they are not shown.

comand to run project in multi-stage DEV
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

comand to run project in multi-stage PROD
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build

URL DEV http://localhost:5001/

## URL PROD http://localhost:8080/

Español
Proyecto de Full Stack Node(nestjs) y React

backend Node(nestjs)

- CRUD REST API del Modelo Hits (CREATE,READ,UPDATE,DELETE)
- Cada periodo de tiempo se ejecuta un Cron Job que carga el Modelo Hits, usa como referencia el codigo story_id, no sobreescribe los hits ya registrados.
  Adicional se agrega un parametro de verificacion si el registro ha sido borrado por el frontend.
- El backend se encuentra dockerizado

frontend React

- El frontend muestra una lista de todos los hits cargados del backend.
- El frontend muestra la lista en orden de creados en un formato definido.
- El frontend permite borrar los hits y nos aparecen nuevamente en la lista. No son borrados, se le modifica un parametro para no ser mostrados.

comando para ejecutar proyecto multi-stage DEV
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

comando para ejecutar proyecto multi-stage PROD
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build

URL DEV http://localhost:5001/

URL PROD http://localhost:8080/
