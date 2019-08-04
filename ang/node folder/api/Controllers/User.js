const User = require("./../Models/User");

exports.create = (req, res) => {
  const newUser = new User({
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    num: req.body.num,
    address: req.body.address
  });

  newUser
    .save()
    .then(result =>
      res.send({
        result
      })
    )
    .catch(err =>
      res.send({
        err
      })
    );
};

exports.get = (req, res) => {
  User.find()
    .then(result =>
      res.send({
        result
      })
    )
    .catch(err =>
      res.send({
        err
      })
    );
};

exports.delete = (req, res) => {
  User.deleteOne({
      _id: req.params._id
    })
    .then(result =>
      res.send({
        result
      })
    )
    .catch(err =>
      res.send({
        err
      })
    );
};

exports.update = (req, res) => {
  User.update({
      _id: req.params._id
    }, {
      $set: {
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        num: req.body.num,
        address: req.body.address
      }
    })
    .then(result =>
      res.send({
        result
      })
    )
    .catch(err =>
      res.send({
        err
      })
    );
};