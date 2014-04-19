/**
 * Created by ichetandhembre on 20/4/14.
 */
var lrequire = require('local-require');

exports.test = function() {
    lrequire.registerSync({
        namespace : 'demo1',
        basedir: __dirname,
        config : {
            "2" : "../test2/2.js"
        }
    });
};
