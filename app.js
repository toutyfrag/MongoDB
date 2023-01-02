//Collection is the equivalent of a table
//Document is the equivalent of a row


const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { MongoClient} = require("mongodb");
// Replace the uri string with your connection string.

async function main() {

  const uri = "mongodb+srv://Cluster90533:PASSWORD@cluster90533.ho4zumb.mongodb.net/?retryWrites=true&w=majority";
  
  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);

  }  catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }

}

main().catch(console.error);

async function listDatabases(client){
  const databaseslist = await client.db().admin().listDatabases();
  console.log("databases");
  databaseslist.databases.forEach(db => {
    console.log(db.name)
  })
}

