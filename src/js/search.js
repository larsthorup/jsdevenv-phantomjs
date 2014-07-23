var page = require('webpage').create();
page.open('http://www.zealake.com/', function (status) {
    if (status === 'fail') {
        console.log('failed');
    } else {
        var data = page.evaluate(function () {
            return document.querySelector('h1').innerHTML;
        });
        console.log(data);
    }
    page.close();
    phantom.exit();
});