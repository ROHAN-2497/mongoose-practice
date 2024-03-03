import mongoose from "mongoose";

const port = 5000;

/* database connection*/

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-practice");
    console.log(`database connection succesful`);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(`failed to database connect`, err);
  }
}
bootstrap();
export default app;
