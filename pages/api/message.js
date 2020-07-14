export default (req, res) => {
    //req stands for incoming call
    //res stands for server response
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'next.js is brilliant' }))
}