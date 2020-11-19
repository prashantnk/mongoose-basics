
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB" , {useNewUrlParser: true, useUnifiedTopology: true});

// creating schema

const fruitschema = new mongoose.Schema({
  name : {
    type : String ,
    required : [true , "please specify name "]
  } ,
  rating : {
    type : Number ,
    required : true
  } ,
  review : String
});

// model

const Fruit = mongoose.model("Fruit" , fruitschema);

// using model

// const banana = new Fruit({
//   name : "banana" ,
//   rating : 6,
//   review : "good fruit"
// });
const peaches = new Fruit({
  name : "peach" ,
  rating : 7,
  review : "good fruit"
});
// const kiwi = new Fruit({
//   name : "kiwi" ,
//   rating : 5,
//   review : "good fruit"
// });
// const coconut = new Fruit({
//   name : "cocnut" ,
//   rating : 5,
//   review : "good fruit"
// });

// Fruit.insertMany([] , (err)=>{
//   console.log( err);
//   if(err) console.log("error!");
//   else console.log("success!");
// });
// to save data
//peaches.save();

// to update value in mongo :

// Fruit.updateOne({name : "peach"} , {name : "peaches" } , (err) =>{
//   if(err) console.log(err);
//   else console.log("success!");
// });

// Fruit.deleteOne({name : "peaches"} , (err) => {
//   if(err) console.log(err);
//   else console.log("success!");
//   Fruit.find((err , val) =>{
//     if(err) console.log(err);
//     else {
//       //mongoose.connection.close();
//       val.forEach((item, i) => {
//         console.log(item.name);
//       });
//     }
//   });
// });

const personschema = new mongoose.Schema({
  name : String ,
  age : Number ,
  // to establish the relationship b/w Fruit
  favFruit : fruitschema // here this is the schema for the dataBase to be added
});

const Person = mongoose.model("Person" , personschema);

const person = new Person({
  name : "prashant" ,
  age : 19 ,
  favFruit : peaches // here peaches is the object of fruit model
});
//  person.save();

// reading data
// Fruit.find((err , val) =>{
//   if(err) console.log(err);
//   else {
//     //mongoose.connection.close();
//     val.forEach((item, i) => {
//       console.log(item.name);
//     });
//   }
// });


// deleteMany

// Person.deleteMany({name : "prashant"} , (err)=>{
//   if(err) console.log(err);
//   else console.log("success!");
// });
