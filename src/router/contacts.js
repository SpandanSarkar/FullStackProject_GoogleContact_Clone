const express = require('express')
const Contacts = require('../models/contacts')
const router = new express.Router()

router.post('/contacts', async (req, res) => {
    console.log(req.body)
    const contact = new Contacts(req.body)  
    try{
        await contact.save()
        res.status(201).send(contact)
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/contacts', async (req, res) => {
    try{
        const contact = await Contacts.find({})
        res.send(contact)
    }catch(error){
        res.status(500).send()
    }
})

router.get('/contacts/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const contact = await Contacts.findById(_id)
        if(!contact){
            return res.status(404).send()
        }
        res.send(contact)
    }catch(error){
        res.status(500).send()
    }
})

router.patch('/contacts/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'phone', 'website', 'address', 'city',
        'chat', 'relation', 'notes', 'postalCode', 'jobTitle', 'event']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid Update!' })
    }

    try{
        const contact = await Contacts.findByIdAndUpdate(req.params.id, req.body,
             { new: true, runValidators: true })
        if(!contact){
            return res.status(404).send()
        }
        res.send(contact)
    }catch(error){
        res.status(400).send(error)
    }
})

router.delete('/contacts/:id', async (req, res) => {
    try{
        const contact = await Contacts.findByIdAndDelete(req.params.id)

        if(!contact){
            return res.status(404).send()
        }
        res.send(contact)
    }catch(error){
        res.status(500).send(error)
    }
})

module.exports = router