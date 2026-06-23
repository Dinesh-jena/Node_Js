//Topic:-01 --Accessing the Request URL
// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Get the URL and HTTP method
//   const { url, method } = req;

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(`You made a ${method} request to ${url}`);
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });


//Topic:-02 --Parsing URLs with the URL Module
// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//   // Parse the URL
//   const parsedUrl = url.parse(req.url, true);

//   // Get different parts of the URL
//   const pathname = parsedUrl.pathname; // The path without query string
//   const query = parsedUrl.query; // The query string as an object

//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     "Name":"Dinesh jena",
//     "Adddress":"Surat,Gujrat"
//   }, null, 2));
// });

// server.listen(3000);


//Task-03
// const http = require('http');
// const { URL } = require('url');

// let todos = [
//   { id: 1, task: 'Learn Node.js', completed: false },
//   { id: 2, task: 'Build an API', completed: false }
// ];


// const server = http.createServer((req,res) =>{
//   const {method,url} = req;
//   const parsedUrl = new URL(url,`http://${req.headers.host}`);
//   const pathname = parsedUrl.pathname;

//      // Set CORS headers (for development)
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   // Handle preflight requests
//   if (method === 'OPTIONS') {
//     res.writeHead(204);
//     res.end();
//     return;
//   }

//   if(method == "GET" && pathname == '/todos'){
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify(todos));
//   }

//   else if(method === "POST" &&  pathname === '/todos'){
//     let body='';
//     req.on('data',chunk=>{
//       body = body+chunk.toString();
//     });

//     req.on('end',()=>{
//       try{
//         const newTodo = JSON.parse(body);
//         newTodo.id = todos.length >0 ? Math.max(...todos.map(t=>t.id)) +1 : 1;
//         todos.push(newTodo);
//         res.writeHead(201,{'content-Type':'application/json' });
//         res.end(JSON.stringify(newTodo));
//       }catch(error){
//         res.writeHead(400, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ error: 'Invalid JSON' }));
//       }
//     });
//   }


//   else if (method === 'PUT' && pathname.startsWith('/todos/')) {
//   const id = parseInt(pathname.split('/')[2]);
//   let body = '';

//   req.on('data', chunk => {
//     body += chunk.toString();
//   });

//   req.on('end', () => {
//     try {
//       const updatedTodo = JSON.parse(body);

//       const index = todos.findIndex(t => t.id === id);

//       if (index === -1) {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         return res.end(JSON.stringify({ error: 'Todo not found' }));
//       }

//       todos[index] = {
//         ...todos[index],
//         ...updatedTodo
//       };

//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(todos[index]));

//     } catch (error) {
//       res.writeHead(400, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ error: 'Invalid JSON' }));
//     }
//   });
// }



//   else if (method === 'DELETE' && pathname.startsWith('/todos/')) {
//     const id = parseInt(pathname.split('/')[2]);
//     const index = todos.findIndex(t => t.id === id);

//     if (index === -1) {
//       res.writeHead(404, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ error: 'Todo not found' }));
//     } else {
//       todos = todos.filter(t => t.id !== id);
//       res.writeHead(204);
//       res.end();
//     }
//   }

//    else {
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ error: 'Not Found' }));
//   }
// });


// server.listen(3000,()=>{
//     console.log(`Server is running at server 3000 Port`)
// })


const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end('Home Page');
    }

    else if(req.url === '/about'){
        res.end('About Page');
    }

    else if(req.url === '/contact'){
        res.end('Contact Page');
    }

    else{
        res.writeHead(404);
        res.end('Page Not Found');
    }

});

server.listen(3000);