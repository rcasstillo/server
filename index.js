
require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";
import TodoListRoutes from "./routes/todoList";
import Consejo from'./routes/consejo';
import Embalses from './routes/embalses';
import Especies from './routes/especies';
import Oferta from './routes/oferta';
import Pregunta from './routes/pregunta';
import Producto from './routes/producto';
import Quienes from './routes/quienes';
import Receta from './routes/receta';
import Servicios from './routes/servicios';
import Pescaderia from'./routes/pescaderia';

const morgan = require("morgan");

const app = express();

// db connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err))
  

// middlewares no tocar
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// route middlewares1
app.use('/api', TodoListRoutes)
app.use('/api', Consejo);
app.use('/api', Embalses);
app.use('/api', Especies);
app.use('/api', Oferta);
app.use('/api', Pregunta);
app.use('/api', Producto);
app.use('/api', Quienes);
app.use('/api', Receta);
app.use('/api', Servicios);
app.use('/api', Pescaderia);
app.use("/api", authRoutes);



app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
