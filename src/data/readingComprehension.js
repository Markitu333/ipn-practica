export const readingComprehension = [
  {
    id: 'rc-a1',
    topic: 'Text A: Factual comprehension',
    passage:
      'María lives in a small town about 30 kilometers from the city. Every morning she wakes up at 6:30 and takes the 7:15 bus to the city, where she works at a small bookstore called "The Reading Corner." She usually arrives at nine o\'clock and finishes at five in the afternoon. On weekends, she visits her grandmother, who bakes delicious pies. María says the best part of her job is recommending books to children.',
    question: 'Where does María work?',
    options: ['In a bakery', 'At a bookstore', 'In a school', 'At a bus station'],
    answer: 1,
    explanation:
      'The text explicitly says she works "at a small bookstore called The Reading Corner." Bakery is wrong — her grandmother bakes pies, not María.',
  },
  {
    id: 'rc-a2',
    topic: 'Text A: Factual comprehension',
    passage:
      'María lives in a small town about 30 kilometers from the city. Every morning she wakes up at 6:30 and takes the 7:15 bus to the city, where she works at a small bookstore called "The Reading Corner." She usually arrives at nine o\'clock and finishes at five in the afternoon. On weekends, she visits her grandmother, who bakes delicious pies. María says the best part of her job is recommending books to children.',
    question: 'How does María get to the city?',
    options: ['She drives her own car', 'She takes the bus', 'She rides a bicycle', 'She walks'],
    answer: 1,
    explanation:
      'The text states she "takes the 7:15 bus to the city." None of the other transportation methods are mentioned.',
  },
  {
    id: 'rc-a3',
    topic: 'Text A: Factual comprehension',
    passage:
      'María lives in a small town about 30 kilometers from the city. Every morning she wakes up at 6:30 and takes the 7:15 bus to the city, where she works at a small bookstore called "The Reading Corner." She usually arrives at nine o\'clock and finishes at five in the afternoon. On weekends, she visits her grandmother, who bakes delicious pies. María says the best part of her job is recommending books to children.',
    question: 'What time does María usually finish work?',
    options: ['At 9:00 a.m.', 'At 7:15 a.m.', 'At 5:00 p.m.', 'At 6:30 a.m.'],
    answer: 2,
    explanation:
      'The text says she "finishes at five in the afternoon." 9:00 is when she arrives; 7:15 is her bus time.',
  },
  {
    id: 'rc-a4',
    topic: 'Text A: Factual comprehension',
    passage:
      'María lives in a small town about 30 kilometers from the city. Every morning she wakes up at 6:30 and takes the 7:15 bus to the city, where she works at a small bookstore called "The Reading Corner." She usually arrives at nine o\'clock and finishes at five in the afternoon. On weekends, she visits her grandmother, who bakes delicious pies. María says the best part of her job is recommending books to children.',
    question: 'What does María do on weekends?',
    options: [
      'She works extra hours',
      'She bakes pies',
      'She visits her grandmother',
      'She reads books all day',
    ],
    answer: 2,
    explanation:
      'The text clearly states "On weekends, she visits her grandmother, who bakes delicious pies." The grandmother bakes, not María.',
  },
  {
    id: 'rc-a5',
    topic: 'Text A: Detail / opinion',
    passage:
      'María lives in a small town about 30 kilometers from the city. Every morning she wakes up at 6:30 and takes the 7:15 bus to the city, where she works at a small bookstore called "The Reading Corner." She usually arrives at nine o\'clock and finishes at five in the afternoon. On weekends, she visits her grandmother, who bakes delicious pies. María says the best part of her job is recommending books to children.',
    question:
      'What does María say is the best part of her job?',
    options: [
      'Working with her grandmother',
      'Recommending books to children',
      'Waking up early',
      'Taking the bus',
    ],
    answer: 1,
    explanation:
      'The last sentence states: "María says the best part of her job is recommending books to children." The other options are things she does, not the best part.',
  },
  {
    id: 'rc-b1',
    topic: 'Text B: Main idea',
    passage:
      'Many people believe that e-books will replace printed books completely. However, sales of printed books remain strong worldwide. Some readers argue that the physical experience of a book — its smell, weight, and the sound of a turning page — cannot be replicated. Others value the convenience of carrying hundreds of titles in one device. It seems that both formats will coexist for a long time.',
    question: 'What is the main idea of the passage?',
    options: [
      'Printed books will disappear soon.',
      'E-books are better than printed books.',
      'Printed books and e-books will coexist.',
      'People should not use e-books.',
    ],
    answer: 2,
    explanation:
      'The conclusion of the text is that "both formats will coexist for a long time." The passage presents arguments from both sides without declaring one better.',
  },
  {
    id: 'rc-b2',
    topic: 'Text B: Vocabulary in context',
    passage:
      'Many people believe that e-books will replace printed books completely. However, sales of printed books remain strong worldwide. Some readers argue that the physical experience of a book — its smell, weight, and the sound of a turning page — cannot be replicated. Others value the convenience of carrying hundreds of titles in one device. It seems that both formats will coexist for a long time.',
    question: 'The phrase "cannot be replicated" means…',
    options: [
      'cannot be destroyed',
      'cannot be imitated or copied exactly',
      'cannot be sold',
      'cannot be opened',
    ],
    answer: 1,
    explanation:
      '"Replicate" means to copy or imitate. "Cannot be replicated" means the physical experience of a real book cannot be exactly reproduced by digital devices.',
  },
  {
    id: 'rc-b3',
    topic: 'Text B: Argument identification',
    passage:
      'Many people believe that e-books will replace printed books completely. However, sales of printed books remain strong worldwide. Some readers argue that the physical experience of a book — its smell, weight, and the sound of a turning page — cannot be replicated. Others value the convenience of carrying hundreds of titles in one device. It seems that both formats will coexist for a long time.',
    question: 'Which of the following is an argument in favor of printed books?',
    options: [
      'They are cheaper than e-books.',
      'The physical experience cannot be replicated.',
      'They can hold hundreds of titles.',
      'They are lighter to carry.',
    ],
    answer: 1,
    explanation:
      'The text states that "the physical experience of a book... cannot be replicated," which supports printed books. Carrying hundreds of titles is an argument for e-books.',
  },
  {
    id: 'rc-b4',
    topic: 'Text B: Argument identification',
    passage:
      'Many people believe that e-books will replace printed books completely. However, sales of printed books remain strong worldwide. Some readers argue that the physical experience of a book — its smell, weight, and the sound of a turning page — cannot be replicated. Others value the convenience of carrying hundreds of titles in one device. It seems that both formats will coexist for a long time.',
    question: 'Which of the following is an argument in favor of e-books?',
    options: [
      'They are more popular than printed books.',
      'They allow carrying hundreds of titles in one device.',
      'They have a pleasant smell.',
      'They are sold in better bookstores.',
    ],
    answer: 1,
    explanation:
      'The text says readers "value the convenience of carrying hundreds of titles in one device," which is an advantage of e-books. The smell argument belongs to printed books.',
  },
  {
    id: 'rc-b5',
    topic: 'Text B: Author\'s attitude',
    passage:
      'Many people believe that e-books will replace printed books completely. However, sales of printed books remain strong worldwide. Some readers argue that the physical experience of a book — its smell, weight, and the sound of a turning page — cannot be replicated. Others value the convenience of carrying hundreds of titles in one device. It seems that both formats will coexist for a long time.',
    question: 'The author\'s attitude toward the two formats can be described as…',
    options: [
      'enthusiastic about printed books',
      'critical of e-books',
      'neutral and balanced',
      'dismissive of both',
    ],
    answer: 2,
    explanation:
      'The author presents arguments from both sides (physical experience vs. convenience) and concludes both will coexist. The tone is neutral and objective, without favoring either format.',
  },
  {
    id: 'rc-c1',
    topic: 'Text C: Main idea',
    passage:
      'The Amazon rainforest is often called "the lungs of the planet" because it produces a large amount of oxygen. However, deforestation threatens this ecosystem. Trees absorb carbon dioxide, and when they are cut down, that carbon is released into the atmosphere. Scientists warn that protecting the forest is essential to slow down climate change.',
    question: 'What is the main idea of the passage?',
    options: [
      'The Amazon produces all the world\'s oxygen.',
      'Deforestation threatens the Amazon and affects the climate.',
      'Trees release carbon dioxide at night.',
      'Scientists have stopped deforestation.',
    ],
    answer: 1,
    explanation:
      'The text explains the importance of the Amazon and warns that deforestation releases carbon and threatens the ecosystem. It never claims the Amazon produces all the world\'s oxygen.',
  },
  {
    id: 'rc-c2',
    topic: 'Text C: Detail',
    passage:
      'The Amazon rainforest is often called "the lungs of the planet" because it produces a large amount of oxygen. However, deforestation threatens this ecosystem. Trees absorb carbon dioxide, and when they are cut down, that carbon is released into the atmosphere. Scientists warn that protecting the forest is essential to slow down climate change.',
    question: 'Why is the Amazon called "the lungs of the planet"?',
    options: [
      'Because it is very large',
      'Because it produces a large amount of oxygen',
      'Because animals breathe there',
      'Because it is green',
    ],
    answer: 1,
    explanation:
      'The text says it is called "the lungs of the planet" because it produces a large amount of oxygen.',
  },
  {
    id: 'rc-c3',
    topic: 'Text C: Vocabulary in context',
    passage:
      'The Amazon rainforest is often called "the lungs of the planet" because it produces a large amount of oxygen. However, deforestation threatens this ecosystem. Trees absorb carbon dioxide, and when they are cut down, that carbon is released into the atmosphere. Scientists warn that protecting the forest is essential to slow down climate change.',
    question: 'In the text, "deforestation threatens this ecosystem" means…',
    options: [
      'cutting down forests puts the ecosystem at risk',
      'the ecosystem is growing rapidly',
      'the forest is already destroyed completely',
      'the trees produce more oxygen',
    ],
    answer: 0,
    explanation:
      '"To threaten" means to put something in danger. Deforestation (cutting down trees) puts the rainforest ecosystem at risk; it does not mean the forest is already completely destroyed.',
  },
  {
    id: 'rc-c4',
    topic: 'Text C: Detail',
    passage:
      'The Amazon rainforest is often called "the lungs of the planet" because it produces a large amount of oxygen. However, deforestation threatens this ecosystem. Trees absorb carbon dioxide, and when they are cut down, that carbon is released into the atmosphere. Scientists warn that protecting the forest is essential to slow down climate change.',
    question: 'According to the text, what happens when trees are cut down?',
    options: [
      'The carbon they absorbed is released into the atmosphere.',
      'They produce more oxygen.',
      'Carbon dioxide disappears from the air.',
      'Nothing changes in the ecosystem.',
    ],
    answer: 0,
    explanation:
      'The text states: "when they are cut down, that carbon is released into the atmosphere." Cutting trees does not increase oxygen production or remove CO₂.',
  },
  {
    id: 'rc-c5',
    topic: 'Text C: Author\'s purpose',
    passage:
      'The Amazon rainforest is often called "the lungs of the planet" because it produces a large amount of oxygen. However, deforestation threatens this ecosystem. Trees absorb carbon dioxide, and when they are cut down, that carbon is released into the atmosphere. Scientists warn that protecting the forest is essential to slow down climate change.',
    question: 'What is the author\'s purpose in writing this text?',
    options: [
      'To entertain readers with a story',
      'To warn about the importance of protecting the Amazon',
      'To sell products from the rainforest',
      'To describe the animals of the Amazon',
    ],
    answer: 1,
    explanation:
      'The text warns that deforestation threatens the forest and that protecting it is essential against climate change. Its purpose is informative and cautionary, not entertaining or commercial.',
  },
  {
    id: 'rc-d1',
    topic: 'Text D: Main idea',
    passage:
      'Water on Earth is constantly moving in a cycle. The sun heats the surface of rivers, lakes, and oceans, turning part of the water into vapor. This vapor rises into the sky, cools, and forms clouds in a process called condensation. Eventually, the water falls back to the ground as rain or snow. This process is known as precipitation, and it returns water to the rivers and oceans, where the cycle begins again.',
    question: 'What is the main idea of the passage?',
    options: [
      'The sun is the most important star.',
      'Water moves continuously through the same cycle.',
      'Rain is caused by volcanoes.',
      'Oceans are disappearing.',
    ],
    answer: 1,
    explanation:
      'El texto describe cómo el agua se mueve constantemente: el sol la evapora, se forman nubes y luego cae como lluvia o nieve. La idea central es que el agua sigue un ciclo continuo.',
  },
  {
    id: 'rc-d2',
    topic: 'Text D: Factual comprehension',
    passage:
      'Water on Earth is constantly moving in a cycle. The sun heats the surface of rivers, lakes, and oceans, turning part of the water into vapor. This vapor rises into the sky, cools, and forms clouds in a process called condensation. Eventually, the water falls back to the ground as rain or snow. This process is known as precipitation, and it returns water to the rivers and oceans, where the cycle begins again.',
    question: 'According to the text, what turns part of the water into vapor?',
    options: ['The wind', 'The clouds', 'The sun', 'The rain'],
    answer: 2,
    explanation:
      'El texto afirma: "The sun heats the surface of rivers, lakes, and oceans, turning part of the water into vapor." El sol, no el viento ni las nubes, causa la evaporación.',
  },
  {
    id: 'rc-d3',
    topic: 'Text D: Vocabulary in context',
    passage:
      'Water on Earth is constantly moving in a cycle. The sun heats the surface of rivers, lakes, and oceans, turning part of the water into vapor. This vapor rises into the sky, cools, and forms clouds in a process called condensation. Eventually, the water falls back to the ground as rain or snow. This process is known as precipitation, and it returns water to the rivers and oceans, where the cycle begins again.',
    question: 'The word "condensation" in the text refers to…',
    options: [
      'the process of water falling as rain',
      'the process of vapor changing into clouds',
      'the process of the sun heating the water',
      'the process of rivers drying up',
    ],
    answer: 1,
    explanation:
      '"Condensation" describe el momento en que el vapor sube, se enfría y forma nubes. Las otras opciones corresponden a otros pasos del ciclo, como la precipitación o la evaporación.',
  },
  {
    id: 'rc-d4',
    topic: 'Text D: Detail',
    passage:
      'Water on Earth is constantly moving in a cycle. The sun heats the surface of rivers, lakes, and oceans, turning part of the water into vapor. This vapor rises into the sky, cools, and forms clouds in a process called condensation. Eventually, the water falls back to the ground as rain or snow. This process is known as precipitation, and it returns water to the rivers and oceans, where the cycle begins again.',
    question: 'According to the text, what happens to the water after it falls as rain or snow?',
    options: [
      'It disappears forever.',
      'It stays in the sky.',
      'It returns to rivers and oceans.',
      'It becomes clouds.',
    ],
    answer: 2,
    explanation:
      'El texto dice que la precipitación "returns water to the rivers and oceans, where the cycle begins again." El agua no desaparece ni se queda en el cielo.',
  },
  {
    id: 'rc-d5',
    topic: 'Text D: Inference',
    passage:
      'Water on Earth is constantly moving in a cycle. The sun heats the surface of rivers, lakes, and oceans, turning part of the water into vapor. This vapor rises into the sky, cools, and forms clouds in a process called condensation. Eventually, the water falls back to the ground as rain or snow. This process is known as precipitation, and it returns water to the rivers and oceans, where the cycle begins again.',
    question: 'After a big storm, there is a puddle on the street. Based on the text, what will probably happen to that water?',
    options: [
      'It will return to the sky or to rivers and oceans.',
      'It will stay in the puddle forever.',
      'It will turn into ice immediately.',
      'It will suddenly disappear without a trace.',
    ],
    answer: 0,
    explanation:
      'Es una inferencia del ciclo del agua: el agua de los charcos se evaporará con el sol o escurrirá hacia ríos y océanos. Las demás opciones contradicen el ciclo descrito en el texto.',
  },
  {
    id: 'rc-e1',
    topic: 'Text E: Main idea',
    passage:
      'Sleep is essential for a healthy life, but many people do not get enough of it. During sleep, the body repairs itself and the brain organizes the information we learned during the day. Experts recommend that adults sleep between seven and nine hours every night. People who sleep less than that often have difficulty concentrating and remembering. In addition, lack of sleep over a long period can weaken the immune system and increase the risk of illness.',
    question: 'What is the main idea of the passage?',
    options: [
      'People should sleep as little as possible to be more productive.',
      'Sleep is essential for health, and sleeping too little is harmful.',
      'The brain stops working completely during sleep.',
      'Only adults need to sleep every night.',
    ],
    answer: 1,
    explanation:
      'El texto explica que el sueño es esencial y que dormir poco afecta la concentración, la memoria y el sistema inmunológico. La idea central es que el sueño es necesario para la salud.',
  },
  {
    id: 'rc-e2',
    topic: 'Text E: Factual comprehension',
    passage:
      'Sleep is essential for a healthy life, but many people do not get enough of it. During sleep, the body repairs itself and the brain organizes the information we learned during the day. Experts recommend that adults sleep between seven and nine hours every night. People who sleep less than that often have difficulty concentrating and remembering. In addition, lack of sleep over a long period can weaken the immune system and increase the risk of illness.',
    question: 'What do experts recommend for adults, according to the text?',
    options: [
      'Sleeping no more than four hours a night',
      'Sleeping between seven and nine hours every night',
      'Sleeping only on weekends',
      'Sleeping for ten hours during the day',
    ],
    answer: 1,
    explanation:
      'El texto dice: "Experts recommend that adults sleep between seven and nine hours every night." Las otras opciones contradicen esa recomendación.',
  },
  {
    id: 'rc-e3',
    topic: 'Text E: Vocabulary in context',
    passage:
      'Sleep is essential for a healthy life, but many people do not get enough of it. During sleep, the body repairs itself and the brain organizes the information we learned during the day. Experts recommend that adults sleep between seven and nine hours every night. People who sleep less than that often have difficulty concentrating and remembering. In addition, lack of sleep over a long period can weaken the immune system and increase the risk of illness.',
    question: 'The word "lack" in the text is closest in meaning to…',
    options: ['abundance', 'shortage', 'quality', 'pleasure'],
    answer: 1,
    explanation:
      '"Lack of sleep" significa "falta de sueño". "Lack" equivale a carencia o escasez, por lo que "shortage" es la opción más cercana.',
  },
  {
    id: 'rc-e4',
    topic: 'Text E: Detail',
    passage:
      'Sleep is essential for a healthy life, but many people do not get enough of it. During sleep, the body repairs itself and the brain organizes the information we learned during the day. Experts recommend that adults sleep between seven and nine hours every night. People who sleep less than that often have difficulty concentrating and remembering. In addition, lack of sleep over a long period can weaken the immune system and increase the risk of illness.',
    question: 'According to the text, what does the brain do during sleep?',
    options: [
      'It stops working completely.',
      'It organizes the information learned during the day.',
      'It makes the body feel cold.',
      'It produces extra energy.',
    ],
    answer: 1,
    explanation:
      'El texto afirma que durante el sueño el cerebro "organizes the information we learned during the day" y que el cuerpo se repara a sí mismo.',
  },
  {
    id: 'rc-e5',
    topic: 'Text E: Author\'s purpose',
    passage:
      'Sleep is essential for a healthy life, but many people do not get enough of it. During sleep, the body repairs itself and the brain organizes the information we learned during the day. Experts recommend that adults sleep between seven and nine hours every night. People who sleep less than that often have difficulty concentrating and remembering. In addition, lack of sleep over a long period can weaken the immune system and increase the risk of illness.',
    question: 'What is the author\'s purpose in writing this text?',
    options: [
      'To persuade people to sleep more and take sleep seriously',
      'To teach people how to cook healthy food',
      'To describe different types of beds',
      'To show that work is more important than sleep',
    ],
    answer: 0,
    explanation:
      'El texto informa sobre la importancia del sueño y advierte de los riesgos de dormir poco. Su propósito es convencer y concientizar sobre el descanso.',
  },
  {
    id: 'rc-f1',
    topic: 'Text F: Main idea',
    passage:
      'Smartphones have changed the way we communicate, work, and entertain ourselves. With a small device, people can send messages, make video calls, navigate, and access almost any information on the internet. However, experts warn that spending too many hours looking at a screen can affect sleep and eyesight. They recommend taking regular breaks and using the phone with moderation. Used correctly, a smartphone is a powerful tool that makes daily life easier.',
    question: 'What is the main idea of the passage?',
    options: [
      'Smartphones are only useful for playing games.',
      'Smartphones have changed our lives and should be used with moderation.',
      'People should throw away their smartphones.',
      'Smartphones cannot connect to the internet.',
    ],
    answer: 1,
    explanation:
      'El texto reconoce los beneficios del smartphone (comunicación, información) pero advierte que debe usarse con moderación. Esa es la idea central.',
  },
  {
    id: 'rc-f2',
    topic: 'Text F: Factual comprehension',
    passage:
      'Smartphones have changed the way we communicate, work, and entertain ourselves. With a small device, people can send messages, make video calls, navigate, and access almost any information on the internet. However, experts warn that spending too many hours looking at a screen can affect sleep and eyesight. They recommend taking regular breaks and using the phone with moderation. Used correctly, a smartphone is a powerful tool that makes daily life easier.',
    question: 'Which of the following can people do with a smartphone, according to the text?',
    options: [
      'Send messages and make video calls',
      'Cook food',
      'Drive a car',
      'Grow plants',
    ],
    answer: 0,
    explanation:
      'El texto menciona enviar mensajes, hacer videollamadas, navegar y acceder a información. "Send messages and make video calls" aparece directamente en el texto.',
  },
  {
    id: 'rc-f3',
    topic: 'Text F: Vocabulary in context',
    passage:
      'Smartphones have changed the way we communicate, work, and entertain ourselves. With a small device, people can send messages, make video calls, navigate, and access almost any information on the internet. However, experts warn that spending too many hours looking at a screen can affect sleep and eyesight. They recommend taking regular breaks and using the phone with moderation. Used correctly, a smartphone is a powerful tool that makes daily life easier.',
    question: 'The word "moderation" in the text means…',
    options: [
      'using something too much',
      'not using something at all',
      'using something within a sensible limit',
      'using something only once a year',
    ],
    answer: 2,
    explanation:
      '"With moderation" significa "con moderación", es decir, usar el teléfono de forma equilibrada y sin excesos. Se opone a usarlo en exceso.',
  },
  {
    id: 'rc-f4',
    topic: 'Text F: Detail',
    passage:
      'Smartphones have changed the way we communicate, work, and entertain ourselves. With a small device, people can send messages, make video calls, navigate, and access almost any information on the internet. However, experts warn that spending too many hours looking at a screen can affect sleep and eyesight. They recommend taking regular breaks and using the phone with moderation. Used correctly, a smartphone is a powerful tool that makes daily life easier.',
    question: 'According to the text, what problems can too many hours in front of a screen cause?',
    options: [
      'Better eyesight',
      'Sleep problems and eye problems',
      'Stronger muscles',
      'A better memory',
    ],
    answer: 1,
    explanation:
      'El texto advierte que pasar demasiadas horas frente a una pantalla "can affect sleep and eyesight", es decir, causar problemas de sueño y de vista.',
  },
  {
    id: 'rc-f5',
    topic: 'Text F: Inference',
    passage:
      'Smartphones have changed the way we communicate, work, and entertain ourselves. With a small device, people can send messages, make video calls, navigate, and access almost any information on the internet. However, experts warn that spending too many hours looking at a screen can affect sleep and eyesight. They recommend taking regular breaks and using the phone with moderation. Used correctly, a smartphone is a powerful tool that makes daily life easier.',
    question: 'A person uses his smartphone all day. What would the author most likely recommend to him?',
    options: [
      'Throw the phone away immediately.',
      'Take regular breaks and limit screen time.',
      'Use the phone only for games.',
      'Sleep less at night.',
    ],
    answer: 1,
    explanation:
      'Es la recomendación lógica según el texto: tomar descansos regulares y usar el teléfono con moderación para proteger la vista y el sueño.',
  },
  {
    id: 'rc-g1',
    topic: 'Text G: Main idea',
    passage:
      'Day of the Dead is one of the most important celebrations in Mexico. On November 1st and 2nd, families build altars in their homes to remember relatives who have passed away. They decorate the altars with flowers, candles, photographs, and the favorite food of the deceased person. Many people believe that during these days, the spirits of their loved ones return to visit them. The celebration is not sad; it is a joyful party full of music, colors, and memories.',
    question: 'What is the main idea of the passage?',
    options: [
      'Day of the Dead is a celebration to remember and honor deceased loved ones.',
      'Day of the Dead is the most important party in the world.',
      'People cry all day during Day of the Dead.',
      'The celebration is held only on November 1st.',
    ],
    answer: 0,
    explanation:
      'El texto describe el Día de Muertos como una celebración para recordar y honrar a los familiares fallecidos de forma alegre. Esa es la idea central.',
  },
  {
    id: 'rc-g2',
    topic: 'Text G: Factual comprehension',
    passage:
      'Day of the Dead is one of the most important celebrations in Mexico. On November 1st and 2nd, families build altars in their homes to remember relatives who have passed away. They decorate the altars with flowers, candles, photographs, and the favorite food of the deceased person. Many people believe that during these days, the spirits of their loved ones return to visit them. The celebration is not sad; it is a joyful party full of music, colors, and memories.',
    question: 'On which days is Day of the Dead celebrated, according to the text?',
    options: [
      'December 1st and 2nd',
      'November 1st and 2nd',
      'October 31st only',
      'January 1st and 2nd',
    ],
    answer: 1,
    explanation:
      'El texto lo dice explícitamente: "On November 1st and 2nd, families build altars in their homes." La celebración es el 1 y 2 de noviembre.',
  },
  {
    id: 'rc-g3',
    topic: 'Text G: Vocabulary in context',
    passage:
      'Day of the Dead is one of the most important celebrations in Mexico. On November 1st and 2nd, families build altars in their homes to remember relatives who have passed away. They decorate the altars with flowers, candles, photographs, and the favorite food of the deceased person. Many people believe that during these days, the spirits of their loved ones return to visit them. The celebration is not sad; it is a joyful party full of music, colors, and memories.',
    question: 'The word "deceased" in the text is closest in meaning to…',
    options: ['alive', 'dead', 'young', 'famous'],
    answer: 1,
    explanation:
      '"The deceased person" se refiere a la persona fallecida. "Deceased" significa "difunto" o "fallecido", es decir, "dead".',
  },
  {
    id: 'rc-g4',
    topic: 'Text G: Detail',
    passage:
      'Day of the Dead is one of the most important celebrations in Mexico. On November 1st and 2nd, families build altars in their homes to remember relatives who have passed away. They decorate the altars with flowers, candles, photographs, and the favorite food of the deceased person. Many people believe that during these days, the spirits of their loved ones return to visit them. The celebration is not sad; it is a joyful party full of music, colors, and memories.',
    question: 'According to the text, what do families place on the altars?',
    options: [
      'Expensive furniture',
      'Flowers, candles, photographs, and food',
      'Magazines only',
      'Only candles',
    ],
    answer: 1,
    explanation:
      'El texto dice: "They decorate the altars with flowers, candles, photographs, and the favorite food of the deceased person."',
  },
  {
    id: 'rc-g5',
    topic: 'Text G: Tone and inference',
    passage:
      'Day of the Dead is one of the most important celebrations in Mexico. On November 1st and 2nd, families build altars in their homes to remember relatives who have passed away. They decorate the altars with flowers, candles, photographs, and the favorite food of the deceased person. Many people believe that during these days, the spirits of their loved ones return to visit them. The celebration is not sad; it is a joyful party full of music, colors, and memories.',
    question: 'How does the author describe the tone of the celebration?',
    options: [
      'As a sad and silent event',
      'As a joyful party full of music, colors, and memories',
      'As a dangerous activity',
      'As a formal business meeting',
    ],
    answer: 1,
    explanation:
      'El texto concluye: "The celebration is not sad; it is a joyful party full of music, colors, and memories." El autor destaca el carácter festivo y positivo.',
  },
  {
    id: 'rc-h1',
    topic: 'Text H: Main idea',
    passage:
      'Frida Kahlo was born in Coyoacán, Mexico, in 1907. As a young woman, she suffered a serious accident that affected her health for the rest of her life. During her recovery, she began to paint, and art became a way for her to express her pain and identity. Her paintings, many of them self-portraits, show her typical Mexican clothing and the emotions she felt. Today, Frida Kahlo is considered one of the most important artists in the history of Mexico.',
    question: 'What is the main idea of the passage?',
    options: [
      'Frida Kahlo became a famous painter who expressed her pain and identity through art.',
      'Frida Kahlo only painted flowers.',
      'Frida Kahlo was born in Europe.',
      'Frida Kahlo never learned to paint.',
    ],
    answer: 0,
    explanation:
      'El texto narra cómo Frida Kahlo, tras un accidente, comenzó a pintar para expresar su dolor y se convirtió en una artista importante de México. Esa es la idea central.',
  },
  {
    id: 'rc-h2',
    topic: 'Text H: Factual comprehension',
    passage:
      'Frida Kahlo was born in Coyoacán, Mexico, in 1907. As a young woman, she suffered a serious accident that affected her health for the rest of her life. During her recovery, she began to paint, and art became a way for her to express her pain and identity. Her paintings, many of them self-portraits, show her typical Mexican clothing and the emotions she felt. Today, Frida Kahlo is considered one of the most important artists in the history of Mexico.',
    question: 'Where was Frida Kahlo born?',
    options: ['In Paris', 'In Coyoacán, Mexico', 'In New York', 'In Madrid'],
    answer: 1,
    explanation:
      'La primera oración del texto dice: "Frida Kahlo was born in Coyoacán, Mexico, in 1907." Nació en Coyoacán, México.',
  },
  {
    id: 'rc-h3',
    topic: 'Text H: Vocabulary in context',
    passage:
      'Frida Kahlo was born in Coyoacán, Mexico, in 1907. As a young woman, she suffered a serious accident that affected her health for the rest of her life. During her recovery, she began to paint, and art became a way for her to express her pain and identity. Her paintings, many of them self-portraits, show her typical Mexican clothing and the emotions she felt. Today, Frida Kahlo is considered one of the most important artists in the history of Mexico.',
    question: 'The word "self-portraits" in the text means…',
    options: [
      'paintings of other people',
      'paintings of the artist herself',
      'photographs of landscapes',
      'drawings of animals',
    ],
    answer: 1,
    explanation:
      'Un "self-portrait" es un autorretrato, es decir, un retrato que la artista hace de sí misma. Frida pintó muchos autorretratos.',
  },
  {
    id: 'rc-h4',
    topic: 'Text H: Detail',
    passage:
      'Frida Kahlo was born in Coyoacán, Mexico, in 1907. As a young woman, she suffered a serious accident that affected her health for the rest of her life. During her recovery, she began to paint, and art became a way for her to express her pain and identity. Her paintings, many of them self-portraits, show her typical Mexican clothing and the emotions she felt. Today, Frida Kahlo is considered one of the most important artists in the history of Mexico.',
    question: 'According to the text, when did Frida begin to paint?',
    options: [
      'During her recovery after an accident',
      'When she was a small child',
      'After she moved to Europe',
      'Before she was born',
    ],
    answer: 0,
    explanation:
      'El texto dice: "During her recovery, she began to paint." Comenzó a pintar durante su recuperación tras el accidente.',
  },
  {
    id: 'rc-h5',
    topic: 'Text H: Author\'s purpose',
    passage:
      'Frida Kahlo was born in Coyoacán, Mexico, in 1907. As a young woman, she suffered a serious accident that affected her health for the rest of her life. During her recovery, she began to paint, and art became a way for her to express her pain and identity. Her paintings, many of them self-portraits, show her typical Mexican clothing and the emotions she felt. Today, Frida Kahlo is considered one of the most important artists in the history of Mexico.',
    question: 'What is the author\'s purpose in writing this text?',
    options: [
      'To inform about the life and importance of Frida Kahlo',
      'To explain how to paint a self-portrait',
      'To compare Frida with famous athletes',
      'To advertise an art museum',
    ],
    answer: 0,
    explanation:
      'El propósito del texto es informativo: ofrece datos biográficos de Frida Kahlo y destaca su importancia como artista mexicana.',
  },
  {
    id: 'rc-i1',
    topic: 'Text I: Main idea',
    passage:
      'Last summer, Ana and her brother Pablo traveled to Mexico City for the first time. They visited the Zócalo, the largest square in the country, and admired the old buildings around it. From there, they went to the Chapultepec Castle, where they learned about the history of Mexico. On the third day, they took a boat along the canals of Xochimilco and ate tacos while listening to mariachi music. They promised to return because the city had more to offer than they imagined.',
    question: 'What is the main idea of the passage?',
    options: [
      'Ana and Pablo had a wonderful first visit to Mexico City and want to return.',
      'Ana and Pablo did not like Mexico City.',
      'Traveling by plane is very expensive.',
      'Mexico City has no museums or parks.',
    ],
    answer: 0,
    explanation:
      'El texto relata los lugares que visitaron Ana y Pablo y termina con su deseo de volver. La idea central es su agradable primera visita a la ciudad.',
  },
  {
    id: 'rc-i2',
    topic: 'Text I: Factual comprehension',
    passage:
      'Last summer, Ana and her brother Pablo traveled to Mexico City for the first time. They visited the Zócalo, the largest square in the country, and admired the old buildings around it. From there, they went to the Chapultepec Castle, where they learned about the history of Mexico. On the third day, they took a boat along the canals of Xochimilco and ate tacos while listening to mariachi music. They promised to return because the city had more to offer than they imagined.',
    question: 'Who traveled to Mexico City in the text?',
    options: [
      'Ana and her best friend',
      'Ana and her brother Pablo',
      'Pablo and his parents',
      'Only Ana',
    ],
    answer: 1,
    explanation:
      'La primera oración dice: "Ana and her brother Pablo traveled to Mexico City." Viajaron Ana y su hermano Pablo.',
  },
  {
    id: 'rc-i3',
    topic: 'Text I: Vocabulary in context',
    passage:
      'Last summer, Ana and her brother Pablo traveled to Mexico City for the first time. They visited the Zócalo, the largest square in the country, and admired the old buildings around it. From there, they went to the Chapultepec Castle, where they learned about the history of Mexico. On the third day, they took a boat along the canals of Xochimilco and ate tacos while listening to mariachi music. They promised to return because the city had more to offer than they imagined.',
    question: 'The phrase "the largest square in the country" in the text refers to…',
    options: [
      'the biggest open plaza in the nation',
      'the smallest and narrowest street',
      'the highest mountain in the region',
      'the oldest building in the city',
    ],
    answer: 0,
    explanation:
      '"Square" aquí se refiere a la plaza (el Zócalo) y "largest" quiere decir el más grande. Se trata de la plaza más grande del país.',
  },
  {
    id: 'rc-i4',
    topic: 'Text I: Detail',
    passage:
      'Last summer, Ana and her brother Pablo traveled to Mexico City for the first time. They visited the Zócalo, the largest square in the country, and admired the old buildings around it. From there, they went to the Chapultepec Castle, where they learned about the history of Mexico. On the third day, they took a boat along the canals of Xochimilco and ate tacos while listening to mariachi music. They promised to return because the city had more to offer than they imagined.',
    question: 'What did Ana and Pablo do in Xochimilco?',
    options: [
      'They rode a bus and visited a castle.',
      'They took a boat and ate tacos.',
      'They slept for three days.',
      'They bought a new house.',
    ],
    answer: 1,
    explanation:
      'El texto dice: "they took a boat along the canals of Xochimilco and ate tacos while listening to mariachi music." Tomaron un bote y comieron tacos.',
  },
  {
    id: 'rc-i5',
    topic: 'Text I: Inference',
    passage:
      'Last summer, Ana and her brother Pablo traveled to Mexico City for the first time. They visited the Zócalo, the largest square in the country, and admired the old buildings around it. From there, they went to the Chapultepec Castle, where they learned about the history of Mexico. On the third day, they took a boat along the canals of Xochimilco and ate tacos while listening to mariachi music. They promised to return because the city had more to offer than they imagined.',
    question: 'Based on the last sentence, how do Ana and Pablo probably feel about Mexico City?',
    options: [
      'They think it is boring.',
      'They think it is full of interesting places and activities.',
      'They think it is dangerous.',
      'They think it is too small.',
    ],
    answer: 1,
    explanation:
      'Al decir que "the city had more to offer than they imagined" y prometer volver, se infiere que la consideran una ciudad interesante y llena de opciones.',
  },
  {
    id: 'rc-j1',
    topic: 'Text J: Main idea',
    passage:
      'Soccer is the most popular sport in the world, and in Mexico it is almost a passion. It is played by two teams of eleven players who try to score goals by kicking a ball into the opponent\'s net. The sport requires teamwork, speed, and strategy, not only physical strength. Children start playing soccer at a young age in streets, parks, and schools. Watching a soccer match with family and friends is a common weekend activity in many countries.',
    question: 'What is the main idea of the passage?',
    options: [
      'Soccer is a popular sport that requires teamwork and is played everywhere.',
      'Soccer is only played in Mexico.',
      'Soccer is a sport for very old people.',
      'Soccer has no rules.',
    ],
    answer: 0,
    explanation:
      'El texto destaca la popularidad mundial del fútbol, cómo se juega y los valores que requiere, como el trabajo en equipo. Esa es la idea central.',
  },
  {
    id: 'rc-j2',
    topic: 'Text J: Factual comprehension',
    passage:
      'Soccer is the most popular sport in the world, and in Mexico it is almost a passion. It is played by two teams of eleven players who try to score goals by kicking a ball into the opponent\'s net. The sport requires teamwork, speed, and strategy, not only physical strength. Children start playing soccer at a young age in streets, parks, and schools. Watching a soccer match with family and friends is a common weekend activity in many countries.',
    question: 'According to the text, how many players does each soccer team have?',
    options: ['Eleven', 'Five', 'Seven', 'Twenty'],
    answer: 0,
    explanation:
      'El texto afirma: "It is played by two teams of eleven players." Cada equipo tiene once jugadores.',
  },
  {
    id: 'rc-j3',
    topic: 'Text J: Vocabulary in context',
    passage:
      'Soccer is the most popular sport in the world, and in Mexico it is almost a passion. It is played by two teams of eleven players who try to score goals by kicking a ball into the opponent\'s net. The sport requires teamwork, speed, and strategy, not only physical strength. Children start playing soccer at a young age in streets, parks, and schools. Watching a soccer match with family and friends is a common weekend activity in many countries.',
    question: 'The word "opponent" in the text means…',
    options: [
      'the person or team you play against',
      'the referee of the match',
      'a close family friend',
      'a person who watches the game',
    ],
    answer: 0,
    explanation:
      '"Opponent" es el rival, es decir, la persona o el equipo contra el que se juega. "The opponent\'s net" es la portería del rival.',
  },
  {
    id: 'rc-j4',
    topic: 'Text J: Detail',
    passage:
      'Soccer is the most popular sport in the world, and in Mexico it is almost a passion. It is played by two teams of eleven players who try to score goals by kicking a ball into the opponent\'s net. The sport requires teamwork, speed, and strategy, not only physical strength. Children start playing soccer at a young age in streets, parks, and schools. Watching a soccer match with family and friends is a common weekend activity in many countries.',
    question: 'According to the text, what does soccer require?',
    options: [
      'Only physical strength',
      'Teamwork, speed, and strategy',
      'Very tall players only',
      'Expensive equipment',
    ],
    answer: 1,
    explanation:
      'El texto dice: "The sport requires teamwork, speed, and strategy, not only physical strength." Requiere trabajo en equipo, velocidad y estrategia.',
  },
  {
    id: 'rc-j5',
    topic: 'Text J: Inference',
    passage:
      'Soccer is the most popular sport in the world, and in Mexico it is almost a passion. It is played by two teams of eleven players who try to score goals by kicking a ball into the opponent\'s net. The sport requires teamwork, speed, and strategy, not only physical strength. Children start playing soccer at a young age in streets, parks, and schools. Watching a soccer match with family and friends is a common weekend activity in many countries.',
    question: 'Based on the text, what can you infer about soccer?',
    options: [
      'It is an activity that unites people of different ages.',
      'Only professional players are interested in it.',
      'It is played only by teams of three players.',
      'It is not popular in any country.',
    ],
    answer: 0,
    explanation:
      'Se infiere que el fútbol une a personas de distintas edades: los niños juegan desde pequeños y los adultos lo ven en familia los fines de semana.',
  },
  {
    id: 'rc-k1',
    topic: 'Text K: Main idea',
    passage:
      'Plastic is very useful, but it has become a serious problem for the environment. The same plastic bottle can remain in nature for hundreds of years without disappearing. Every year, millions of tons of plastic reach the oceans, where they harm fish, birds, and sea turtles. Scientists and governments are looking for alternatives, such as biodegradable materials and better recycling systems. However, experts say that the most important change must come from consumers, who can choose to use less plastic every day.',
    question: 'What is the main idea of the passage?',
    options: [
      'Plastic pollution is a serious problem, and consumers can help reduce it.',
      'Plastic is no longer used anywhere in the world.',
      'The oceans are full of fish and nothing else.',
      'Plastic disappears quickly in nature.',
    ],
    answer: 0,
    explanation:
      'El texto describe el problema de la contaminación por plástico y concluye que los consumidores pueden ayudar a reducirlo. Esa es la idea central.',
  },
  {
    id: 'rc-k2',
    topic: 'Text K: Factual comprehension',
    passage:
      'Plastic is very useful, but it has become a serious problem for the environment. The same plastic bottle can remain in nature for hundreds of years without disappearing. Every year, millions of tons of plastic reach the oceans, where they harm fish, birds, and sea turtles. Scientists and governments are looking for alternatives, such as biodegradable materials and better recycling systems. However, experts say that the most important change must come from consumers, who can choose to use less plastic every day.',
    question: 'How long can a plastic bottle remain in nature, according to the text?',
    options: ['A few days', 'Hundreds of years', 'One year', 'Only a month'],
    answer: 1,
    explanation:
      'El texto dice: "The same plastic bottle can remain in nature for hundreds of years without disappearing." Puede durar cientos de años.',
  },
  {
    id: 'rc-k3',
    topic: 'Text K: Vocabulary in context',
    passage:
      'Plastic is very useful, but it has become a serious problem for the environment. The same plastic bottle can remain in nature for hundreds of years without disappearing. Every year, millions of tons of plastic reach the oceans, where they harm fish, birds, and sea turtles. Scientists and governments are looking for alternatives, such as biodegradable materials and better recycling systems. However, experts say that the most important change must come from consumers, who can choose to use less plastic every day.',
    question: 'In the text, the word "biodegradable" refers to…',
    options: [
      'a material that can be broken down by nature',
      'a material that never disappears',
      'a very expensive material',
      'a material used only in construction',
    ],
    answer: 0,
    explanation:
      '"Biodegradable" significa que un material se descompone de forma natural. En el texto se propone como alternativa al plástico, que no desaparece.',
  },
  {
    id: 'rc-k4',
    topic: 'Text K: Detail',
    passage:
      'Plastic is very useful, but it has become a serious problem for the environment. The same plastic bottle can remain in nature for hundreds of years without disappearing. Every year, millions of tons of plastic reach the oceans, where they harm fish, birds, and sea turtles. Scientists and governments are looking for alternatives, such as biodegradable materials and better recycling systems. However, experts say that the most important change must come from consumers, who can choose to use less plastic every day.',
    question: 'According to the text, which animals are harmed by plastic in the oceans?',
    options: [
      'Fish, birds, and sea turtles',
      'Cats and dogs',
      'Horses and cows',
      'Elephants and lions',
    ],
    answer: 0,
    explanation:
      'El texto dice que el plástico llega a los océanos y "harm fish, birds, and sea turtles", es decir, daña a peces, aves y tortugas marinas.',
  },
  {
    id: 'rc-k5',
    topic: 'Text K: Author\'s purpose',
    passage:
      'Plastic is very useful, but it has become a serious problem for the environment. The same plastic bottle can remain in nature for hundreds of years without disappearing. Every year, millions of tons of plastic reach the oceans, where they harm fish, birds, and sea turtles. Scientists and governments are looking for alternatives, such as biodegradable materials and better recycling systems. However, experts say that the most important change must come from consumers, who can choose to use less plastic every day.',
    question: 'What is the author\'s main purpose in writing this text?',
    options: [
      'To persuade readers to use less plastic',
      'To teach readers how to make plastic',
      'To show that plastic is a perfect material',
      'To explain how to clean beaches with machines',
    ],
    answer: 0,
    explanation:
      'El texto advierte del daño del plástico y pide que los consumidores usen menos. Su propósito es informar y persuadir sobre el cuidado del ambiente.',
  },
  {
    id: 'rc-l1',
    topic: 'Text L: Main idea',
    passage:
      'Today, the internet is part of our daily life in a way that was impossible fifty years ago. People use it to study, work, communicate, and even pay their bills. Through the internet, students can attend online classes, and workers can do their jobs from home. However, the internet has risks, such as false information and the misuse of personal data. For this reason, it is important to use the internet with caution and to verify what we read.',
    question: 'What is the main idea of the passage?',
    options: [
      'The internet is important in daily life but must be used with caution.',
      'The internet should never be used.',
      'The internet only serves for games.',
      'The internet is dangerous and should be banned.',
    ],
    answer: 0,
    explanation:
      'El texto resalta la utilidad del internet en la vida diaria, pero también advierte de sus riesgos. La idea central es que es útil y hay que usarlo con cuidado.',
  },
  {
    id: 'rc-l2',
    topic: 'Text L: Factual comprehension',
    passage:
      'Today, the internet is part of our daily life in a way that was impossible fifty years ago. People use it to study, work, communicate, and even pay their bills. Through the internet, students can attend online classes, and workers can do their jobs from home. However, the internet has risks, such as false information and the misuse of personal data. For this reason, it is important to use the internet with caution and to verify what we read.',
    question: 'Which of the following is mentioned as an internet activity in the text?',
    options: [
      'Attending online classes',
      'Flying a plane',
      'Cooking dinner',
      'Swimming in a pool',
    ],
    answer: 0,
    explanation:
      'El texto menciona que los estudiantes pueden "attend online classes" por internet. Las demás opciones no aparecen en el texto.',
  },
  {
    id: 'rc-l3',
    topic: 'Text L: Vocabulary in context',
    passage:
      'Today, the internet is part of our daily life in a way that was impossible fifty years ago. People use it to study, work, communicate, and even pay their bills. Through the internet, students can attend online classes, and workers can do their jobs from home. However, the internet has risks, such as false information and the misuse of personal data. For this reason, it is important to use the internet with caution and to verify what we read.',
    question: 'The word "verify" in the text is closest in meaning to…',
    options: [
      'forget something quickly',
      'check that something is true',
      'read something very fast',
      'delete some information',
    ],
    answer: 1,
    explanation:
      '"To verify" significa comprobar o verificar. El texto recomienda verificar (comprobar) la información que leemos en internet.',
  },
  {
    id: 'rc-l4',
    topic: 'Text L: Detail',
    passage:
      'Today, the internet is part of our daily life in a way that was impossible fifty years ago. People use it to study, work, communicate, and even pay their bills. Through the internet, students can attend online classes, and workers can do their jobs from home. However, the internet has risks, such as false information and the misuse of personal data. For this reason, it is important to use the internet with caution and to verify what we read.',
    question: 'According to the text, what risks does the internet have?',
    options: [
      'Making people too healthy',
      'Improving the memory',
      'False information and misuse of personal data',
      'Creating more books and magazines',
    ],
    answer: 2,
    explanation:
      'El texto dice: "the internet has risks, such as false information and the misuse of personal data." Los riesgos son la información falsa y el mal uso de los datos personales.',
  },
  {
    id: 'rc-l5',
    topic: 'Text L: Author\'s purpose',
    passage:
      'Today, the internet is part of our daily life in a way that was impossible fifty years ago. People use it to study, work, communicate, and even pay their bills. Through the internet, students can attend online classes, and workers can do their jobs from home. However, the internet has risks, such as false information and the misuse of personal data. For this reason, it is important to use the internet with caution and to verify what we read.',
    question: 'What is the author\'s purpose in writing this text?',
    options: [
      'To inform and advise readers about safe internet use',
      'To describe the history of e-mail',
      'To sell internet services',
      'To make readers afraid of all technology',
    ],
    answer: 0,
    explanation:
      'El propósito es informar sobre el uso del internet y aconsejar prudencia: "use the internet with caution and verify what we read."',
  },
  {
    id: 'rc-m1',
    topic: 'Text M: Main idea',
    passage:
      'The Aztecs built one of the most advanced civilizations in ancient America. Their capital, Tenochtitlan, was built on an island in the middle of a lake and had canals, gardens, and large temples. The Aztecs created a calendar system, developed agriculture with floating gardens called chinampas, and traded with other cities. They also had a complex system of writing and beliefs, in which they honored many gods. In 1521, Spanish soldiers arrived and conquered the city, ending the Aztec empire.',
    question: 'What is the main idea of the passage?',
    options: [
      'The Aztecs built an advanced civilization that was conquered in 1521.',
      'The Aztecs lived in mountains with no water.',
      'The Aztecs had no form of agriculture.',
      'The Aztec empire still exists today.',
    ],
    answer: 0,
    explanation:
      'El texto describe los logros de la civilización azteca y su caída en 1521. La idea central es que fue avanzada y que fue conquistada por los españoles.',
  },
  {
    id: 'rc-m2',
    topic: 'Text M: Factual comprehension',
    passage:
      'The Aztecs built one of the most advanced civilizations in ancient America. Their capital, Tenochtitlan, was built on an island in the middle of a lake and had canals, gardens, and large temples. The Aztecs created a calendar system, developed agriculture with floating gardens called chinampas, and traded with other cities. They also had a complex system of writing and beliefs, in which they honored many gods. In 1521, Spanish soldiers arrived and conquered the city, ending the Aztec empire.',
    question: 'According to the text, where was Tenochtitlan built?',
    options: [
      'On an island in the middle of a lake',
      'In the middle of a desert',
      'On top of a volcano',
      'On a beach near the sea',
    ],
    answer: 0,
    explanation:
      'El texto dice: "Their capital, Tenochtitlan, was built on an island in the middle of a lake." Fue construida en una isla en medio de un lago.',
  },
  {
    id: 'rc-m3',
    topic: 'Text M: Vocabulary in context',
    passage:
      'The Aztecs built one of the most advanced civilizations in ancient America. Their capital, Tenochtitlan, was built on an island in the middle of a lake and had canals, gardens, and large temples. The Aztecs created a calendar system, developed agriculture with floating gardens called chinampas, and traded with other cities. They also had a complex system of writing and beliefs, in which they honored many gods. In 1521, Spanish soldiers arrived and conquered the city, ending the Aztec empire.',
    question: 'In the text, the word "chinampas" refers to…',
    options: [
      'large religious temples',
      'a type of sailing boat',
      'floating gardens used for agriculture',
      'writing tools made of stone',
    ],
    answer: 2,
    explanation:
      'El texto define "chinampas" como "floating gardens used for agriculture". Son jardines flotantes que los aztecas usaban para cultivar.',
  },
  {
    id: 'rc-m4',
    topic: 'Text M: Detail',
    passage:
      'The Aztecs built one of the most advanced civilizations in ancient America. Their capital, Tenochtitlan, was built on an island in the middle of a lake and had canals, gardens, and large temples. The Aztecs created a calendar system, developed agriculture with floating gardens called chinampas, and traded with other cities. They also had a complex system of writing and beliefs, in which they honored many gods. In 1521, Spanish soldiers arrived and conquered the city, ending the Aztec empire.',
    question: 'Which of the following did the Aztecs develop, according to the text?',
    options: [
      'Airplanes and trains',
      'Television sets',
      'Cars and trucks',
      'A calendar and a writing system',
    ],
    answer: 3,
    explanation:
      'El texto menciona que los aztecas crearon un sistema de calendario, agricultura con chinampas, comercio y escritura. Las demás opciones son inventos modernos.',
  },
  {
    id: 'rc-m5',
    topic: 'Text M: Inference',
    passage:
      'The Aztecs built one of the most advanced civilizations in ancient America. Their capital, Tenochtitlan, was built on an island in the middle of a lake and had canals, gardens, and large temples. The Aztecs created a calendar system, developed agriculture with floating gardens called chinampas, and traded with other cities. They also had a complex system of writing and beliefs, in which they honored many gods. In 1521, Spanish soldiers arrived and conquered the city, ending the Aztec empire.',
    question: 'Based on the text, why are the Aztecs considered an advanced civilization?',
    options: [
      'Because they conquered many European countries.',
      'Because they invented the internet.',
      'Because they lived for hundreds of years.',
      'Because they built canals, a calendar, agriculture, and writing.',
    ],
    answer: 3,
    explanation:
      'Se infiere de los logros descritos: canales, calendario, chinampas, comercio y escritura. Esa combinación de avances muestra una civilización avanzada.',
  },
  {
    id: 'rc-n1',
    topic: 'Text N: Main idea',
    passage:
      'Chocolate comes from the cacao tree, which grows in tropical regions of America. The ancient Maya and Aztecs used cacao to make a bitter drink that they gave to kings and warriors. When the Spanish arrived in Mexico in the sixteenth century, they took cacao to Europe and added sugar, making it sweet. That is why chocolate became a popular food around the world. Today, chocolate is consumed in many forms, but the cacao tree still comes from the same tropical lands.',
    question: 'What is the main idea of the passage?',
    options: [
      'Chocolate began as a bitter American drink and became popular worldwide.',
      'Chocolate grows on trees in Europe.',
      'The Maya invented modern candy.',
      'Chocolate has always been sweet.',
    ],
    answer: 0,
    explanation:
      'El texto narra el origen del chocolate en América, su transformación con el azúcar en Europa y su popularidad mundial. Esa es la idea central.',
  },
  {
    id: 'rc-n2',
    topic: 'Text N: Factual comprehension',
    passage:
      'Chocolate comes from the cacao tree, which grows in tropical regions of America. The ancient Maya and Aztecs used cacao to make a bitter drink that they gave to kings and warriors. When the Spanish arrived in Mexico in the sixteenth century, they took cacao to Europe and added sugar, making it sweet. That is why chocolate became a popular food around the world. Today, chocolate is consumed in many forms, but the cacao tree still comes from the same tropical lands.',
    question: 'According to the text, who first used cacao to make a drink?',
    options: [
      'The Maya and the Aztecs',
      'The Europeans',
      'The Chinese',
      'The Egyptians',
    ],
    answer: 0,
    explanation:
      'El texto dice: "The ancient Maya and Aztecs used cacao to make a bitter drink." Fueron los mayas y aztecas quienes primero hicieron la bebida.',
  },
  {
    id: 'rc-n3',
    topic: 'Text N: Vocabulary in context',
    passage:
      'Chocolate comes from the cacao tree, which grows in tropical regions of America. The ancient Maya and Aztecs used cacao to make a bitter drink that they gave to kings and warriors. When the Spanish arrived in Mexico in the sixteenth century, they took cacao to Europe and added sugar, making it sweet. That is why chocolate became a popular food around the world. Today, chocolate is consumed in many forms, but the cacao tree still comes from the same tropical lands.',
    question: 'The word "bitter" in the text means…',
    options: [
      'a sharp, unpleasant taste like coffee without sugar',
      'a very sweet taste',
      'a salty taste',
      'a taste that disappears immediately',
    ],
    answer: 0,
    explanation:
      '"Bitter" es amargo, un sabor fuerte y sin dulzor. La bebida de cacao era amarga porque no llevaba azúcar.',
  },
  {
    id: 'rc-n4',
    topic: 'Text N: Detail',
    passage:
      'Chocolate comes from the cacao tree, which grows in tropical regions of America. The ancient Maya and Aztecs used cacao to make a bitter drink that they gave to kings and warriors. When the Spanish arrived in Mexico in the sixteenth century, they took cacao to Europe and added sugar, making it sweet. That is why chocolate became a popular food around the world. Today, chocolate is consumed in many forms, but the cacao tree still comes from the same tropical lands.',
    question: 'What did the Spanish add to make chocolate sweet?',
    options: ['Salt', 'Sugar', 'Chili', 'Cheese'],
    answer: 1,
    explanation:
      'El texto dice: "they took cacao to Europe and added sugar, making it sweet." Los españoles agregaron azúcar al cacao.',
  },
  {
    id: 'rc-n5',
    topic: 'Text N: Author\'s purpose',
    passage:
      'Chocolate comes from the cacao tree, which grows in tropical regions of America. The ancient Maya and Aztecs used cacao to make a bitter drink that they gave to kings and warriors. When the Spanish arrived in Mexico in the sixteenth century, they took cacao to Europe and added sugar, making it sweet. That is why chocolate became a popular food around the world. Today, chocolate is consumed in many forms, but the cacao tree still comes from the same tropical lands.',
    question: 'What is the author\'s purpose in writing this text?',
    options: [
      'To explain the history of chocolate',
      'To teach readers how to bake a cake',
      'To warn about the dangers of sugar',
      'To advertise a famous chocolate brand',
    ],
    answer: 0,
    explanation:
      'Todo el texto ofrece información histórica sobre el origen y la difusión del chocolate. Su propósito es informativo, no publicitario ni de recetas.',
  },
  {
    id: 'rc-o1',
    topic: 'Text O: Main idea',
    passage:
      'Marie Curie was a scientist born in Poland in 1867. She moved to Paris to study, where she worked hard and became the first woman to win a Nobel Prize. Together with her husband Pierre, she discovered two new elements: polonium and radium. She also developed mobile X-ray machines that saved many soldiers during the First World War. Curie devoted her life to science and died in 1934, but her discoveries still help medicine today.',
    question: 'What is the main idea of the passage?',
    options: [
      'Marie Curie was a brilliant scientist whose discoveries still help medicine.',
      'Marie Curie was the first woman in Poland to win a singing contest.',
      'Marie Curie invented the internet.',
      'Marie Curie studied only in Poland her whole life.',
    ],
    answer: 0,
    explanation:
      'El texto destaca los logros científicos de Marie Curie: sus descubrimientos y su impacto en la medicina. Esa es la idea central.',
  },
  {
    id: 'rc-o2',
    topic: 'Text O: Factual comprehension',
    passage:
      'Marie Curie was a scientist born in Poland in 1867. She moved to Paris to study, where she worked hard and became the first woman to win a Nobel Prize. Together with her husband Pierre, she discovered two new elements: polonium and radium. She also developed mobile X-ray machines that saved many soldiers during the First World War. Curie devoted her life to science and died in 1934, but her discoveries still help medicine today.',
    question: 'Where was Marie Curie born?',
    options: ['In Poland', 'In Paris', 'In the United States', 'In Italy'],
    answer: 0,
    explanation:
      'La primera oración dice: "Marie Curie was a scientist born in Poland in 1867." Nació en Polonia.',
  },
  {
    id: 'rc-o3',
    topic: 'Text O: Vocabulary in context',
    passage:
      'Marie Curie was a scientist born in Poland in 1867. She moved to Paris to study, where she worked hard and became the first woman to win a Nobel Prize. Together with her husband Pierre, she discovered two new elements: polonium and radium. She also developed mobile X-ray machines that saved many soldiers during the First World War. Curie devoted her life to science and died in 1934, but her discoveries still help medicine today.',
    question: 'The word "devoted" in the text means…',
    options: [
      'refused to do something important',
      'gave all her time and energy to something',
      'sold something for money',
      'complained about her work',
    ],
    answer: 1,
    explanation:
      '"Curie devoted her life to science" significa que dedicó toda su vida a la ciencia. "Devote" equivale a dedicar o entregarse por completo.',
  },
  {
    id: 'rc-o4',
    topic: 'Text O: Detail',
    passage:
      'Marie Curie was a scientist born in Poland in 1867. She moved to Paris to study, where she worked hard and became the first woman to win a Nobel Prize. Together with her husband Pierre, she discovered two new elements: polonium and radium. She also developed mobile X-ray machines that saved many soldiers during the First World War. Curie devoted her life to science and died in 1934, but her discoveries still help medicine today.',
    question: 'What did Marie Curie and her husband discover?',
    options: [
      'Two new elements: polonium and radium',
      'A new planet in the solar system',
      'The first computer',
      'A new type of engine',
    ],
    answer: 0,
    explanation:
      'El texto dice: "Together with her husband Pierre, she discovered two new elements: polonium and radium." Descubrieron el polonio y el radio.',
  },
  {
    id: 'rc-o5',
    topic: 'Text O: Author\'s purpose',
    passage:
      'Marie Curie was a scientist born in Poland in 1867. She moved to Paris to study, where she worked hard and became the first woman to win a Nobel Prize. Together with her husband Pierre, she discovered two new elements: polonium and radium. She also developed mobile X-ray machines that saved many soldiers during the First World War. Curie devoted her life to science and died in 1934, but her discoveries still help medicine today.',
    question: 'What is the author\'s purpose in writing this text?',
    options: [
      'To highlight the achievements of a scientist',
      'To explain how to build X-ray machines',
      'To describe life in Poland today',
      'To compare two different wars',
    ],
    answer: 0,
    explanation:
      'El propósito es informar y destacar los logros de Marie Curie. No explica cómo se fabrican los rayos X ni describe la Polonia actual.',
  },
  {
    id: 'rc-p1',
    topic: 'Text P: Main idea',
    passage:
      'Mars is often called the red planet because of the iron in its soil. It is smaller than Earth and has a very thin atmosphere, so temperatures there are extremely cold. Scientists have discovered that rivers and lakes probably existed on Mars millions of years ago. Because of this, some scientists believe the planet may have once supported life. Today, several robots and satellites study Mars to learn more about its past and to prepare future human trips.',
    question: 'What is the main idea of the passage?',
    options: [
      'Scientists study Mars because its past may reveal if life existed there.',
      'Mars is the biggest planet in the solar system.',
      'Humans already travel to Mars every year.',
      'Mars has a thick atmosphere and warm weather.',
    ],
    answer: 0,
    explanation:
      'El texto explica por qué se estudia Marte: pudo tener agua y vida en el pasado. Los robots estudian el planeta para conocer su historia y preparar viajes.',
  },
  {
    id: 'rc-p2',
    topic: 'Text P: Factual comprehension',
    passage:
      'Mars is often called the red planet because of the iron in its soil. It is smaller than Earth and has a very thin atmosphere, so temperatures there are extremely cold. Scientists have discovered that rivers and lakes probably existed on Mars millions of years ago. Because of this, some scientists believe the planet may have once supported life. Today, several robots and satellites study Mars to learn more about its past and to prepare future human trips.',
    question: 'Why is Mars called "the red planet"?',
    options: [
      'Because it is burning with fire',
      'Because of the iron in its soil',
      'Because of its red sky',
      'Because of its red rivers',
    ],
    answer: 1,
    explanation:
      'El texto dice: "Mars is often called the red planet because of the iron in its soil." Se llama así por el hierro de su suelo.',
  },
  {
    id: 'rc-p3',
    topic: 'Text P: Vocabulary in context',
    passage:
      'Mars is often called the red planet because of the iron in its soil. It is smaller than Earth and has a very thin atmosphere, so temperatures there are extremely cold. Scientists have discovered that rivers and lakes probably existed on Mars millions of years ago. Because of this, some scientists believe the planet may have once supported life. Today, several robots and satellites study Mars to learn more about its past and to prepare future human trips.',
    question: 'In the text, the word "atmosphere" refers to…',
    options: [
      'the mountains on a planet',
      'the layer of gases around a planet',
      'the animals that live on a planet',
      'the ships that travel to a planet',
    ],
    answer: 1,
    explanation:
      '"Atmosphere" es la atmósfera, la capa de gases que rodea un planeta. La de Marte es muy delgada, por eso hace mucho frío.',
  },
  {
    id: 'rc-p4',
    topic: 'Text P: Detail',
    passage:
      'Mars is often called the red planet because of the iron in its soil. It is smaller than Earth and has a very thin atmosphere, so temperatures there are extremely cold. Scientists have discovered that rivers and lakes probably existed on Mars millions of years ago. Because of this, some scientists believe the planet may have once supported life. Today, several robots and satellites study Mars to learn more about its past and to prepare future human trips.',
    question: 'What have scientists discovered about Mars?',
    options: [
      'That rivers and lakes probably existed there millions of years ago',
      'That it is much larger than Earth',
      'That it has a very hot climate',
      'That it has no soil on its surface',
    ],
    answer: 0,
    explanation:
      'El texto dice: "Scientists have discovered that rivers and lakes probably existed on Mars millions of years ago." Hubo ríos y lagos hace millones de años.',
  },
  {
    id: 'rc-p5',
    topic: 'Text P: Inference',
    passage:
      'Mars is often called the red planet because of the iron in its soil. It is smaller than Earth and has a very thin atmosphere, so temperatures there are extremely cold. Scientists have discovered that rivers and lakes probably existed on Mars millions of years ago. Because of this, some scientists believe the planet may have once supported life. Today, several robots and satellites study Mars to learn more about its past and to prepare future human trips.',
    question: 'If Mars once had rivers and lakes, what can you infer from the text?',
    options: [
      'That the conditions may have been similar to early Earth and could have supported life.',
      'That Mars has no scientific value.',
      'That Martians built those rivers.',
      'That Mars is too hot to ever have had water.',
    ],
    answer: 0,
    explanation:
      'Se infiere de la frase "the planet may have once supported life": si hubo agua, las condiciones pudieron parecerse a las de la Tierra primitiva y albergar vida.',
  },
  {
    id: 'rc-q1',
    topic: 'Text Q: Main idea',
    passage:
      'Breakfast is often called the most important meal of the day. After many hours without eating, the body needs energy to start the morning, and breakfast provides it. People who eat a healthy breakfast tend to concentrate better at school or work. Nutritionists recommend including fruit, whole grains, and protein, rather than only sugary products. However, they warn that a balanced breakfast should be accompanied by good habits throughout the day.',
    question: 'What is the main idea of the passage?',
    options: [
      'A healthy breakfast gives the body energy and improves concentration.',
      'Breakfast should include only sugary products.',
      'Nobody should eat breakfast.',
      'Breakfast is only important for children.',
    ],
    answer: 0,
    explanation:
      'El texto explica por qué el desayuno es importante: aporta energía al cuerpo y mejora la concentración. Esa es la idea central.',
  },
  {
    id: 'rc-q2',
    topic: 'Text Q: Factual comprehension',
    passage:
      'Breakfast is often called the most important meal of the day. After many hours without eating, the body needs energy to start the morning, and breakfast provides it. People who eat a healthy breakfast tend to concentrate better at school or work. Nutritionists recommend including fruit, whole grains, and protein, rather than only sugary products. However, they warn that a balanced breakfast should be accompanied by good habits throughout the day.',
    question: 'What do nutritionists recommend for breakfast, according to the text?',
    options: [
      'Only sugary products',
      'Nothing at all',
      'Fruit, whole grains, and protein',
      'Only coffee and bread',
    ],
    answer: 2,
    explanation:
      'El texto dice: "Nutritionists recommend including fruit, whole grains, and protein, rather than only sugary products." Recomiendan fruta, cereales y proteína.',
  },
  {
    id: 'rc-q3',
    topic: 'Text Q: Vocabulary in context',
    passage:
      'Breakfast is often called the most important meal of the day. After many hours without eating, the body needs energy to start the morning, and breakfast provides it. People who eat a healthy breakfast tend to concentrate better at school or work. Nutritionists recommend including fruit, whole grains, and protein, rather than only sugary products. However, they warn that a balanced breakfast should be accompanied by good habits throughout the day.',
    question: 'The word "concentrate" in the text means…',
    options: [
      'sleep very deeply',
      'pay attention and focus',
      'travel very quickly',
      'forget things easily',
    ],
    answer: 1,
    explanation:
      '"Concentrate better" significa concentrarse mejor, es decir, prestar atención y enfocarse en una tarea.',
  },
  {
    id: 'rc-q4',
    topic: 'Text Q: Detail',
    passage:
      'Breakfast is often called the most important meal of the day. After many hours without eating, the body needs energy to start the morning, and breakfast provides it. People who eat a healthy breakfast tend to concentrate better at school or work. Nutritionists recommend including fruit, whole grains, and protein, rather than only sugary products. However, they warn that a balanced breakfast should be accompanied by good habits throughout the day.',
    question: 'According to the text, why does the body need breakfast?',
    options: [
      'Because the body cannot eat again later',
      'Because after many hours without eating, it needs energy',
      'Because breakfast is very sweet',
      'Because it makes people grow taller',
    ],
    answer: 1,
    explanation:
      'El texto dice: "After many hours without eating, the body needs energy to start the morning, and breakfast provides it." El cuerpo necesita energía tras muchas horas sin comer.',
  },
  {
    id: 'rc-q5',
    topic: 'Text Q: Inference',
    passage:
      'Breakfast is often called the most important meal of the day. After many hours without eating, the body needs energy to start the morning, and breakfast provides it. People who eat a healthy breakfast tend to concentrate better at school or work. Nutritionists recommend including fruit, whole grains, and protein, rather than only sugary products. However, they warn that a balanced breakfast should be accompanied by good habits throughout the day.',
    question: 'A student always skips breakfast and feels tired in class. What would the text suggest?',
    options: [
      'That he should sleep during class.',
      'That skipping breakfast has no effect.',
      'That he should eat only sugar.',
      'That eating a healthy breakfast could help him concentrate.',
    ],
    answer: 3,
    explanation:
      'Se infiere del texto que el desayuno aporta energía y ayuda a concentrarse. Ese estudiante podría mejorar si desayuna de forma saludable.',
  },
  {
    id: 'rc-r1',
    topic: 'Text R: Main idea',
    passage:
      'Bees are small insects, but they play a huge role in nature. When bees travel from flower to flower looking for nectar, they carry pollen, which helps plants produce fruits and seeds. Scientists estimate that bees are responsible for pollinating about one third of the food we eat. In recent years, however, the number of bees has decreased dramatically. Experts warn that protecting bees means protecting our own food supply.',
    question: 'What is the main idea of the passage?',
    options: [
      'Bees are essential for food production and should be protected.',
      'Bees are dangerous insects that must be eliminated.',
      'Bees only produce honey for the winter.',
      'Bees do not help plants at all.',
    ],
    answer: 0,
    explanation:
      'El texto explica que las abejas polinizan gran parte de los alimentos y que su número está disminuyendo. Por eso deben protegerse. Esa es la idea central.',
  },
  {
    id: 'rc-r2',
    topic: 'Text R: Factual comprehension',
    passage:
      'Bees are small insects, but they play a huge role in nature. When bees travel from flower to flower looking for nectar, they carry pollen, which helps plants produce fruits and seeds. Scientists estimate that bees are responsible for pollinating about one third of the food we eat. In recent years, however, the number of bees has decreased dramatically. Experts warn that protecting bees means protecting our own food supply.',
    question: 'According to the text, what do bees carry when they travel from flower to flower?',
    options: ['Fruit', 'Seeds of big trees', 'Honey', 'Pollen'],
    answer: 3,
    explanation:
      'El texto dice: "When bees travel from flower to flower, they carry pollen, which helps plants produce fruits and seeds." Las abejas transportan polen.',
  },
  {
    id: 'rc-r3',
    topic: 'Text R: Vocabulary in context',
    passage:
      'Bees are small insects, but they play a huge role in nature. When bees travel from flower to flower looking for nectar, they carry pollen, which helps plants produce fruits and seeds. Scientists estimate that bees are responsible for pollinating about one third of the food we eat. In recent years, however, the number of bees has decreased dramatically. Experts warn that protecting bees means protecting our own food supply.',
    question: 'In the text, the word "pollinating" means…',
    options: [
      'cutting down flowers in the field',
      'transferring pollen so plants can produce fruits and seeds',
      'making flowers cold and dry',
      'watering the plants every day',
    ],
    answer: 1,
    explanation:
      '"Pollinating" es polinizar: transferir polen de flor en flor, lo que permite que las plantas produzcan frutos y semillas.',
  },
  {
    id: 'rc-r4',
    topic: 'Text R: Detail',
    passage:
      'Bees are small insects, but they play a huge role in nature. When bees travel from flower to flower looking for nectar, they carry pollen, which helps plants produce fruits and seeds. Scientists estimate that bees are responsible for pollinating about one third of the food we eat. In recent years, however, the number of bees has decreased dramatically. Experts warn that protecting bees means protecting our own food supply.',
    question: 'According to the text, how much of our food is pollinated by bees?',
    options: [
      'All of the food we eat',
      'Almost none of it',
      'About one third',
      'Exactly fifty percent',
    ],
    answer: 2,
    explanation:
      'El texto estima que las abejas polinizan "about one third of the food we eat", aproximadamente un tercio de los alimentos, no la mitad ni todo.',
  },
  {
    id: 'rc-r5',
    topic: 'Text R: Author\'s purpose',
    passage:
      'Bees are small insects, but they play a huge role in nature. When bees travel from flower to flower looking for nectar, they carry pollen, which helps plants produce fruits and seeds. Scientists estimate that bees are responsible for pollinating about one third of the food we eat. In recent years, however, the number of bees has decreased dramatically. Experts warn that protecting bees means protecting our own food supply.',
    question: 'What is the author\'s main purpose in writing this text?',
    options: [
      'To teach readers how to make honey at home',
      'To warn that bees are in danger and need to be protected',
      'To advertise a honey farm',
      'To show that bees are useless insects',
    ],
    answer: 1,
    explanation:
      'El texto informa sobre la importancia de las abejas y cierra con un llamado: "protecting bees means protecting our own food supply." Su propósito es advertir.',
  },
  {
    id: 'rc-s1',
    topic: 'Text S: Main idea',
    passage:
      'Robots are machines that can do tasks automatically, and they are already part of our daily life. In factories, robots assemble cars faster and more precisely than humans. In hospitals, robot arms help doctors during operations. Some homes have robots that clean the floor while people are away. Although robots do not think like humans, they can repeat tasks many times without getting tired, which makes them very useful in many jobs.',
    question: 'What is the main idea of the passage?',
    options: [
      'Robots are useful machines that already appear in many areas of daily life.',
      'Robots will soon replace all humans in the world.',
      'Robots can think and feel like humans.',
      'Robots only exist in science-fiction movies.',
    ],
    answer: 0,
    explanation:
      'El texto muestra dónde se usan los robots (fábricas, hospitales, casas) y por qué son útiles. Esa es la idea central.',
  },
  {
    id: 'rc-s2',
    topic: 'Text S: Factual comprehension',
    passage:
      'Robots are machines that can do tasks automatically, and they are already part of our daily life. In factories, robots assemble cars faster and more precisely than humans. In hospitals, robot arms help doctors during operations. Some homes have robots that clean the floor while people are away. Although robots do not think like humans, they can repeat tasks many times without getting tired, which makes them very useful in many jobs.',
    question: 'Where do robots help doctors, according to the text?',
    options: [
      'In schools',
      'In hospitals, during operations',
      'In restaurants',
      'In airports',
    ],
    answer: 1,
    explanation:
      'El texto dice: "In hospitals, robot arms help doctors during operations." Los robots ayudan a los médicos en los hospitales durante las operaciones.',
  },
  {
    id: 'rc-s3',
    topic: 'Text S: Vocabulary in context',
    passage:
      'Robots are machines that can do tasks automatically, and they are already part of our daily life. In factories, robots assemble cars faster and more precisely than humans. In hospitals, robot arms help doctors during operations. Some homes have robots that clean the floor while people are away. Although robots do not think like humans, they can repeat tasks many times without getting tired, which makes them very useful in many jobs.',
    question: 'The word "precisely" in the text means…',
    options: [
      'accurately and exactly',
      'slowly and carelessly',
      'in a loud way',
      'very rarely',
    ],
    answer: 0,
    explanation:
      '"More precisely than humans" significa con más precisión, es decir, con exactitud. Los robots ensamblan autos con gran exactitud.',
  },
  {
    id: 'rc-s4',
    topic: 'Text S: Detail',
    passage:
      'Robots are machines that can do tasks automatically, and they are already part of our daily life. In factories, robots assemble cars faster and more precisely than humans. In hospitals, robot arms help doctors during operations. Some homes have robots that clean the floor while people are away. Although robots do not think like humans, they can repeat tasks many times without getting tired, which makes them very useful in many jobs.',
    question: 'According to the text, why are robots useful in many jobs?',
    options: [
      'Because they think like humans',
      'Because they can repeat tasks without getting tired',
      'Because they can have conversations',
      'Because they need long breaks',
    ],
    answer: 1,
    explanation:
      'El texto dice: "they can repeat tasks many times without getting tired, which makes them very useful in many jobs." Pueden repetir tareas sin cansarse.',
  },
  {
    id: 'rc-s5',
    topic: 'Text S: Inference',
    passage:
      'Robots are machines that can do tasks automatically, and they are already part of our daily life. In factories, robots assemble cars faster and more precisely than humans. In hospitals, robot arms help doctors during operations. Some homes have robots that clean the floor while people are away. Although robots do not think like humans, they can repeat tasks many times without getting tired, which makes them very useful in many jobs.',
    question: 'Based on the text, what is one limitation robots have compared to humans?',
    options: [
      'They get tired very quickly.',
      'They make many mistakes.',
      'They do not think like humans.',
      'They work very slowly.',
    ],
    answer: 2,
    explanation:
      'El texto afirma: "robots do not think like humans." Esa es la limitación que menciona en comparación con los humanos.',
  },
  {
    id: 'rc-t1',
    topic: 'Text T: Main idea',
    passage:
      'Vaccines have saved millions of lives since the eighteenth century. When a person receives a vaccine, the body learns to recognize a disease and becomes stronger against it. Vaccination is the reason why diseases such as smallpox have disappeared completely. Around the world, vaccination campaigns protect children from illnesses like measles and polio. Because of vaccines, many dangerous diseases that killed people in the past no longer spread as easily.',
    question: 'What is the main idea of the passage?',
    options: [
      'Vaccines protect people from dangerous diseases and save millions of lives.',
      'Vaccines were invented in the twentieth century.',
      'Vaccines only protect adults.',
      'Smallpox still kills many people today.',
    ],
    answer: 0,
    explanation:
      'El texto explica cómo funcionan las vacunas y cómo han eliminado enfermedades y salvado vidas. Esa es la idea central.',
  },
  {
    id: 'rc-t2',
    topic: 'Text T: Factual comprehension',
    passage:
      'Vaccines have saved millions of lives since the eighteenth century. When a person receives a vaccine, the body learns to recognize a disease and becomes stronger against it. Vaccination is the reason why diseases such as smallpox have disappeared completely. Around the world, vaccination campaigns protect children from illnesses like measles and polio. Because of vaccines, many dangerous diseases that killed people in the past no longer spread as easily.',
    question: 'Which disease has disappeared completely thanks to vaccination, according to the text?',
    options: ['The common cold', 'Headache', 'Smallpox', 'Asthma'],
    answer: 2,
    explanation:
      'El texto dice: "Vaccination is the reason why diseases such as smallpox have disappeared completely." La viruela (smallpox) desapareció por la vacunación.',
  },
  {
    id: 'rc-t3',
    topic: 'Text T: Vocabulary in context',
    passage:
      'Vaccines have saved millions of lives since the eighteenth century. When a person receives a vaccine, the body learns to recognize a disease and becomes stronger against it. Vaccination is the reason why diseases such as smallpox have disappeared completely. Around the world, vaccination campaigns protect children from illnesses like measles and polio. Because of vaccines, many dangerous diseases that killed people in the past no longer spread as easily.',
    question: 'The phrase "has saved millions of lives" in the text means…',
    options: [
      'has made many people sick',
      'has prevented many people from dying',
      'has cost a lot of money',
      'has started many wars',
    ],
    answer: 1,
    explanation:
      '"Save lives" significa salvar vidas, es decir, evitar que las personas mueran. Por eso las vacunas han impedido millones de muertes.',
  },
  {
    id: 'rc-t4',
    topic: 'Text T: Detail',
    passage:
      'Vaccines have saved millions of lives since the eighteenth century. When a person receives a vaccine, the body learns to recognize a disease and becomes stronger against it. Vaccination is the reason why diseases such as smallpox have disappeared completely. Around the world, vaccination campaigns protect children from illnesses like measles and polio. Because of vaccines, many dangerous diseases that killed people in the past no longer spread as easily.',
    question: 'According to the text, what happens when a person receives a vaccine?',
    options: [
      'The body learns to recognize a disease and becomes stronger against it.',
      'The person immediately becomes sick with that disease.',
      'Nothing changes in the body.',
      'The person can never work again.',
    ],
    answer: 0,
    explanation:
      'El texto dice: "the body learns to recognize a disease and becomes stronger against it." El cuerpo aprende a reconocer la enfermedad y se fortalece.',
  },
  {
    id: 'rc-t5',
    topic: 'Text T: Author\'s purpose',
    passage:
      'Vaccines have saved millions of lives since the eighteenth century. When a person receives a vaccine, the body learns to recognize a disease and becomes stronger against it. Vaccination is the reason why diseases such as smallpox have disappeared completely. Around the world, vaccination campaigns protect children from illnesses like measles and polio. Because of vaccines, many dangerous diseases that killed people in the past no longer spread as easily.',
    question: 'What is the author\'s purpose in writing this text?',
    options: [
      'To entertain readers with a funny story',
      'To sell medical equipment',
      'To explain the importance of vaccines',
      'To compare two different viruses',
    ],
    answer: 2,
    explanation:
      'Todo el texto es informativo y explica por qué las vacunas son importantes para la salud. Su propósito es informar y explicar.',
  },
  {
    id: 'rc-aa1',
    topic: 'Text aa: Main idea',
    passage: 'When Rosa turned fifteen, her uncle offered her a summer job at his fruit stand in the central market. On her first morning, she arrived before the sun came up and helped arrange oranges into tall pyramids. Her uncle taught her to choose ripe fruit by its smell and color. At noon, a woman complained that a bag of mangoes was too heavy and asked for her money back. Rosa felt nervous, but her uncle smiled and offered the woman a smaller bag with fresh mangoes at a lower price. The woman left happy. By the end of the day, Rosa had learned that a good seller listens to the customer. That lesson was worth more than the money she earned.',
    question: 'What is the main idea of the passage?',
    options: ['Rosa learns that listening to customers is an important part of making a sale.', 'The central market sells only oranges and mangoes.', 'Summer jobs are always easy and pleasant.', 'Rosa\'s uncle never smiles at his customers.'],
    answer: 0,
    explanation: 'The passage centers on Rosa learning that listening to the customer is the key to selling well, shown by the mango story. Option 1 is false because the market clearly sells more than two fruits, option 2 contradicts the hard work described, and option 3 is not mentioned.',
  },
  {
    id: 'rc-aa2',
    topic: 'Text aa: Vocabulary in context',
    passage: 'When Rosa turned fifteen, her uncle offered her a summer job at his fruit stand in the central market. On her first morning, she arrived before the sun came up and helped arrange oranges into tall pyramids. Her uncle taught her to choose ripe fruit by its smell and color. At noon, a woman complained that a bag of mangoes was too heavy and asked for her money back. Rosa felt nervous, but her uncle smiled and offered the woman a smaller bag with fresh mangoes at a lower price. The woman left happy. By the end of the day, Rosa had learned that a good seller listens to the customer. That lesson was worth more than the money she earned.',
    question: 'In the first paragraph, the word arrange most nearly means:',
    options: ['to divide into equal parts', 'to put in order', 'to carry away', 'to weigh with care'],
    answer: 1,
    explanation: 'In the text, Rosa helps put the oranges in order, so arrange means to put in order. To divide, to carry away, and to weigh do not fit what Rosa does with the oranges.',
  },
  {
    id: 'rc-aa3',
    topic: 'Text aa: Detail',
    passage: 'When Rosa turned fifteen, her uncle offered her a summer job at his fruit stand in the central market. On her first morning, she arrived before the sun came up and helped arrange oranges into tall pyramids. Her uncle taught her to choose ripe fruit by its smell and color. At noon, a woman complained that a bag of mangoes was too heavy and asked for her money back. Rosa felt nervous, but her uncle smiled and offered the woman a smaller bag with fresh mangoes at a lower price. The woman left happy. By the end of the day, Rosa had learned that a good seller listens to the customer. That lesson was worth more than the money she earned.',
    question: 'Who complained that a bag of mangoes was too heavy?',
    options: ['Rosa.', 'Rosa\'s uncle.', 'A woman customer.', 'A market guard.'],
    answer: 2,
    explanation: 'The passage states that a woman complained about the heavy bag of mangoes. Rosa\'s uncle solved the problem, so option 1 is wrong, Rosa was nervous but did not complain, and no guard appears in the text.',
  },
  {
    id: 'rc-aa4',
    topic: 'Text aa: Inference',
    passage: 'When Rosa turned fifteen, her uncle offered her a summer job at his fruit stand in the central market. On her first morning, she arrived before the sun came up and helped arrange oranges into tall pyramids. Her uncle taught her to choose ripe fruit by its smell and color. At noon, a woman complained that a bag of mangoes was too heavy and asked for her money back. Rosa felt nervous, but her uncle smiled and offered the woman a smaller bag with fresh mangoes at a lower price. The woman left happy. By the end of the day, Rosa had learned that a good seller listens to the customer. That lesson was worth more than the money she earned.',
    question: 'Why did the woman leave the market happy?',
    options: ['Because Rosa gave her the heavy bag for free.', 'Because the store was closing early.', 'Because her money was returned in full.', 'Because her uncle offered a smaller bag at a lower price and listened to her problem.'],
    answer: 3,
    explanation: 'The uncle offered the woman a smaller bag with fresh mangoes at a lower price and listened to her complaint, so she left happy. She did not receive the heavy bag for free, the store did not close, and her money was not simply returned.',
  },
  {
    id: 'rc-aa5',
    topic: 'Text aa: Author\'s purpose',
    passage: 'When Rosa turned fifteen, her uncle offered her a summer job at his fruit stand in the central market. On her first morning, she arrived before the sun came up and helped arrange oranges into tall pyramids. Her uncle taught her to choose ripe fruit by its smell and color. At noon, a woman complained that a bag of mangoes was too heavy and asked for her money back. Rosa felt nervous, but her uncle smiled and offered the woman a smaller bag with fresh mangoes at a lower price. The woman left happy. By the end of the day, Rosa had learned that a good seller listens to the customer. That lesson was worth more than the money she earned.',
    question: 'What is the author\'s main purpose in this passage?',
    options: ['To teach a lesson about listening to customers.', 'To explain how to grow good mangoes.', 'To advertise a fruit stand in the market.', 'To compare prices in different cities.'],
    answer: 0,
    explanation: 'The story is written to teach a lesson about serving customers well, not to explain agriculture, advertise the stand, or compare markets.',
  },
  {
    id: 'rc-ab1',
    topic: 'Text ab: Main idea',
    passage: 'For three weeks, a small brown dog slept near the gate of Luis\'s house. It looked thin, and its tail never moved when people passed by. Luis\'s mother told him not to feed the dog because it might belong to a neighbor. One rainy evening, the dog was still there, shivering under a bush. Luis could not watch it any longer. He took a bowl of rice and a little chicken and placed them near the gate. The dog ate slowly and then followed him to the door. From that day, the dog waited for Luis every afternoon at the same hour. Its tail began to wag, and its coat grew shinier. Luis\'s mother smiled and said the animal had found a family.',
    question: 'What is the passage mainly about?',
    options: ['How to cook rice and chicken for pets.', 'How a stray dog slowly finds a family with Luis and his mother.', 'Why neighbors must keep their dogs inside their houses.', 'Which afternoon is the best time to walk a dog.'],
    answer: 1,
    explanation: 'The passage follows the stray dog from the gate to the family, so the main idea is how the dog finds a home. Cooking, neighbor rules, and walking times are not developed in the text.',
  },
  {
    id: 'rc-ab2',
    topic: 'Text ab: Vocabulary in context',
    passage: 'For three weeks, a small brown dog slept near the gate of Luis\'s house. It looked thin, and its tail never moved when people passed by. Luis\'s mother told him not to feed the dog because it might belong to a neighbor. One rainy evening, the dog was still there, shivering under a bush. Luis could not watch it any longer. He took a bowl of rice and a little chicken and placed them near the gate. The dog ate slowly and then followed him to the door. From that day, the dog waited for Luis every afternoon at the same hour. Its tail began to wag, and its coat grew shinier. Luis\'s mother smiled and said the animal had found a family.',
    question: 'In the passage, the word shivering most nearly means:',
    options: ['running quickly away', 'barking without stopping', 'shaking because of the cold', 'sleeping very deeply'],
    answer: 2,
    explanation: 'The dog was shaking because of the cold rain, so shivering means shaking from cold. Running, barking, and sleeping deeply do not match the description.',
  },
  {
    id: 'rc-ab3',
    topic: 'Text ab: Factual comprehension',
    passage: 'For three weeks, a small brown dog slept near the gate of Luis\'s house. It looked thin, and its tail never moved when people passed by. Luis\'s mother told him not to feed the dog because it might belong to a neighbor. One rainy evening, the dog was still there, shivering under a bush. Luis could not watch it any longer. He took a bowl of rice and a little chicken and placed them near the gate. The dog ate slowly and then followed him to the door. From that day, the dog waited for Luis every afternoon at the same hour. Its tail began to wag, and its coat grew shinier. Luis\'s mother smiled and said the animal had found a family.',
    question: 'What did Luis give the dog to eat?',
    options: ['A bowl of milk.', 'A plate of vegetables.', 'A piece of sweet cake.', 'A bowl of rice with a little chicken.'],
    answer: 3,
    explanation: 'Luis took a bowl of rice with a little chicken to the dog. Milk, vegetables, and cake are not mentioned.',
  },
  {
    id: 'rc-ab4',
    topic: 'Text ab: Inference',
    passage: 'For three weeks, a small brown dog slept near the gate of Luis\'s house. It looked thin, and its tail never moved when people passed by. Luis\'s mother told him not to feed the dog because it might belong to a neighbor. One rainy evening, the dog was still there, shivering under a bush. Luis could not watch it any longer. He took a bowl of rice and a little chicken and placed them near the gate. The dog ate slowly and then followed him to the door. From that day, the dog waited for Luis every afternoon at the same hour. Its tail began to wag, and its coat grew shinier. Luis\'s mother smiled and said the animal had found a family.',
    question: 'What shows that the dog felt better as the days passed?',
    options: ['Its tail began to wag and its coat grew shinier.', 'It slept under the same bush every night.', 'It stopped waiting at the gate.', 'It followed other people in the street.'],
    answer: 0,
    explanation: 'The text says the dog\'s tail began to wag and its coat grew shinier, which shows the dog felt better. The other options describe situations that do not appear or make the reader doubt.',
  },
  {
    id: 'rc-ab5',
    topic: 'Text ab: Tone',
    passage: 'For three weeks, a small brown dog slept near the gate of Luis\'s house. It looked thin, and its tail never moved when people passed by. Luis\'s mother told him not to feed the dog because it might belong to a neighbor. One rainy evening, the dog was still there, shivering under a bush. Luis could not watch it any longer. He took a bowl of rice and a little chicken and placed them near the gate. The dog ate slowly and then followed him to the door. From that day, the dog waited for Luis every afternoon at the same hour. Its tail began to wag, and its coat grew shinier. Luis\'s mother smiled and said the animal had found a family.',
    question: 'The tone of this passage is best described as:',
    options: ['cold and scientific', 'warm and gentle', 'angry and critical', 'strange and frightening'],
    answer: 1,
    explanation: 'The story is told with kindness and tenderness, so the tone is warm and gentle. It is not scientific, angry, or frightening.',
  },
  {
    id: 'rc-ac1',
    topic: 'Text ac: Main idea',
    passage: 'Adriana was twelve and the only girl in her street who could not ride a bicycle. Every afternoon she watched her cousins race around the block, their laughter floating over the fence. One Sunday, her father brought home a used blue bicycle and announced that today they would learn. The street was empty, and the air was cool. Adriana fell many times, once hurting her knee on the pavement. Her father did not get angry; he simply helped her up and reminded her to look ahead, not down at the wheels. After two hours, she managed to ride a full block without stopping. She turned and shouted to her father. He was running behind her, and his face was full of pride. That bicycle later took her to school every morning for three years.',
    question: 'What is the best summary of this passage?',
    options: ['Bicycle races in the street are dangerous for small children.', 'Used bicycles are inexpensive and always reliable.', 'Adriana learns to ride a bicycle with patience and support from her father.', 'Adriana\'s cousins taught the whole street how to race.'],
    answer: 2,
    explanation: 'The passage narrates how Adriana practiced with her father until she could ride a full block, so the best summary is that she learned with patience and support. Racing dangers, bicycle prices, and teaching the street are not the focus.',
  },
  {
    id: 'rc-ac2',
    topic: 'Text ac: Vocabulary in context',
    passage: 'Adriana was twelve and the only girl in her street who could not ride a bicycle. Every afternoon she watched her cousins race around the block, their laughter floating over the fence. One Sunday, her father brought home a used blue bicycle and announced that today they would learn. The street was empty, and the air was cool. Adriana fell many times, once hurting her knee on the pavement. Her father did not get angry; he simply helped her up and reminded her to look ahead, not down at the wheels. After two hours, she managed to ride a full block without stopping. She turned and shouted to her father. He was running behind her, and his face was full of pride. That bicycle later took her to school every morning for three years.',
    question: 'In the text, floating laughter suggests that the sound was:',
    options: ['heavy and unpleasant', 'sad and secret', 'better heard at night', 'light and carried through the air'],
    answer: 3,
    explanation: 'Floating laughter sounds light and carried through the air, like the cousins riding and playing. Heavy, sad, or night sounds do not match the word.',
  },
  {
    id: 'rc-ac3',
    topic: 'Text ac: Detail',
    passage: 'Adriana was twelve and the only girl in her street who could not ride a bicycle. Every afternoon she watched her cousins race around the block, their laughter floating over the fence. One Sunday, her father brought home a used blue bicycle and announced that today they would learn. The street was empty, and the air was cool. Adriana fell many times, once hurting her knee on the pavement. Her father did not get angry; he simply helped her up and reminded her to look ahead, not down at the wheels. After two hours, she managed to ride a full block without stopping. She turned and shouted to her father. He was running behind her, and his face was full of pride. That bicycle later took her to school every morning for three years.',
    question: 'What advice did Adriana\'s father repeat while she practiced?',
    options: ['To look ahead instead of down at the wheels.', 'To hold the handlebars very tightly.', 'To use the brakes on every corner.', 'To call for help if she fell.'],
    answer: 0,
    explanation: 'Her father reminded her to look ahead instead of down at the wheels. The other pieces of advice are not mentioned.',
  },
  {
    id: 'rc-ac4',
    topic: 'Text ac: Inference',
    passage: 'Adriana was twelve and the only girl in her street who could not ride a bicycle. Every afternoon she watched her cousins race around the block, their laughter floating over the fence. One Sunday, her father brought home a used blue bicycle and announced that today they would learn. The street was empty, and the air was cool. Adriana fell many times, once hurting her knee on the pavement. Her father did not get angry; he simply helped her up and reminded her to look ahead, not down at the wheels. After two hours, she managed to ride a full block without stopping. She turned and shouted to her father. He was running behind her, and his face was full of pride. That bicycle later took her to school every morning for three years.',
    question: 'What can we infer about Adriana\'s father from the passage?',
    options: ['He did not enjoy spending the afternoon outside.', 'He was proud and patient when his daughter succeeded.', 'He believed that girls should not ride bicycles.', 'He bought a new bicycle every single week.'],
    answer: 1,
    explanation: 'The text says her father ran behind her with a face full of pride and never got angry, so we can infer he was proud and patient. The other options contradict the story.',
  },
  {
    id: 'rc-ac5',
    topic: 'Text ac: Author\'s purpose',
    passage: 'Adriana was twelve and the only girl in her street who could not ride a bicycle. Every afternoon she watched her cousins race around the block, their laughter floating over the fence. One Sunday, her father brought home a used blue bicycle and announced that today they would learn. The street was empty, and the air was cool. Adriana fell many times, once hurting her knee on the pavement. Her father did not get angry; he simply helped her up and reminded her to look ahead, not down at the wheels. After two hours, she managed to ride a full block without stopping. She turned and shouted to her father. He was running behind her, and his face was full of pride. That bicycle later took her to school every morning for three years.',
    question: 'The author wrote this passage mainly to:',
    options: ['explain how bicycle wheels are made', 'describe the traffic rules of the street', 'tell a personal experience of learning something difficult with support', 'advertise the brand of a used bicycle'],
    answer: 2,
    explanation: 'This is a personal narrative about learning something difficult with help, so the purpose is to tell that experience. It is not an explanation of wheels, a traffic lesson, or an advertisement.',
  },
  {
    id: 'rc-ad1',
    topic: 'Text ad: Main idea',
    passage: 'It started to rain as soon as the bus left. Daniela pushed open the door of her building and realized she had left her umbrella at her grandmother\'s house. Frowning, she pulled her coat over her head and began to walk. Halfway home, she noticed an old man standing under the thin roof of a shop, staring at the heavy rain. His shirt sleeves were already wet. Daniela stopped, took off her coat, and held it over both of them as they walked to the corner. When they parted, the man thanked her quietly and disappeared into the crowd. At home, Daniela was soaked, and her mother laughed, saying she looked like a wet bird. Daniela only smiled. She knew that sharing a coat was better than keeping a dry one for herself.',
    question: 'What is the main idea of this passage?',
    options: ['Umbrellas are not useful during heavy storms.', 'Daniela left her coat at the bus station.', 'Grandmothers should keep their umbrellas at home.', 'Daniela shares her coat with an old man in the rain and feels glad about her decision.'],
    answer: 3,
    explanation: 'Daniela gives her own coat to shelter an old man and later feels glad, so the main idea is about sharing in the rain. Umbrellas, the bus station, and grandmothers are side details, not the main idea.',
  },
  {
    id: 'rc-ad2',
    topic: 'Text ad: Vocabulary in context',
    passage: 'It started to rain as soon as the bus left. Daniela pushed open the door of her building and realized she had left her umbrella at her grandmother\'s house. Frowning, she pulled her coat over her head and began to walk. Halfway home, she noticed an old man standing under the thin roof of a shop, staring at the heavy rain. His shirt sleeves were already wet. Daniela stopped, took off her coat, and held it over both of them as they walked to the corner. When they parted, the man thanked her quietly and disappeared into the crowd. At home, Daniela was soaked, and her mother laughed, saying she looked like a wet bird. Daniela only smiled. She knew that sharing a coat was better than keeping a dry one for herself.',
    question: 'At the end of the passage, the word parted means:',
    options: ['said goodbye and separated', 'argued about the route', 'met again later', 'ran towards home'],
    answer: 0,
    explanation: 'When the two parted, they said goodbye and went their separate ways. Arguing, meeting again, or running home do not fit the context of leaving at the corner.',
  },
  {
    id: 'rc-ad3',
    topic: 'Text ad: Factual comprehension',
    passage: 'It started to rain as soon as the bus left. Daniela pushed open the door of her building and realized she had left her umbrella at her grandmother\'s house. Frowning, she pulled her coat over her head and began to walk. Halfway home, she noticed an old man standing under the thin roof of a shop, staring at the heavy rain. His shirt sleeves were already wet. Daniela stopped, took off her coat, and held it over both of them as they walked to the corner. When they parted, the man thanked her quietly and disappeared into the crowd. At home, Daniela was soaked, and her mother laughed, saying she looked like a wet bird. Daniela only smiled. She knew that sharing a coat was better than keeping a dry one for herself.',
    question: 'Why could Daniela not use her umbrella?',
    options: ['An old man took it from her building.', 'She left it at her grandmother\'s house.', 'The bus broke it on the way home.', 'Her mother borrowed it before the rain.'],
    answer: 1,
    explanation: 'The text says Daniela realized she had left her umbrella at her grandmother\'s house. No one took it, the bus did not break it, and her mother did not borrow it.',
  },
  {
    id: 'rc-ad4',
    topic: 'Text ad: Inference',
    passage: 'It started to rain as soon as the bus left. Daniela pushed open the door of her building and realized she had left her umbrella at her grandmother\'s house. Frowning, she pulled her coat over her head and began to walk. Halfway home, she noticed an old man standing under the thin roof of a shop, staring at the heavy rain. His shirt sleeves were already wet. Daniela stopped, took off her coat, and held it over both of them as they walked to the corner. When they parted, the man thanked her quietly and disappeared into the crowd. At home, Daniela was soaked, and her mother laughed, saying she looked like a wet bird. Daniela only smiled. She knew that sharing a coat was better than keeping a dry one for herself.',
    question: 'How do we know the old man was grateful to Daniela?',
    options: ['He offered her money for the coat.', 'He invited her to his shop.', 'He thanked her quietly before he walked away.', 'He smiled at the rain as he left.'],
    answer: 2,
    explanation: 'The old man thanked her quietly before disappearing, which shows gratitude. He did not pay her, invite her anywhere, or smile at the rain.',
  },
  {
    id: 'rc-ad5',
    topic: 'Text ad: Tone',
    passage: 'It started to rain as soon as the bus left. Daniela pushed open the door of her building and realized she had left her umbrella at her grandmother\'s house. Frowning, she pulled her coat over her head and began to walk. Halfway home, she noticed an old man standing under the thin roof of a shop, staring at the heavy rain. His shirt sleeves were already wet. Daniela stopped, took off her coat, and held it over both of them as they walked to the corner. When they parted, the man thanked her quietly and disappeared into the crowd. At home, Daniela was soaked, and her mother laughed, saying she looked like a wet bird. Daniela only smiled. She knew that sharing a coat was better than keeping a dry one for herself.',
    question: 'The tone of this passage is best described as:',
    options: ['frightened and nervous', 'angry and violent', 'completely humorous', 'content and kind'],
    answer: 3,
    explanation: 'The story ends with Daniela satisfied with her decision, so the tone is content and kind. It is not frightened, angry, or dominated by humor.',
  },
  {
    id: 'rc-ae1',
    topic: 'Text ae: Main idea',
    passage: 'Every summer, Omar\'s grandfather took him to the hill outside their town to fly kites. They built each kite together, using thin sticks, old paper, and string. The grandfather\'s hands were rough from years of work, but they were gentle with the paper. He taught Omar to feel the wind first, by closing his eyes and turning his face until the air touched his cheeks evenly. The old man liked to say that the wind talks if you listen. One afternoon, the string broke and the red kite danced away into the clouds. Omar expected his grandfather to be upset. Instead, the old man laughed and said that the kite had decided to travel. They watched it until it was a small red dot in the sky. He promised they would make a better one, and they did, the very next Sunday.',
    question: 'What is the main idea of the passage?',
    options: ['Omar and his grandfather build and fly kites together, sharing a calm and happy tradition.', 'Kites can only fly during the summer months.', 'Old paper kites always break in the wind.', 'Omar\'s grandfather was once a famous pilot.'],
    answer: 0,
    explanation: 'The passage presents the tradition of building and flying kites with the grandfather and accepting the day the kite flew away. It is not about seasons, old paper, or a pilot.',
  },
  {
    id: 'rc-ae2',
    topic: 'Text ae: Vocabulary in context',
    passage: 'Every summer, Omar\'s grandfather took him to the hill outside their town to fly kites. They built each kite together, using thin sticks, old paper, and string. The grandfather\'s hands were rough from years of work, but they were gentle with the paper. He taught Omar to feel the wind first, by closing his eyes and turning his face until the air touched his cheeks evenly. The old man liked to say that the wind talks if you listen. One afternoon, the string broke and the red kite danced away into the clouds. Omar expected his grandfather to be upset. Instead, the old man laughed and said that the kite had decided to travel. They watched it until it was a small red dot in the sky. He promised they would make a better one, and they did, the very next Sunday.',
    question: 'In the text, the wind touches the boy\'s cheeks evenly, which means:',
    options: ['in a strong and sudden way', 'on both sides in a balanced way', 'only from the front', 'with little force at night'],
    answer: 1,
    explanation: 'Evenly means in a balanced way, here touching both cheeks. Strong, sudden, one-sided, or weak night air do not match the idea of listening to the wind.',
  },
  {
    id: 'rc-ae3',
    topic: 'Text ae: Detail',
    passage: 'Every summer, Omar\'s grandfather took him to the hill outside their town to fly kites. They built each kite together, using thin sticks, old paper, and string. The grandfather\'s hands were rough from years of work, but they were gentle with the paper. He taught Omar to feel the wind first, by closing his eyes and turning his face until the air touched his cheeks evenly. The old man liked to say that the wind talks if you listen. One afternoon, the string broke and the red kite danced away into the clouds. Omar expected his grandfather to be upset. Instead, the old man laughed and said that the kite had decided to travel. They watched it until it was a small red dot in the sky. He promised they would make a better one, and they did, the very next Sunday.',
    question: 'What happened to the red kite one afternoon?',
    options: ['It fell into the river.', 'A bird tore the paper.', 'The string broke and the kite flew into the clouds.', 'The grandfather gave it to a neighbor.'],
    answer: 2,
    explanation: 'The string broke and the red kite flew into the clouds. It did not fall into a river, was not torn by a bird, and was not given away.',
  },
  {
    id: 'rc-ae4',
    topic: 'Text ae: Inference',
    passage: 'Every summer, Omar\'s grandfather took him to the hill outside their town to fly kites. They built each kite together, using thin sticks, old paper, and string. The grandfather\'s hands were rough from years of work, but they were gentle with the paper. He taught Omar to feel the wind first, by closing his eyes and turning his face until the air touched his cheeks evenly. The old man liked to say that the wind talks if you listen. One afternoon, the string broke and the red kite danced away into the clouds. Omar expected his grandfather to be upset. Instead, the old man laughed and said that the kite had decided to travel. They watched it until it was a small red dot in the sky. He promised they would make a better one, and they did, the very next Sunday.',
    question: 'How did the grandfather react when the kite flew away?',
    options: ['He was upset and ended the visit.', 'He blamed Omar for the accident.', 'He promised never to build kites again.', 'He laughed and said that the kite had decided to travel.'],
    answer: 3,
    explanation: 'The grandfather laughed and said the kite had decided to travel, so he was not upset. The other options describe reactions that did not happen.',
  },
  {
    id: 'rc-ae5',
    topic: 'Text ae: Tone',
    passage: 'Every summer, Omar\'s grandfather took him to the hill outside their town to fly kites. They built each kite together, using thin sticks, old paper, and string. The grandfather\'s hands were rough from years of work, but they were gentle with the paper. He taught Omar to feel the wind first, by closing his eyes and turning his face until the air touched his cheeks evenly. The old man liked to say that the wind talks if you listen. One afternoon, the string broke and the red kite danced away into the clouds. Omar expected his grandfather to be upset. Instead, the old man laughed and said that the kite had decided to travel. They watched it until it was a small red dot in the sky. He promised they would make a better one, and they did, the very next Sunday.',
    question: 'The tone of this passage is best described as:',
    options: ['nostalgic and warm', 'serious and technical', 'cold and impersonal', 'angry and disappointed'],
    answer: 0,
    explanation: 'The memory of building kites with the grandfather is told with affection, so the tone is nostalgic and warm. It is not technical, cold, or angry.',
  },
  {
    id: 'rc-af1',
    topic: 'Text af: Main idea',
    passage: 'Water is always moving and changing form, and this movement is called the water cycle. The sun heats lakes, rivers, and oceans, turning some of the water into vapor. This process, called evaporation, carries water silently into the sky. As the vapor rises, it cools and forms clouds in a process called condensation. When the clouds cannot hold more water, it falls back to earth as rain, snow, or hail. Falling water is called precipitation. Some of this water runs into rivers and returns to the ocean, while some sinks into the soil to feed plants. Eventually the sun heats the water again, and the cycle continues. The water we drink today may have traveled through the clouds hundreds of times before.',
    question: 'What is the passage mainly about?',
    options: ['Why the oceans are full of salt.', 'How water moves through the sky and the land in a continuous cycle.', 'How clouds are made of cotton-like fibers.', 'Why some plants drink milk from the soil.'],
    answer: 1,
    explanation: 'The passage explains evaporation, condensation, and precipitation, so the main idea is how water moves in a continuous cycle. Salt, cloud fibers, and plant milk are not discussed.',
  },
  {
    id: 'rc-af2',
    topic: 'Text af: Vocabulary in context',
    passage: 'Water is always moving and changing form, and this movement is called the water cycle. The sun heats lakes, rivers, and oceans, turning some of the water into vapor. This process, called evaporation, carries water silently into the sky. As the vapor rises, it cools and forms clouds in a process called condensation. When the clouds cannot hold more water, it falls back to earth as rain, snow, or hail. Falling water is called precipitation. Some of this water runs into rivers and returns to the ocean, while some sinks into the soil to feed plants. Eventually the sun heats the water again, and the cycle continues. The water we drink today may have traveled through the clouds hundreds of times before.',
    question: 'In the passage, the word vapor means:',
    options: ['ice that never melts', 'salt left by the sea', 'water in the form of a gas', 'rain falling from a cloud'],
    answer: 2,
    explanation: 'Vapor is water in the form of gas, produced when the sun heats water. Ice, salt, and falling rain are different states of water.',
  },
  {
    id: 'rc-af3',
    topic: 'Text af: Detail',
    passage: 'Water is always moving and changing form, and this movement is called the water cycle. The sun heats lakes, rivers, and oceans, turning some of the water into vapor. This process, called evaporation, carries water silently into the sky. As the vapor rises, it cools and forms clouds in a process called condensation. When the clouds cannot hold more water, it falls back to earth as rain, snow, or hail. Falling water is called precipitation. Some of this water runs into rivers and returns to the ocean, while some sinks into the soil to feed plants. Eventually the sun heats the water again, and the cycle continues. The water we drink today may have traveled through the clouds hundreds of times before.',
    question: 'What happens during condensation?',
    options: ['The sun heats the surface of the ocean.', 'Rivers carry water back to the sea.', 'Falling water feeds the plants.', 'Cooling vapor turns into clouds.'],
    answer: 3,
    explanation: 'During condensation, cooling vapor turns into clouds. Heating the ocean is evaporation, and the other options describe other parts of the cycle.',
  },
  {
    id: 'rc-af4',
    topic: 'Text af: Detail',
    passage: 'Water is always moving and changing form, and this movement is called the water cycle. The sun heats lakes, rivers, and oceans, turning some of the water into vapor. This process, called evaporation, carries water silently into the sky. As the vapor rises, it cools and forms clouds in a process called condensation. When the clouds cannot hold more water, it falls back to earth as rain, snow, or hail. Falling water is called precipitation. Some of this water runs into rivers and returns to the ocean, while some sinks into the soil to feed plants. Eventually the sun heats the water again, and the cycle continues. The water we drink today may have traveled through the clouds hundreds of times before.',
    question: 'Which of these is NOT mentioned as a form of precipitation?',
    options: ['Sleet.', 'Rain.', 'Snow.', 'Hail.'],
    answer: 0,
    explanation: 'The passage mentions rain, snow, and hail as forms of precipitation. Sleet is never named in the text, so it is the correct choice.',
  },
  {
    id: 'rc-af5',
    topic: 'Text af: Inference',
    passage: 'Water is always moving and changing form, and this movement is called the water cycle. The sun heats lakes, rivers, and oceans, turning some of the water into vapor. This process, called evaporation, carries water silently into the sky. As the vapor rises, it cools and forms clouds in a process called condensation. When the clouds cannot hold more water, it falls back to earth as rain, snow, or hail. Falling water is called precipitation. Some of this water runs into rivers and returns to the ocean, while some sinks into the soil to feed plants. Eventually the sun heats the water again, and the cycle continues. The water we drink today may have traveled through the clouds hundreds of times before.',
    question: 'Why does the author say that the water we drink has probably traveled through the clouds many times?',
    options: ['Because bottled water is collected directly from clouds.', 'Because the water cycle keeps reusing the same water again and again.', 'Because rain always falls on the same place.', 'Because rivers only flow towards the ocean.'],
    answer: 1,
    explanation: 'Because the water cycle reuses the same water over and over, today\'s water has passed through clouds many times. The other options are not supported by the text.',
  },
  {
    id: 'rc-ag1',
    topic: 'Text ag: Main idea',
    passage: 'The internet is a gigantic network that connects computers and phones all around the world. When you send a message, your device divides it into small pieces of data called packets. These packets travel through cables and wireless signals from one device to another, crossing cities and oceans in moments. Servers, which are powerful computers that store information, help deliver the packets to the right address. If one road is busy or broken, the data simply takes another path. That is why the internet usually continues to work even when part of a network fails. Because of this clever design, a student in Mexico City can chat with a friend in Tokyo, watch a lecture from a university in Europe, or call an uncle who lives hundreds of kilometers away. Distance no longer stops people from connecting.',
    question: 'What is the passage mainly about?',
    options: ['Why servers are sold in computer stores.', 'How underwater cables are repaired.', 'How the internet sends information between devices around the world.', 'Why messages sometimes disappear in the network.'],
    answer: 2,
    explanation: 'The passage explains how data is divided into packets and delivered by servers, so the main idea is how the internet sends information around the world. Buying servers, repairing cables, and losing messages are not the focus.',
  },
  {
    id: 'rc-ag2',
    topic: 'Text ag: Vocabulary in context',
    passage: 'The internet is a gigantic network that connects computers and phones all around the world. When you send a message, your device divides it into small pieces of data called packets. These packets travel through cables and wireless signals from one device to another, crossing cities and oceans in moments. Servers, which are powerful computers that store information, help deliver the packets to the right address. If one road is busy or broken, the data simply takes another path. That is why the internet usually continues to work even when part of a network fails. Because of this clever design, a student in Mexico City can chat with a friend in Tokyo, watch a lecture from a university in Europe, or call an uncle who lives hundreds of kilometers away. Distance no longer stops people from connecting.',
    question: 'In the text, the word packets refers to:',
    options: ['letters carried by the post office', 'plastic cases for screens', 'wireless printers', 'small pieces of data'],
    answer: 3,
    explanation: 'The text defines packets as small pieces of data. Letters, plastic cases, and printers are not part of the explanation.',
  },
  {
    id: 'rc-ag3',
    topic: 'Text ag: Factual comprehension',
    passage: 'The internet is a gigantic network that connects computers and phones all around the world. When you send a message, your device divides it into small pieces of data called packets. These packets travel through cables and wireless signals from one device to another, crossing cities and oceans in moments. Servers, which are powerful computers that store information, help deliver the packets to the right address. If one road is busy or broken, the data simply takes another path. That is why the internet usually continues to work even when part of a network fails. Because of this clever design, a student in Mexico City can chat with a friend in Tokyo, watch a lecture from a university in Europe, or call an uncle who lives hundreds of kilometers away. Distance no longer stops people from connecting.',
    question: 'Which devices help deliver the packets to the correct address?',
    options: ['Servers.', 'Radio stations.', 'Newspapers.', 'Bicycle messengers.'],
    answer: 0,
    explanation: 'The passage states that servers help deliver the packets to the right address. Radio stations, newspapers, and messengers are not mentioned.',
  },
  {
    id: 'rc-ag4',
    topic: 'Text ag: Inference',
    passage: 'The internet is a gigantic network that connects computers and phones all around the world. When you send a message, your device divides it into small pieces of data called packets. These packets travel through cables and wireless signals from one device to another, crossing cities and oceans in moments. Servers, which are powerful computers that store information, help deliver the packets to the right address. If one road is busy or broken, the data simply takes another path. That is why the internet usually continues to work even when part of a network fails. Because of this clever design, a student in Mexico City can chat with a friend in Tokyo, watch a lecture from a university in Europe, or call an uncle who lives hundreds of kilometers away. Distance no longer stops people from connecting.',
    question: 'The internet usually keeps working when part of a network fails because:',
    options: ['every message is stored in one single giant computer', 'the data can simply choose another path', 'cables never break or get busy', 'messages travel only by satellite'],
    answer: 1,
    explanation: 'The text says that if one road is busy or broken, the data takes another path, which is why the internet keeps working. The other options are not supported.',
  },
  {
    id: 'rc-ag5',
    topic: 'Text ag: Author\'s purpose',
    passage: 'The internet is a gigantic network that connects computers and phones all around the world. When you send a message, your device divides it into small pieces of data called packets. These packets travel through cables and wireless signals from one device to another, crossing cities and oceans in moments. Servers, which are powerful computers that store information, help deliver the packets to the right address. If one road is busy or broken, the data simply takes another path. That is why the internet usually continues to work even when part of a network fails. Because of this clever design, a student in Mexico City can chat with a friend in Tokyo, watch a lecture from a university in Europe, or call an uncle who lives hundreds of kilometers away. Distance no longer stops people from connecting.',
    question: 'Why does the author mention a student, a lecture, and a relative in the passage?',
    options: ['To explain how to buy a computer.', 'To prove that Tokyo has no internet.', 'To show how the internet connects people across great distances.', 'To compare prices of international calls.'],
    answer: 2,
    explanation: 'The examples of a student, a lecture, and a relative show people connecting across great distances, which is the author\'s point about the internet. Buying computers, proving the internet in Tokyo, or comparing calls are not the purpose.',
  },
  {
    id: 'rc-ah1',
    topic: 'Text ah: Main idea',
    passage: 'Many high school students sleep fewer than seven hours a night, and this choice has a cost. While you sleep, the brain organizes what you learned during the day, moving important ideas into long-term memory. Scientists have found that after a good night\'s sleep, students remember new vocabulary better and solve problems faster. Sleep also helps the body repair muscles and keeps your mood steady. In contrast, people who sleep too little often feel tired, have difficulty concentrating, and get sick more easily because their immune system works harder to defend them. Experts recommend that teenagers sleep between eight and ten hours. Going to bed at a regular time, keeping the bedroom dark, and avoiding screens one hour before sleep can all improve the quality of rest. Good sleep is not a waste of time; it is part of studying.',
    question: 'What is the main idea of the passage?',
    options: ['Sleep is a waste of time for busy students.', 'Screens make the brain stronger at night.', 'Only small children need more than seven hours of sleep.', 'Sleep is essential for memory, health, and school performance.'],
    answer: 3,
    explanation: 'The passage explains how sleep helps memory, health, and mood, so the main idea is that sleep is essential for students. The other options contradict the text.',
  },
  {
    id: 'rc-ah2',
    topic: 'Text ah: Vocabulary in context',
    passage: 'Many high school students sleep fewer than seven hours a night, and this choice has a cost. While you sleep, the brain organizes what you learned during the day, moving important ideas into long-term memory. Scientists have found that after a good night\'s sleep, students remember new vocabulary better and solve problems faster. Sleep also helps the body repair muscles and keeps your mood steady. In contrast, people who sleep too little often feel tired, have difficulty concentrating, and get sick more easily because their immune system works harder to defend them. Experts recommend that teenagers sleep between eight and ten hours. Going to bed at a regular time, keeping the bedroom dark, and avoiding screens one hour before sleep can all improve the quality of rest. Good sleep is not a waste of time; it is part of studying.',
    question: 'In the passage, the word concentrating most nearly means:',
    options: ['focusing attention on a single task', 'eating a snack between classes', 'running quickly around the school', 'listening to music while studying'],
    answer: 0,
    explanation: 'Concentrating means focusing attention, and the text says tired people have difficulty concentrating. The other options are not related to the meaning of the word.',
  },
  {
    id: 'rc-ah3',
    topic: 'Text ah: Detail',
    passage: 'Many high school students sleep fewer than seven hours a night, and this choice has a cost. While you sleep, the brain organizes what you learned during the day, moving important ideas into long-term memory. Scientists have found that after a good night\'s sleep, students remember new vocabulary better and solve problems faster. Sleep also helps the body repair muscles and keeps your mood steady. In contrast, people who sleep too little often feel tired, have difficulty concentrating, and get sick more easily because their immune system works harder to defend them. Experts recommend that teenagers sleep between eight and ten hours. Going to bed at a regular time, keeping the bedroom dark, and avoiding screens one hour before sleep can all improve the quality of rest. Good sleep is not a waste of time; it is part of studying.',
    question: 'Which habits do experts recommend for better sleep?',
    options: ['Drinking coffee one hour before going to bed.', 'Keeping the bedroom dark and avoiding screens before sleep.', 'Studying until very late at night.', 'Sleeping with bright lights on.'],
    answer: 1,
    explanation: 'Experts recommend a regular bedtime, a dark bedroom, and no screens one hour before sleep. Coffee, late studying, and bright lights are the opposite advice.',
  },
  {
    id: 'rc-ah4',
    topic: 'Text ah: Inference',
    passage: 'Many high school students sleep fewer than seven hours a night, and this choice has a cost. While you sleep, the brain organizes what you learned during the day, moving important ideas into long-term memory. Scientists have found that after a good night\'s sleep, students remember new vocabulary better and solve problems faster. Sleep also helps the body repair muscles and keeps your mood steady. In contrast, people who sleep too little often feel tired, have difficulty concentrating, and get sick more easily because their immune system works harder to defend them. Experts recommend that teenagers sleep between eight and ten hours. Going to bed at a regular time, keeping the bedroom dark, and avoiding screens one hour before sleep can all improve the quality of rest. Good sleep is not a waste of time; it is part of studying.',
    question: 'According to the passage, a person who sleeps too little probably:',
    options: ['remembers new vocabulary better', 'solves problems faster', 'gets sick more easily', 'builds stronger muscles'],
    answer: 2,
    explanation: 'The passage says people who sleep too little get sick more easily because the immune system is weaker. Better memory, faster problem solving, and stronger muscles are benefits of good sleep.',
  },
  {
    id: 'rc-ah5',
    topic: 'Text ah: Author\'s purpose',
    passage: 'Many high school students sleep fewer than seven hours a night, and this choice has a cost. While you sleep, the brain organizes what you learned during the day, moving important ideas into long-term memory. Scientists have found that after a good night\'s sleep, students remember new vocabulary better and solve problems faster. Sleep also helps the body repair muscles and keeps your mood steady. In contrast, people who sleep too little often feel tired, have difficulty concentrating, and get sick more easily because their immune system works harder to defend them. Experts recommend that teenagers sleep between eight and ten hours. Going to bed at a regular time, keeping the bedroom dark, and avoiding screens one hour before sleep can all improve the quality of rest. Good sleep is not a waste of time; it is part of studying.',
    question: 'The author\'s main purpose in this passage is to:',
    options: ['teach readers how to buy a comfortable bed', 'describe a typical night at the hospital', 'amuse the reader with a funny dream story', 'persuade students to take sleep seriously'],
    answer: 3,
    explanation: 'The author wants to persuade students that sleep is part of studying, not a waste of time. It is not about beds, hospitals, or dreams.',
  },
  {
    id: 'rc-ai1',
    topic: 'Text ai: Main idea',
    passage: 'Bees are small, but they do enormous work. When a bee visits a flower to drink nectar, pollen sticks to its body, and it carries this pollen to the next flower. This process, called pollination, allows plants to produce fruits and seeds. Scientists estimate that about a third of the food humans eat depends on pollinators such as bees. Apples, mangoes, almonds, and even coffee need bees to grow well. However, bee populations have dropped in recent years because of pesticides, diseases, and the loss of wild flowers. Beekeepers and scientists are worried, and so are farmers. Simple actions can help: planting flowers that bloom at different times of the year, using fewer chemicals in gardens, and supporting local beekeepers. If bees disappear, our plates and our fields will look very different.',
    question: 'What is the passage mainly about?',
    options: ['Why bees are important for food production and how people can protect them.', 'How to make honey at home with simple tools.', 'Why flowers can grow without any insects.', 'How farmers sell apples in the market.'],
    answer: 0,
    explanation: 'The passage explains pollination, the food that depends on it, and simple ways to protect bees, so the main idea is bee importance and protection. Honey making, flowers without insects, and apple selling are not the focus.',
  },
  {
    id: 'rc-ai2',
    topic: 'Text ai: Vocabulary in context',
    passage: 'Bees are small, but they do enormous work. When a bee visits a flower to drink nectar, pollen sticks to its body, and it carries this pollen to the next flower. This process, called pollination, allows plants to produce fruits and seeds. Scientists estimate that about a third of the food humans eat depends on pollinators such as bees. Apples, mangoes, almonds, and even coffee need bees to grow well. However, bee populations have dropped in recent years because of pesticides, diseases, and the loss of wild flowers. Beekeepers and scientists are worried, and so are farmers. Simple actions can help: planting flowers that bloom at different times of the year, using fewer chemicals in gardens, and supporting local beekeepers. If bees disappear, our plates and our fields will look very different.',
    question: 'In the passage, the word pollination means:',
    options: ['a disease that attacks beehives', 'the movement of pollen between flowers', 'a kind of sugar found in honey', 'the color of ripe fruit'],
    answer: 1,
    explanation: 'Pollination is the movement of pollen between flowers, carried by bees. A disease, a sugar, or a color do not match the definition in the text.',
  },
  {
    id: 'rc-ai3',
    topic: 'Text ai: Factual comprehension',
    passage: 'Bees are small, but they do enormous work. When a bee visits a flower to drink nectar, pollen sticks to its body, and it carries this pollen to the next flower. This process, called pollination, allows plants to produce fruits and seeds. Scientists estimate that about a third of the food humans eat depends on pollinators such as bees. Apples, mangoes, almonds, and even coffee need bees to grow well. However, bee populations have dropped in recent years because of pesticides, diseases, and the loss of wild flowers. Beekeepers and scientists are worried, and so are farmers. Simple actions can help: planting flowers that bloom at different times of the year, using fewer chemicals in gardens, and supporting local beekeepers. If bees disappear, our plates and our fields will look very different.',
    question: 'According to scientists, about how much of the food we eat depends on pollinators?',
    options: ['Almost all of it.', 'Only desserts.', 'About one third.', 'Almost none.'],
    answer: 2,
    explanation: 'Scientists estimate that about a third of the food humans eat depends on pollinators. The other fractions are not supported.',
  },
  {
    id: 'rc-ai4',
    topic: 'Text ai: Detail',
    passage: 'Bees are small, but they do enormous work. When a bee visits a flower to drink nectar, pollen sticks to its body, and it carries this pollen to the next flower. This process, called pollination, allows plants to produce fruits and seeds. Scientists estimate that about a third of the food humans eat depends on pollinators such as bees. Apples, mangoes, almonds, and even coffee need bees to grow well. However, bee populations have dropped in recent years because of pesticides, diseases, and the loss of wild flowers. Beekeepers and scientists are worried, and so are farmers. Simple actions can help: planting flowers that bloom at different times of the year, using fewer chemicals in gardens, and supporting local beekeepers. If bees disappear, our plates and our fields will look very different.',
    question: 'Which factor is mentioned as a cause of the drop in bee populations?',
    options: ['Too many wild flowers.', 'Too much honey production.', 'Longer summer days.', 'Pesticides and the loss of wild flowers.'],
    answer: 3,
    explanation: 'The passage mentions pesticides, diseases, and the loss of wild flowers as causes. Too many flowers, too much honey, or longer days are not mentioned as causes.',
  },
  {
    id: 'rc-ai5',
    topic: 'Text ai: Author\'s purpose',
    passage: 'Bees are small, but they do enormous work. When a bee visits a flower to drink nectar, pollen sticks to its body, and it carries this pollen to the next flower. This process, called pollination, allows plants to produce fruits and seeds. Scientists estimate that about a third of the food humans eat depends on pollinators such as bees. Apples, mangoes, almonds, and even coffee need bees to grow well. However, bee populations have dropped in recent years because of pesticides, diseases, and the loss of wild flowers. Beekeepers and scientists are worried, and so are farmers. Simple actions can help: planting flowers that bloom at different times of the year, using fewer chemicals in gardens, and supporting local beekeepers. If bees disappear, our plates and our fields will look very different.',
    question: 'Why does the author mention simple actions at the end of the passage?',
    options: ['To show that ordinary people can help save the bees.', 'To prove that beekeepers earn too much money.', 'To explain how honey is sold in jars.', 'To complain about the price of almonds.'],
    answer: 0,
    explanation: 'The author closes with simple actions to show that ordinary people can help bees. Beekeepers\' money, honey jars, and almond prices are not the point.',
  },
  {
    id: 'rc-aj1',
    topic: 'Text aj: Main idea',
    passage: 'Mario Molina was born in Mexico City in 1943. As a boy, he was so curious about science that he turned a small room in his house into a laboratory, using toy microscopes and chemistry sets. He studied engineering in Mexico and later continued his education abroad. In 1974, together with a colleague, he published research explaining how gases called chlorofluorocarbons, or CFCs, used in refrigerators and spray cans, could destroy the ozone layer, the atmospheric shield that blocks harmful radiation from the sun. Many scientists doubted his findings at first, but later observations in the Antarctic confirmed that he was right. In 1995, Molina received the Nobel Prize in Chemistry. He spent the rest of his career working on environmental problems, including pollution in large cities, and he encouraged young people, especially in Latin America, to study science.',
    question: 'What is the passage mainly about?',
    options: ['Why refrigerators are dangerous in Mexican homes.', 'How Mario Molina proved the danger of CFCs and became a Nobel Prize winner.', 'How the Antarctic continent was first explored.', 'Why the ozone layer is not important to life.'],
    answer: 1,
    explanation: 'The passage narrates Molina\'s research on CFCs and his Nobel Prize, so the main idea is how he proved the danger of CFCs. Refrigerator danger, Antarctic exploration, and the ozone layer\'s unimportance are not the focus.',
  },
  {
    id: 'rc-aj2',
    topic: 'Text aj: Vocabulary in context',
    passage: 'Mario Molina was born in Mexico City in 1943. As a boy, he was so curious about science that he turned a small room in his house into a laboratory, using toy microscopes and chemistry sets. He studied engineering in Mexico and later continued his education abroad. In 1974, together with a colleague, he published research explaining how gases called chlorofluorocarbons, or CFCs, used in refrigerators and spray cans, could destroy the ozone layer, the atmospheric shield that blocks harmful radiation from the sun. Many scientists doubted his findings at first, but later observations in the Antarctic confirmed that he was right. In 1995, Molina received the Nobel Prize in Chemistry. He spent the rest of his career working on environmental problems, including pollution in large cities, and he encouraged young people, especially in Latin America, to study science.',
    question: 'In the text, the word curious most nearly means:',
    options: ['afraid of small spaces', 'very tired after school', 'eager to learn and to investigate', 'angry about the results'],
    answer: 2,
    explanation: 'Curious means eager to learn, and the text shows Molina turning a room into a laboratory as a boy. Afraid, tired, or angry do not fit his attitude.',
  },
  {
    id: 'rc-aj3',
    topic: 'Text aj: Detail',
    passage: 'Mario Molina was born in Mexico City in 1943. As a boy, he was so curious about science that he turned a small room in his house into a laboratory, using toy microscopes and chemistry sets. He studied engineering in Mexico and later continued his education abroad. In 1974, together with a colleague, he published research explaining how gases called chlorofluorocarbons, or CFCs, used in refrigerators and spray cans, could destroy the ozone layer, the atmospheric shield that blocks harmful radiation from the sun. Many scientists doubted his findings at first, but later observations in the Antarctic confirmed that he was right. In 1995, Molina received the Nobel Prize in Chemistry. He spent the rest of his career working on environmental problems, including pollution in large cities, and he encouraged young people, especially in Latin America, to study science.',
    question: 'According to Molina\'s research, what can CFC gases destroy?',
    options: ['The equator.', 'The Antarctic ice.', 'The solar system.', 'The ozone layer.'],
    answer: 3,
    explanation: 'According to the text, CFCs can destroy the ozone layer. The equator, Antarctic ice, and the solar system are not mentioned as targets.',
  },
  {
    id: 'rc-aj4',
    topic: 'Text aj: Factual comprehension',
    passage: 'Mario Molina was born in Mexico City in 1943. As a boy, he was so curious about science that he turned a small room in his house into a laboratory, using toy microscopes and chemistry sets. He studied engineering in Mexico and later continued his education abroad. In 1974, together with a colleague, he published research explaining how gases called chlorofluorocarbons, or CFCs, used in refrigerators and spray cans, could destroy the ozone layer, the atmospheric shield that blocks harmful radiation from the sun. Many scientists doubted his findings at first, but later observations in the Antarctic confirmed that he was right. In 1995, Molina received the Nobel Prize in Chemistry. He spent the rest of his career working on environmental problems, including pollution in large cities, and he encouraged young people, especially in Latin America, to study science.',
    question: 'In which year did Mario Molina receive the Nobel Prize in Chemistry?',
    options: ['1995.', '1974.', '1943.', '2001.'],
    answer: 0,
    explanation: 'The passage states that Molina received the Nobel Prize in Chemistry in 1995. 1974 is the year of the research, 1943 is his birth year, and 2001 does not appear.',
  },
  {
    id: 'rc-aj5',
    topic: 'Text aj: Inference',
    passage: 'Mario Molina was born in Mexico City in 1943. As a boy, he was so curious about science that he turned a small room in his house into a laboratory, using toy microscopes and chemistry sets. He studied engineering in Mexico and later continued his education abroad. In 1974, together with a colleague, he published research explaining how gases called chlorofluorocarbons, or CFCs, used in refrigerators and spray cans, could destroy the ozone layer, the atmospheric shield that blocks harmful radiation from the sun. Many scientists doubted his findings at first, but later observations in the Antarctic confirmed that he was right. In 1995, Molina received the Nobel Prize in Chemistry. He spent the rest of his career working on environmental problems, including pollution in large cities, and he encouraged young people, especially in Latin America, to study science.',
    question: 'Which statement best shows Molina\'s influence on young people?',
    options: ['He preferred engineering to chemistry all his life.', 'He encouraged students, especially in Latin America, to study science.', 'He invented the first spray can in 1974.', 'He stopped working with other scientists after 1995.'],
    answer: 1,
    explanation: 'The text says Molina encouraged young people, especially in Latin America, to study science, so option 1 shows his influence. The other options contradict the text.',
  },
  {
    id: 'rc-ak1',
    topic: 'Text ak: Argument identification',
    passage: 'Some schools require students to wear uniforms, and I believe this rule brings more benefits than problems. First, uniforms make mornings easier because students do not waste time choosing clothes, and families save money that would be spent on brand-name fashion. Second, when everyone dresses the same, differences in money become less visible, so students are judged by their behavior and grades instead of by their shoes or shirts. Finally, uniforms create a sense of belonging; when we wear our school colors, we feel part of one team. Of course, uniforms have limits. Some students feel they lose personal freedom, and good quality uniforms are not cheap. But these problems can be solved with a simple, comfortable design chosen with the students\' opinions. In my opinion, the benefits of equality and simplicity are worth that small compromise.',
    question: 'What is the author\'s main claim about school uniforms?',
    options: ['Uniforms cost more than brand-name clothes.', 'Students should design their own uniforms.', 'Uniforms bring more benefits than problems.', 'Schools should cancel morning classes.'],
    answer: 2,
    explanation: 'The author states that uniforms bring more benefits than problems and supports the idea with reasons. The other options are not the author\'s claim.',
  },
  {
    id: 'rc-ak2',
    topic: 'Text ak: Vocabulary in context',
    passage: 'Some schools require students to wear uniforms, and I believe this rule brings more benefits than problems. First, uniforms make mornings easier because students do not waste time choosing clothes, and families save money that would be spent on brand-name fashion. Second, when everyone dresses the same, differences in money become less visible, so students are judged by their behavior and grades instead of by their shoes or shirts. Finally, uniforms create a sense of belonging; when we wear our school colors, we feel part of one team. Of course, uniforms have limits. Some students feel they lose personal freedom, and good quality uniforms are not cheap. But these problems can be solved with a simple, comfortable design chosen with the students\' opinions. In my opinion, the benefits of equality and simplicity are worth that small compromise.',
    question: 'In the passage, the word belonging most nearly means:',
    options: ['owing money to a shop', 'missing a class', 'wearing the school shirt', 'feeling part of a group'],
    answer: 3,
    explanation: 'Belonging means feeling part of a group, and the author says uniforms create a sense of belonging. Owing money, missing class, or wearing a shirt do not match.',
  },
  {
    id: 'rc-ak3',
    topic: 'Text ak: Detail',
    passage: 'Some schools require students to wear uniforms, and I believe this rule brings more benefits than problems. First, uniforms make mornings easier because students do not waste time choosing clothes, and families save money that would be spent on brand-name fashion. Second, when everyone dresses the same, differences in money become less visible, so students are judged by their behavior and grades instead of by their shoes or shirts. Finally, uniforms create a sense of belonging; when we wear our school colors, we feel part of one team. Of course, uniforms have limits. Some students feel they lose personal freedom, and good quality uniforms are not cheap. But these problems can be solved with a simple, comfortable design chosen with the students\' opinions. In my opinion, the benefits of equality and simplicity are worth that small compromise.',
    question: 'Which economic benefit of uniforms does the author mention?',
    options: ['Families save money that would be spent on brand-name fashion.', 'Students earn money by wearing uniforms.', 'Uniforms are given for free by the stores.', 'Uniforms never need to be washed.'],
    answer: 0,
    explanation: 'The author says families save money that would be spent on brand-name fashion. Earning money, free uniforms, and no washing are not mentioned.',
  },
  {
    id: 'rc-ak4',
    topic: 'Text ak: Argument identification',
    passage: 'Some schools require students to wear uniforms, and I believe this rule brings more benefits than problems. First, uniforms make mornings easier because students do not waste time choosing clothes, and families save money that would be spent on brand-name fashion. Second, when everyone dresses the same, differences in money become less visible, so students are judged by their behavior and grades instead of by their shoes or shirts. Finally, uniforms create a sense of belonging; when we wear our school colors, we feel part of one team. Of course, uniforms have limits. Some students feel they lose personal freedom, and good quality uniforms are not cheap. But these problems can be solved with a simple, comfortable design chosen with the students\' opinions. In my opinion, the benefits of equality and simplicity are worth that small compromise.',
    question: 'Which disadvantage of uniforms does the author admit?',
    options: ['Uniform colors are difficult to find in stores.', 'Some students feel they lose personal freedom.', 'Uniforms arrive late every single year.', 'Uniforms make students look unequal.'],
    answer: 1,
    explanation: 'The author admits that some students feel they lose personal freedom. The other options are not stated as disadvantages.',
  },
  {
    id: 'rc-ak5',
    topic: 'Text ak: Point of view',
    passage: 'Some schools require students to wear uniforms, and I believe this rule brings more benefits than problems. First, uniforms make mornings easier because students do not waste time choosing clothes, and families save money that would be spent on brand-name fashion. Second, when everyone dresses the same, differences in money become less visible, so students are judged by their behavior and grades instead of by their shoes or shirts. Finally, uniforms create a sense of belonging; when we wear our school colors, we feel part of one team. Of course, uniforms have limits. Some students feel they lose personal freedom, and good quality uniforms are not cheap. But these problems can be solved with a simple, comfortable design chosen with the students\' opinions. In my opinion, the benefits of equality and simplicity are worth that small compromise.',
    question: 'The author\'s attitude toward school uniforms is best described as:',
    options: ['completely negative', 'indifferent to the whole question', 'supportive but aware of the disadvantages', 'afraid that uniforms will disappear'],
    answer: 2,
    explanation: 'The author defends uniforms but recognizes the disadvantage of lost freedom and offers a solution, so the attitude is supportive but fair. It is not negative, indifferent, or fearful.',
  },
  {
    id: 'rc-al1',
    topic: 'Text al: Argument identification',
    passage: 'Many teenagers say they read more than ever because of their phones, but I am not sure that scrolling through short messages is the same as reading a book. Real reading demands attention. A story or a long article asks us to follow characters, remember details, and think about ideas for a long time. Screens, on the other hand, are designed to interrupt us with new posts and short videos, so our thoughts stay shallow. Scientists have also noticed that people understand a printed text better than the same text on a screen. Does this mean we should abandon technology? Not at all. E-books and audiobooks are excellent tools, and they help many people read in spare minutes. My point is simpler: whatever our device, we must protect long, quiet attention. That kind of attention, not the screen itself, is what makes a reader.',
    question: 'What is the author\'s main argument?',
    options: ['Phones should be banned for all teenagers.', 'Short messages are the best way to read.', 'Paper books belong to the past.', 'Long, quiet attention matters more than the device used to read.'],
    answer: 3,
    explanation: 'The author\'s point is that long, quiet attention matters more than the device, so option 3 captures the main argument. Banning phones, praising short messages, or dismissing paper books are not the argument.',
  },
  {
    id: 'rc-al2',
    topic: 'Text al: Vocabulary in context',
    passage: 'Many teenagers say they read more than ever because of their phones, but I am not sure that scrolling through short messages is the same as reading a book. Real reading demands attention. A story or a long article asks us to follow characters, remember details, and think about ideas for a long time. Screens, on the other hand, are designed to interrupt us with new posts and short videos, so our thoughts stay shallow. Scientists have also noticed that people understand a printed text better than the same text on a screen. Does this mean we should abandon technology? Not at all. E-books and audiobooks are excellent tools, and they help many people read in spare minutes. My point is simpler: whatever our device, we must protect long, quiet attention. That kind of attention, not the screen itself, is what makes a reader.',
    question: 'In the text, the word abandon most nearly means:',
    options: ['to give up or leave behind', 'to repair with care', 'to print on paper', 'to translate into Spanish'],
    answer: 0,
    explanation: 'Abandon means to give up or leave behind, and the author asks if we should abandon technology. Repair, print, and translate do not fit.',
  },
  {
    id: 'rc-al3',
    topic: 'Text al: Detail',
    passage: 'Many teenagers say they read more than ever because of their phones, but I am not sure that scrolling through short messages is the same as reading a book. Real reading demands attention. A story or a long article asks us to follow characters, remember details, and think about ideas for a long time. Screens, on the other hand, are designed to interrupt us with new posts and short videos, so our thoughts stay shallow. Scientists have also noticed that people understand a printed text better than the same text on a screen. Does this mean we should abandon technology? Not at all. E-books and audiobooks are excellent tools, and they help many people read in spare minutes. My point is simpler: whatever our device, we must protect long, quiet attention. That kind of attention, not the screen itself, is what makes a reader.',
    question: 'According to scientists mentioned in the text, readers usually:',
    options: ['remember more when reading on phones', 'understand a printed text better than the same text on a screen', 'skip all the details in printed books', 'only read during free minutes'],
    answer: 1,
    explanation: 'The text says people understand a printed text better than the same text on a screen. The other options contradict the text or are not mentioned.',
  },
  {
    id: 'rc-al4',
    topic: 'Text al: Inference',
    passage: 'Many teenagers say they read more than ever because of their phones, but I am not sure that scrolling through short messages is the same as reading a book. Real reading demands attention. A story or a long article asks us to follow characters, remember details, and think about ideas for a long time. Screens, on the other hand, are designed to interrupt us with new posts and short videos, so our thoughts stay shallow. Scientists have also noticed that people understand a printed text better than the same text on a screen. Does this mean we should abandon technology? Not at all. E-books and audiobooks are excellent tools, and they help many people read in spare minutes. My point is simpler: whatever our device, we must protect long, quiet attention. That kind of attention, not the screen itself, is what makes a reader.',
    question: 'What does the author suggest screens are designed to do?',
    options: ['Help readers finish long novels quickly.', 'Replace books completely.', 'Interrupt readers with new posts and short videos.', 'Store documents for years.'],
    answer: 2,
    explanation: 'The author says screens are designed to interrupt us with new posts and short videos. Helping finish novels, replacing books, or storing documents do not match the idea.',
  },
  {
    id: 'rc-al5',
    topic: 'Text al: Point of view',
    passage: 'Many teenagers say they read more than ever because of their phones, but I am not sure that scrolling through short messages is the same as reading a book. Real reading demands attention. A story or a long article asks us to follow characters, remember details, and think about ideas for a long time. Screens, on the other hand, are designed to interrupt us with new posts and short videos, so our thoughts stay shallow. Scientists have also noticed that people understand a printed text better than the same text on a screen. Does this mean we should abandon technology? Not at all. E-books and audiobooks are excellent tools, and they help many people read in spare minutes. My point is simpler: whatever our device, we must protect long, quiet attention. That kind of attention, not the screen itself, is what makes a reader.',
    question: 'In the author\'s view, e-books and audiobooks are:',
    options: ['useless for real reading', 'dangerous for attention', 'more expensive than paper books', 'excellent tools when used with attention'],
    answer: 3,
    explanation: 'The author calls e-books and audiobooks excellent tools when used with attention, so option 3 reflects the view. The others contradict the text.',
  },
  {
    id: 'rc-am1',
    topic: 'Text am: Argument identification',
    passage: 'Some people believe that cities should build homes and offices on every empty space, but I think that idea is short-sighted. Parks are not decoration; they are part of a healthy city. Trees clean the air, lower the temperature on hot days, and give shade to walkers. Green areas also collect rainwater and can reduce floods. At the same time, parks are places where neighbors meet, children play, and families exercise without paying for a gym. When a city protects its parks, it invests in the health and happiness of its people. Yes, we need homes and offices, but we can design them around green spaces instead of replacing them. A city without parks is efficient for a while and miserable for a lifetime. Balance, not sacrifice, should guide our decisions.',
    question: 'What is the author arguing for in this passage?',
    options: ['Cities should protect their parks and design buildings around them.', 'Cities should replace parks with homes and offices.', 'Parks should charge an entrance fee.', 'Gyms are better than public parks.'],
    answer: 0,
    explanation: 'The author argues that parks should be protected and that buildings can be designed around green spaces. Replacing parks, charging fees, or preferring gyms are the opposite of the argument.',
  },
  {
    id: 'rc-am2',
    topic: 'Text am: Vocabulary in context',
    passage: 'Some people believe that cities should build homes and offices on every empty space, but I think that idea is short-sighted. Parks are not decoration; they are part of a healthy city. Trees clean the air, lower the temperature on hot days, and give shade to walkers. Green areas also collect rainwater and can reduce floods. At the same time, parks are places where neighbors meet, children play, and families exercise without paying for a gym. When a city protects its parks, it invests in the health and happiness of its people. Yes, we need homes and offices, but we can design them around green spaces instead of replacing them. A city without parks is efficient for a while and miserable for a lifetime. Balance, not sacrifice, should guide our decisions.',
    question: 'In the text, the phrase short-sighted means:',
    options: ['unable to read small letters', 'thinking only of immediate benefits without planning for the future', 'a city with very tall buildings', 'a street that turns sharply'],
    answer: 1,
    explanation: 'Short-sighted means thinking only of immediate gains without planning for the future, like building on every empty space. Reading problems, tall buildings, and sharp turns are unrelated.',
  },
  {
    id: 'rc-am3',
    topic: 'Text am: Detail',
    passage: 'Some people believe that cities should build homes and offices on every empty space, but I think that idea is short-sighted. Parks are not decoration; they are part of a healthy city. Trees clean the air, lower the temperature on hot days, and give shade to walkers. Green areas also collect rainwater and can reduce floods. At the same time, parks are places where neighbors meet, children play, and families exercise without paying for a gym. When a city protects its parks, it invests in the health and happiness of its people. Yes, we need homes and offices, but we can design them around green spaces instead of replacing them. A city without parks is efficient for a while and miserable for a lifetime. Balance, not sacrifice, should guide our decisions.',
    question: 'Which environmental benefit of parks is mentioned in the passage?',
    options: ['Parks produce electricity for the city.', 'Parks lower the price of houses.', 'Trees clean the air and green areas reduce floods.', 'Parks keep the streets empty at night.'],
    answer: 2,
    explanation: 'The passage says trees clean the air and green areas collect rainwater and reduce floods. Electricity, house prices, and empty streets are not mentioned.',
  },
  {
    id: 'rc-am4',
    topic: 'Text am: Inference',
    passage: 'Some people believe that cities should build homes and offices on every empty space, but I think that idea is short-sighted. Parks are not decoration; they are part of a healthy city. Trees clean the air, lower the temperature on hot days, and give shade to walkers. Green areas also collect rainwater and can reduce floods. At the same time, parks are places where neighbors meet, children play, and families exercise without paying for a gym. When a city protects its parks, it invests in the health and happiness of its people. Yes, we need homes and offices, but we can design them around green spaces instead of replacing them. A city without parks is efficient for a while and miserable for a lifetime. Balance, not sacrifice, should guide our decisions.',
    question: 'Why does the author say a city without parks is efficient for a while but miserable for a lifetime?',
    options: ['Because buildings take many years to finish.', 'Because officials do not like trees.', 'Because residents cannot afford new homes.', 'Because short-term profit is not worth losing the quality of life.'],
    answer: 3,
    explanation: 'The author means that short-term profit is not worth losing the long-term quality of life, so option 3 is correct. The other options do not explain the comparison.',
  },
  {
    id: 'rc-am5',
    topic: 'Text am: Tone',
    passage: 'Some people believe that cities should build homes and offices on every empty space, but I think that idea is short-sighted. Parks are not decoration; they are part of a healthy city. Trees clean the air, lower the temperature on hot days, and give shade to walkers. Green areas also collect rainwater and can reduce floods. At the same time, parks are places where neighbors meet, children play, and families exercise without paying for a gym. When a city protects its parks, it invests in the health and happiness of its people. Yes, we need homes and offices, but we can design them around green spaces instead of replacing them. A city without parks is efficient for a while and miserable for a lifetime. Balance, not sacrifice, should guide our decisions.',
    question: 'The tone of the passage is best described as:',
    options: ['persuasive and concerned', 'angry and violent', 'cold and indifferent', 'humorous and playful'],
    answer: 0,
    explanation: 'The author defends parks with reasons and emotion, so the tone is persuasive and concerned. It is not angry, indifferent, or humorous.',
  },
  {
    id: 'rc-an1',
    topic: 'Text an: Detail',
    passage: 'MORELIA: This weekend, thousands of visitors are expected to arrive at the city\'s First Community Garden Festival, organized in the central park. The festival brings together farmers, students, and families to celebrate local food and healthy habits. Visitors can buy organic vegetables directly from growers, join workshops on how to plant tomatoes on a rooftop, and taste dishes prepared by neighborhood cooks. Children will find a special area where they can learn how bees help plants grow. The organizers say the festival also has a serious purpose: to encourage people to grow some of their own food and reduce food waste. The event is free, and it begins at ten in the morning on both Saturday and Sunday. Local weather services predict a sunny weekend, perfect for an outdoor celebration.',
    question: 'Where is the Community Garden Festival taking place?',
    options: ['At a private farm outside the city.', 'In the central park of Morelia.', 'Inside the city stadium.', 'In a large shopping center.'],
    answer: 1,
    explanation: 'The report says the festival takes place in the central park of Morelia. Farms, stadiums, and shopping centers are not mentioned.',
  },
  {
    id: 'rc-an2',
    topic: 'Text an: Vocabulary in context',
    passage: 'MORELIA: This weekend, thousands of visitors are expected to arrive at the city\'s First Community Garden Festival, organized in the central park. The festival brings together farmers, students, and families to celebrate local food and healthy habits. Visitors can buy organic vegetables directly from growers, join workshops on how to plant tomatoes on a rooftop, and taste dishes prepared by neighborhood cooks. Children will find a special area where they can learn how bees help plants grow. The organizers say the festival also has a serious purpose: to encourage people to grow some of their own food and reduce food waste. The event is free, and it begins at ten in the morning on both Saturday and Sunday. Local weather services predict a sunny weekend, perfect for an outdoor celebration.',
    question: 'In the passage, the word encourage most nearly means:',
    options: ['to forbid', 'to charge money for', 'to motivate people to do something', 'to cancel an event'],
    answer: 2,
    explanation: 'Encourage means to motivate, and the organizers want to encourage people to grow their own food. Forbid, charge, and cancel are the opposite or unrelated.',
  },
  {
    id: 'rc-an3',
    topic: 'Text an: Detail',
    passage: 'MORELIA: This weekend, thousands of visitors are expected to arrive at the city\'s First Community Garden Festival, organized in the central park. The festival brings together farmers, students, and families to celebrate local food and healthy habits. Visitors can buy organic vegetables directly from growers, join workshops on how to plant tomatoes on a rooftop, and taste dishes prepared by neighborhood cooks. Children will find a special area where they can learn how bees help plants grow. The organizers say the festival also has a serious purpose: to encourage people to grow some of their own food and reduce food waste. The event is free, and it begins at ten in the morning on both Saturday and Sunday. Local weather services predict a sunny weekend, perfect for an outdoor celebration.',
    question: 'What can children do at the festival?',
    options: ['They can drive small tractors.', 'They can sell vegetables to the farmers.', 'They can cook lunch for the adults.', 'They can learn how bees help plants grow.'],
    answer: 3,
    explanation: 'The text says children can learn how bees help plants grow in a special area. Tractors, selling, and cooking are not mentioned as children\'s activities.',
  },
  {
    id: 'rc-an4',
    topic: 'Text an: Inference',
    passage: 'MORELIA: This weekend, thousands of visitors are expected to arrive at the city\'s First Community Garden Festival, organized in the central park. The festival brings together farmers, students, and families to celebrate local food and healthy habits. Visitors can buy organic vegetables directly from growers, join workshops on how to plant tomatoes on a rooftop, and taste dishes prepared by neighborhood cooks. Children will find a special area where they can learn how bees help plants grow. The organizers say the festival also has a serious purpose: to encourage people to grow some of their own food and reduce food waste. The event is free, and it begins at ten in the morning on both Saturday and Sunday. Local weather services predict a sunny weekend, perfect for an outdoor celebration.',
    question: 'Why do the organizers mention reducing food waste?',
    options: ['To show that the festival also has a serious purpose.', 'To complain about the price of vegetables.', 'To prove that the event is only for children.', 'To announce that the market will close.'],
    answer: 0,
    explanation: 'The organizers say the festival also has a serious purpose: to encourage home growing and reduce food waste. The other options are not supported.',
  },
  {
    id: 'rc-an5',
    topic: 'Text an: Author\'s purpose',
    passage: 'MORELIA: This weekend, thousands of visitors are expected to arrive at the city\'s First Community Garden Festival, organized in the central park. The festival brings together farmers, students, and families to celebrate local food and healthy habits. Visitors can buy organic vegetables directly from growers, join workshops on how to plant tomatoes on a rooftop, and taste dishes prepared by neighborhood cooks. Children will find a special area where they can learn how bees help plants grow. The organizers say the festival also has a serious purpose: to encourage people to grow some of their own food and reduce food waste. The event is free, and it begins at ten in the morning on both Saturday and Sunday. Local weather services predict a sunny weekend, perfect for an outdoor celebration.',
    question: 'This text is most likely:',
    options: ['a private letter from one organizer to another', 'a news report about an upcoming public event', 'a recipe for planting tomatoes', 'a science lesson about bees'],
    answer: 1,
    explanation: 'The text announces dates, times, and activities of a public event, so it is a news report. It is not a private letter, a recipe, or a lesson.',
  },
  {
    id: 'rc-ap1',
    topic: 'Text ap: Factual comprehension',
    passage: 'MAZATLAN: A group of volunteers working at night on the beach found a sea turtle that was trapped under a fishing net. The animal, a large female weighing about forty kilograms, was tired but not hurt. The volunteers called a local protection center, and together they carefully freed the turtle and checked her health. Within an hour, the turtle slowly returned to the sea, and the crowd that had gathered applauded. Scientists explain that sea turtles come to the same beaches to lay their eggs, so protecting them protects future generations. The protection center reminds visitors that nets, plastic bags, and bright lights can confuse turtles. They ask everyone to report trapped animals instead of trying to free them alone, because moving an injured turtle without help can do more harm than good.',
    question: 'Where did the volunteers find the sea turtle?',
    options: ['Swimming near the port.', 'Inside a plastic box on the sand.', 'Trapped under a fishing net on the beach.', 'Under a table near the restaurant.'],
    answer: 2,
    explanation: 'The volunteers found the turtle trapped under a fishing net on the beach. Port, box, and restaurant are not mentioned.',
  },
  {
    id: 'rc-ap2',
    topic: 'Text ap: Detail',
    passage: 'MAZATLAN: A group of volunteers working at night on the beach found a sea turtle that was trapped under a fishing net. The animal, a large female weighing about forty kilograms, was tired but not hurt. The volunteers called a local protection center, and together they carefully freed the turtle and checked her health. Within an hour, the turtle slowly returned to the sea, and the crowd that had gathered applauded. Scientists explain that sea turtles come to the same beaches to lay their eggs, so protecting them protects future generations. The protection center reminds visitors that nets, plastic bags, and bright lights can confuse turtles. They ask everyone to report trapped animals instead of trying to free them alone, because moving an injured turtle without help can do more harm than good.',
    question: 'What did the volunteers do after discovering the turtle?',
    options: ['They took her to a zoo immediately.', 'They put her in a bucket of water.', 'They fed her fresh fish.', 'They called a local protection center.'],
    answer: 3,
    explanation: 'After finding the turtle, the volunteers called a local protection center. They did not take her to a zoo, put her in a bucket, or feed her.',
  },
  {
    id: 'rc-ap3',
    topic: 'Text ap: Vocabulary in context',
    passage: 'MAZATLAN: A group of volunteers working at night on the beach found a sea turtle that was trapped under a fishing net. The animal, a large female weighing about forty kilograms, was tired but not hurt. The volunteers called a local protection center, and together they carefully freed the turtle and checked her health. Within an hour, the turtle slowly returned to the sea, and the crowd that had gathered applauded. Scientists explain that sea turtles come to the same beaches to lay their eggs, so protecting them protects future generations. The protection center reminds visitors that nets, plastic bags, and bright lights can confuse turtles. They ask everyone to report trapped animals instead of trying to free them alone, because moving an injured turtle without help can do more harm than good.',
    question: 'In the passage, the word confuse most nearly means:',
    options: ['to make someone lose their way or make a mistake', 'to feed an animal carefully', 'to watch from a distance', 'to rescue from danger'],
    answer: 0,
    explanation: 'Confuse means to make someone make a mistake or lose the way, and the text says nets, bags, and lights can confuse turtles. Feed, watch, and rescue do not fit.',
  },
  {
    id: 'rc-ap4',
    topic: 'Text ap: Inference',
    passage: 'MAZATLAN: A group of volunteers working at night on the beach found a sea turtle that was trapped under a fishing net. The animal, a large female weighing about forty kilograms, was tired but not hurt. The volunteers called a local protection center, and together they carefully freed the turtle and checked her health. Within an hour, the turtle slowly returned to the sea, and the crowd that had gathered applauded. Scientists explain that sea turtles come to the same beaches to lay their eggs, so protecting them protects future generations. The protection center reminds visitors that nets, plastic bags, and bright lights can confuse turtles. They ask everyone to report trapped animals instead of trying to free them alone, because moving an injured turtle without help can do more harm than good.',
    question: 'Why does the center ask people to report trapped animals instead of freeing them alone?',
    options: ['Because sea turtles can be dangerous to humans.', 'Because moving an injured animal without help can cause more harm.', 'Because the beach is closed at night.', 'Because volunteers want to take all the credit.'],
    answer: 1,
    explanation: 'The center explains that moving an injured turtle without help can do more harm than good, so reporting is safer. Danger to humans, beach closures, and credit are not mentioned.',
  },
  {
    id: 'rc-ap5',
    topic: 'Text ap: Tone',
    passage: 'MAZATLAN: A group of volunteers working at night on the beach found a sea turtle that was trapped under a fishing net. The animal, a large female weighing about forty kilograms, was tired but not hurt. The volunteers called a local protection center, and together they carefully freed the turtle and checked her health. Within an hour, the turtle slowly returned to the sea, and the crowd that had gathered applauded. Scientists explain that sea turtles come to the same beaches to lay their eggs, so protecting them protects future generations. The protection center reminds visitors that nets, plastic bags, and bright lights can confuse turtles. They ask everyone to report trapped animals instead of trying to free them alone, because moving an injured turtle without help can do more harm than good.',
    question: 'The tone of this news report is:',
    options: ['sad and hopeless', 'angry with the fishermen', 'positive and cautionary', 'funny and light'],
    answer: 2,
    explanation: 'The report ends with a successful rescue and a precaution, so the tone is positive and cautionary. It is not sad, angry, or funny.',
  },
  {
    id: 'rc-aq1',
    topic: 'Text aq: Detail',
    passage: 'Regional weather services reported that yesterday was the hottest day of the year so far in the northern states, with temperatures reaching 42 degrees Celsius in some cities. Doctors warn that such heat can be dangerous, especially for children and older adults, and they recommend drinking water often, wearing light clothing, and avoiding outdoor exercise between eleven in the morning and four in the afternoon. Schools in several towns canceled afternoon classes, and some companies allowed their employees to work from home. The heat wave is expected to continue for three more days before a storm from the Pacific brings cooler air and possible rain. Officials have opened cooling centers in public buildings, where anyone can rest, drink water, and recover from the heat. One official reminded everyone to take care of their neighbors, because in high temperatures a simple phone call can save a life.',
    question: 'What temperature was reported in some cities yesterday?',
    options: ['Twenty-four degrees Celsius.', 'Thirty-two degrees Celsius.', 'Fifty-two degrees Celsius.', 'Forty-two degrees Celsius.'],
    answer: 3,
    explanation: 'The report says temperatures reached 42 degrees Celsius in some cities. The other numbers do not appear.',
  },
  {
    id: 'rc-aq2',
    topic: 'Text aq: Factual comprehension',
    passage: 'Regional weather services reported that yesterday was the hottest day of the year so far in the northern states, with temperatures reaching 42 degrees Celsius in some cities. Doctors warn that such heat can be dangerous, especially for children and older adults, and they recommend drinking water often, wearing light clothing, and avoiding outdoor exercise between eleven in the morning and four in the afternoon. Schools in several towns canceled afternoon classes, and some companies allowed their employees to work from home. The heat wave is expected to continue for three more days before a storm from the Pacific brings cooler air and possible rain. Officials have opened cooling centers in public buildings, where anyone can rest, drink water, and recover from the heat. One official reminded everyone to take care of their neighbors, because in high temperatures a simple phone call can save a life.',
    question: 'What do doctors recommend during the heat wave?',
    options: ['Drinking water often and avoiding outdoor exercise between 11 and 4.', 'Exercising outdoors at noon.', 'Wearing heavy and dark clothing.', 'Staying outside for many hours.'],
    answer: 0,
    explanation: 'Doctors recommend drinking water often, wearing light clothing, and avoiding outdoor exercise between 11 am and 4 pm. The other options are unsafe advice, not recommendations.',
  },
  {
    id: 'rc-aq3',
    topic: 'Text aq: Vocabulary in context',
    passage: 'Regional weather services reported that yesterday was the hottest day of the year so far in the northern states, with temperatures reaching 42 degrees Celsius in some cities. Doctors warn that such heat can be dangerous, especially for children and older adults, and they recommend drinking water often, wearing light clothing, and avoiding outdoor exercise between eleven in the morning and four in the afternoon. Schools in several towns canceled afternoon classes, and some companies allowed their employees to work from home. The heat wave is expected to continue for three more days before a storm from the Pacific brings cooler air and possible rain. Officials have opened cooling centers in public buildings, where anyone can rest, drink water, and recover from the heat. One official reminded everyone to take care of their neighbors, because in high temperatures a simple phone call can save a life.',
    question: 'In the passage, the cooling centers are:',
    options: ['special schools for summer classes', 'places where people can rest and recover from the heat', 'shops that sell ice cream', 'parks with cold water pools'],
    answer: 1,
    explanation: 'Cooling centers are public places where people can rest, drink water, and recover from the heat. Schools, ice cream shops, and pools are not described.',
  },
  {
    id: 'rc-aq4',
    topic: 'Text aq: Inference',
    passage: 'Regional weather services reported that yesterday was the hottest day of the year so far in the northern states, with temperatures reaching 42 degrees Celsius in some cities. Doctors warn that such heat can be dangerous, especially for children and older adults, and they recommend drinking water often, wearing light clothing, and avoiding outdoor exercise between eleven in the morning and four in the afternoon. Schools in several towns canceled afternoon classes, and some companies allowed their employees to work from home. The heat wave is expected to continue for three more days before a storm from the Pacific brings cooler air and possible rain. Officials have opened cooling centers in public buildings, where anyone can rest, drink water, and recover from the heat. One official reminded everyone to take care of their neighbors, because in high temperatures a simple phone call can save a life.',
    question: 'Why did some schools cancel afternoon classes?',
    options: ['Because the teachers were on vacation.', 'Because the buildings were being repaired.', 'Because the heat could put the students in danger.', 'Because the weekend was already beginning.'],
    answer: 2,
    explanation: 'Schools canceled afternoon classes because the heat can be dangerous for the students. Vacations, repairs, and weekends are not mentioned as reasons.',
  },
  {
    id: 'rc-aq5',
    topic: 'Text aq: Author\'s purpose',
    passage: 'Regional weather services reported that yesterday was the hottest day of the year so far in the northern states, with temperatures reaching 42 degrees Celsius in some cities. Doctors warn that such heat can be dangerous, especially for children and older adults, and they recommend drinking water often, wearing light clothing, and avoiding outdoor exercise between eleven in the morning and four in the afternoon. Schools in several towns canceled afternoon classes, and some companies allowed their employees to work from home. The heat wave is expected to continue for three more days before a storm from the Pacific brings cooler air and possible rain. Officials have opened cooling centers in public buildings, where anyone can rest, drink water, and recover from the heat. One official reminded everyone to take care of their neighbors, because in high temperatures a simple phone call can save a life.',
    question: 'What is the main purpose of this passage?',
    options: ['To teach how Pacific storms form.', 'To show the benefits of very hot weather.', 'To advertise air conditioning machines.', 'To inform the public about a heat wave and how to stay safe.'],
    answer: 3,
    explanation: 'The passage informs the public about the heat wave and gives safety advice, so its purpose is informative. It is not a storm lesson, a benefits list, or an advertisement.',
  },
  {
    id: 'rc-ar1',
    topic: 'Text ar: Author\'s purpose',
    passage: 'Subject: Trip and reunion. Dear Tania, How are you? I hope your exams went well. I have great news: my family is planning a trip to Guadalajara next month, during the long weekend. I remember you have cousins there, so I wanted to ask if you and your family would like to meet us. We will stay near the center and can go to the market and the cathedral together. If you are free on Saturday afternoon, we could have lunch at a restaurant that serves the famous torta ahogada. Please tell me if the date works for you. I miss you a lot, and I think it will be a perfect little reunion. Send my love to your parents. Best wishes, Valeria.',
    question: 'Why did Valeria write this email?',
    options: ['To invite Tania to meet her family in Guadalajara next month.', 'To ask Tania for the exam answers.', 'To cancel a trip to the beach.', 'To complain about her cousins.'],
    answer: 0,
    explanation: 'Valeria writes to invite Tania to meet her family in Guadalajara. Exam answers, canceling a trip, and complaining are not the purpose of the email.',
  },
  {
    id: 'rc-ar2',
    topic: 'Text ar: Detail',
    passage: 'Subject: Trip and reunion. Dear Tania, How are you? I hope your exams went well. I have great news: my family is planning a trip to Guadalajara next month, during the long weekend. I remember you have cousins there, so I wanted to ask if you and your family would like to meet us. We will stay near the center and can go to the market and the cathedral together. If you are free on Saturday afternoon, we could have lunch at a restaurant that serves the famous torta ahogada. Please tell me if the date works for you. I miss you a lot, and I think it will be a perfect little reunion. Send my love to your parents. Best wishes, Valeria.',
    question: 'What food does Valeria suggest trying in Guadalajara?',
    options: ['A bowl of pozole.', 'The famous torta ahogada.', 'Fresh tacos from a stand.', 'A slice of traditional cake.'],
    answer: 1,
    explanation: 'Valeria suggests having lunch at a restaurant that serves the famous torta ahogada. Pozole, tacos, and cake are not mentioned.',
  },
  {
    id: 'rc-ar3',
    topic: 'Text ar: Factual comprehension',
    passage: 'Subject: Trip and reunion. Dear Tania, How are you? I hope your exams went well. I have great news: my family is planning a trip to Guadalajara next month, during the long weekend. I remember you have cousins there, so I wanted to ask if you and your family would like to meet us. We will stay near the center and can go to the market and the cathedral together. If you are free on Saturday afternoon, we could have lunch at a restaurant that serves the famous torta ahogada. Please tell me if the date works for you. I miss you a lot, and I think it will be a perfect little reunion. Send my love to your parents. Best wishes, Valeria.',
    question: 'When is Valeria planning to travel?',
    options: ['On Tania\'s birthday.', 'Next Monday morning.', 'During the long weekend of next month.', 'During the summer vacation.'],
    answer: 2,
    explanation: 'Valeria says her family is planning the trip next month, during the long weekend. Birthday, Monday, and summer are not mentioned.',
  },
  {
    id: 'rc-ar4',
    topic: 'Text ar: Inference',
    passage: 'Subject: Trip and reunion. Dear Tania, How are you? I hope your exams went well. I have great news: my family is planning a trip to Guadalajara next month, during the long weekend. I remember you have cousins there, so I wanted to ask if you and your family would like to meet us. We will stay near the center and can go to the market and the cathedral together. If you are free on Saturday afternoon, we could have lunch at a restaurant that serves the famous torta ahogada. Please tell me if the date works for you. I miss you a lot, and I think it will be a perfect little reunion. Send my love to your parents. Best wishes, Valeria.',
    question: 'What can we infer about Valeria and Tania?',
    options: ['They work in the same office building.', 'They have never met each other.', 'They both live in Guadalajara.', 'They are probably good friends who miss each other.'],
    answer: 3,
    explanation: 'Valeria says she misses Tania and hopes for a perfect little reunion, so they are probably close friends who miss each other. The other options are not supported.',
  },
  {
    id: 'rc-ar5',
    topic: 'Text ar: Vocabulary in context',
    passage: 'Subject: Trip and reunion. Dear Tania, How are you? I hope your exams went well. I have great news: my family is planning a trip to Guadalajara next month, during the long weekend. I remember you have cousins there, so I wanted to ask if you and your family would like to meet us. We will stay near the center and can go to the market and the cathedral together. If you are free on Saturday afternoon, we could have lunch at a restaurant that serves the famous torta ahogada. Please tell me if the date works for you. I miss you a lot, and I think it will be a perfect little reunion. Send my love to your parents. Best wishes, Valeria.',
    question: 'In the email, the word reunion most nearly means:',
    options: ['a meeting of people who see each other again after some time', 'a new subject in school', 'a kind of Mexican sandwich', 'a goodbye message'],
    answer: 0,
    explanation: 'Reunion means a meeting of people who see each other again after some time. A subject, a sandwich, or a goodbye do not match.',
  },
  {
    id: 'rc-as1',
    topic: 'Text as: Author\'s purpose',
    passage: 'Learn English in a new way! At Centro Speak, you will not memorize long lists of words. Our teachers use games, cooking, and music so that you practice real conversation from the very first class. We offer two morning groups and two evening groups for teenagers and adults, with small classes of only eight students so that everyone talks. New courses begin on the first Monday of every month, and the first class is free, with no registration cost. If you bring a friend, the second month of your course has a thirty percent discount. Classes run from September to December, and at the end you receive a certificate that is useful for school or for future jobs. Come and visit us on Avenida Reforma 120, or call 555-0187 to reserve your free class today. Your future begins with a sentence.',
    question: 'What is the main purpose of this advertisement?',
    options: ['To explain the history of the English language.', 'To invite people to register for English classes.', 'To sell cooking equipment for restaurants.', 'To announce a national holiday.'],
    answer: 1,
    explanation: 'The ad invites people to take English courses, offering a free first class. History, cooking supplies, and holidays are not the purpose.',
  },
  {
    id: 'rc-as2',
    topic: 'Text as: Detail',
    passage: 'Learn English in a new way! At Centro Speak, you will not memorize long lists of words. Our teachers use games, cooking, and music so that you practice real conversation from the very first class. We offer two morning groups and two evening groups for teenagers and adults, with small classes of only eight students so that everyone talks. New courses begin on the first Monday of every month, and the first class is free, with no registration cost. If you bring a friend, the second month of your course has a thirty percent discount. Classes run from September to December, and at the end you receive a certificate that is useful for school or for future jobs. Come and visit us on Avenida Reforma 120, or call 555-0187 to reserve your free class today. Your future begins with a sentence.',
    question: 'What makes the classes at Centro Speak special?',
    options: ['Students only memorize long lists of words.', 'Classes are taught only on Saturday.', 'Students practice real conversation with games, cooking, and music.', 'Each class has more than forty students.'],
    answer: 2,
    explanation: 'The ad says students practice real conversation with games, cooking, and music. Memorizing lists, Saturday-only classes, and forty students contradict the text.',
  },
  {
    id: 'rc-as3',
    topic: 'Text as: Vocabulary in context',
    passage: 'Learn English in a new way! At Centro Speak, you will not memorize long lists of words. Our teachers use games, cooking, and music so that you practice real conversation from the very first class. We offer two morning groups and two evening groups for teenagers and adults, with small classes of only eight students so that everyone talks. New courses begin on the first Monday of every month, and the first class is free, with no registration cost. If you bring a friend, the second month of your course has a thirty percent discount. Classes run from September to December, and at the end you receive a certificate that is useful for school or for future jobs. Come and visit us on Avenida Reforma 120, or call 555-0187 to reserve your free class today. Your future begins with a sentence.',
    question: 'In the advertisement, the word certificate means:',
    options: ['a discount for the first month', 'an internet address', 'a type of morning group', 'a document that shows you finished a course'],
    answer: 3,
    explanation: 'A certificate is a document that shows you finished a course. Discounts, internet addresses, and groups are not the meaning.',
  },
  {
    id: 'rc-as4',
    topic: 'Text as: Inference',
    passage: 'Learn English in a new way! At Centro Speak, you will not memorize long lists of words. Our teachers use games, cooking, and music so that you practice real conversation from the very first class. We offer two morning groups and two evening groups for teenagers and adults, with small classes of only eight students so that everyone talks. New courses begin on the first Monday of every month, and the first class is free, with no registration cost. If you bring a friend, the second month of your course has a thirty percent discount. Classes run from September to December, and at the end you receive a certificate that is useful for school or for future jobs. Come and visit us on Avenida Reforma 120, or call 555-0187 to reserve your free class today. Your future begins with a sentence.',
    question: 'According to the ad, you receive a thirty percent discount when you:',
    options: ['bring a friend to study at the school', 'register during the month of September', 'buy the books of the course', 'speak only English at home'],
    answer: 0,
    explanation: 'The ad offers a thirty percent discount on the second month if you bring a friend. September, buying books, and speaking English at home are not conditions.',
  },
  {
    id: 'rc-as5',
    topic: 'Text as: Detail',
    passage: 'Learn English in a new way! At Centro Speak, you will not memorize long lists of words. Our teachers use games, cooking, and music so that you practice real conversation from the very first class. We offer two morning groups and two evening groups for teenagers and adults, with small classes of only eight students so that everyone talks. New courses begin on the first Monday of every month, and the first class is free, with no registration cost. If you bring a friend, the second month of your course has a thirty percent discount. Classes run from September to December, and at the end you receive a certificate that is useful for school or for future jobs. Come and visit us on Avenida Reforma 120, or call 555-0187 to reserve your free class today. Your future begins with a sentence.',
    question: 'How can a person reserve the free first class?',
    options: ['By sending a letter to the school.', 'By visiting Avenida Reforma 120 or calling 555-0187.', 'By buying the certificate in advance.', 'By bringing two friends to the office.'],
    answer: 1,
    explanation: 'People can visit Avenida Reforma 120 or call 555-0187 to reserve the free class. Letters, certificates, and bringing friends are not required.',
  },
  {
    id: 'rc-at1',
    topic: 'Text at: Detail',
    passage: 'NOTICE TO ALL LIBRARY USERS: Our library will close at three o\'clock this Wednesday so that the staff can organize the new reading room. Please return all books before that hour if you are leaving that day. Starting next month, the borrowing system changes to be faster and safer: every user must show a valid library card to borrow books, and each card allows three books for up to two weeks. E-books can be renewed online, but printed books must be renewed in person at the front desk. Please remember that drinks with covers are allowed, but food is not permitted in any reading area. Thank you for keeping the library a quiet and tidy place for everyone. For questions, ask at the front desk or send an email to library@citymail.com.',
    question: 'Why will the library close early this Wednesday?',
    options: ['Because of a national holiday.', 'For the annual repair of the computers.', 'So that the staff can organize the new reading room.', 'Because there is a storm in the afternoon.'],
    answer: 2,
    explanation: 'The library closes early on Wednesday so the staff can organize the new reading room. Holidays, computer repairs, and storms are not mentioned.',
  },
  {
    id: 'rc-at2',
    topic: 'Text at: Vocabulary in context',
    passage: 'NOTICE TO ALL LIBRARY USERS: Our library will close at three o\'clock this Wednesday so that the staff can organize the new reading room. Please return all books before that hour if you are leaving that day. Starting next month, the borrowing system changes to be faster and safer: every user must show a valid library card to borrow books, and each card allows three books for up to two weeks. E-books can be renewed online, but printed books must be renewed in person at the front desk. Please remember that drinks with covers are allowed, but food is not permitted in any reading area. Thank you for keeping the library a quiet and tidy place for everyone. For questions, ask at the front desk or send an email to library@citymail.com.',
    question: 'In the notice, the word permitted most nearly means:',
    options: ['forbidden by the rules', 'difficult to find', 'very expensive', 'allowed by the rules'],
    answer: 3,
    explanation: 'Permitted means allowed, as in food not being permitted in the reading area. Forbidden, difficult, and expensive are the opposite or unrelated.',
  },
  {
    id: 'rc-at3',
    topic: 'Text at: Inference',
    passage: 'NOTICE TO ALL LIBRARY USERS: Our library will close at three o\'clock this Wednesday so that the staff can organize the new reading room. Please return all books before that hour if you are leaving that day. Starting next month, the borrowing system changes to be faster and safer: every user must show a valid library card to borrow books, and each card allows three books for up to two weeks. E-books can be renewed online, but printed books must be renewed in person at the front desk. Please remember that drinks with covers are allowed, but food is not permitted in any reading area. Thank you for keeping the library a quiet and tidy place for everyone. For questions, ask at the front desk or send an email to library@citymail.com.',
    question: 'According to the notice, which books must be renewed in person?',
    options: ['Printed books.', 'E-books.', 'Audiobooks.', 'Magazines from the front desk.'],
    answer: 0,
    explanation: 'The notice says printed books must be renewed in person, while e-books can be renewed online. Audiobooks and magazines are not mentioned.',
  },
  {
    id: 'rc-at4',
    topic: 'Text at: Factual comprehension',
    passage: 'NOTICE TO ALL LIBRARY USERS: Our library will close at three o\'clock this Wednesday so that the staff can organize the new reading room. Please return all books before that hour if you are leaving that day. Starting next month, the borrowing system changes to be faster and safer: every user must show a valid library card to borrow books, and each card allows three books for up to two weeks. E-books can be renewed online, but printed books must be renewed in person at the front desk. Please remember that drinks with covers are allowed, but food is not permitted in any reading area. Thank you for keeping the library a quiet and tidy place for everyone. For questions, ask at the front desk or send an email to library@citymail.com.',
    question: 'How many books can a user borrow with one library card?',
    options: ['One book.', 'Three books.', 'Two books.', 'Five books.'],
    answer: 1,
    explanation: 'The notice says each card allows three books for up to two weeks. One, two, and five are wrong according to the text.',
  },
  {
    id: 'rc-at5',
    topic: 'Text at: Main idea',
    passage: 'NOTICE TO ALL LIBRARY USERS: Our library will close at three o\'clock this Wednesday so that the staff can organize the new reading room. Please return all books before that hour if you are leaving that day. Starting next month, the borrowing system changes to be faster and safer: every user must show a valid library card to borrow books, and each card allows three books for up to two weeks. E-books can be renewed online, but printed books must be renewed in person at the front desk. Please remember that drinks with covers are allowed, but food is not permitted in any reading area. Thank you for keeping the library a quiet and tidy place for everyone. For questions, ask at the front desk or send an email to library@citymail.com.',
    question: 'What is the best summary of this notice?',
    options: ['The library will close permanently at the end of the month.', 'Books can now be kept for a whole year.', 'The library announces changes in its schedule, borrowing rules, and food policy.', 'Hot food will be served in the reading room.'],
    answer: 2,
    explanation: 'The notice announces the early closing, the new borrowing rules, and the food policy, so it summarizes the schedule, the rules, and the policy. Permanent closing, year-long borrowing, and hot food are not stated.',
  },
  {
    id: 'rc-au1',
    topic: 'Text au: Detail',
    passage: 'Bienvenidos a Cafe Colibri! Fresh breakfast and lunch all day, made with local ingredients. Breakfast is served until noon: Huevos Rancheros, two eggs, beans, corn tortillas, and salsa, with a hot drink of your choice, 65 pesos. Desayuno Colibri, fruit salad, granola, yogurt, and honey, 55 pesos. For lunch: Torta de Pollo with avocado and cheese, including a side of chips, 70 pesos. Quesadillas Verdes with spinach and mushrooms, three pieces, 60 pesos. Drinks: fresh orange juice 30 pesos, coffee with milk 25 pesos, and a large glass of Jamaica water 20 pesos. Add a small dessert for only 15 pesos. Children under six eat free with one adult meal. We are open from eight in the morning to six in the evening and closed on Mondays. Prices include service. Thanks for visiting us!',
    question: 'How much does the Torta de Pollo cost?',
    options: ['55 pesos.', '60 pesos.', '65 pesos.', '70 pesos.'],
    answer: 3,
    explanation: 'The menu lists the Torta de Pollo at 70 pesos. The other prices belong to other dishes.',
  },
  {
    id: 'rc-au2',
    topic: 'Text au: Vocabulary in context',
    passage: 'Bienvenidos a Cafe Colibri! Fresh breakfast and lunch all day, made with local ingredients. Breakfast is served until noon: Huevos Rancheros, two eggs, beans, corn tortillas, and salsa, with a hot drink of your choice, 65 pesos. Desayuno Colibri, fruit salad, granola, yogurt, and honey, 55 pesos. For lunch: Torta de Pollo with avocado and cheese, including a side of chips, 70 pesos. Quesadillas Verdes with spinach and mushrooms, three pieces, 60 pesos. Drinks: fresh orange juice 30 pesos, coffee with milk 25 pesos, and a large glass of Jamaica water 20 pesos. Add a small dessert for only 15 pesos. Children under six eat free with one adult meal. We are open from eight in the morning to six in the evening and closed on Mondays. Prices include service. Thanks for visiting us!',
    question: 'In the menu, the word side means:',
    options: ['a small extra portion of food served with the main dish', 'the long part of the table', 'the door of the restaurant', 'the price of the drink'],
    answer: 0,
    explanation: 'A side is a small extra portion of food served with the main dish, like the chips. The table\'s side, the door, and the drink price are unrelated.',
  },
  {
    id: 'rc-au3',
    topic: 'Text au: Inference',
    passage: 'Bienvenidos a Cafe Colibri! Fresh breakfast and lunch all day, made with local ingredients. Breakfast is served until noon: Huevos Rancheros, two eggs, beans, corn tortillas, and salsa, with a hot drink of your choice, 65 pesos. Desayuno Colibri, fruit salad, granola, yogurt, and honey, 55 pesos. For lunch: Torta de Pollo with avocado and cheese, including a side of chips, 70 pesos. Quesadillas Verdes with spinach and mushrooms, three pieces, 60 pesos. Drinks: fresh orange juice 30 pesos, coffee with milk 25 pesos, and a large glass of Jamaica water 20 pesos. Add a small dessert for only 15 pesos. Children under six eat free with one adult meal. We are open from eight in the morning to six in the evening and closed on Mondays. Prices include service. Thanks for visiting us!',
    question: 'A family with a five-year-old child who buys one adult meal can expect:',
    options: ['to pay an extra fee for the child', 'the child to eat for free', 'the child to receive a free toy', 'the restaurant to be closed that day'],
    answer: 1,
    explanation: 'The menu says children under six eat free with one adult meal, so the child eats for free. The other options contradict the text or are not mentioned.',
  },
  {
    id: 'rc-au4',
    topic: 'Text au: Factual comprehension',
    passage: 'Bienvenidos a Cafe Colibri! Fresh breakfast and lunch all day, made with local ingredients. Breakfast is served until noon: Huevos Rancheros, two eggs, beans, corn tortillas, and salsa, with a hot drink of your choice, 65 pesos. Desayuno Colibri, fruit salad, granola, yogurt, and honey, 55 pesos. For lunch: Torta de Pollo with avocado and cheese, including a side of chips, 70 pesos. Quesadillas Verdes with spinach and mushrooms, three pieces, 60 pesos. Drinks: fresh orange juice 30 pesos, coffee with milk 25 pesos, and a large glass of Jamaica water 20 pesos. Add a small dessert for only 15 pesos. Children under six eat free with one adult meal. We are open from eight in the morning to six in the evening and closed on Mondays. Prices include service. Thanks for visiting us!',
    question: 'On which day is Cafe Colibri closed?',
    options: ['On Saturdays.', 'On Fridays.', 'On Mondays.', 'On Sundays.'],
    answer: 2,
    explanation: 'The menu says the restaurant is closed on Mondays. Saturdays, Fridays, and Sundays are opening days.',
  },
  {
    id: 'rc-au5',
    topic: 'Text au: Detail',
    passage: 'Bienvenidos a Cafe Colibri! Fresh breakfast and lunch all day, made with local ingredients. Breakfast is served until noon: Huevos Rancheros, two eggs, beans, corn tortillas, and salsa, with a hot drink of your choice, 65 pesos. Desayuno Colibri, fruit salad, granola, yogurt, and honey, 55 pesos. For lunch: Torta de Pollo with avocado and cheese, including a side of chips, 70 pesos. Quesadillas Verdes with spinach and mushrooms, three pieces, 60 pesos. Drinks: fresh orange juice 30 pesos, coffee with milk 25 pesos, and a large glass of Jamaica water 20 pesos. Add a small dessert for only 15 pesos. Children under six eat free with one adult meal. We are open from eight in the morning to six in the evening and closed on Mondays. Prices include service. Thanks for visiting us!',
    question: 'What does the Desayuno Colibri include?',
    options: ['Two eggs, beans, and tortillas.', 'A chicken sandwich and chips.', 'Three quesadillas with mushrooms.', 'Fruit salad, granola, yogurt, and honey.'],
    answer: 3,
    explanation: 'The Desayuno Colibri includes fruit salad, granola, yogurt, and honey. The other options describe different dishes.',
  },

];