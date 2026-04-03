const levels = [
  {
    level: 1,
    story:'Hace no mucho que acabas de salir de una relación larga de años. Estas en esa etapa de no quiero saber nada de nadie y has experimentado mucho alivio al dejar tu relación porque ya no erais un equipo y tu sistema nervioso estaba experimentado que ahí no era. Pero por arte de magia vienen alguien muy majo que empieza a hablarte y te hace reir, descubres que tenéis muchas cosas en común y decides acudir a la cita. Notas que conectáis un montón, total que tu hace no mucho que hiciste un bautismo de buceo y resulta que el chico en cuestión también bucea y le encanta y te plantea lo siguiente: ',
    type: 'riddle',
    question: '¿Por qué los buzos siempre se tiran de espaldas?',
    options: [
        'Porque si se tira mi amigo/a lo hago yo también',
        'Porque si lo dice el capitán va a misa',
        'Porque si se tiran de frente caen dentro de la lancha'
    ],
    correctAnswer: 'porque si se tiran de frente caen dentro de la lancha'
  },
  {
    level: 2,
    type: 'image',
    story: 'Despues de la cita como has caido en sus redes, el chico finalmente consigue lo que quería y te acaba haciendo ghosting y te llevas otro chasco oh 💔. Pasa el tiempo y reaparece un amigo tuyo de hace mucho tiempo atrás de cuando ibais juntos a boxeo. Te protege como buen amigo, te propone planes, te habla casi a todas horas y te dice de acudir al museo para distraerte un rato. Llevais un rato viendo cuadros pero uno en especial llama vuestra atencion. El chico te pregunta: ',
    image: 'https://wl-genial.cf.tsp.li/resize/1200x630/webp/cb4/cac/1bbe835e09af7466eaa9222fca.jpg.webp',
    question: '¿Qué ves?',
    correctAnswer: 'un perro' || 'perro'
  },
  {
    level: 3,
    type: 'audio',
    story: 'Tu veias claramente un perro y el un gato por lo que buscaste en una pagina de psicología que quien veía un gato era un viva la pepa y poco empático y quién veía un perro era leal asi que lo ves como una red flag🚩 y le mandas a donde Cristo perdió el mechero. Pasado un tiempo tienes un percance en el trabajo y decides acudir a un profesional que te asesore. Como le caes en gracia te pide que os tomeis una cerveza en el bar de aqui al lado que ponen buena música. Spoiler: te gusta el rock demasiado asi que aceptas. El chico te ha invitado a unas cuantas cervezas y avisa que viene su canción favorita, una balada rockera. Te dice: ',
    question: 'Mira no se mucho inglés pero hay un trocito que me hace mucha gracia porque parece que dice algo en español',
    correctAnswer: 'un chinito pecando' || 'chinito pecando' ,
    audio: 'https://res.cloudinary.com/du5e2crvt/video/upload/v1775234032/Candlelit_Glass_yjs5dw.mp3'
  },
   {
    level: 4,
    type: 'puzzle',
    story: 'Aciertas con lo que dice la canción que el chico se pone tan contento que se avalanza sobre ti y te besa. Tu le apartas en plan que haces? y el otro se queda bloqueado diciendo tienes razón es que estoy en crisis con mi novia. Inmediatamente sales huyendo despavorida. Regresas a casa decepcionada y renagando de los hombres. Pasado un tiempo te llega un mensaje de tu ex que te dice que se ha dado cuenta de que no era el momento para dejarte y que quiere volver contigo. Tu le dices que no quieres saber nada de él pero el insiste y te dice que si quieres quedar para hablar. Tu aceptas porque quieres cerrar ese capítulo de tu vida y el día de la cita te propone un juego para romper el hielo como sabe que te gustan los juegos te plantea el siguiente puzzle: ',
    question: 'A ver si te acuerdas de como se resolvía:',
    pieces: ['/puzzle/1.jpg', '/puzzle/2.jpg', '/puzzle/3.jpg', '/puzzle/4.jpg', '/puzzle/5.jpg', '/puzzle/6.jpg'],
    correctAnswer: ['2', '4', '1', '5', '3', '6']
},
   {
    level: 5,
    type: 'maze',
      maze: [
      ['S', '.', 'X', '.'], // S = Start, E = End, X = Wall, . = Path
      ['X', '.', 'X', '.'],
      ['.', '.', '.', 'X'],
      ['X', 'X', '.', 'E']
    ],
    start: { x: 0, y: 0 }, //Coordenadas de inicio x= fila y =columna
    end: { x: 3, y: 3 }
    
  },
]

module.exports = levels