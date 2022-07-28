const mongoose = require('mongoose')
// connect to DB
// mongodb://127.0.0.1:27017/google-clone
mongoose.connect('mongodb://127.0.0.1:27017/google-clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})