// const {stringDecoder, StringDecoder}= require('string_decoder');
// const decoder = new StringDecoder('utf8');
// let myBuffer = Buffer.from("Hello Gyussss ...");

// console.log(myBuffer);
// console.log(myBuffer.toString());
// console.log(decoder.write(myBuffer));

// console.log('All arguments:', process.argv);
// console.log('First argument:', process.argv[2]);
// console.log('Second argument:', process.argv[3]);

// console.log('Environment:', process.env.NODE_ENV || 'development');
// console.log('Custom variable:', process.env.MY_VARIABLE);
// console.log('Database URL:', process.env.DATABASE_URL || 'Not set');

// const os = require('os');
// // Basic system information
// console.log(`OS Platform: ${os.platform()}`);
// console.log(`OS Type: ${os.type()}`);
// console.log(`OS Release: ${os.release()}`);
// console.log(`CPU Architecture: ${os.arch()}`);
// console.log(`Hostname: ${os.hostname()}`);

// // Memory information
// const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
// const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
// console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

// // User information
// const userInfo = os.userInfo();
// console.log(`Current User: ${userInfo.username}`);
// console.log(`Home Directory: ${os.homedir()}`);

// // Get CPU architecture
// console.log(`CPU Architecture: ${os.arch()}`);

// // Get platform information
// const platform = os.platform();
// console.log(`Platform: ${platform}`);


// // Get OS type
// console.log(`OS Type: ${os.type()}`);

// // Get OS release information
// console.log(`OS Release: ${os.release()}`);

// // Get kernel version
// console.log(`Kernel Version: ${os.version()}`);

// // //   
// const user = os.userInfo();
// console.log('User Information:');
// console.log(`- Username: ${user.username}`);
// console.log(`- User ID: ${user.uid}`);
// console.log(`- Group ID: ${user.gid}`);
// console.log(`- Home Directory: ${user.homedir}`);

// // On Windows, you can also get the user's domain
// if (os.platform() === 'win32') {
//   console.log(`- Domain: ${user.domain || 'N/A'}`);
// }

// // Note: user.shell is only available on POSIX platforms
// if (user.shell) {
//   console.log(`- Default Shell: ${user.shell}`);
// }



// const path = require('path');

// // Get the home directory
// const homeDir = os.homedir();
// console.log(`Home Directory: ${homeDir}`);

// // Example: Create a path to a config file in the user's home directory
// const configPath = path.join(homeDir, '.myapp', 'config.json');
// console.log(`Config file will be saved to: ${configPath}`);



// // Get the system hostname
// const hostname = os.hostname();
// console.log(`Hostname: ${hostname}`);

// // Example: Use hostname in logging or configuration
// console.log(`Server started on ${hostname} at ${new Date().toISOString()}`);

// // Get the system default temp dir
// console.log(`Temporary Directory: ${os.tmpdir()}`);


// // Get CPU information
// const cpus = os.cpus();
// console.log(`Number of CPU Cores: ${cpus.length}`);

// // Display information about each CPU core
// cpus.forEach((cpu, index) => {
//   console.log(`\nCPU Core ${index + 1}:`);
//   console.log(`- Model: ${cpu.model}`);
//   console.log(`- Speed: ${cpu.speed} MHz`);
//   console.log('- Times (ms):', {     user: cpu.times.user,
//     nice: cpu.times.nice,
//     sys: cpu.times.sys,
//     idle: cpu.times.idle,
//     irq: cpu.times.irq
//   });
// });
// // Calculate total CPU usage (example, requires two measurements)
// function calculateCpuUsage(prevCpus) {
//   const currentCpus = os.cpus();
//   const usage = [];

//   for (let i = 0; i < currentCpus.length; i++) {
//     const current = currentCpus[i];
//     const prev = prevCpus ? prevCpus[i] : { times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } };

//     const prevIdle = prev.times.idle;
//     const idle = current.times.idle - prevIdle;

//     let total = 0;
//     for (const type in current.times) {
//       total += current.times[type] - (prev.times[type] || 0);
//     }

//     const usagePercent = ((1 - idle / total) * 100).toFixed(1);
//     usage.push(parseFloat(usagePercent));
//   }

