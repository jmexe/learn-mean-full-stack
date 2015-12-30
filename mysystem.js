var os = require('os')

var message = 'Here is some info about your systems';

var sysarray = new Array("Type: " + os.type(),
						"Node Version: " + process.version,
						"Platform: " + os.platform(),
						"Hostname: " + os.hostname(),
						"Total Memory: " + os.totalmem(),
						"Free Memory: " + os.freemem(),
						"Uptime: " + os.uptime());
console.log(message);

for (i = 0; i < sysarray.length; i++) {
	console.log(sysarray[i]);
}