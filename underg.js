const Discord = require("discord.js");
const client = new Discord.Client();

let { readdirSync } = require('fs');

client.config = require('./config.js');

client.comandos = new Discord.Collection();

//let prefix = config.prefix

// <-- CONTROLADOR DE COMANDOS: -->

for(const file of readdirSync('./comandos')) {
    if(file.endsWith(".js")) {
        let fileName = file.substring(0, file.length - 3);
        let fileContents = require(`./comandos/${file}`);
        client.comandos.set(fileName, fileContents);
    }
}

// <-- CONTROLADOR DE EVENTOS: -->

for(const file of readdirSync('./eventos')) {
    if(file.endsWith(".js")) {
        let fileName = file.substring(0, file.length -3);
        let fileContents = require(`./eventos/${file}`);
        client.on(fileName, fileContents.bind(null, client));
        delete require.cache[require.resolve(`./eventos/${file}`)];
    }
}
client.login(process.env.BOT_TOKEN)
    .then(() => {
        console.log(`Estoy listo, soy ${client.user.tag}`);
    })
    .catch((err) => {
        console.error("Error al iniciar sesión: " + err);
    });

client.on("ready", () => {
    console.log(`El servicio ha sido iniciado con éxito, actualmente estoy en ${client.guilds.size} servidores y ${client.users.size} usuarios.`);

});



