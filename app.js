const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//middleware
app.use((req, res, next) => {
    console.log('New request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

app.use((req, res, next) => {
    console.log('In the next middleware');
    next();
});

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit emet consectetur'},
        {title: 'Mario finds starts', snippet: 'Lorem ipsum dolor sit emet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit emet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// handler function
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});


