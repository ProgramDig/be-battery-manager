const {Schema, model} = require('mongoose')

const User = new Schema({
    email:{type:String, require:true, unique: true},
    login:{type:String, require:true, unique: true},
    fullName:{type:String, require:true},
    password:{type:String, require:true},
    role:{type:String, default: "USER"},
    isActivated:{type:Boolean, require:true, default:true},
    link:{type:String}
})

module.exports = model('User', User)