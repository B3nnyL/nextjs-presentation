
import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
type Query {
    todo: Todo
}
type Todo {
    title: String
}
`

const resolvers = {
    Query: {
        async todo(parent, args, context) {
            const externalRes = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
            const externalResJson = await externalRes.json()
            const alteredTitle = `${externalResJson.title} using next.js`
            return { title: alteredTitle }
        }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

//let apollo server handle parse
export const config = {
    api: {
        bodyParser: false
    }
}

export default apolloServer.createHandler({ path: '/api/graphql-bff' })