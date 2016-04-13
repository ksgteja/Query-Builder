

# QueryBuilder

## Pre requisites
1. Node.js [click here](https://nodejs.org/en/)
2. MySQL   [click here](http://www.mysql.com/downloads/)

## Usage

### DB Setup
1. Once MySQL is installed, create database with name querybuilder
   -                           **create database querybuilder**
2. Find SQL Scripts folder and click on querybuilder.sql which will import tables
3. You can change connection string of db for application in routes -> connections.js file

### Application Setup
1. Download to local
2. Open command prompt and navigate to folder containing package.json and type 
    -                    **npm install** ( This will create all the dependencies required for project)
3. Open command prompt and navigate to folder containing app.js and type
   -                       **node app.js**     
4. Now application will be running on localhost:3000


## Developing

Application was built using below frameworks
- Angular.js 
- Node.js
- MySQL
- Grid UI
- Bootstrap
- Express.js

##Screenshots
*Main Screen*
![alt tag](https://github.com/ksgteja/Query-Builder/blob/master/Images/mainpage.jpg)
*Selecting columns to display*
![alt tag](https://github.com/ksgteja/Query-Builder/blob/master/Images/selection_test2.JPG)
*Adding Conditions*
![alt tag](https://github.com/ksgteja/Query-Builder/blob/master/Images/WhereClause_test3.JPG)
*Type and null Handling*
![alt tag](https://github.com/ksgteja/Query-Builder/blob/master/Images/invalid_testcase5.JPG)

### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
