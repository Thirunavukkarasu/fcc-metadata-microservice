var api = require("../api/service");

module.exports = function(app, db){
    app.route("/").get(function(req, res){
        res.render('index');
    });    
    app.route("/getFileSize").post(function(req, res){
        return api.getFileSize(req, res);
    });
};