
export default async (req, res) => {
    const externalRes = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    const externalResJson = await externalRes.json()
    console.log(externalResJson)
    //log in terminal (server)
    const alteredTitle = `${externalResJson.title} using next.js`

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ title: alteredTitle, completed: externalResJson.completed }))
}