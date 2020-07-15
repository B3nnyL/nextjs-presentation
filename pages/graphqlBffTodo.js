import styles from './index.module.css'
// Server side generation
const ServerTodo = ({todo}) => (
    <main>
         <h1>This is a todo item from GraphQL BFF</h1>
         <ul>
            <li>{todo.title}</li>
         </ul>
    </main>
   
)

const todoQuery = `
    query {
        todo{
            title
        }
    }
  `

export async function getServerSideProps() {

    const res = await fetch('http://localhost:3000/api/graphql-bff', 
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: todoQuery
        })
    })
    const data = await res.json()

    const { todo } = data.data

    return { props: { todo } }
  }
  
  export default ServerTodo