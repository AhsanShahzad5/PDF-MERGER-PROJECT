// i have not written the one with modules. if needed see from harry playlist

const express = require('express')
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const {mergePdfs} = require('./merge.js');
const app = express()
app.use('/static', express.static('public'))
const port = 3000


app.get('/', (req, res) => {
//  res.send('Hello World!!!')
res.sendFile(path.join(__dirname , "templates/index.html"));
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
    let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    // res.send({data : req.files});
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})