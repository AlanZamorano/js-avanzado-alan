const os = require('os');

console.log('version sistema:', os.version()); //muestra nuestra version del kernel
console.log('arquitectura;', os.arch()); //se obtiene la arquitectura
console.log('informacion cpu:', os.cpus()); //informacion acerca de los cpus
console.log('memoria libre en bytes', os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
