const User = require("./../Models/User");



exports.create = (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.mob,
        address: req.body.addr,
        textarea: req.body.textarea
    });

    newUser.save().then(
        result => res.send({
            result
        })
    ).catch(
        err => res.send({
            err
        })
    )
}


exports.get = (req, res) => {
    User.find().then(
            result => res.send({
                result
            })
        )
        .catch(
            err => res.send({
                err
            })
        )
}

exports.delete = (req, res) => {
    User.deleteOne({
            _id: req.params._id
        })
        .then(result => res.send({
            result
        }))
        .catch(err => res.send({
            err
        }))
}


exports.update = (req, res) => {
    User.update({
            _id: req.params._id
        }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                textarea: req.body.textarea
            }
        }).then(result => res.send({
            result
        }))
        .catch(err => res.send({
            err
        }))
}