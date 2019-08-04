const User = require("./../Models/Person");

exports.create = (req, res) => {
    const newUser = new User({
        name: req.body._name,
        email: req.body._email,
        password: req.body._password
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

exports.logIn = (req, res) => {
    User.find({
            name: req.body._name,
            email: req.body._email,
            password: req.body._password,
        })
        .then(result => {
            if (result.length == 1) {
                res.send({
                    result
                })
            } else {
                res.send({
                    error: 'Person Not found'
                })
            }
        })
        .catch(err =>
            res.send({
                err
            })
        );
};