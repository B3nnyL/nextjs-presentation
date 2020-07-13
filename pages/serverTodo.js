import styles from './index.module.css'
// Server side generation
const ServerTodo = ({data}) => (
    <main>
         <h1>This is a server side generated todo item</h1>
         <ul>
            <li>{data.title}</li>
         </ul>
    </main>
   
)

export async function getServerSideProps() {

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await res.json()
  
    return { props: { data } }
  }
  
  export default ServerTodo