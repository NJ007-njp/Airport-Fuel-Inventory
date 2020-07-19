var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id : String,
    name : String,
    email : String,
    password : String
})
var User = mongoose.model('User',userSchema,'User')

var airportSchema = new Schema({
    _id:String,
    airport_name : String,
    fuel_capacity : Number,
    fuel_available : Number,
})
var Airport = mongoose.model('Airport',airportSchema,'Airport')


var aircraftSchema = new Schema({
    _id:String,
    aircraft_no:String,
    airline : String,
    source : String,
    destination : String,
})
var Aircraft = mongoose.model('Aircraft',aircraftSchema,'Aircraft')

var transactionSchema = new Schema({
    _id : String,
    airport_name: String,
    fuel_available:Number,
    Transaction:[{
        _id:String,
        date_time:String,
        Type:String,
        aircraft:String,
        fuel:Number,
        transaction_id_parent:String
    }]
})
var Transaction = mongoose.model('Transaction',transactionSchema,'Transaction')


module.exports = {
    User,Airport,Aircraft,Transaction
}


