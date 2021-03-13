import express from 'express'
import user_route from './routes/user.route.js'
import bodyParser from 'body-parser'
// import swaggerUi from 'swagger-ui-express'
// import swaggerDocument from './swagger-document'
const app = express();
const PORT = 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

// app.use('/api/v1/users', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/users', user_route)

app.listen(PORT,() => {
    console.log(`server Start at port ${PORT}`)
})