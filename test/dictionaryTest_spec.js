let helper = require("node-red-node-test-helper");
let dictionary = require("../dictionary");

helper.init(require.resolve('node-red'));

describe('dictionary Node', function () {
    beforeEach(function (done) {
        helper.startServer(done);
    });

    afterEach(function (done) {
        helper.unload();
        helper.stopServer(done);
    });

    it('should be loaded', function (done) {
        let flow = [{ id: "dictionary1", type: "dictionary", name: "dictionary" }];
        helper.load(dictionary, flow, function () {
            let n1 = helper.getNode("dictionary1");
            n1.should.have.property('name', 'dictionary');
            done();
        });
    });
});
