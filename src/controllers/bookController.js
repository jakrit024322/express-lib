const Book = require('../models/bookModel');
exports.getBook = async (req, res) => {

    Book.find()
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.getBookById = async (req, res) => {
    Book.findById(req.params.id)
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.getBookByName = async (req, res) => {
    let bookName = req.params.name;
    Book.find({
            name: {
                $regex: new RegExp(bookName),
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

exports.addBook = async (req, res) => {
    try {
        let book = new Book({
            name: req.body.name,
            authos: req.body.authos,
            publisher: req.body.publisher,
            price: req.body.price,
            borrowstudent: req.body.borrowstudent,
            borrowteacher: req.body.borrowteacher
        });
        let createdBook = await book.save();
        res.status(200).json({
            msg: "Add a Book complete.",
            data: createdBook
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
};

exports.editWholeBook = async (req, res) => {
    let book = {
            name: req.body.name,
            authos: req.body.authos,
            publisher: req.body.publisher,
            price: req.body.price,
            borrowstudent: req.body.borrowstudent,
            borrowteacher: req.body.borrowteacher
    };
    Book.findByIdAndUpdate(req.params.id, book)
        .exec((err, result) => {
            Book.findById(req.params.id)
                .exec((err, result) => {
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};

// สมมติว่าให้ การเพิ่ม Review มาทำใน editProduct
// exports.editBook = async (req, res) => {
//     let reviewData = {
//         $push: {
//             reviews:
//             {
//                 star: req.body.star,
//                 comment: req.body.comment
//             }
//         }
//     };
//     Product.findByIdAndUpdate(req.params.id, reviewData)
//         .exec((err, result) => {
//             Product.findById(req.params.id)
//                 .exec((err, result) => {
//                     // return doc ที่แก้ไขแล้วกลับไป
//                     res.status(200).json({
//                         msg: "OK",
//                         data: result
//                     });
//                 });
//         });
// };

exports.deleteBook = async (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .exec((err)=>{
            if(err){
                res.status(500).json({
                    msg: err
                });
            } else{
                res.status(200).json({
                    msg: "Delete complete"
                });
            }
        });
};