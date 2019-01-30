var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, response) {
    var myUrl = url.parse(req.url)
    switch (myUrl.pathname) {
        case '/':
            var data = fs.readFileSync('mainpage.html', { encoding: 'utf8' });
            response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            response.write(data);
            response.end();
            break
        case '/mainpage.css':
            var info = fs.readFileSync('./mainpage.css', { encoding: 'utf8' });
            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.write(info);
            response.end();
            break;
        case '/pacman.css':
            var info = fs.readFileSync('./pacman.css', { encoding: 'utf8' });
            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.write(info);
            response.end();
            break;
        case '/script.js':
            var info = fs.readFileSync('script.js', { encoding: 'utf8' });
            response.writeHead(200, { 'Content-Type': 'text/javascript' });
            response.write(info);
            response.end();
            break;
        case '/JavaScript/pacman.js':
            var info = fs.readFileSync('JavaScript/pacman.js', { encoding: 'utf8' });
            response.writeHead(200, { 'Content-Type': 'text/javascript' });
            response.write(info);
            response.end();
            break;
        case '/logo.png':
            fs.readFile('./logo.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/img/logo.png':
            fs.readFile('./img/logo.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/img/top-bar2.png':
            fs.readFile('./img/top-bar2.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/images/background_pacman.png':
            fs.readFile('./images/background_pacman.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/img/1.jpg':
            fs.readFile('./img/1.jpg', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/jpg' });
                    response.end(data, 'binary')
            });
            break;
        case '/images/coin.png':
            fs.readFile('./images/coin.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/images/tile.png':
            fs.readFile('./images/tile.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/images/fire.png':
            fs.readFile('./images/fire.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/images/pacman.png':
            fs.readFile('./images/pacman.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/images/wall.png':
            fs.readFile('./images/wall.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/profi/ciobaca.png':
            fs.readFile('./profi/ciobaca.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/profi/amariei.png':
            fs.readFile('./profi/amariei.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/profi/ferucio.png':
            fs.readFile('./profi/ferucio.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/profi/iacob.png':
            fs.readFile('./profi/iacob.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/profi/masalagiu.png':
            fs.readFile('./profi/masalagiu.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/profi/patrut.png':
            fs.readFile('./profi/patrut.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/profi/varlan.png':
            fs.readFile('./profi/varlan.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        case '/Sprites/pacman_x.png':
            fs.readFile('./Sprites/pacman_x.png', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.end(data, 'binary')
            });
            break;
        default:
            console.log(myUrl.pathname);
            break;
    }
    }).listen(8000);
