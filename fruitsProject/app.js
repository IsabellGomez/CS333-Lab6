
import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
console.log("Connected to MongoDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Pretty solid as a fruit."
// });

// await fruit.save();
// console.log("Saved:", fruit.name);
await Fruit.insertMany([
  { name: "Banana", rating: 6, review: "Good for a snack" },
  { name: "Kiwi", rating: 9, review: "Underrated" },
  { name: "Pear", rating: 8, review: "Sweet and juicy" },
]);

await mango.save();
const fruits = await Fruit.find();

for (const f of fruits) {
  console.log(f.name, f.rating);
}

await mongoose.connection.close();
