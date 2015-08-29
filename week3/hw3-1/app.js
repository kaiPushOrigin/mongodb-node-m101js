var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(error, db) {
    if(error) throw error;

    var cursor = db.collection('students').find({});
    cursor.each(function(err, doc) {
        if(err) {
            throw err;
        }

        if(doc == null) {
            return db.close();
        }
        var min = Number.MAX_VALUE;
        var index = 0;
        for(var j = 0; j < doc.scores.length; j++) {
            if(doc.scores[j].type == 'homework') {
                if(doc.scores[j].score < min) {
                    min = doc.scores[j].score;
                    index = j;  // get the index for the lowest score
                }
            }
        }
        doc.scores.splice(index, 1);  //remove the lowest score item in the array

        db.collection('students').save(doc, function(err, saved) {
            if(err) throw err;
            console.log("Document has been saved!");
        });

        // console.log("Name = " + doc.name + " ID = " + doc._id + ". Lowest score " + min);
    });
});
