const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    controller.getMesseges()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((error) => {
            response.error(req, res, 'Unexpected Error', 500, error);
        })

});
router.post('/', (req, res) => {
    controller.addMessege(req.body.user, req.body.message)
        .then(( fullMessage) => {
            response.success(req, res, fullMessage , 201);
        })
        .catch(err => {
            response.error(req, res, 'Informacion invalida', 400, "Error para lograrlo");
        });

});

module.exports = router;