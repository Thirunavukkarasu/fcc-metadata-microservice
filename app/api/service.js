var multer = require('multer');
var fs = require('fs');
var path = require('path');

function getFileSize(req, res){
    var size = 0;

	var upload = multer({
        storage : multer.diskStorage({
            destination: function(req, file, callback) {
                callback(null, 'uploads/')
            },
            filename: function(req, file, callback) {
                var getFileExt = function(fileName) {
                  var fileExt = fileName.split(".");
                  if (fileExt.length === 1 || (fileExt[0] === "" && fileExt.length === 2)) {
                    return "";
                  }
                  return fileExt.pop();
                };
                callback(null, Date.now() + '.' + getFileExt(file.originalname));
            }
        })
    }).single('userFile');
    
	upload(req, res, function(err) {
        if (err) {
            // An error occurred when uploading 
            return res.send(err);
        }

        fs.unlinkSync('./uploads/'+req.file.filename);
        res.send({
            size : req.file.size
        });
    });
}

module.exports = {
    getFileSize : getFileSize
};