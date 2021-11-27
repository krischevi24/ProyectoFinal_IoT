const express = require('express');
const body_parser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(body_parser.urlencoded({extended:true}));
const PORT = 4000;
// var formulario = '<form method="post" action="/">'
//     + '<label for="Instruccion">Contraseña: </label>'
//     + '<input type="password" name="password" id="password">'    
//     + '<input type="submit" value="Enviar"/>'
//     + '</form>';
 
// var cabecera = '<h1>Inicio</h1>';
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/formulario.html");
    // res.send('<html><body>'
    //         + cabecera
    //         + formulario
    //         + '</html></body>'
    // );
 
});

app.post('/', function (req, res) {
 
  var pass = req.body.password || '';

  if (pass == '5678'){
    res.sendFile(__dirname + "/interfaz.html");
  }
  else{
    res.sendFile(__dirname + "/error.html");
  }
});
app.post('/uno', function (req, res) {
  fs.writeFile('status.txt', 'uno', function (err) {
    if (err) throw err;
    console.log('Cambiado!');
  });
  res.sendFile(__dirname + "/interfaz.html");
  res.sendFile(__dirname + "/interfaz.html");
});
app.post('/cero', function (req, res) {
  fs.writeFile('status.txt', 'cero', function (err) {
    if (err) throw err;
    console.log('Cambiado!');
  });
  res.sendFile(__dirname + "/interfaz.html");
  res.sendFile(__dirname + "/interfaz.html");
});
app.get('/respuesta', function (req, res) {
  var valor = 'inicial';
  fs.readFile('status.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      res.end(data);
    }
  });
  
  //res.end(valor);
  console.log('hola');
});
// app.get("/", inicio);

// function inicio (peticion, resultado)
// {
//    resultado.sendFile(__dirname + "/index.html");
// }


app.listen(PORT, () =>
  console.log(`Server listening on port: ${PORT}`),
);

// const {createReadStream} = require('fs')
// const {createServer} = require('http')

// var mensaje = '25'
// // configuramos con una variable de entorno el puerto
// const port = process.env.PORT || 3000

// // creamos con el content type del archivo que vamos a servir
// const HTML_CONTENT_TYPE = 'text/html'
// const TEXT_CONTENT_TYPE = 'text/plain'

// // creamos un requestListener para pasarle a nuestro servidor
// const requestListener = (req, res) => {
//   // escribimos en la respuesta el status code de 200 y el content type que necesitamos
//   res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
//   // leemos el fichero index.html y su contenido lo redirigimos a la respuesta
//   createReadStream('index.html').pipe(res)
//   //res.end(mensaje);
// }

// // creamos un servidor con el requestListener
// const server = createServer(requestListener)

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`)
// })

// // var http=require('http')
// // var server=http.createServer((function(request,response)
// // {
// // 	response.writeHead(200,
// // 	{"Content-Type" : "text/plain"});
// // 	response.end("Otra mamada\n");
// // }));
// // server.listen(3000);