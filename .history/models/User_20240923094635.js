const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  name: {
    type: String,
   required:  true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  date_of_obtaining_permit: {
    type:String,
     required:true 
    },
    isAdmin: {
      type: Boolean,
      defa: false,
  },
});
module.exports = mongoose.model("user", UserSchema);
