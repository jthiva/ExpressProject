var Mongoose = require("../DBSchema/DBConfig");

var UserSchema = Mongoose.model('User');


var Controller = function() {
    this.insertUser = function (data) {
        return new Promise(function(resolve, reject) {
            var User = new UserSchema({
                name: data.name,
                address: data.address,
                password: data.password
            });
            
            User.save().then(function () {
                resolve({status: 200, message: "User inserted successfully"})
            }).catch(function (err) {
                reject({status: 500, message: "Error:- " + err})
            });
        });
    }

    this.getAll = function () {
        return new Promise(function (resolve, reject) {
            UserSchema.find().exec().then(function (data) {
                resolve({status: 200, Userdata: data})
            }).catch(function (err) {
                resolve({status: 500, message : "No data available"})
            })
        })
    }

    this.getuser = function (id) {
        return new Promise(function (resolve, reject) {
            UserSchema.find({_id: id}).exec().then(function (data) {
                resolve({status: 200, userSearched: data});
            }).catch(function (err) {
                reject({status: 404, message: "User NOT FOUND"});
            })
        })
    }
    this.updateUser = function (id, data) {
        return new Promise(function (resolve, reject) {
            UserSchema.update({_id: id}, data).then(function (data) {
                resolve({status: 200, message: "User updated successfully"})
            }).catch(function (err) {
                reject({status: 500, message: "Error:- " + err})

            })
        })
    }

    this.remove = function (id) {
        return new Promise(function (resolve, reject) {
            UserSchema.remove({_id: id}).then(function () {
                resolve({status: 200, message: "Successfully deleted"})
            }).catch(function (err) {
                resolve({status: 500, message: "Error : "+err})
            })
        })
    }
}


module.exports = new Controller();