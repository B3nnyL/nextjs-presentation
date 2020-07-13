import styles from './index.module.css'

// Static generation
// HTML generate on build time
const StaticTodo = ({data}) => (
    <main>
        <h1>This is a static generated todo item</h1>
        <ul>
            <li>
                {data.title}
            </li>
        </ul>
    </main>
)


export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await res.json()
  
    return { props: { data } }
  }
  
  export default StaticTodo