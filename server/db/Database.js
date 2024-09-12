const mongoose = require("mongoose");


// connect trên cloud
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;

// const { default: mongoose } = require('mongoose')
// mongoose.set('strictQuery', false)
// const connectDatabase = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.DB_URL)
//     if (conn.connection.readyState === 1) console.log('DB connection is successfully!')
//     else console.log('DB connecting');

//   } catch (error) {
//     console.log('DB connection is failed')
//     throw new Error(error)
//   }
// }

// module.exports = connectDatabase