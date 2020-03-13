  //***Template for NodeJs***//
//***Created BY Rahul M. Desai***//
    //***MOB- 9930831907 ***//
const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose')

const feedRoutes = require('./routes/route');

const registration = require('./routes/auth')
// const session = require('express-session')
// const MongoDBStore = require('connect-mongodb-session')(session)
const MONGODB_URI = 'mongodb+srv://react_app:root@cluster0-6kzyn.mongodb.net/test'
const app = express();




// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
// app.use(
//   session({ secret: 'my secret', resave : false, saveUninitialized: false, store:store})
// )
// setting up CORS //
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/route', feedRoutes);

app.use('/auth', registration);

app.get('/',(req,res)=>{
  console.log("app is working fine")
res.status(200).json({message:"app is working fine........"})
});
// Connect to MongoDb //
mongoose.connect(
    //'mongodb+srv://rahul_92:root@cluster0-3zopr.mongodb.net/test?retryWrites=true'
    MONGODB_URI
    )
    .then(result => { 
        app.listen(process.env.PORT || 8000)
        console.log("Server Started at ip "+process.env.HOST+" and port "+process.env.PORT);
    })
    .catch(err => console.log(err));
