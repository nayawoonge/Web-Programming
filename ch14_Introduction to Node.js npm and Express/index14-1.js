const http = require('http')
const fs = require('fs')
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')

const server = http.createServer((req,res)=>{
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })//한글깨지는거 방지
  if(req.url === '/about')
  {
    res.end(aboutPage);
  }
  else if(req.url === '/contact')
    res.end(contactPage)
  else if(req.url === '/')
    res.end(homePage)
  else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(notFoundPage)
  }
})

server.listen(3000)