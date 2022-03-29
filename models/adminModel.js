const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            min:4
        }
    }
);

module.exports = mongoose.model("admins",adminSchema);