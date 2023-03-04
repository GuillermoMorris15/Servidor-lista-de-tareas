const mongoose = require("mongoose");

const taskShema = mongoose.Schema({
  tarea:{
    type:"string",
    required:true
  },
  descripcion:{
    type:"String",
    required:true
  },
  estado:{
    type:"string",
    required:true
  }
})



module.exports = mongoose.model("taskList", taskShema);
