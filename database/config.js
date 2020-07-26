const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await  mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex:true
    });

    console.log("db on line"); 
    } catch (error) {
        console.log(error)
        throw new Error('error la conectar con la base de datos')
    }

}

module.exports = {
    dbConnection
}