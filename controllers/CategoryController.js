var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Category = require('../models/Category');
 

router.post('/', function (req, res) {
    Category.create({
            Name : req.body.Name,
            Product : req.body.Product,
            Description : req.body.Description
        }, 
        function (err, category) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
           res.status(200).send(category);
        });
});
 

router.get('/', function (req, res) {
    Category.find({}, function (err, category) {
        if (err) return res.status(500).send("There was a problem finding the Category.");
        res.status(200).send(category);
    });
});

router.get('/:id', function (req, res) {
    Category.findById(req.params.id, function (err, category) {
        if (err) return res.status(500).send("There was a problem finding the Category.");
        if (!category) return res.status(404).send("No Category found.");
res.status(200).send(category);
    });
});

router.delete('/:id', function (req, res) {
    Category.findByIdAndRemove(req.params.id, function (err, category) {
        if (err) return res.status(500).send("There was a problem deleting the Category.");
res.status(200).send("Category "+ Category.Category +" was deleted.");
    });
});

router.put('/:id', function (req, res) {
    Category.findByIdAndUpdate(req.params.id, req.body, {new: true},
function (err, category) {
        if (err) return res.status(500).send("There was a problem updating the Category."); 
res.status(200).send(category);
    });
});
module.exports = router;
