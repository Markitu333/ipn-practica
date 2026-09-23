export const matematicasExperimental = [
  {
    id: 'mexp-01',
    topic: 'Sucesiones numéricas',
    question:
      'Determinar el décimo sexto elemento de una sucesión aritmética con diferencia de 8, tal que la suma de los primeros dos términos sea 5.',
    options: ['181/2', '237/2', '361/2', '427/2'],
    answer: 1,
    explanation:
      'Sea a₁ el primer término. La suma de los dos primeros es a₁ + (a₁ + 8) = 5, de donde 2a₁ = −3 y a₁ = −3/2. El término 16 es a₁ + 15·8 = −3/2 + 120 = 237/2.',
  },
  {
    id: 'mexp-02',
    topic: 'Expresiones generales',
    question: 'Identificar el término general que reproduce la sucesión: 0, 6, −18, 36, −60, …',
    options: ['sₙ = (−1)ⁿ·n(n−1)', 'sₙ = (−1)ⁿ·3n(n−1)', 'sₙ = (−1)ⁿ·3n(2n−1)', 'sₙ = 3n(2n−1)'],
    answer: 1,
    explanation:
      'Probando sₙ = (−1)ⁿ·3n(n−1): n=1 → 0; n=2 → 3·2·1 = 6; n=3 → −3·3·2 = −18; n=4 → 3·4·3 = 36; n=5 → −3·5·4 = −60. Coincide con la sucesión.',
  },
  {
    id: 'mexp-03',
    topic: 'Operaciones de simetría',
    question:
      'Se dibuja un triángulo trazando las diagonales de tres caras adyacentes de un cubo, como se muestra en la figura. ¿Cuánto mide el ángulo BDG del triángulo?',
    options: ['60°', '70°', '80°', '90°'],
    answer: 0,
    explanation:
      'Cada lado del triángulo BDG es la diagonal de una cara del cubo, por lo que los tres lados miden lo mismo (la diagonal de un cuadrado). El triángulo es equilátero y, por lo tanto, sus tres ángulos miden 60°.',
  },
  {
    id: 'mexp-04',
    topic: 'Resolución de problemas',
    question:
      'Un volcán entra en erupción cada 24 años, otro cada 32 años y un tercero, cada 36 años. Si en algún momento coincidieron las erupciones de los tres volcanes, ¿cuántos años tendrían que pasar para que vuelvan a coincidir?',
    options: ['92', '184', '288', '310'],
    answer: 2,
    explanation:
      'Se calcula el mínimo común múltiplo (mcm). 24 = 2³·3, 32 = 2⁵, 36 = 2²·3², por lo que mcm = 2⁵·3² = 32·9 = 288 años.',
  },
  {
    id: 'mexp-05',
    topic: 'Resolución de problemas',
    question:
      'Un buzo profesional realizará tres reparaciones a diferente profundidad en una sola inmersión. Si dispone de un tanque que dura 50 min y en la primera reparación emplea x minutos, en la segunda la tercera parte del tiempo de la primera, y la última una cuarta parte de la primera reparación, ¿cuántos minutos de oxígeno tendrá disponibles para realizar la última reparación?',
    options: ['6.5', '7.9', '8.7', '9.5'],
    answer: 1,
    explanation:
      'El tiempo total es x + x/3 + x/4 = 50 → x·(19/12) = 50 → x = 600/19. La última reparación dura x/4 = 150/19 ≈ 7.9 minutos.',
  },
  {
    id: 'mexp-06',
    topic: 'Resolución de problemas',
    question:
      'Una planta de tratamiento de aguas residuales tiene tres cisternas: la primera, donde elimina sedimentos, se llena a 2/3; en seguida se pasa a la cisterna de tratamiento físico-químico que se llena a 1/4 de su capacidad. Por último está la cisterna de aclaración que se llena a 1/12 de su capacidad total. ¿Con cuántas cisternas primarias se llena la cisterna final?',
    options: ['24', '12', '8', '3'],
    answer: 1,
    explanation:
      'Cada cisterna primaria aporta 1/12 de la capacidad de la cisterna final, así que se necesitan 12 cisternas para completarla: 12 × 1/12 = 1.',
  },
  {
    id: 'mexp-07',
    topic: 'Resolución de problemas',
    question:
      'Un auto de la marca Alpha tiene un valor de $550,000, es decir, un tercio más de lo que cuesta un auto de la marca Betha. A su vez, este es dos veces más costoso que uno de la marca Gama, el cual es $120,000 más caro que el de la marca Delta. ¿Cuánto cuestan los autos Betha y Delta?',
    options: [
      '$520,500 y $57,250',
      '$412,500 y $86,250',
      '$357,500 y $113,250',
      '$350,500 y $120,250',
    ],
    answer: 1,
    explanation:
      'Alpha = (4/3)·Betha → Betha = 550000·3/4 = 412500. Betha = 2·Gama → Gama = 206250. Gama = Delta + 120000 → Delta = 86250.',
  },
  {
    id: 'mexp-08',
    topic: 'Resolución de problemas',
    question:
      'Al morir, un inversionista dejó $450,000 en acciones. Heredó a su esposa el 20% del dinero y repartió lo demás por partes iguales entre sus tres hijos. ¿Cuánto dinero le toca a cada hijo?',
    options: ['$60,000', '$90,000', '$120,000', '$160,000'],
    answer: 2,
    explanation:
      'La esposa recibe 20% de 450000 = 90000. Quedan 360000 para los tres hijos: 360000/3 = 120000 por hijo.',
  },
  {
    id: 'mexp-09',
    topic: 'Resolución de problemas',
    question:
      'Se tienen dos relojes de arena de diferente tamaño. En el primero, cada centímetro cúbico de arena pasa en un minuto. En el segundo, la misma cantidad de arena pasa en tres minutos. En los dos relojes el total de arena pasa en el mismo tiempo, si el primer reloj tiene 27 cm³ de arena. ¿Cuántos centímetros cúbicos de arena tiene el segundo reloj?',
    options: ['9', '10', '12', '20'],
    answer: 0,
    explanation:
      'El primer reloj tarda 27 min (27 cm³ × 1 min/cm³). El segundo recorre cada cm³ en 3 min, así que debe tener 27/3 = 9 cm³ para tardar lo mismo.',
  },
  {
    id: 'mexp-10',
    topic: 'Operaciones básicas',
    question: 'Realizar la siguiente operación con números decimales periódicos: 1 − (0.3 + 0.4)',
    options: ['9/2', '7/2', '2/9', '2/7'],
    answer: 2,
    explanation:
      '0.3̄ = 1/3 y 0.4̄ = 4/9. La suma es 1/3 + 4/9 = 3/9 + 4/9 = 7/9, por lo que 1 − 7/9 = 2/9.',
  },
  {
    id: 'mexp-11',
    topic: 'Proporciones',
    question:
      'La delegación dispone de 120 km de cable para electrificar las avenidas principales y las colonias aledañas en una razón 3:5. La parte de menor longitud se divide, a su vez, para iluminar parques y calles en una razón 2:3. ¿Cuál es la longitud de cable que se utiliza para electrificar las calles?',
    options: ['45 km', '32 km', '27 km', '19 km'],
    answer: 2,
    explanation:
      'La parte menor es (3/8)·120 = 45 km. Esa parte se reparte en razón 2:3, y las calles reciben la mayor proporción: (3/5)·45 = 27 km.',
  },
  {
    id: 'mexp-12',
    topic: 'Proporciones',
    question:
      'Un pastel se corta quitando dos tercios cada vez que alguien toma una porción. Después de tres cortes, ¿qué fracción queda del pastel?',
    options: ['1/2', '1/9', '1/12', '1/27'],
    answer: 3,
    explanation:
      'En cada corte queda 1/3 del pastel. Después de tres cortes queda (1/3)³ = 1/27.',
  },
  {
    id: 'mexp-13',
    topic: 'Proporciones',
    question:
      'Una línea de producción consiste en 3 telares que producen 600 m de tela en 2 hrs. Si se requiere incrementar la producción a través de 3 telares más, ¿en cuántas horas se producirán 12000 m de tela?',
    options: ['12', '15', '20', '25'],
    answer: 2,
    explanation:
      'Con 3 telares se producen 600 m en 2 h, es decir 300 m/h. Con 6 telares se producen 600 m/h. Para 12000 m se requieren 12000/600 = 20 horas.',
  },
  {
    id: 'mexp-14',
    topic: 'Lenguaje algebraico',
    question:
      'Encontrar dos números tales que si uno de ellos se suma a la mitad del otro se obtiene 21, y si la tercera parte de este último número se resta al doble del primero, resulta 18.',
    options: ['10 y 12', '12 y 18', '18 y 22', '22 y 30'],
    answer: 1,
    explanation:
      'Con a = 12 y b = 18: a + b/2 = 12 + 9 = 21 y 2a − b/3 = 24 − 6 = 18. Cumple ambas condiciones.',
  },
  {
    id: 'mexp-15',
    topic: 'Productos notables',
    question: 'Completar el binomio: (3n − 2s)³ = 27n³ + ( ) + 36ns² + ( )',
    options: ['−27n²s, 4s³', '−54n²s, −8s³', '54n²s, 8s³', '27n²s, 4s³'],
    answer: 1,
    explanation:
      'Por el binomio al cubo: (3n)³ + 3(3n)²(−2s) + 3(3n)(−2s)² + (−2s)³ = 27n³ − 54n²s + 36ns² − 8s³.',
  },
  {
    id: 'mexp-16',
    topic: 'Métodos de factorización',
    question: 'Factorizar el polinomio y³ − 27',
    options: ['(y+3)(y²+3y+9)', '(y−3)(y²+3y+9)', '(y−3)(y²−3y−9)', '(y+3)(y²−3y+9)'],
    answer: 1,
    explanation:
      'Es una diferencia de cubos: a³ − b³ = (a−b)(a²+ab+b²). Con a = y y b = 3 queda (y−3)(y²+3y+9).',
  },
  {
    id: 'mexp-17',
    topic: 'Propiedades de las igualdades',
    question: 'Calcular el valor de x en la ecuación: 26x + 3(2x − 8) = 14x + 6',
    options: ['−5/3', '5/2', '−5/2', '5/3'],
    answer: 3,
    explanation:
      '26x + 6x − 24 = 14x + 6 → 32x − 24 = 14x + 6 → 18x = 30 → x = 5/3.',
  },
  {
    id: 'mexp-18',
    topic: 'Ecuaciones lineales',
    question:
      'Cuatro inversionistas reciben una ganancia de 67 mdp. El primero (z) gana con la venta de una 1/5 parte de la ganancia del inversionista mayoritario (m), quien gana 5 mdp más que el tercer inversionista (s), mientras que el segundo inversionista (y) obtiene 12 mdp más que el primero. ¿Cuál es la ganancia en mdp que obtiene el inversionista mayoritario?',
    options: ['32', '25', '30', '17'],
    answer: 1,
    explanation:
      'z = m/5, s = m − 5, y = z + 12. La suma total es z + y + m + s = 67 → 2z + 2m + 7 = 67 → 2z + 2m = 60. Con z = m/5 → 6m/5 = 30 → m = 25.',
  },
  {
    id: 'mexp-19',
    topic: 'Ecuaciones lineales',
    question:
      'Una biblioteca requiere acomodar la adquisición de 570 ejemplares en tres espacios: Ciencias e Ingeniería (CI), Biología y Medicina (BM) que dispone de una cuarta parte del espacio de CI, y Sociales y Administración (SA) que dispone de una tercera parte del espacio de CI. ¿Cuántos ejemplares se pueden colocar en cada espacio (CI, BM y SA), respectivamente?',
    options: ['420, 150 y 95', '360, 120 y 95', '360, 90 y 120', '420, 105 y 120'],
    answer: 2,
    explanation:
      'Se cumple CI + CI/4 + CI/3 = 570 → CI·(19/12) = 570 → CI = 360. Entonces BM = 90 y SA = 120.',
  },
  {
    id: 'mexp-20',
    topic: 'Ecuaciones lineales',
    question:
      'Identificar el sistema de ecuaciones que corresponde al siguiente planteamiento: "En un edificio inteligente de dos niveles (N1, N2) se arma una red para 170 usuarios en total. La velocidad de transferencia es de 590 Gbps mismos que se reparten en cada nivel como sigue: 3 Gbps para cada usuario del primer nivel N1 y 4 Gbps para cada usuario del nivel N2".',
    options: [
      'N1+N2=59; 3N1+4N2=170',
      'N1+N2=170; 4N1+3N2=590',
      'N1+N2=170; 3N1+4N2=590',
      'N1+N2=590; 4N1−3N2=170',
    ],
    answer: 2,
    explanation:
      'El total de usuarios es N1 + N2 = 170 y el total de velocidad 3·N1 + 4·N2 = 590.',
  },
  {
    id: 'mexp-21',
    topic: 'Concepto de función exponencial',
    question: 'La gráfica de la función exponencial f(x) = 2ˣ corresponde a una curva que se encuentra ( ) del eje x.',
    options: ['decreciente - debajo', 'decreciente - arriba', 'creciente - arriba', 'creciente - debajo'],
    answer: 2,
    explanation:
      'La función 2ˣ crece conforme x aumenta y siempre toma valores positivos, por lo que su gráfica es creciente y queda por arriba del eje x.',
  },
  {
    id: 'mexp-22',
    topic: 'Funciones exponenciales y logarítmicas',
    question: 'Si 3ᵃ = 15 y 15ᵇ = 27, entonces el producto a·b es igual a:',
    options: ['1', '3', '12', '30'],
    answer: 1,
    explanation:
      'a = log₃15 y b = log₁₅27. Por el cambio de base, a·b = log₃15 · log₁₅27 = log₃27 = 3.',
  },
  {
    id: 'mexp-23',
    topic: 'Polígonos',
    question:
      'En un pentágono regular ABCDE se traza la diagonal AC. Calcular la medida del ángulo ∠ACD.',
    options: ['36°', '48°', '72°', '96°'],
    answer: 2,
    explanation:
      'En el triángulo isósceles ACD (formado por dos diagonales y un lado), el ángulo en el vértice A del pentágono es su ángulo interior. El triángulo tiene los ángulos 36°, 72°, 72°, por lo que ∠ACD = 72°.',
  },
  {
    id: 'mexp-24',
    topic: 'Circunferencia',
    question:
      'En la figura, las rectas PT y PA forman un triángulo rectángulo; PT es tangente a la circunferencia en T. Calcular el radio de la circunferencia sabiendo que PT = 8 y AP = 4.',
    options: ['3', '4', '5', '6'],
    answer: 3,
    explanation:
      'Por potencia de un punto, PT² = PA·PB con PB = PA + 2r = 4 + 2r. Entonces 64 = 4(4 + 2r) → 16 = 4 + 2r → r = 6.',
  },
  {
    id: 'mexp-25',
    topic: 'Identidades trigonométricas',
    question: 'Si se sabe que sen θ − 2cos θ = 0, calcular el valor de sec² θ.',
    options: ['2', '4', '5', '7'],
    answer: 2,
    explanation:
      'sen θ = 2cos θ → tan θ = 2. Usando sec²θ = 1 + tan²θ = 1 + 4 = 5.',
  },
  {
    id: 'mexp-26',
    topic: 'Identidades trigonométricas',
    question:
      'Si sen θ y cos θ son las soluciones de la ecuación cuadrática ax² + bx + c = 0, ¿cuál de las siguientes relaciones es verdadera?',
    options: ['a²+b²=2ac', 'b²+c²=2ab', 'a²−2ac=b²', 'a²+2ac=b²'],
    answer: 3,
    explanation:
      'Como las raíces son sen θ y cos θ: suma = −b/a y producto = c/a. Elevando: (sen+cos)² = 1 + 2·(sen·cos) → b²/a² = 1 + 2c/a → b² = a² + 2ac.',
  },
  {
    id: 'mexp-27',
    topic: 'Geometría euclidiana',
    question:
      'En la figura, los ángulos ∠APB, ∠BPC y ∠CPA están en razón 2:3:4. Calcular la medida de ∠APB.',
    options: ['20°', '40°', '60°', '80°'],
    answer: 3,
    explanation:
      'Los tres ángulos completan 360°. Con la razón 2:3:4, 2k + 3k + 4k = 360 → k = 40, así que ∠APB = 2k = 80°.',
  },
  {
    id: 'mexp-28',
    topic: 'Conceptos básicos',
    question:
      'Determinar las coordenadas del punto P que divide al segmento que va del punto A(2,3) al B(8,−9) en la razón 1:2.',
    options: ['P(5,−3)', 'P(4,−1)', 'P(6,−5)', 'P(3,−6)'],
    answer: 1,
    explanation:
      'Con razón AP:PB = 1:2, P = (2A + B)/3 = ((2·2+8)/3, (2·3−9)/3) = (4, −1).',
  },
  {
    id: 'mexp-29',
    topic: 'Conceptos básicos',
    question:
      'Las coordenadas de los vértices de un triángulo son A(2,3), B(3,−2) y C(−2,5). Determinar las coordenadas de su baricentro.',
    options: ['G(3,6)', 'G(7,10)', 'G(1,2)', 'G(2,3)'],
    answer: 2,
    explanation:
      'El baricentro es el promedio de los vértices: ((2+3−2)/3, (3−2+5)/3) = (3/3, 6/3) = (1, 2).',
  },
  {
    id: 'mexp-30',
    topic: 'Conceptos básicos',
    question:
      'Calcular el área del triángulo que tiene vértices de coordenadas A(t+3, t−1), B(t+3, t+5) y C(t−1, t+2).',
    options: ['9', '12', '16', '18'],
    answer: 1,
    explanation:
      'Trasladando por (−t, −t): A(3,−1), B(3,5), C(−1,2). Base AB = 6 y la altura (distancia de C a la recta x=3) es 4. Área = ½·6·4 = 12.',
  },
  {
    id: 'mexp-31',
    topic: 'Línea recta',
    question:
      'Determinar la ecuación de una recta perpendicular a la recta que pasa por los puntos (3,2) y (5,−1).',
    options: ['2y=−3x+13', '2y=3x−13', '3y=2x+13', '3y=6x+16'],
    answer: 2,
    explanation:
      'La pendiente de la recta dada es (−1−2)/(5−3) = −3/2. La perpendicular debe tener pendiente 2/3; la única opción con esa pendiente es 3y = 2x + 13.',
  },
  {
    id: 'mexp-32',
    topic: 'Línea recta',
    question:
      'La recta x + 2y − 7 = 0, al intersectar al segmento que une los puntos A(4,5) y B(−2,1), lo divide en la razón:',
    options: ['1/2', '1', '3/2', '2'],
    answer: 1,
    explanation:
      'Parametrizando P = (4−6t, 5−4t) y sustituyendo: (4−6t) + 2(5−4t) − 7 = 0 → 7 − 14t = 0 → t = 1/2. P es el punto medio, así que la razón es 1:1 = 1.',
  },
  {
    id: 'mexp-33',
    topic: 'Línea recta',
    question:
      'Una recta pasa por el punto P(3,4), de manera que P es el punto medio entre las intersecciones de la recta con los ejes de coordenadas. Determinar la ecuación de dicha recta.',
    options: ['3x−4y=−7', '3x+4y=25', '4x+3y=24', 'x+y=7'],
    answer: 2,
    explanation:
      'Si las intersecciones son (a,0) y (0,b), el punto medio es (a/2, b/2) = (3,4) → a = 6 y b = 8. La recta que pasa por (6,0) y (0,8) es x/6 + y/8 = 1 → 4x + 3y = 24.',
  },
  {
    id: 'mexp-34',
    topic: 'Circunferencia',
    question:
      'Determinar la ecuación de la circunferencia si el área del cuadrado sombreado inscrito en ella es de 8 unidades cuadradas.',
    options: ['x²+y²=4', 'x²+y²=8', 'x²+y²=8√2', 'x²+y²=16'],
    answer: 0,
    explanation:
      'El cuadrado inscrito con área 8 tiene lado √8 = 2√2. Su diagonal (y diámetro del círculo) mide lado·√2 = 4, así que el radio es 2 y r² = 4: la ecuación es x² + y² = 4.',
  },
  {
    id: 'mexp-35',
    topic: 'Circunferencia',
    question:
      'Determinar la ecuación de la circunferencia que pasa por los puntos A(6,−1) y B(4,3) y que tiene su centro sobre el eje de las abscisas.',
    options: ['x²+y²−6x−1=0', 'x²+y²+3y−34=0', 'x²+y²+6x−73=0', 'x²+y²−3x−39=0'],
    answer: 0,
    explanation:
      'El centro es (h,0). Igualando distancias: (6−h)² + 1 = (4−h)² + 9 → 37 − 12h = 25 − 8h → h = 3. r² = 9 + 1 = 10, y la ecuación (x−3)² + y² = 10 se expande a x² + y² − 6x − 1 = 0.',
  },
  {
    id: 'mexp-36',
    topic: 'Circunferencia',
    question:
      'Determinar la ecuación general de la circunferencia con centro C(1,3) y radio r = √3.',
    options: ['x²+y²−2x−6y+7=0', 'x²+y²+2x+6y+7=0', 'x²+y²−2x−6y+10=0', 'x²+y²+2x+6y+13=0'],
    answer: 0,
    explanation:
      '(x−1)² + (y−3)² = 3 → x² + y² − 2x − 6y + 1 + 9 − 3 = 0 → x² + y² − 2x − 6y + 7 = 0.',
  },
  {
    id: 'mexp-37',
    topic: 'Circunferencia',
    question:
      'Determinar la ecuación de la circunferencia con centro en C(−3,3) y que pasa por el punto P(1,2).',
    options: ['x²+y²+6x+6y+1=0', 'x²+y²+6x−6y+1=0', 'x²+y²+6x+6y−11=0', 'x²+y²+6x−6y−11=0'],
    answer: 1,
    explanation:
      'r² = (1+3)² + (2−3)² = 16 + 1 = 17. La ecuación (x+3)² + (y−3)² = 17 se expande a x² + y² + 6x − 6y + 1 = 0.',
  },
  {
    id: 'mexp-38',
    topic: 'Circunferencia',
    question:
      'Determinar la ecuación de la cuerda que es común a las circunferencias: x²+y²−16y+24=0 y x²+y²−8x−24=0.',
    options: ['x−2y+6=0', 'x+2y−6=0', '2x−y−6=0', '2x+y+6=0'],
    answer: 0,
    explanation:
      'Restando las dos ecuaciones: (−16y+24) − (−8x−24) = 0 → 8x − 16y + 48 = 0 → x − 2y + 6 = 0.',
  },
  {
    id: 'mexp-39',
    topic: 'Parábola',
    question:
      'En la figura se muestra la gráfica de una parábola que pasa por el origen O y por el punto P(0,6). Determinar la ecuación de la parábola si el segmento OP es su ancho focal.',
    options: ['y²−6x−6y=0', 'y²−3x−6y=0', 'y²+6x−6y=0', 'y²+3x−6y=0'],
    answer: 0,
    explanation:
      'El ancho focal (lado recto) mide 6, así que |4p| = 6. De (y−3)² = 6x + 9 = 6(x + 3/2), p = 3/2; el foco es (0,3) y los extremos del lado recto son (0,0) y (0,6). La ecuación expandida es y² − 6x − 6y = 0.',
  },
  {
    id: 'mexp-40',
    topic: 'Parábola',
    question:
      'Determinar el valor de k, para el cual, la recta x − y + k = 0 es tangente a la parábola (x−2)² = 4(y−2).',
    options: ['−2', '−1', '1', '2'],
    answer: 1,
    explanation:
      'Sustituyendo y = x + k: (x−2)² = 4(x + k − 2) → x² − 8x + 12 − 4k = 0. Para tangencia el discriminante debe ser 0: 64 − 4(12 − 4k) = 0 → 16 + 16k = 0 → k = −1.',
  },
  {
    id: 'mexp-41',
    topic: 'Parábola',
    question: 'Determinar la ecuación de la directriz de la parábola y² + 4y + 4x + 2 = 0.',
    options: ['2x−1=0', '2x−3=0', '2x+1=0', '2x+3=0'],
    answer: 1,
    explanation:
      'Completando cuadrados: (y+2)² = −4x + 2 = −4(x − 1/2). Es una parábola que abre a la izquierda con p = 1 y vértice en (1/2,−2). Su directriz es x = 1/2 + 1 = 3/2 → 2x − 3 = 0.',
  },
  {
    id: 'mexp-42',
    topic: 'Elipse',
    question:
      'Determinar las coordenadas del centro de la elipse 9x² + 16y² − 36x + 32y − 92 = 0.',
    options: ['C(1,−1)', 'C(2,−1)', 'C(1,2)', 'C(−1,2)'],
    answer: 1,
    explanation:
      'Completando cuadrados: 9(x−2)² + 16(y+1)² = 144. Por lo tanto, el centro es C(2,−1).',
  },
  {
    id: 'mexp-43',
    topic: 'Hipérbola',
    question: 'La excentricidad de una hipérbola equilátera es igual a:',
    options: ['√2', '√3', '2', '5/2'],
    answer: 0,
    explanation:
      'En una hipérbola equilátera (rectangular) los semiejes son iguales: a = b. Entonces c² = a² + b² = 2a² → e = c/a = √2.',
  },
  {
    id: 'mexp-44',
    topic: 'Hipérbola',
    question: 'Determinar las coordenadas del centro de la hipérbola: x² − y² − 4x + 6y − 6 = 0.',
    options: ['C(2,3)', 'C(−2,3)', 'C(2,−3)', 'C(−2,−3)'],
    answer: 0,
    explanation:
      'Completando cuadrados: (x−2)² − (y−3)² = 1. Por lo tanto, el centro es C(2,3).',
  },
  {
    id: 'mexp-45',
    topic: 'Hipérbola',
    question:
      'Calcular el valor del producto e·e′ si se sabe que e y e′ son las excentricidades de la hipérbola 5x² − 4y² = 20 y la elipse 5x² + 9y² = 45, respectivamente.',
    options: ['1', '4', '6', '9'],
    answer: 0,
    explanation:
      'Hipérbola: x²/4 − y²/5 = 1 → a=2, c=3 → e = 3/2. Elipse: x²/9 + y²/5 = 1 → a=3, c=2 → e′ = 2/3. El producto es (3/2)(2/3) = 1.',
  },
  {
    id: 'mexp-46',
    topic: 'Coordenadas polares',
    question:
      'Relacionar cada ecuación paramétrica con la curva que le corresponde. 1. x=acos t, y=asen t · 2. x=acos t, y=bsen t · 3. x=asec t, y=btan t · 4. x=a+bt, y=c+dt. Curvas: A. Recta · B. Circunferencia · C. Elipse · D. Hipérbola.',
    options: ['1A, 2B, 3D, 4C', '1B, 2C, 3D, 4A', '1B, 2D, 3C, 4A', '1C, 2B, 3A, 4D'],
    answer: 1,
    explanation:
      'x=acos t, y=asen t describe una circunferencia; x=acos t, y=bsen t una elipse; x=asec t, y=btan t una hipérbola; y x=a+bt, y=c+dt una recta. Por lo tanto: 1B, 2C, 3D, 4A.',
  },
  {
    id: 'mexp-47',
    topic: 'Coordenadas polares',
    question:
      'Identificar un punto y un vector director de la recta definida por las ecuaciones paramétricas: x = 2t, y = 1 − 5t.',
    options: ['A=(0,1); v=(2,5)', 'A=(0,−1); v=(2,5)', 'A=(0,−1); v=(2,−5)', 'A=(0,1); v=(2,−5)'],
    answer: 3,
    explanation:
      'Con t = 0 el punto es (0,1). Los coeficientes de t indican el vector director (2,−5). La opción correcta es A=(0,1); v=(2,−5).',
  },
  {
    id: 'mexp-48',
    topic: 'Dominio y rango',
    question: '¿Cuál es el rango de la función F(x) = x² + 4x + 12?',
    options: ['[4, ∞)', '[8, ∞)', '[12, ∞)', '[16, ∞)'],
    answer: 1,
    explanation:
      'El vértice de la parábola está en x = −2, donde F(−2) = 4 − 8 + 12 = 8. Abre hacia arriba, así que el rango es [8, ∞).',
  },
  {
    id: 'mexp-49',
    topic: 'Desigualdades',
    question:
      'Si el conjunto solución de la desigualdad (x+1)(x−5) ≥ k es el conjunto ℝ, determinar el mayor valor posible de k.',
    options: ['−9', '−4', '4', '9'],
    answer: 0,
    explanation:
      '(x+1)(x−5) = x² − 4x − 5 = (x−2)² − 9, cuyo mínimo es −9. Para que la desigualdad se cumpla para toda x, debe tenerse k ≤ −9, y el mayor valor es k = −9.',
  },
  {
    id: 'mexp-50',
    topic: 'Definición de derivada',
    question:
      'Ordenar los pasos para obtener la derivada de una función f(x) en x = c: 1. Dividir entre el incremento h · 2. Calcular la diferencia f(c+h) − f(c) · 3. Evaluar f(c+h) · 4. Calcular el límite cuando h → 0.',
    options: ['2, 1, 4, 3', '2, 3, 1, 4', '3, 1, 4, 2', '3, 2, 1, 4'],
    answer: 3,
    explanation:
      'El orden correcto es: evaluar f(c+h), calcular la diferencia f(c+h) − f(c), dividir entre el incremento h y, finalmente, calcular el límite cuando h → 0.',
  },
  {
    id: 'mexp-51',
    topic: 'Interpretación geométrica',
    question:
      'Si f(x) es una función derivable en el intervalo (a,b), entonces f(x) es ( ) en los subintervalos donde f′(x) < 0 y ( ) en los subintervalos donde f′(x) > 0.',
    options: ['creciente - decreciente', 'decreciente - creciente', 'cóncava - convexa', 'convexa - cóncava'],
    answer: 1,
    explanation:
      'Cuando la derivada es negativa la función decrece, y cuando es positiva la función crece: decreciente - creciente.',
  },
  {
    id: 'mexp-52',
    topic: 'Fórmulas de derivadas',
    question: 'Calcular la derivada de la función f(x) = 2ˣ + x².',
    options: ['2ˣ·ln2 + 2x', '2ˣ + 2x', '2ˣ·ln2 − 2x', '2ˣ·ln2 + 2x²'],
    answer: 0,
    explanation:
      'La derivada de 2ˣ es 2ˣ·ln2 y la de x² es 2x. Por lo tanto f′(x) = 2ˣ·ln2 + 2x.',
  },
  {
    id: 'mexp-53',
    topic: 'Fórmulas de derivadas',
    question: 'Calcular la segunda derivada de la función f(x) = x·ln x − x + 10.',
    options: ['1/x', 'x + ln x', 'ln x', 'x·ln x'],
    answer: 0,
    explanation:
      'f′(x) = ln x + x·(1/x) − 1 = ln x. La segunda derivada es f″(x) = 1/x.',
  },
  {
    id: 'mexp-54',
    topic: 'Regla de la cadena',
    question: 'Calcular la derivada de la función f(x) = ln(sec(ax + b)).',
    options: ['a·tan(ax+b)', 'a·tan²(ax+b)', 'a·sec(ax+b)', 'a·sec²(ax+b)'],
    answer: 0,
    explanation:
      'Usando la regla de la cadena: f′(x) = (1/sec(ax+b)) · sec(ax+b)·tan(ax+b) · a = a·tan(ax+b).',
  },
  {
    id: 'mexp-55',
    topic: 'Máximos y mínimos',
    question:
      'La gráfica del polinomio P(x) = (x+1)(x−2)² tiene un máximo relativo en ( ) y un mínimo relativo en ( ).',
    options: ['x=0, x=2', 'x=2, x=0', 'x=−1, x=2', 'x=2, x=−1'],
    answer: 0,
    explanation:
      'P′(x) = (x−2)² + 2(x+1)(x−2) = 3x(x−2). Los puntos críticos son x=0 y x=2. Con P″(x) = 6x − 6, en x=0 hay máximo (P″<0) y en x=2 hay mínimo (P″>0).',
  },
  {
    id: 'mexp-56',
    topic: 'Fórmulas básicas de integración',
    question: 'Resolver la integral: ∫ dx / (x·ln(3x))',
    options: ['ln|ln(3x)| + C', '3·ln|ln(3x)| + C', '(1/3)·ln|ln(3x)| + C', 'ln|ln x| + C'],
    answer: 0,
    explanation:
      'Con u = ln(3x), du = dx/x. La integral queda ∫ du/u = ln|u| + C = ln|ln(3x)| + C.',
  },
  {
    id: 'mexp-57',
    topic: 'Teoría de conjuntos',
    question:
      'Si el conjunto A tiene 1024 subconjuntos, indicar su cardinalidad.',
    options: ['10', '32', '128', '256'],
    answer: 0,
    explanation:
      'Un conjunto con n elementos tiene 2ⁿ subconjuntos. Como 2¹⁰ = 1024, la cardinalidad es n = 10.',
  },
  {
    id: 'mexp-58',
    topic: 'Técnicas de conteo',
    question:
      'Calcular la cardinalidad del conjunto potencia de un conjunto que consta de 11 elementos.',
    options: ['1024', '2048', '512', '256'],
    answer: 1,
    explanation:
      'El conjunto potencia de un conjunto de n elementos tiene 2ⁿ elementos: 2¹¹ = 2048.',
  },
  {
    id: 'mexp-59',
    topic: 'Técnicas de conteo',
    question:
      '¿Cuál es la cardinalidad del espacio muestral al lanzar simultáneamente una moneda y una pirinola de ocho lados?',
    options: ['24', '16', '9', '8'],
    answer: 1,
    explanation:
      'Por el principio de multiplicación: 2 resultados de la moneda × 8 de la pirinola = 16.',
  },
  {
    id: 'mexp-60',
    topic: 'Técnicas de conteo',
    question:
      'En un salón de clases en el que hay seis niños y cinco niñas debe formarse un equipo conformado por tres niños y dos niñas para una actividad. ¿De cuántas maneras puede formarse el equipo?',
    options: ['10', '20', '200', '400'],
    answer: 2,
    explanation:
      'Hay C(6,3) = 20 formas de elegir los niños y C(5,2) = 10 formas de elegir las niñas: 20 × 10 = 200.',
  },
  {
    id: 'mexp-61',
    topic: 'Técnicas de conteo',
    question:
      'Un profesor tiene tres ejemplares de un libro de matemáticas, tres de uno de español y dos ejemplares de un libro de literatura. ¿De cuántas maneras diferentes puede acomodarlos en un estante?',
    options: ['660', '560', '280', '180'],
    answer: 1,
    explanation:
      'Se trata de una permutación con repetición: 8!/(3!·3!·2!) = 40320/72 = 560.',
  },
  {
    id: 'mexp-62',
    topic: 'Espacios muestrales',
    question:
      'Una urna contiene 11 bolas numeradas del 10 al 20, todas del mismo tamaño, pero de dos colores diferentes: azul y blanco. Identificar el espacio muestral del experimento que consiste en extraer al azar una bola de la urna.',
    options: ['{1,2,3,4,5,6,7,8,9,10}', '{1,2,3,4,5,6,7,8,9,10,11}', '{11,12,13,14,15,16,17,18,19,20}', '{10,11,12,13,14,15,16,17,18,19,20}'],
    answer: 3,
    explanation:
      'Las bolas están numeradas del 10 al 20, por lo que el espacio muestral son los 11 números: {10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}.',
  },
  {
    id: 'mexp-63',
    topic: 'Espacios muestrales',
    question:
      'Se lanzan simultáneamente una moneda y un dado de 6 caras n veces. ¿Cuántos distintos resultados se pueden obtener de este experimento?',
    options: ['12ⁿ', '6ⁿ', '2ⁿ', '8ⁿ'],
    answer: 0,
    explanation:
      'En cada lanzamiento hay 2 × 6 = 12 resultados posibles. Para n lanzamientos hay 12ⁿ.',
  },
  {
    id: 'mexp-64',
    topic: 'Probabilidad de un evento',
    question:
      'Sean A y B dos eventos tales que P(A) = 0.4 y P(A ∪ B) = 0.7. ¿Cuál es el valor de P(B) para que A y B sean eventos independientes?',
    options: ['0.012', '0.12', '0.5', '0.4'],
    answer: 2,
    explanation:
      'Si A y B son independientes, P(A∪B) = P(A) + P(B) − P(A)P(B) → 0.7 = 0.4 + p − 0.4p → 0.3 = 0.6p → p = 0.5.',
  },
  {
    id: 'mexp-65',
    topic: 'Probabilidad de un evento',
    question:
      'Se lanzan una tras otra dos monedas al aire, pero la segunda moneda que se lanza es de doble cara. ¿Cuál es la probabilidad de obtener cara en el segundo lanzamiento?',
    options: ['1', '1/2', '1/4', '3/4'],
    answer: 0,
    explanation:
      'La segunda moneda tiene cara en sus dos caras, por lo que la probabilidad de obtener cara en ese lanzamiento es 1 (evento seguro).',
  },
  {
    id: 'mexp-66',
    topic: 'Eventos aleatorios',
    question: 'Identificar cuál de los siguientes eventos no es aleatorio.',
    options: [
      'Lanzar una moneda al aire',
      'Ir a la escuela todos los días',
      'Lanzar un dado y observar qué número sale',
      'Elegir un nombre al azar de una lista y ver cuál es su sexo',
    ],
    answer: 1,
    explanation:
      'Ir a la escuela todos los días es un hecho determinista y previsible; los demás involucran una componente de azar.',
  },
  {
    id: 'mexp-67',
    topic: 'Eventos dependientes e independientes',
    question:
      'Una urna contiene 6 bolas guindas y 5 azules. Se extrae una bola al azar y se reemplaza por 2 del otro color. Después, se extrae una segunda bola. ¿Cuál es la probabilidad de que las dos bolas extraídas sean del mismo color?',
    options: ['41/66', '41/110', '25/66', '15/110'],
    answer: 2,
    explanation:
      'Dos casos: guinda y luego guinda: (6/11)(5/12) = 30/132; azul y luego azul: (5/11)(4/12) = 20/132. Total = 50/132 = 25/66.',
  },
  {
    id: 'mexp-68',
    topic: 'Teorema de Bayes',
    question:
      'En una fábrica, el total de producción se realiza en dos máquinas del mismo tipo (M1 y M2), para las cuales el 30% de la producción se concentra en M1 y el resto en M2. Si cada máquina genera un 2% de productos defectuosos, ¿cuál es la probabilidad de que un producto no defectuoso, elegido al azar, se haya procesado en M1?',
    options: ['0.3', '0.2', '0.6', '0.7'],
    answer: 0,
    explanation:
      'P(G|M1) = P(G|M2) = 0.98, porque ambas máquinas producen el mismo porcentaje de defectuosos. Entonces P(M1|G) = P(M1) = 0.3.',
  },
  {
    id: 'mexp-69',
    topic: 'Teorema de Bayes',
    question:
      'Se realizó una encuesta acerca de la preferencia de vivir en la ciudad o en zonas conurbadas y del total de las personas encuestadas, el 60% fueron mujeres, de las cuales el 70% prefiere vivir en la ciudad. Si se sabe que la probabilidad de que cualquier persona prefiera vivir en la ciudad es de 0.65, ¿cuál es la probabilidad de que un hombre desee vivir en la ciudad?',
    options: ['3/10', '7/20', '11/40', '23/40'],
    answer: 3,
    explanation:
      'P(C) = P(C|M)·P(M) + P(C|H)·P(H) → 0.65 = 0.7·0.6 + P(C|H)·0.4 → P(C|H) = 0.23/0.4 = 0.575 = 23/40.',
  },
  {
    id: 'mexp-70',
    topic: 'Eventos aleatorios',
    question:
      'Un mazo de diez cartas está formado por pares de cartas de cinco colores distintos. Si se extraen dos cartas al azar, ¿cuál es la probabilidad de que ambas sean del mismo color?',
    options: ['1/9', '2/9', '1/18', '1/10'],
    answer: 0,
    explanation:
      'Hay C(10,2) = 45 pares posibles y 5 pares del mismo color (uno por cada color). La probabilidad es 5/45 = 1/9.',
  },
  {
    id: 'mexp-71',
    topic: 'Medidas de tendencia central',
    question:
      'Identificar el tipo de media que determina mejor la velocidad media de un automóvil que primero recorre 60 km a una velocidad de 50 km/h y, después, 60 km a una velocidad de 70 km/h.',
    options: ['Media aritmética', 'Media geométrica', 'Media armónica', 'Media ponderada'],
    answer: 2,
    explanation:
      'Al recorrer distancias iguales a velocidades distintas, la velocidad media correcta se obtiene con la media armónica: 2·v₁·v₂/(v₁+v₂).',
  },
  {
    id: 'mexp-72',
    topic: 'Medidas de tendencia central',
    question: 'Determinar la media geométrica de los siguientes datos: (1, 16, 81, 256).',
    options: ['7', '9', '24', '30'],
    answer: 2,
    explanation:
      'La media geométrica es (1·16·81·256)^(1/4). Como 16=2⁴, 81=3⁴ y 256=4⁴, el producto es (1·2·3·4)⁴ = 24⁴, y su raíz cuarta es 24.',
  },
];