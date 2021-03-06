const store = require('./store');

function addMessege(user, message){
   return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage);
        resolve(fullMessage);
   });
}

function getMesseges(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addMessege,
    getMesseges
};