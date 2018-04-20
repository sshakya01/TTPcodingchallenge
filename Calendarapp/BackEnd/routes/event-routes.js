const eventController = require ('../controllers/event-controller');
const express = require('express');
const eventRoutes= express.Router();

eventRoutes.get('/', eventController.index);
eventRoutes.post('/',eventController.create);

eventRoutes.get('/add', (req, res) => {
   res.render('events/events-add');
});
eventRoutes.put('/:id', eventController.update);
eventRoutes.get('/:id', eventController.show);
eventRoutes.delete('/:id', eventController.delete);
module.exports= eventRoutes;
