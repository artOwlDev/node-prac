const EventEmitter = require('events');
const uuid = require('uuid');

//generate random id
console.log(uuid.v4());


class Logger extends EventEmitter {
    log(msg) {

    }
}