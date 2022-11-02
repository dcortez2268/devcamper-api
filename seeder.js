const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Load models
const Bootcamp = require('./models/Bootcamp')

// connect to db
mongoose.connect(process.env.MONGO_URI)

// Read JSON files
const bootcamps = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
)

// import into db
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps)
        console.log('data imported...'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(error)
    }
}

// delete data
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany()
        console.log('data destroyed...'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(error)
    }
}

if (process.argv[2] === '-i') {
    importData()
} else if (process.argv[2] === '-d') {
    deleteData()
}