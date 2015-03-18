var elasticsearch = require('elasticsearch');

var client = elasticsearch.Client({
  hosts: [
    'YOUR_ELASTICSEARCH_URL'
  ]
});

module.exports.search = function(searchData, callback) {
  client.search({
    index: 'YOUR_INDEX_NAME',
    type: 'url',
    body: {
      query: {
        bool: {
          must: {
            match: {
              "description": searchData.searchTerm
            }
          }
        }
      }
    }
  }).then(function (resp) {
    callback(resp.hits.hits);
  }, function (err) {
      callback(err.message)
      console.log(err.message);
  });
}
