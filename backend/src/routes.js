const  express = require('express');
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);


routes.post('/sessions', sessionController.create);

    module.exports = routes;