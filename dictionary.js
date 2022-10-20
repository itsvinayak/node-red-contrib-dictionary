var objectPath = require('object-path');

module.exports = function (RED) {
    function dictionaryFunction(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function (msg, send, done) {
            let data = {};
            if (config.listVals && config.listVals.length > 0) {
                config.listVals.forEach((val) => {
                    let key = val.key;
                    let value = objectPath.get(msg, val.path);
                    objectPath.set(data, key, value);
                });
                send(data);
                done();
            }
        });
    }
    RED.nodes.registerType('dictionary', dictionaryFunction);
};
