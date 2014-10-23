var http = require('http')

var server = http.createServer( function(request, response) {
	response.write("hello\n")
	response.end("makers\n")
})

server.listen(5000)