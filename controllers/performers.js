var Performer = require('../models/performer');

module.exports = {
  new: newPerformer
};

function newPerformer(req, res) {
  Performer.find({}, function(err, performers) {
    res.render('performers/new', {
      title: 'Add Performer',
      performers
    });
  });
}