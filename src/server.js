const express = require("express")
const app = express()
const { pageGiveClasses, pageLanding, pageStudy, saveClasses } = require('./pages')

const nunjucks = require("nunjucks")

//config nunjucks:
nunjucks.configure('src/views', {
        express: app,
        noCache: true
    })
    //receber formulário pelo corpo da pagina(req.body)
app.use(express.urlencoded({ extended: true }))
    //config static files
app.use(express.static("public"))

//aplications rotes
app.get("/", pageLanding)

app.get("/study", pageStudy)

app.get("/give-classes", pageGiveClasses)

app.post("/save-classes", saveClasses)

app.listen(5500)