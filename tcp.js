var net = require('net')

var sockets = []

var server = net.createServer( function(socket) {
	
sockets.push(socket)


	socket.write("hello")
	

	socket.on('data', function(d) {
		for( var i = 0; i < sockets.length; i++) { sockets[i].write(d)}
		
	})


	socket.on('end', function() {
		var traitor = sockets.indexOf(socket)
		sockets.splice(traitor, 1)
	})
})

server.listen(5000)