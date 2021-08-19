const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/DigyKing-userinfo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Connection is successful");
}).catch((error) => {
    console.log("there is a error", error);
})