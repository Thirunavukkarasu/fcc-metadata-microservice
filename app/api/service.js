var multer = require('multer');
var fs = require('fs');
var path = require('path');

function getFileSize(req, res){
    var size = 0;

	var upload = multer({
        storage : multer.diskStorage({
            destination: function(req, file, callback) {
                callback(null, './uploads')
            },
            filename: function(req, file, callback) {
                callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
            }
        })
    }).single('userFile');
    
	upload(req, res, function(err) {
        if (err) {
            // An error occurred when uploading 
            return res.send(err);
        }

        //fs.unlinkSync('./uploads/'+req.file.filename);
        res.send({
            size : req.file.size
        });
    });
}

module.exports = {
    getFileSize : getFileSize
};