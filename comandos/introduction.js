module.exports = (client, message, args) => { 
    const Discord = require("discord.js");

    //Header
    const header = new Discord.RichEmbed()
	.setColor(0x00AE86)
	.setImage('https://i.imgur.com/oO5hxMh.png')

message.channel.send(header);

    //Introducción.
    const embed = new Discord.RichEmbed() 
    .setColor(0x00AE86)
    .setDescription("El objetivo principal que se ha planteado para la Comunidad de Discord es de facilitar recursos que simplifiquen al usuario su estadía; en donde se puedan incluir guías personalizadas, feedbacks y charlas en cuanto al servidor refieren y, que tan importante es, recopilar estadísticas que ayuden a mejorar la comunidad en su totalidad. \n \n Para conservar el ambiente adecuado que se necesita en el servidor, recomendamos seguir al pie de la letra el **Código de conducta de Discord** que se ha establecido. Entonces, ¿tienes sospechas que alguien no está cumpliendo con el código de conducta? Hazlo saber!")

    //NOTA DE USO: Espacios en blanco, usar: \u200b — Salto de línea, usar: \n
   
message.channel.send({embed});

    // Reglas generales
    const generales = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Reglas generales")
    .setDescription("A continuación encontrará las reglas del servidor. Estos son lo que se debe y no se debe hacer aquí. Síguelos si deseas quedarte, la ignorancia no es una excusa.")
    .addField("1. No anunciar.", "Esto incluye otros servidores de Discord, mencionar otros servidores de la plataforma de San Andreas Multiplayer, websites y productos o servicios de los que puede beneficiarse financieramente. Es considerado SPAM, y claro está que no será permitido bajo ninguna circunstancia. De ser el caso, en un canal de texto o en una sala de voz, el usuario podría recibir una sanción.")
    .addField("2. No quieras pasarte de listo.", "Si usted se hace particularmente difícil de tratar, si finge que es mejor que nadie, o si en general es muy molesto y no es un buen candidato para este servidor, lo eliminaremos... PERMANENTEMENTE.")
    .addField("3. Use hechos, no autoridad.", "Si va a proporcionar una anécdota o su propia experiencia, está bien, siempre que no lo haga pasar por axiomático. Cite las fuentes cuando se le solicite.")
    .addField("4. No envíe mensajes a las personas con las que no ha establecido una relación.", "Esto se explica por sí mismo. Respeta el espacio personal de cada usuario, no sea acosador, una persona pesada o irrespuetuosa. Si usted tiene dudas de algo relacionado con la comunidad y sus derivados, haga su pregunta en canales relevantes al tema. El DM de alguien no es un canal relevante.")
    .addField("5. No hacerse pasar por miembros del STAFF.", "No está permitido usar el avatar de otro miembro del personal que hayan tenido durante un tiempo razonable. Se le notificará si parece que se hace pasar por un miembro del personal. También podemos apodarte según el contexto. Además, está especialmente prohibido fingir ser otro miembro del personal a través de mensajes/voz, DM o de otra manera. Si lo hace, obtendrá una prohibición inmediata y permanente.")
    .addField("6. Siga las instrucciones de los miembros del STAFF al pie de la letra.", "La mayoría de nosotros estamos aquí por mero pasatiempo o porque en verdad nos gusta el Roleplay, es por eso que en ocasiones se habla de roleplay o simplemente cotilleamos con nuestros amigos. Dicho esto, realmente no nos gusta intervenir. Pero especialmente no nos gusta tener que intervenir dos veces. Por favor no nos hagas hacer eso, gracias :slight_smile:")
    .addField("7. Enlace a las preguntas frecuentes y a los canales de la guía para principiantes generosamente.", "Las preguntas frecuentes y los canales de guía para principiantes representan muchas horas de discusión para encontrar respuestas completas a preguntas comunes. Si eres de las personas a quienes les gusta ayudar, por favor, asegurate de tener el conocimiento apto antes de entablar una discusión sobre determinado tema. Se te puede pedir que dejes de participar en una conversación si se presenta como un fanático con opiniones pobres o nulas.")

message.channel.send(generales);

    // Política de Contenido
    const contentpolicy = new Discord.RichEmbed()
    .setColor(0xFF6347)
    .setTitle("Política de Contenido")
    .setDescription("A continuación hay una lista de cosas de las que no puede hablar aquí. Si un miembro del STAFF le cita la política de contenido, comprenda que realmente significa dejar de hablar de lo que está hablando. Creo que encontrará la lista razonable, ya que la construimos para que sea propicia para un entorno que se adapte a hablar sobre el servidor, juegos populares y entre otros pasatiempos.")
    .addField("1. No hay política, religión, filosofía u otros temas similares.", "Desgraciadamente no todos compartimos las mismas ideologías, por lo que temas así pueden causar controversia en muchos casos. Esto es evidente. No haces amigos hablando con extraños sobre estos temas. Tus puntos de vista políticos no tienen nada que ver con el rol que desempeñas en el servidor.")
    .addField("2. El contenido inapropiado", "Siempre pregúntate \"¿Mi jefe estaría de acuerdo con esta pantalla completa en mi monitor mientras pasaba?\". Si la respuesta es no, no la publique. El contenido aquí está destinado a ser PG-13. No NC-17, no R: si no se lo mostrarías a tu hermano menor frente a tu madre, no tiene lugar aquí. Sin hentai, sin porno, sin nada de eso. \n \n Las firmas, avatares, banners, títulos, nicknames y cualquier otra representación NSFW que usted contenga, no será permitida y será eliminado de inmediato.")
    .addField("3. No hablar de suicidio o depresión.", "Lamento decirlo, pero si está deprimido o está considerando suicidarse, eso es terrible y sentimos pena por usted, pero no nos sentimos calificados para dar consejos, consejos moderados, ni nada por el estilo. Sería absolutamente injusto de mi parte poner ese peso sobre los hombros de los moderadores aquí. Entonces, por favor, llame a su línea directa local de suicidio, que con suerte puede encontrar aquí: http://www.suicide.org/international-suicide-hotlines.html (o buscando en Google)")
    .addField("4. No se hable de temas ilegales, piratería, ingeniería inversa, piratería, imitación de la interacción del usuario u otros temas similares.", "Esto incluye cualquier cosa contra los términos de servicio de un sitio, cualquier cosa protegida por un captcha/robots.txt y cualquier creación/pago/compra de cuenta automatizada. Estos temas están estrictamente prohibidos. Los temas relacionados con estos también pueden ser rechazados.")

message.channel.send(contentpolicy);
}
