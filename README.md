# Graphcool-local

Example basic graphql with mongo-graphql-starter

## Run project
First check the package.json to verify the engines support

```sh
> yarn
> npm start
```

Open in your browser: http://localhost:3000/graphql and test with:

#### Graqhqli demo
```gql
mutation createUser {
  createUser (User: {name: "Demo", email:"demo@gmail.com"}) {
    _id
  }
}

mutation updateUser {
  updateUser (_id: "59f74f0f8142f76cc1503c6c", User: {email: "kenykalin@gmail.com"}) {
    _id
  }
}

mutation deleteUser {
  deleteUser (_id: "59f74fc78142f76cc1503c6e")
}

query getUsers {
  allUsers{
    _id
    name
    email
  }
}

mutation createTag {
  createTag (Tag: {name: "graph.cool"}) {
    _id
  }
}

query getTags {
  allTags {
    _id
    name
  }
}

mutation createPost {
  createPost (Post: {title: "Create post test", content: "create post test description"}) {
    _id
  }
}

query getPosts {
  allPosts {
    _id
    title
    content
  }
}

query getPost {
  getPost (_id: "59f74c2a5c7b73000776cbc7") {
    _id
    title
    content
  }
}

mutation createComment {
  createComment (Comment: {text: "Create comment test", author: {_id: "59f74f0f8142f76cc1503c6c"}}) {
    _id
  }
}

query getComments {
  allComments {
    _id
    text
    author{
      _id
      name
    }
  }
}
```

### Screenshot

![Screenshot](https://raw.githubusercontent.com/kenyk7/graphcool-local/master/screenshot.png "Screenshot")
