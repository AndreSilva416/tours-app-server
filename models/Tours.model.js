const { Schema, model } = require("mongoose");


const userSchema = new Schema({
  title: {
    type: String,
    required: true
  },

   description: {
    type: String, 
    required: true,
    maxlength: 300
   }, 
  
   location:{
     type: String,
     required: true, 
   },

   date: {
     type: Date, 
     required: true, 
   },

  //  image: {
  //    type: String,
  //  },
  
});

const User = model("Tours", userSchema);

module.exports = User;
