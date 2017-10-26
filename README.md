# Graphcool-local

Example basic graphql with mongo-graphql-starter

## Run project

```sh
> yarn
> npm start
```

Open in your browser: http://localhost:3000/graphql and test with:

#### Graqhqli demo
```gql
mutation createBook{
  createBook (Book: {title: "Create title book graphql rand"}) {
    _id
    title
  }
}

mutation updateBook ($id: String!) {
  updateBook (
    _id: $id,
    Book: {title: "Update title book"}
  ) {
    _id
    title
  }
}

mutation deleteBook ($id: String!) {
  deleteBook (_id: $id)
}

query books{
  allBooks{
    _id
    title
  }
}

query booksFilter{
  allBooks (title_contains: "graphql") {
    _id
    title
  }
}
```
#### Query variables demo

```gql
{
  "id": "59f24f2aa632da172d45bb77"
}
```
### Screenshot

![Screenshot](https://raw.githubusercontent.com/kenyk7/graphcool-local/master/screenshot.png "Screenshot")
