const express = require('express');
const app = express();
 
const lehrerRoute = express.Router();
let Lehrer = require('../Models/lehrer.model');

/*
// Add Lehrer
lehrerRoute.route('/add-lehrer').post((req, res, next) => {
    Lehrer.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
*/
// Get all Lehrer
lehrerRoute.route('/').get((req, res) => {
    Lehrer.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get Lehrer
lehrerRoute.route('/read-lehrer/:kuerzel').get((req, res) => {
    Lehrer.findById(req.params.kuerzel, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
/*
// Update Lehrer
lehrerRoute.route('/update-lehrer/:kuerzel').put((req, res, next) => {
    Lehrer.findByIdAndUpdate(req.params.kuerzel, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Lehrer updated successfully!')
    }
  })
})
 
// Delete Lehrer
lehrerRoute.route('/delete-lehrer/:kuerzel').delete((req, res, next) => {
    Lehrer.findByIdAndRemove(req.params.kuerzel, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 */
module.exports = lehrerRoute;