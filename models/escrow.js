var mongoose = require('mongoose');


//schema for users
var EscrowSchema = new mongoose.Schema({
    proj_name : String,
    proj_id : String,
    donators : [{did : String, amount : Number}],
    amount :{
        type:Number,
        default:0
    },
    back_ins : Number 
});

var Escrow = mongoose.model('Escrow',EscrowSchema);
module.exports = Escrow;