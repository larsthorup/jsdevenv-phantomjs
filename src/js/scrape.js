function scrape(url, selector, callback) {
    var page = require('webpage').create();
    page.open(url, function (status) {
        if (status === 'fail') {
            callback(null, 'request failed');
        } else {
            var data = page.evaluate(function (selector) {
                return document.querySelector(selector).innerHTML;
            }, selector);
            callback(data);
        }
        page.close();
    });
}

module.exports = {
    scrape: scrape
};