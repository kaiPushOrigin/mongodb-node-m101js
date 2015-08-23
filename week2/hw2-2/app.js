var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var query = {};
    var projection = { "State": 1, "Temperature": 1 };

    var cursor = db.collection('data').find(query, projection);

    //sort the entries first
    cursor.sort( { 'State': 1, 'Temperature': -1 } );

    var operator = { '$set': { 'month_high': true } };

    var state = {};

    cursor.each(function(err, doc) {
        if(err) throw err;

        if(doc==null) {
            return db.close();
        }

        //the first entry of each state will always have the highest temperature (see cursor.sort())
        else if(doc.State !== state) {
            state = doc.State;
            db.collection('data').update( { '_id': doc._id }, operator, function(err, updated) {
                if(err) throw err;
            });
        }

    });
});
