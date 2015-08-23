Download MongoProcLinux users not using the Ubuntu 12.04 binaries need to have python 2.7 installed and the pymongo module installed. They can also choose to to point mongoProc to any 2.7 compatible python implementation (like PyPy) in user_settings by changing the python field.
Write a program that finds the document with the highest recorded temperature for each state, and adds a "month_high" field for that document, setting its value to true. Use the weather dataset that you imported in HW 2.1.

This is a sample document from the weather data collection:
> use weather
switched to db weather
> db.data.findOne()
{
    "_id" : ObjectId("520bea012ab230549e749cff"),
    "Day" : 1,
    "Time" : 54,
    "State" : "Vermont",
    "Airport" : "BTV",
    "Temperature" : 39,
    "Humidity" : 57,
    "Wind Speed" : 6,
    "Wind Direction" : 170,
    "Station Pressure" : 29.6,
    "Sea Level Pressure" : 150
}
Assuming this document has the highest "Temperature" for the "State" of "Vermont" in our collection, the document should look like this after you run your program:
db.data.findOne({ "_id" : ObjectId("520bea012ab230549e749cff") })
{
    "_id" : ObjectId("520bea012ab230549e749cff"),
    "Day" : 1,
    "Time" : 54,
    "State" : "Vermont",
    "Airport" : "BTV",
    "Temperature" : 39,
    "Humidity" : 57,
    "Wind Speed" : 6,
    "Wind Direction" : 170,
    "Station Pressure" : 29.6,
    "Sea Level Pressure" : 150,
    "month_high" : true
}
Note that this is only an example and not the actual document that you would be updating. Note also that our collection only has one month of data for each "State", which is why we are asking you to set "month_high".

Hint: If you select all the weather documents, you can sort first by state, then by temperature. Then you can iterate through the documents and know that whenever the state changes you have reached the highest temperature for that state.

From the top of this page, there was one additional program that should have been downloaded: mongoProc.

With it, you can test your code and look at the Feedback section. When it says "Correct amount of data documents.", "Correct amount of month_high documents." and "Correct month_high documents.", you can Turn in your assignment.

You will see a message below about your number of submissions, but you must submit this assignment using MongoProc.
