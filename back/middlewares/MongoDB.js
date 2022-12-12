const mongoose = require('mongoose') //db
mongoose.connect('mongodb+srv://aparnasj:aparnasj15@cluster0.fpnhbfk.mongodb.net/mainproject?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})