//   return {
//     perCore: usage,
//     average: (usage.reduce((a, b) => a + b, 0) / usage.length).toFixed(1),
//     cpus: currentCpus
//   };
// }

// // Example usage of CPU usage calculation
// console.log('\nCPU Usage (requires two measurements):');
// const firstMeasure = os.cpus();

// // Simulate some CPU work
// for (let i = 0; i < 1000000000; i++) {}
// const usage = calculateCpuUsage(firstMeasure);
// console.log(`Average CPU Usage: ${usage.average}%`);




// const path = require('path');

// // Get filename from a path
// const filename = path.basename('/users/docs/file.txt');
// console.log(filename);

// Get filename without extension
// const filenameWithoutExt = path.basename('/users/docs/file.txt', '.txt');
// console.log(filenameWithoutExt);



// // CommonJS module (e.g., app.js)
// const path = require('path');

// // Get the directory name of the current module
// console.log('Directory name:', __dirname);

// // Get the file name of the current module
// console.log('File name:', __filename);

// // Building paths relative to the current module
// const configPath = path.join(__dirname, 'config', 'app-config.json');
// console.log('Config file path:', configPath);

// // Getting the directory name using path.dirname()
// console.log('Directory using path.dirname():', path.dirname(__filename));



// const path = require('path');

// const extension = path.extname('file.txt');
// console.log(extension);

// console.log(path.extname('index.html'));
// console.log(path.extname('index.coffee.md'));
// console.log(path.extname('index.'));
// console.log(path.extname('index'));
// console.log(path.extname('.index'));


// const path = require('path');

// // Join path segments
// const fullPath = path.join('/users', 'docs', 'file.txt');
// console.log(fullPath); // Output depends on OS

// // Handle relative paths and navigation
// console.log(path.join('/users', '../system', './logs', 'file.txt'));

// // Handle multiple slashes
// console.log(path.join('users', '//docs', 'file.txt')); // Normalizes slashes


// let url = require('url');
// let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// let q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// let qdata = q.query;
// console.log(qdata.month);


// const { URL } = require('url');

// // Using the WHATWG URL API (recommended for new code)
// const myURL = new URL('https://example.org:8080/p/a/t/h?query=string#hash');
// console.log(myURL.hostname); // 'example.org'
// console.log(myURL.pathname); // '/p/a/t/h'
// console.log(myURL.searchParams.get('query')); // 'string'

// // Using the legacy API
// const parsedUrl = require('url').parse('https://example.org:8080/p/a/t/h?query=string#hash');
// console.log(parsedUrl.host); // 'example.org:8080'
// console.log(parsedUrl.query); // 'query=string'


// const { URL, URLSearchParams } = require('url');

// const myURL = new URL('https://example.com/?name=Kai&age=30');
// const params = new URLSearchParams(myURL.search);

// // Get a parameter
// console.log(params.get('name'));

// // Add a parameter
// params.append('city', 'Stavanger');
// // Delete a parameter
// params.delete('age');
// // Convert to string
// console.log(params.toString());


// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });

//     res.write("Welcome to Node.js HTTP Module\n");
//     res.write("Learning HTTP Methods\n");

//     res.end("Response Ended");
// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// });


// const fs = require("fs");

// // Write
// fs.writeFileSync("demo.txt", "Hello Node.js");

// // Read
// const data = fs.readFileSync("demo.txt", "utf8");
// console.log("File Content:", data);

// // Append
// fs.appendFileSync("demo.txt", "\nWelcome to FS Module");

// // Read Again
// console.log(fs.readFileSync("demo.txt", "utf8"));

// const { setTimeout, setInterval, setImmediate } = require('timers');

// console.log('Starting timers...');

// // Execute once after delay
// setTimeout(() => {
//   console.log('This runs after 1 second');
// }, 1000);

// // Execute repeatedly at interval
// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log(`Interval tick ${counter}`);
//   if (counter >= 3) clearInterval(interval);
// }, 1000);

// // Execute in the next event loop iteration
// setImmediate(() => {
//   console.log('This runs in the next iteration of the event loop');
// });

// console.log('Timers scheduled');
