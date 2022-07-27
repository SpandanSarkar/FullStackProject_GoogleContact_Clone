const mongoose = require('mongoose')
const validator = require('validator')
const validatePhoneNumber = require('validate-phone-number-node-js')

//image upload try 

//

const Contacts = mongoose.model('Contacts', {
    name: {
        firstName: {
            type: String,
            //required true means that this field can not be empty
            required: true,
            trim: true 
        },
        middleName: {
            type: String,
            trim: true 
        },
        lastName: {
            type: String,
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

    phone: {
        phone1: {
            type: Number,
            trim: true,
            required: true,
            validate(value){
                if(!validatePhoneNumber.validate(value)){
                throw new Error('Not a valid Phone Number')
            }
            // using Regex might solve the issue
            }
        },

        phone2: {
            type: Number,
            trim: true,
            // required: true,
            validate(value1){
                if(!validatePhoneNumber.validate(value1)){
                    throw new Error('Not a valid Phone Number')
                }
            // using Regex might solve the issue
            }
        },

        phone3: {
            type: Number,
            trim: true,
            // required: true,
            validate(value2){
                if(!validatePhoneNumber.validate(value2)){
                    throw new Error('Not a valid Phone Number')
                }
            // using Regex might solve the issue
            }
        }
        
    },

    website: {
        type: String,
        trim: true,
        validate(value){
            if(!validator.isURL(value, { require_valid_protocol: false })){
                throw new Error('Not a valid Website')
            }
        }
    },

    address: {
        address1: {
            type: String,
            trim: true
        },
        address2: {
            type: String,
            trim: true
        }
    },

    city: {
        type: String,
        trim: true
    },
    
    chat: {
        type: String
    },

    relation: {
        type: String,
        trim: true
    },

    notes: {
        type: String
    },

    postalCode: {
        type: Number,
        trim: true
    },

    company: {
        type: String,
        trim: true
    },

    jobTitle: {
        type: String,
        trim: true
    },

    department: {
        type: String,
        trim: true
    },

    birthday: {
		type: Date,
		// default: Date.now()
	},

    event: {
        type: String,
        trim: true
    },
    
    
})

module.exports = Contacts