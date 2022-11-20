import { createServer } from "@graphql-yoga/node";

const typeDefs = /* GraphQL */ `
  type Event {
    id: ID!
    title: String!
    start: Int!
    end: Int!
  }

  type Query {
    events: [Event!]!
  }
`;

const resolvers = {
  Query: {
    async events() {
      return [
        {
          id: 1,
          title: "Call with Bob",
          start: 400,
          end: 460,
        },
        {
          id: 2,
          title: "Lunch",
          start: 720,
          end: 780,
        },
        {
          id: 3,
          title: "Meeting with Claire",
          start: 780,
          end: 840,
        },
        {
          id: 4,
          title: "Review OKRs",
          start: 870,
          end: 900,
        },
        {
          id: 5,
          title: "Interview Ahmed",
          start: 870,
          end: 930,
        },
        {
          id: 7,
          title: "Interview Vejsil",
          start: 870,
          end: 1000,
        },
        {
          id: 71,
          title: "Interview Someone",
          start: 850,
          end: 1000,
        },
        {
          id: 9,
          title: "Test 2",
          start: 1150,
          end: 1200,
        },
        {
          id: 8,
          title: "Test 1",
          start: 1070,
          end: 1170,
        },
        {
          id: 10,
          title: "Test 3",
          start: 1300,
          end: 1400,
        },
      ];
    },
  },
};

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: "/api/graphql",
  // graphiql: false // uncomment to disable GraphiQL
});

export default server;
