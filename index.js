const http= require('http');
const router= require('./router');
 http.createServer((req, res) => {
     const next=(statusCode,contentType,content)=>{
        res.writeHead(statusCode,{'content-type':contentType} );
        res.end(content);
     }
     router(req.url,next);

  }).listen(3000,()=>{
      console.log("server ready");
  })