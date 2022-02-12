const Member = require('../models/memberModel');
exports.getMember = async (req, res) => {

    Member.find()
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.getMemberById = async (req, res) => {
    Member.findById(req.params.id)
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.getMemberByName = async (req, res) => {
    let memberName = req.params.name;
    Member.find({
        name: {
            $regex: new RegExp(memberName),
            $options: 'i'
        }
    })
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.addMember = async (req, res) => {
    try {
        let member = new Member({
            name: req.body.name,
            password: req.body.password,
            groups: req.body.groups,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
        });
        let createdMember = await member.save();
        res.status(200).json({
            msg: "Add a Member complete.",
            data: createdMember
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
};

exports.editWholeMember = async (req, res) => {
    let member = {
        name: req.body.name,
            password: req.body.password,
            groups: req.body.groups,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
    };
    Staff.findByIdAndUpdate(req.params.id, member)
        .exec((err, result) => {
            Member.findById(req.params.id)
                .exec((err, result) => {
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};

exports.deleteMember = async (req, res) => {
    Member.findByIdAndDelete(req.params.id)
        .exec((err) => {
            if (err) {
                res.status(500).json({
                    msg: err
                });
            } else {
                res.status(200).json({
                    msg: "Delete complete"
                });
            }
        });
};