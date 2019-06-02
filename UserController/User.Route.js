var Express = require('express');
var router = Express.Router();
var Controller = require('./Controller')

router.get('/',function (req,res) {
    Controller.getAll().then(function (data) {
        res.status(data.status).send({data:data.Userdata})
    });
});

router.get('/:id',function (req,res) {
    Controller.getuser(req.params.id).then(function (data) {
        res.status(data.status).send({data:data.userSearched});
    });
});

router.post('/',function(req,res){
    Controller.insertUser(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    });
});

router.put('/:id',function (req,res) {
    Controller.updateUser(req.params.id,req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    });
});

router.delete('/:id', function (req,res) {
    Controller.remove(req.params.id).then(function (data) {
        res.status(data.status).send({message: data.message});
    });
});

module.exports = router;