import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "6933",
    role: "student",
    password: "jhakanaka",
    name: {
      firstName: "jubayar2",
      middleName: "ahmmed",
      lastName: "rohan",
    },
    gender: "male",
    email: "r1orhan@gmail.com",
    contactNo: "01629124072",
    emergencyContactNo: "01797511297",
    presentAdress: "Ishurdi",
    permanentAdress: "Jannatul ferdous",
  });
  await user.save();
  console.log(user);
};
