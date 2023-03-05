const express = require('express')
const app = express()
app.get("/api", (req, res) => {
    res.json({"users":["userOne","userTwo", "userThree"]})
})

const { spawn } = require('child_process')

const childPython = spawn('python', ['C:/Users/HARITHA/Sree/FOSS Hackathon 2023/foss-project/ML/hello.py'])

childPython.stdout.on('data', (data) => {
    console.log(`Pipe data from python script ... ${data}`)
  })

childPython.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

childPython.on('close', (code) => {
    console.log(`child process exited with code: ${code}`);
});

app.listen(5000, ()=>{console.log("Server is running on port 5000")})
