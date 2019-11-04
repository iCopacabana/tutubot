//Se activa cuando el bot inicie con éxito.

module.exports = (client) => {

    client.user.setPresence(
        {
            status: "online",
            game: {
                name: 'Underground Roleplay',
                url: 'https://undergroundrp.com/forum',
                type: "PLAYING"
            }
        }
    );

}