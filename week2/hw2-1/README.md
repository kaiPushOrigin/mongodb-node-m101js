<h2>HOMEWORK: HOMEWORK 2.1</h2>

<h3>QUESTION: </h3>

In this problem, you will be using an old weather dataset. Download weather_data.csv from the Download Handout link. This is a comma separated value file that you can import into MongoDB as follows:

mongoimport --type csv --headerline weather_data.csv -d weather -c data

You can verify that you've imported the data correctly by running the following commands in the mongo shell:

> use weather
> db.data.find().count()
> 2963

Reading clockwise from true north, the wind direction is measured by degrees around the compass up to 360 degrees.

90 is East

180 is South

270 is West

360 is North

Your assignment is to figure out the "State" that recorded the lowest "Temperature" when the wind was coming from the west ("Wind Direction" between 180 and 360). Please enter the name of the state that meets this requirement. Do not include the surrounding quotes in providing your answer.

<h3>ANSWER: </h3>

New Mexico

![alt tag](https://github.com/kashifkai28/mongoDB-nodeJS-courseM101JS/blob/master/week2/hw2-1/answer.PNG)
