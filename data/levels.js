const levels = [
  {
    level: 1,
    type: 'riddle',
    question: '¿Por qué los buzos siempre se tiran de espaldas?',
    options: [
        'Porque si se tira mi amigo lo hago yo tambien',
        'Porque si lo dice el capitán va a misa',
        'Porque si se tiran de frente caen dentro de la lancha'
    ],
    answer: 'porque si se tiran de frente caen dentro de la lancha'
  },
  {
    level: 2,
    type: 'text',
    question: 'Escucha el audio y escribe lo que entiendes',
    answer: 'hola mundo'
  },
  {
    level: 3,
    type: 'image',
    question: '¿Qué ves en la imagen?',
    answer: 'perro'
  },
   {
    level: 4,
    type: 'puzzle',
    pieces: ['pieza1', 'pieza2', 'pieza3', 'pieza4', 'pieza5', 'pieza6'],
    solution: ['pieza2', 'pieza4', 'pieza1', 'pieza5', 'pieza3', 'pieza6']
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