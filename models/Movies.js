import mongoose from "mongoose";

//  Define Schema

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: Boolean,
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// Creating Model

//! mongoose.model is collection that Movie will convert with movies
const MovieModel = mongoose.model("Movie", movieSchema);
//! InsertOne

// const createDoc = async () => {
//   try {
//     // create Document
//     const movie1 = new MovieModel({
//       name: "Iron Man",
//       ratings: 5,
//       money: 6000,
//       genre: ["Action", "Sci Fi"],
//       isActive: true,
//       comments: [{ value: "That was an awesome movie" }],
//     });

//     const result = await movie1.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//! Insert Many
// const insertManyDoc = async () => {
//   try {
//     // create Document
//     const movie2 = new MovieModel({
//       name: "Iron Man2",
//       ratings: 5,
//       money: 10000,
//       genre: ["Action", "Sci Fi"],
//       isActive: true,
//       comments: [{ value: "That was an awesome movie" }],
//     });
//     const movie3 = new MovieModel({
//       name: "Iron Man3",
//       ratings: 4.5,
//       money: 12000,
//       genre: ["Action", "Sci Fi"],
//       isActive: true,
//       comments: [{ value: "That was an awesome movie" }],
//     });
//     const movie4 = new MovieModel({
//       name: "Avenger",
//       ratings: 4,
//       money: 9000,
//       genre: ["Action", "Triller"],
//       isActive: true,
//       comments: [{ value: "That was an awesome movie" }],
//     });
//     const movie5 = new MovieModel({
//       name: "Captain America",
//       ratings: 3,
//       money: 16000,
//       genre: ["Action", "Sci Fi", "Thriller"],
//       isActive: true,
//       comments: [{ value: "That was an awesome movie" }],
//     });
//     const movie6 = new MovieModel({
//       name: "Mission Impossible",
//       ratings: 4,
//       money: 12000,
//       genre: ["Action", "Sci Fi"],
//       isActive: true,
//       comments: [{ value: "That was an awesome movie" }],
//     });
//     const movie7 = new MovieModel({
//       name: "Transformer",
//       ratings: 2.5,
//       money: 5000,
//       genre: ["Action", "Sci Fi"],
//       isActive: true,
//       comments: [{ value: "That was an awesome movie" }],
//     });

//     // const result = await MovieModel.insertMany([
//     //   movie2,
//     //   movie3,
//     //   movie4,
//     //   movie5,
//     //   movie6,
//     //   movie7,
//     // ]);
//     // console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//! Get All Data
// const getAllDoc = async () => {
//   try {
//     const result = await MovieModel.find();
//     const result2 = await MovieModel.find().limit(2);
//     const result3 = await MovieModel.find().skip(2);
//     const result4 = await MovieModel.find().countDocument();

//     //* Logical & Comparison Operator
//     // !Comparison Operator//
//     const gatherThan = await MovieModel.find({ money: { $gt: 6000 } }); //! Gater than
//     const lessThan = await MovieModel.find({ money: { $lt: 10000 } }); //! Less than
//     const notInclude = await MovieModel.find({ money: { $ne: 6000 } }); //! ai document bade baki shob data ashbe result a means Not include
//     //! Logical//
//     const and = await MovieModel.find({
//       $and: [{ money: 6000 }, { rating: 4.5 }],
//     });
//     const or = await MovieModel.find({
//       $or: [{ money: 6000 }, { rating: 4.5 }],
//     });

//     //* Sorting
//     const sortAmending = await MovieModel.find().sort({ name: 1 }); //! Descending sorting
//     const sortDescending = await MovieModel.find().sort({ name: -1 }); //! Descending sorting
//     result.forEach((item) => console.log(item.ratings));
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//! singe Data get

// const singeDoc = async () => {
//   try {
//     const name = { name: "Iron Man2" };
//     const resultById = await MovieModel.findById("67a6523828524127e8d656bf");
//     const resultByName = await MovieModel.findOne(name);
//     console.log(resultById);
//     console.log(resultByName);
//   } catch (error) {
//     console.log(error);
//   }
// };

//! Update document
// const updateDoc = async (Id) => {
//   try {
//     // const result1 = await MovieModel.findById("67a6523828524127e8d656bf");
//     const result = await MovieModel.updateOne({ _id: Id }, { name: "Avatar2" });

//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//! Update Many
// const updateManyDoc = async (Id) => {
//   try {
//     // const result1 = await MovieModel.findById("67a6523828524127e8d656bf");
//     const result = await MovieModel.updateMany(
//       { ratings: 4 },
//       { name: "Four Starts Movie" }
//     );

//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//! Delete One data
const deleteDoc = async (Id) => {
  try {
    // const result1 = await MovieModel.findById("67a6523828524127e8d656bf");
    const result = await MovieModel.findByIdAndDelete(Id);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
const deleteManyDoc = async () => {
  try {
    // const result1 = await MovieModel.findById("67a6523828524127e8d656bf");
    const result = await MovieModel.deleteMany({ ratings: 4 });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { deleteManyDoc };
