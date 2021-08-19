const express = require("express");
const app = express();
const path = require('path');
const port = 80;
const hostname = '127.0.0.1';
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let nodemailer = require('nodemailer');
const hbs = require('hbs');
require('./db/conection');
const user_schema = require('./models/contact-us')
const serviceRouter = require('./routers/services');
const blogsRouter = require('./routers/blogs');


const static_path = path.join(__dirname, '../public')
const templates_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials')


app.use(express.static(static_path));



app.use('/services', serviceRouter)

app.use('/blogs', blogsRouter)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", templates_path);

hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.status(200).render("home")
});


app.use(bodyParser.json())

app.post("/contact-us", async(req, res) => {
    try {
        // USER DATA IS STORED IN THE DATABASE
        let information = req.body;
        const submitted = await user_schema.create(information);


        // THANKING EMAIL TO USER WHO JUST SIGNED IN  

        let email = req.body.email;
        let name = req.body.name;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'devsingal2000@gmail.com',
                pass: 'ychanvzyolusfwle'
            }
        });

        let mailOptions = {
            from: 'devsingal2000@gmail.com',
            to: `${email}`,
            subject: 'Thank You for contacting our company',
            text: `Hello ${name},
            Thank You for contacting our company we will help you grow your business with the help of digital marketing. We will give frist month for free!!
            `
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent to : ' + email + info.response);
            }
        });

        res.status(201).render('home');
    } catch (err) {
        console.log(err);
    }


});

app.listen(port, hostname, () => {
    console.log(`server is running at ${port}`);
});