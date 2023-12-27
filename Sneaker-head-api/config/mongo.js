import mongoose from "mongoose";

// i have exposed the key but network acces is restricted so it will not work for you
const uri =
  "mongodb+srv://Chairo:test@sneaker.xooy3ck.mongodb.net/?retryWrites=true&w=majority ";
export const connectDB = async () => {
  try {
    await mongoose.connect(
      uri
      //   , {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
    );
  } catch (error) {
    console.log(`error in connecting to the database :: ${error}`);
  }
};
