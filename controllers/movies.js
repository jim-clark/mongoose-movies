var Movie = require('../models/movie');

module.exports = {
  new: newMovie,
  create,
  index
};

function index(req, res) {
  Movie.find({}, function(err, movies) {
    res.render('movies/index', {movies});
  });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = req.body.nowShowing === 'on';
  // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  // remove empty properties
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var movie = new Movie(req.body);
  movie.save(function(err) {
    // one way to handle errors
    if (err) return res.render('movies/new');
    console.log(movie);
    // for now, redirect right back to new.ejs
    res.redirect('/movies');
  });
}

function newMovie(req, res) {
  res.render('movies/new');
}