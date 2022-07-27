const mongoose = require('mongoose')

// importing validator
const validator = require('validator')
const validatePhoneNumber = require('validate-phone-number-node-js')

// defining User model in Database
const User = mongoose.model('Users', {
    name: {
        firstName: {
            type: String,
            //required true means that this field can not be empty
            required: true,
            trim: true 
        },
        lastName: {
            type: String,
            //required true means that this field can not be empty
            required: true,
            trim: true 
        }
        
    },
    
    email: {
        type: String,
        required: true,
        trim: true,
        lowcase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can not contain the word "Password"')
            }
        }
    },
    authentication: {
        type: Number,
        default: 0,
        //making custom validation
        // validate(value){
        //     if(value < 0){
        //         throw new Error('Age must be a positive number')
        //     }
        // }
    },
    phone: {
        type: Number,
        trim: true,
        required: true,
        validate(value){
            if(!validatePhoneNumber.validate(value)){
                throw new Error('Not a valid Phone Number')
            }
            // using Regex might solve the issue
        }
    }
})

//exporting this module so that other module can use it
module.exports = User