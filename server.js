const express = require('express')
const bodyparser = require('body-parser');
const path = require('path')
const app = express()
const mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, 'build')))
// app.use(express.static('/public'));

// app.use(bodyparser.urlencoded({
//   extended: true
// }));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

const userSchema = new mongoose.Schema({
  username: String,
  type: String,
  pass: String,
  pokuisine: [Object],
  order_history: Array,
  
});

const userModel = mongoose.model("userlists", userSchema);
mongoose.connect("mongodb+srv://Matirix:ThZ66IU29TT6Vb39@cluster0.wg0oi.mongodb.net/pokemonDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/ping', (req, res) => {
   res.send('pong')
   
})

app.get('/users', function(req, res) {
  let name = req.query["name"]
  console.log(req.query["name"]);
  userModel.find(
    {username: name},
  function (err, data) {
      if (err) {
          console.log("Error " + err);
      } else {
          console.log("Data from shoplist");
      }
      res.send(data);
  });
})


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080, function (err) {
  if (err)
      console.log(err);
})




