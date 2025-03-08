import mongoose from "mongoose";

const db = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("DB Connected");
    }
  } catch (error) {
    console.log(error);
  }
};
export default db;
