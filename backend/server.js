const express = require('express');
const cors = require('cors');
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customer/customer-route");


const promotionapi = require('./api/promotion.api');


require('dotenv').config();

const app = express();
app.use(bodyparser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/customers", customerRoutes);

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const feedbackRouter = require('./routes/feedback/feedback-route');
 
app.use('/feedback', feedbackRouter);




const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



app.use('/promotion', promotionapi());

const userRouter = require('./controller/route');
app.use('/users', userRouter);



app.listen(port, () =>{
  console.log(`server is running on port ${port}`);
})

