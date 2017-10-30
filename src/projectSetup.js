import { dataTypes } from "mongo-graphql-starter";
const {
  MongoIdType,
  StringType,
  IntType,
  FloatType,
  DateType,
  arrayOf,
  objectOf,
  formattedDate,
  typeLiteral
} = dataTypes;


const User = {
  table: "users",
  fields: {
    _id: MongoIdType,
    name: StringType,
    email: StringType,
    birthday: DateType
  }
};

const Tag = {
  table: "tags",
  fields: {
    _id: MongoIdType,
    name: StringType
  }
};

const Post = {
  table: "posts",
  fields: {
    _id: MongoIdType,
    title: StringType,
    content: StringType,
    author: objectOf(User),
    tags: arrayOf(Tag),
    likedPosts: arrayOf(User)
  }
};

const Comment = {
  table: "comments",
  fields: {
    _id: MongoIdType,
    text: StringType,
    upVotes: IntType,
    downVotes: IntType,
    author: objectOf(User),
    post: objectOf(User)
  }
};

User.fields.likes = arrayOf(Post);
User.fields.posts = arrayOf(Post);
Tag.fields.posts = arrayOf(Post);
Post.fields.comments = arrayOf(Comment);

export default {
  User,
  Tag,
  Post,
  Comment
};
