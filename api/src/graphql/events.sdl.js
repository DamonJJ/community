export const schema = gql`
  type Event {
    id: Int!
    title: String!
    dietaryPreference: String!
    createdAt: DateTime!
  }

  type Query {
    events: [Event!]! @skipAuth
    event(id: Int!): Event @skipAuth
  }

  input CreateEventInput {
    title: String!
    dietaryPreference: String!
  }

  input UpdateEventInput {
    title: String
    dietaryPreference: String
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: Int!): Event! @requireAuth
  }
`
