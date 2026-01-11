var express = require('express');
var router = express.Router();
const path = require('path');
const todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
    {
        "userId": 1,
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
    },
    {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
    },
    {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
    },
    {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true
    },
    {
        "userId": 1,
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true
    }
];
router.get('/', function(req, res, next) {
    console.log('first handler');
    //res.send('Hello from demo router');
    next();
});
router.get('/', function(req, res, next) {
    console.log('second handler ',req.time);
    //res.send('Output from second handler from demo router');
    res.json(todos);
});
router.post('/', function(req, res, next) {
    let body = req.body;
    console.log('Savedemo body ',body);
    res.status(201).json(body);
})
router.get('/hello', function(req, res, next) {
    res.send('hello route')
})
router.get('/download',function(req, res, next) {
    res.download('./public/hello.txt');
})
router.get('/sendFile',function(req, res, next) {
    const options = {
        root: path.join(__dirname,'../', 'public'),
        //dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    //const fileName = 'hello.txt'
    console.log('query ',req.query);
    //const fileName = req.params.name;
    const fileName = req.query.name;
    res.sendFile(fileName, options, (err) => {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})
router.get('/end',function(req, res, next) {
    res.send('hello end');
    res.end();
})
router.get('/admin',function(req, res, next) {
    res.redirect('/demo/login');
})
router.get('/login',function(req, res, next) {
    res.send('login');
})
router.get('/secret',function(req, res, next) {
    console.log('secret handler');
    res.status(401).send('Access denied');
})
function getById(req, res, next) {
    console.log('Id ',req.params.id);
    res.json(todos.filter(todo=>todo.id == req.params.id)[0]);
}
router.get('/:id', getById);

router.get('/reg/ab?cd', function(req, res, next) {
    console.log('reg first handler');
    next();
    //res.send('ab?cd');
},function(req,res,next){
    console.log('reg second handler');
    res.send('handled by second ab?cd');
})
module.exports = router;