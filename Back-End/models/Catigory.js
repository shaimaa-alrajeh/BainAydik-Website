const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catigorySchema = new Schema({
    name: {type:String,unique:true},
    project:[{type:Schema.Types.ObjectId,ref:'Project'}]
})
const Catigory = mongoose.model('Catigory', catigorySchema)

module.exports=Catigory
