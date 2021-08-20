const list = [];

function addMessege(message){
    list.push(message);
}

function getMessege(){
    return list;
}

module.exports = {
    add: addMessege,
    list: getMessege
}