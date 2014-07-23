var scrape = require('../js/scrape');

scrape.scrape('http://www.zealake.com/', 'h1', function (text, err) {
    console.log(text);
    phantom.exit();
});
