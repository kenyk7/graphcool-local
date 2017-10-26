import { MongoClient } from "mongodb";
import expressGraphql from "express-graphql";
import resolvers from "../dist/graphQL/resolver";
import schema from "../dist/graphQL/schema";
import { makeExecutableSchema } from "graphql-tools";
import express from "express";

const app = express(),
  port = 3000,
  dbPromise = MongoClient.connect("mongodb://kenyk7:mlabkenyk7@ds147711.mlab.com:47711/kenyk7"),
  root = {
    db: dbPromise
  },
  executableSchema = makeExecutableSchema({ typeDefs: schema, resolvers });

app.use(
  "/graphql",
  expressGraphql({
    schema: executableSchema,
    graphiql: true,
    rootValue: root
  })
);
app.listen(port, function () {
  console.log('Server starting port:' + port);
});
