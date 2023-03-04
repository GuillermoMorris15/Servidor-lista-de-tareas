const express = require("express");
const router = require("./Routes/routes");
const app = express();
const port = 3001;
const host = "localhost";
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const taskRoutes = require("./Routes/tareas")
// const {
//   validUrl,
//   requestValid,
//   validacionPost,
// } = require("./Middleware/middleware");
// const login = require("./login");

// //set
// app.set("view engine", "ejs");

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
// //middleware

// // app.use("/recursos", express.static(__dirname + "/public"));
// app.use(express.json());
// app.use(requestValid);
// app.use(validUrl);
// app.use(validacionPost);
// //Route
// app.use("/app", login);
// app.use("/app", router);
// app.get("/", (req, res) => {
//   res.render("index");
// });

// //Server
app.listen(3001, () => console.log(` servidor http://${host}:${port}`));









