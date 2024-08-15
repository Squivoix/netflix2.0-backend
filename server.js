const API_KEY = "264bb09ec4d858065cfb8860838a32ff"
const DNS = "https://api.themoviedb.org/3"

const express = require('express')
app = express()
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {  
    let data = getData("/discover/tv?api_key="+API_KEY+"&with_genres=99");

    res.send(data);
})

const getData = async (path) => {
    try{
        
        let URI = DNS + path
        let result = await fetch(URI)

        return result.json()

    } catch (error){
        console.log(error)
    }
}

app.listen(8080)
