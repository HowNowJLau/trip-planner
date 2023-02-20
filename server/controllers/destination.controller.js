const Destination = require('../models/destination.model');

module.exports.create = (req, res) => {
    console.log("create function called");
    Destination.create(req.body)
    .then(newDestination => {
        return res.json(newDestination);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.getAll = (req, res) => {
    Destination.find({})
    .then(allDestinations => {
        return res.json(allDestinations);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.getOne = (req, res) => {
    Destination.findById({_id: req.params.id})
    .then(destination => {
        return res.json(destination);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.delete = (req, res) => {
    Destination.deleteOne({_id: req.params.id})
    .then(deletedDestination => {
        return res.json(deletedDestination);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.update = (req, res) => {
    Destination.updateOne({_id: req.params.id}, req.body, {runValidators: true})
    .then(updatedDestination => {
        return res.json(updatedDestination);
    }).catch(err => {
        return res.json(err);
    })
}