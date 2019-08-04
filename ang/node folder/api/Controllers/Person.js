const User = require("./../Models/Person");

exports.create = (req, res) => {
    const newUser = new User({
        email: req.body.name,
        password: req.body.password,
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
            email: req.body.name,
            password: req.body.password
        })
        .then(result => {
            if (result.length == 1) {
                res.send({
                    result
                })
            } else {
                res.send({
                    error: 'User Not found'
                })
            }
        })
        .catch(err =>
            res.send({
                err
            })
        );
};