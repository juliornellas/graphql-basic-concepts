import { ApolloServer, gql } from "apollo-server";

//Simulation database
const users = [
  {
    name: "Tiradentes",
    email: "tiradentes@gmail.com",
    status: true,
  },
  {
    name: "Saci",
    email: "saci@perere.com",
    status: true,
  },
];

//Schema Definition Type for Models and Queries
const typeDefs = gql`
  type User {
    name: String!
    email: String!
    status: Boolean!
  }

  type Query {
    users: [User]
    user: User
  }
`;

//Resolvers is the responsable to execute/to resolve the queries defined in the typeDefs
const resolvers = {
  Query: {
    users: () => users, //Array of users created above
    user: (_, { name }) => users.find((user) => user.name === name),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
