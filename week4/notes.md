STORAGE ENGINES: INTRODUCTION

MongoDB 3.0 offers pluggable storage engines.

What is a storage Engine?
The interface between the persistence storage(disk) and the database itself(mongodb)

Node.js Program --> Mongo Server --> Storage Engine --> Disk ()

All the documents, indexes, metadata are all written to the persistence storage (disk) by the storage engine.

The storage engine can decide to use memory to optimize the process. SInce the disk is really slow, the storage engine has the
control of your computer's memory. It can decide what to put and take out of the memory.

Depending on the engine you are gonna put into your MongoDB, you would get different performance characteristics

- Disks are really slow
- Storage Engines have the control of your memory

- Two types of Storage Engines supported by MongoDB
1. MMAP (default)
2. WiredTiger

The Data Engine directly determines:
- The data file format
- Format of indexes


STORAGE ENGINE: MMAP V1

- Allocates memory, or map files or devices into memory
Features:
1. Collection Level Locking:
Each collection inside MongoDB is its own file (look into data/db). If you have two operations going on at the same time in
the same collection, one has to wait for the other to finish. But if there are different collections, it can happen simultaneously.




2. In place updates
3. Power of two sizes: if we try to create a 3 byte documet, you’re going to get 4 byte. In this way you can grow the document a little bit, and that space that opens up, we can re-use it.



WIRED TIGER
To invoke a WiredTiger storage engine:
mongod --storageEngine wiredTiger
Features:
Document Level Concurrency: Lock free implementation which has an optimistic concurrency model where the storage engine assumes the two writes are not going to be to the same document, and if they are to the same documents, on of those writes has to try again.
Offers compression of data and indexes. Wired Tiger itself manages the memory that is used to access that file.
No inplace updates



INDEXING

(a, b, c)

Correct:		                 Incorrect:
a					c
a,b					c, b
a,b,c

CREATING INDEXES

Collection of 10 million documents
db.students.explain().find( { ‘student_id’: 5 } )
‘Explains’ the query
Would scan all the 10 million documents
Slow

db.students.explain().findOne( { ‘student_id’: 5 } )
Faster
Once it finds a single document it can quit looking


How to create an index?
db.students.createIndex( { ‘student_id’: 1 } ) :
We want it to be indexed on student_id ascending

creating index takes a while because we have to scan the entire collection, create new data structures and write them all to disk.

Now after creating this index, the query below becomes superfast
db.students.explain().find( { ‘student_id’: 5 } )  ---> before creating the index it was slow

Compound Index (multikey):
db.students.createIndex( { ‘student_id’: 1, ‘class_id’: -1 } ) :
We want it to be indexed on student_id ascending and class_id descending


DISCOVERING INDEXES
How would you know what indexes are already in the collection

db.students.getIndexes();

DELETING AN INDEX

db.students.dropIndex( { ‘student_id’: 1 } )


MULTIKEY INDEXES: creating indexes on arrays

{
	“name”: “Andrew”,
	“tags”: [‘philosophy’, ‘hiking’, ‘golf’],
	“color”: “red”,
	“location”: [ “NY”, “California”]
}

Restriction:
You can’t have compound index where both of them are arrays. Only one can be an array.

Indexes:
(right):  (tags), (tags, color)
(wrong): (tags, location) → both are arrays




when you first create an index, and if there is nothing in the collection, MongoDB doesnt know that there may be an array in the future. An index only becomes a multikey when the first document gets added has a value for one of the keys an the array


$elemMatch: matches the document that contains the array field. with atleast one document that matches all the specified query criteria. Useful for sub-part.
If sub-part are related don;t use $and operator, use $elemMatch instead


UNIQUE INDEXES:
db.things.createIndex( { ‘things’: 1}, { ‘unique’: true} )

Note: justOne operator
db.stuff.remove( { ‘thing’: ‘apple’ }, { ‘justOne’: true } )


SPARSE INDEXES:
Indexes that can be used when the index key is missing from some of the documents
 Sparse Indexes tell db server that it should not include index documents that are missing the key

db.employees.createIndex( { ‘cell’: 1}, { ‘unique’: true, ‘sparse’: true } );

Advantages of sparse Index:
You can gain greater flexibility with creating Unique indexes.
The index will be smaller than it would if it were not sparse.
