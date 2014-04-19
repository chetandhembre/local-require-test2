/**
 * Created by ichetandhembre on 20/4/14.
 */
var lr = require('local-require-test');
lr.test();
var lrequire =  require('local-require');
lrequire.registerSync({
    namespace : 'demo',
    basedir : __dirname,
    config : {
        "1" : "./test/1.js"
    }
});

require('demo/1').test();
require('demo1/2');