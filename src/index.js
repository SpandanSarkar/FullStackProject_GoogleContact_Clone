const express = require('express')
require('./db/connection')
const cors = require('cors');


const useRouter = require('./router/user')
const contactsRouter = require('./router/contacts')

// const corsOptions ={
//     origin:'http://localhost:4200', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

// var corsOptions = {
//     origin: ["http://10.11.201.69:4200", "http://10.11.201.92:4200", "http://10.11.200.85:4200", "http://10.11.201.69:4325"],
//     credentials: true,
  
//   };asddas

const app = express();
// app.use(cors(corsOptions));
app.use(express.json());

// app.use(cors({
//     origin: "https://127.0.0.1:4200"
// }))

// tried from stackoverflow
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "https://127.0.0.1:4200");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// 
const port = process.env.PORT || 4000

// parsing incoming JSON
// this one line, it's going to automatically parse incoming JSON to an object so that we can access it in our request handlers 

app.use(useRouter)
app.use(contactsRouter)


//grabing incoming body data
// this is called route handler


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})