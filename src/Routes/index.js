const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const taskRoutes = require("./routes/")



// Middleware😎.
app.use(express.json());
app.use("/api", taskRoutes)


// Aqui invocamos las rutas😎.
app.get("/", (req, res) => {
    res.send("holaaa");
  });
  
// Coneccion a MongoDB😎. 
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("conectado a Mongo DB"))
  .catch((error) => console.error(error));

app.listen(7000, () => console.log("servidor corriendo en el puerto", 7000));


