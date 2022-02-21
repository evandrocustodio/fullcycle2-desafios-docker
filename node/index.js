const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password:'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const dropSQL = `DROP TABLE IF EXISTS peoples;`
connection.query(dropSQL);

const startSQL = `CREATE TABLE peoples (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`
connection.query(startSQL);

const insert = `INSERT into peoples(name) values ('Evandro Custodio')`;
connection.query(insert);
const insert2 = `INSERT into peoples(name) values ('Joana Maria')`;
connection.query(insert2);
connection.end();

app.use(bodyParser.urlencoded({ extended: true }));

 app.get('/', async (req, res) => {
    const connection = mysql.createConnection(config);
    connection.query("SELECT name FROM peoples", function (err, result, fields) {
    if (err) throw err;
    let listagem = "";
    for (let index = 0; index < result.length; index++) {
        const element = result[index].name;      
        listagem = listagem+"<BR>"+ element;
    }
    return res.send('<h1>Full Cycle</h1><br><br>LISTAGEM DE PESSOAS:<BR><BR><strong>Nome</strong>'+listagem);
  });
}) 

app.listen(port, () => {
    console.log("Executando NodeApp na porta" + port)
})