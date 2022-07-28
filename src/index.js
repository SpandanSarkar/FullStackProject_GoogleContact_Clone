const express = require('express')
require('./db/connection')
const cors = require('cors');


const useRouter = require('./router/user')
const contactsRouter = require('./router/contacts')

const corsOptions ={
    origin:'http://localhost:4200', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

// var corsOptions = {
//     origin: ["http://10.11.201.69:4200", "http://10.11.201.92:4200", "http://10.11.200.85:4200", "http://10.11.201.69:4325"],
//     credentials: true,
  
//   };

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

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