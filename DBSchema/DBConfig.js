var Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type: String,
        require: true
    },
    address : {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: true
    }
});

Mongoose.model('User', UserSchema);
Mongoose.connect("mongodb://localhost:27017/demo", function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log("Connected");
});

module.exports = Mongoose;