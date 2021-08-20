const mes = require('../components/message/network');

const routes = function (server){
    server.use('/message', mes);
}

module.exports = routes;