var mongoose = require('mongoose')
var url = process.env.MONGODB_URL || process.env.MONGOLAB_URI || 'mongodb://0.0.0.0/social'
mongoose.connect(url, function () {
  console.log('mongodb connected')
})


module.exports = mongoose




//'mongodb://http://node-js-117893.nitrousapp.com:0.0.0.0/social'
