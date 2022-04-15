var http = require('http');
var express=require('express');
var app=express();
var mongo=require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";  //create new database
var url1 = "mongodb://localhost:27017/";    // conect to database



app.use(function(req,res){
    MongoClient.connect(url1, function(err, db) {
        if (err) throw err;
        var dbo=db.db('mydb');
        var myobj = { name: "arfa creame international", address: "lahore"};
        var myobjs =[
            { name: "emamba", address: "lahore"},
            { name: 'Hannah', address: 'Mountain 21'},
            { name: 'Michael', address: 'Valley 345'},
            { name: 'Sandy', address: 'Ocean blvd 2'},
            { name: 'Betty', address: 'Green Grass 1'},
            { name: 'Richard', address: 'Sky st 331'},
            { name: 'Susan', address: 'One way 98'},
            { name: 'Vicky', address: 'Yellow Garden 2'},
            { name: 'Ben', address: 'Park Lane 38'},
            { name: 'William', address: 'Central st 954'},
            { name: 'Chuck', address: 'Main Road 989'},
        ]
        // dbo.createCollection('customers',function(err,data){ // create collection
        // dbo.collection('customers').insertMany(myobjs,function(err,data){
            // dbo.collection("customers").findOne({}, function(err, data){
                var query = { address: /^S/ };
                var del_query = { address: /^M/ };   

            // dbo.collection("customers").find(query,{ projection: {name:1,address:1} }).toArray((err, data)=>{
        // dbo.collection("customers").find({},{ projection: {name:1,address:1} }).sort({name:-1}).toArray((err, data)=>{
            // dbo.collection("customers").deleteOne(del_query, function(err, data) {

            var myquery = { address: "lahore" };
            var newvalues = { $set: {name: "emumba", address: "Capital" } };
            // dbo.collection("customers").updateOne(myquery, newvalues, function(err, data) {
                dbo.collection("customers-id").drop();
                dbo.collection("customers").find().toArray((err, data)=>{
                    if(err) throw err;
                    res.json(data);
                    console.log(data);
                    db.close();

                })
           

        // })
      })
    })
  
app.listen(8080); 