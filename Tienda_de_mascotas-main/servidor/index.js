const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.listen(3006, ()=>{
    console.log('El servidor esta encendido')
})

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'administracion'
})

app.get('/', (req, res)=>{
    db.query('select * from productos WHERE categoria = "Perros"',
    (err,result)=>{
        if(err)console.log(err)
        else{
            res.send(result)
            console.log("Metodo GET", result)
        }
    })
})

app.get('/Gatos', (req, res)=>{
    db.query('select * from productos WHERE categoria = "Gatos"',
    (err,result)=>{
        if(err)console.log(err)
        else{
            res.send(result)
            console.log("Metodo GET", result)
        }
    })
})

app.get('/Varios', (req, res)=>{
    db.query('select * from productos WHERE categoria = "Varios"',
    (err,result)=>{
        if(err)console.log(err)
        else{
            res.send(result)
            console.log("Metodo GET", result)
        }
    })
})

app.post('/crear', (req,res)=>{
    const ID = req.body.ID;
    const Cantidad = req.body.Cantidad;
    const  Precio = req.body.Precio;
    const imagen =req.body.imagen;
    const Nombre =req.body.Nombre;
    const Marca =req.body.Marca;
    const Categoria =req.body.Categoria
    
    db.query('INSERT INTO productos VALUES (?,?,?,?,?,?,? )',[ID, Cantidad, Precio, imagen,Nombre,Marca,Categoria]),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El producto se a registro")
            console.log("El producto se a registro", result)
        }
    }
})

app.put('/edit',(req,res)=>{
    const ID = req.body.ID;
    const Cantidad = req.body.Cantidad;
    const  Precio = req.body.Precio;
    const imagen =req.body.imagen;
    const Nombre =req.body.Nombre;
    const Marca =req.body.Marca;
    const Categoria =req.body.Categoria

    db.query('UPDATE productos SET Cantidad=?,Precio=?,imagen=?,Nombre=?,Marca=?,Categoria=? WHERE ID=?',[ID, Cantidad, Precio, imagen,Nombre,Marca,Categoria]),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("El producto se a actualizo",result)
            console.log("El producto se a actualizo", result)
        }
    }
})

app.delete('/delete/:ID',(req,res)=>{
    const ID = req.body.ID;

    db.query('DELETE FROM productos WHERE ID=?',ID),
    (err, result)=>{
        if(err)console.log(err)
        else{
            res.send("Eliminar",result)
            console.log("El producto se a sido elimino", result)
        }
    }
})