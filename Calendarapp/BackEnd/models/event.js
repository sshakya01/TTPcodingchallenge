const db= require('../db/migration/config');
const Event= {};

Event.findAll = function(){
  return db.query('SELECT * FROM lists');
}

Event.findOne = function(id){
  return db.oneOrNone('SELECT * FROM lists WHERE id = $1',[id])
}

Event.create = function(list){
  return db.one(`INSERT INTO lists (title, status, category) VALUES($1,$2,$3) RETURNING *`,[list.title,list.status,list.category])
}

Event.destroy = function(id){
  return db.query(`DELETE FROM lists WHERE id= $1`,[id])
}
module.exports = Event;
