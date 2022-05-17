const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://flekenstine:ashish1998@cluster0.5wqh9.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex:true
      }
    )
    .then((con) => {
      console.log(
        "mongoDB database connected with HOST : ",
        con.connection.host
      );
    })
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
