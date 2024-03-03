import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-practice");
    console.log(`database connect succesful`);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(`failed to database connect`, error);
  }
}
bootstrap();
