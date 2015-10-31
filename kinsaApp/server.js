var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://kinsa:kinsa@ds045714.mongolab.com:45714/kinsaapp');

var Chat = require('../kinsaApp/models/chat.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

// Routes

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the api!' });   
});

router.route('/chat')
    .post(function(req, res) {
        
        var chat = new Chat();
        chat.username = req.body.username;
        chat.text = req.body.text;
        
        chat.save(function(err) {
            if (err)
                res.send(err);
            
            res.json({ message: 'Chat created!' });
        });
        
    })

    .get(function(req, res) {
        Chat.find(function(err, chat) {
            if (err)
                res.send(err);

            res.json(chat);
        });
    });

app.use('/api', router);

app.listen(port);
console.log('Listening to ' + port);