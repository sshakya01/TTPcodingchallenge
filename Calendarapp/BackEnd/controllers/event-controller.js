const Event = require('../models/event');
const eventController = {};

eventController.index = (req, res) => {
  Event.findAll()
  .then(events=> {
    //res.json({
    res.render('events/index1',{
      message:'ok',
      data: events,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

eventController.show = function(req, res){
  Event.findById(req.params.id)
  .then(events =>{
      res.render('events/single',{
         message:'ok',
         data: event,
      });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

eventController.create = function(req, res){
  Event.create({
    title: req.body.title,
    status: req.body.status,
    category: req.body.category
  })
  .then(list=> {
    res.redirect('/lists');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}
eventController.update = (req, res) => {
   Event.update({
     title: req.body.title,
     status: req.body.status,
     category: req.body.category,
   }, req.params.id).then(event => {
     res.redirect('/lists');
   }).catch(err => {
     console.log(err);
     res.status(500).json(err);
   })
};

eventController.delete = function(req, res){
  Event.destroy(req.params.id)
  .then(()=>{
    res.redirect('/lists');
  }). catch(err => {
    console.log(err);
  res.status(500).json(err);
  })
}

module.exports = eventController;
