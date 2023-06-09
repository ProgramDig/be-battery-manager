const {Schema, model} = require('mongoose')

const Battery = new Schema({
    imagePath: {type: String, require: true, default: "public/battery/img.png"},
    title: {type: String, require: true},
    description: {type: String, require: true},
    type: {type: String, require: true},
    capacity: {type: String, require: true},
    work_temp: {type: [Number], require: true},
    work_voltage: {type: [Number], require: true},
    isAvailable: {type: Boolean, require: true},
    type_connector: {type: String, require: true},
    max_amp: {type: String, require: true},
    date_getting: {type: Date, require: true},
    date_write_off: {type: Date},
    suitable_with: {type: [String]},
    isGuarantee: {type: Boolean},
    guarantee_description: {type: String},
    country: {type: String},
    count: {type: Number},
})

module.exports = model('Battery', Battery)