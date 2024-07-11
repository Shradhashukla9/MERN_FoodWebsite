import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import menuRoute from './route/menu.route.js';

import cors from "cors";
import userRoute from './route/user.route.js';
import orderRoute from './route/order.route.js'



dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

console.log('MongoDB URI:', process.env.MongoDBURI);

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,  
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch(error => {
  console.log("Error:", error);
});




app.use("/menu", menuRoute);
app.use("/user",userRoute);
app.use("/order", orderRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
