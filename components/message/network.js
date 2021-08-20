const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    response.success(req, res, 'lista de mensajes', 200);
});
router.post('/', (req, res) => {
    controller.addMessege(body.user, body.message);
    if(req.query.error == 'ok'){
        response.error(req, res, 'Error simulado', 500, "Error simulado");
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
});

module.exports = router;