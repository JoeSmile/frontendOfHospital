import _ from 'underscore';
import {EventEmitter} from 'events';

module.exports = _.extend({}, EventEmitter.prototype,{
    routerTo(dist){
        location.href = `#/${dist}`
    }
})