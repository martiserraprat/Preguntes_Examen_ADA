const questions = [
    {
        category: "Visión por Computador",
        q: "1.- Cuál de estas frecuencias para una onda electromagnética pertenece al espectro visible (puedes suponer que c = 300000 km/s):",
        options: ["a) 5 · 10^10 Hz.", "b) 5 · 10^12 Hz.", "c) 5 · 10^14 Hz.", "d) 5 · 10^16 Hz."],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "2.- Cuál de estas tripletas de conceptos o valores no definen un color:",
        options: ["a) longitud de onda dominante, pureza, luminancia", "b) tono, saturación, luminosidad", "c) difuso, especular, ambiente", "d) R, G, B"],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "3.- Cuál de estas características definen a los bastones del ojo humano:",
        options: ["a) sensibles a alta intensidad, no al color, situados principalmente en la fóvea", "b) sensibles a baja intensidad, al color, situados principalmente fuera de la fóvea", "c) sensibles a alta intensidad, al color, situados principalmente en la fóvea", "d) sensibles a baja intensidad, no al color, situados principalmente fuera de la fóvea"],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "4.- Qué tipo de sensor se caracterizan en mayor medida por (1) windowing (capacidad de capturar RoIs), (2) bajo ruido:",
        options: ["a) (1) CCD, (2) CCD", "b) (1) CCD, (2) CMOS", "c) (1) CMOS, (2) CMOS", "d) (1) CMOS, (2) CCD"],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "5.- En estas dos situaciones por qué shutter nos decantaremos: a) escena estática para aplicación de bajo coste, b) escena de objetos en movimiento:",
        options: ["a) a) Rolling shutter, b) Rolling shutter", "b) a) Rolling shutter, b) Frame shutter", "c) a) Frame shutter, b) Rolling shutter", "d) a) Frame shutter, b) Frame shutter"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "6.- Una cámara con píxeles de 10^-3 mm y focal 10 mm captura, a una distancia de 1 m, objetos que se mueven delante de ella a 1 m/s. Qué tiempo de exposición necesitamos si queremos que el desenfoque por movimiento sea de 1 píxel:",
        options: ["a) 1 s", "b) 10^-4 s", "c) 10^-6 s", "d) 10^-1 s"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "7.- Cuál de las representaciones de estos tipos de imágenes tiene más dimensiones:",
        options: ["a) imagen térmica", "b) imagen color", "c) imagen de una radiografía", "d) imagen range"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "8.- Cuál de estos códigos en MatLab calcula un histograma para una imagen, im, de un canal:",
        options: ["a) h=zeros(256,1); for i=1:numel(im), h(im(i)+1)=h(im(i)+1)+1; end", "b) h=zeros(256,1); for i=1:numel(im), h(im+1)=h(im+1)+1; end", "c) h=zeros(256); for i=1:numel(im), h(im)=h(im+1); end", "d) h=zeros(256,1); for i=1:numel(im), h(im(i))=h(im(i)+1); end"],
        correct: 0
    },
    {
        category: "Visión por Computador",
        q: "9.- Cómo están relacionados los histogramas de una imagen genérica y el histograma del negativo de esa imagen:",
        options: ["a) Tienen el mismo histograma.", "b) Las imágenes negativo no tienen histograma.", "c) Los valores del histograma de la imagen negativo tienen los mismos valores, pero negativos (una reflexión vertical)", "d) Los histogramas son simétricos (una reflexión horizontal)."],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "10.- En qué caso una correlación y una convolución son equivalentes:",
        options: ["a) nunca", "b) solo con kernels separables", "c) cuando los kernels tienen un número impar de filas y columnas", "d) cuando el kernel es simétrico en los dos ejes"],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "11.- Cuál es el resultado de esta operación, conv([1, 2, 3],[1, -1],‘valid’):",
        options: ["a) [-1,-1]", "b) [ 1, 1]", "c) [-1, 1]", "d) [ 1,-1]"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "12.- Qué tipo de filtros tenemos con estos dos kernels: a) [1,1,1;1,1,1;1,1,1], b) [0,1,0;1,-4,1;0,1,0]:",
        options: ["a) a) pasa bajo, b) pasa bajo", "b) a) pasa bajo, b) pasa alto", "c) a) pasa alto, b) pasa bajo", "d) a) pasa alto, b) pasa alto"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "13.- El resultado de aplicar una FFT a una imagen genérica en niveles de gris:",
        options: ["a) genera una imagen del mismo tamaño y del mismo tipo.", "b) genera una imagen del mismo tamaño y complex.", "c) genera una imagen de diferente tamaño y float.", "d) genera una imagen de diferente tamaño y double."],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "14.- Para qué usaríamos una técnica basada en espacio escala:",
        options: ["a) Para analizar secuencias temporales", "b) Para analizar estructura a diferentes escalas", "c) Para optimizar las transformaciones geométricas.", "d) Para analizar color"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "15.- Qué es un gradiente:",
        options: ["a) Una magnitud.", "b) Una orientación.", "c) Un filtro pasa bajos.", "d) Un vector."],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "16.- En un entorno local a un píxel tenemos los siguientes valores [1,1,1;3,6,3;1,1,1]. Qué salida dará para ese píxel: a) un filtro de media (uniforme), b) un filtro de mediana:",
        options: ["a) a) 1, b) 2", "b) a) 1, b) 6", "c) a) 2, b) 6", "d) a) 2, b) 1"],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "17.- i=zeros(5), i(3,3)=1, i=imdilate(i,ones(3,1)), i=imdilate(i,ones(1,3)) genera un patrón de unos de:",
        options: ["a) 3x3", "b) 5x5", "c) 3x1", "d) 5x1"],
        correct: 0
    },
    {
        category: "Visión por Computador",
        q: "18.- La suma de Minkowski de dos conjuntos equivale a:",
        options: ["a) la dilatación de un conjunto con el segundo conjunto", "b) la dilatación de un conjunto con la simetría (en x e y) del segundo conjunto", "c) la erosión de un conjunto con la simetría (en x e y) del segundo conjunto", "d) la erosión de un conjunto con el segundo conjunto"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "19.- Si el elemento estructurante contiene al origen, cuál de esta cadena de inclusiones es correcta:",
        options: ["a) dilate(X) ⊆ closing(X) ⊆ X ⊆ opening(X) ⊆ dilate(X)", "b) erode(X) ⊆ opening(X) ⊆ X ⊆ closing(X) ⊆ dilate(X)", "c) dilate(X) ⊆ opening(X) ⊆ X ⊆ closing(X) ⊆ dilate(X)", "d) erode(X) ⊆ closing(X) ⊆ X ⊆ opening(X) ⊆ dilate(X)"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "20.- Cuál de estas transformaciones es una transformación geométrica de la imagen f:",
        options: ["a) g(x, y) = f(x, y) - f(x - 1, y)", "b) g(x, y) = h(f(x, y))", "c) g(x, y) = f(ax^2 + by, cy + dx + 3)", "d) g(x, y) = af(x, y) + bf^2(x, y) + c"],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "21.- Queremos hacer una transformación geométrica basada en un polinomio de segundo orden. Cuántas parejas de puntos deberemos elegir por lo menos:",
        options: ["a) 3", "b) 6", "c) 10", "d) 15"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "22.- Cuál de estas transformaciones geométricas generaría resultados válidos en una estrategia input-to-output:",
        options: ["a) rotación genérica", "b) escalado creciente (escala mayor que uno)", "c) traslación entera", "d) homografía"],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "23.- Una homografía nos permite:",
        options: ["a) proyectar puntos 2D sobre una superficie esférica.", "b) proyectar una escena 3D sobre un plano 2D en una cámara pin-hole.", "c) proyectar los puntos de un plano 2D sobre otro plano 2D.", "d) proyectar puntos 2D sobre una superficie cilíndrica."],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "24.- Generamos un mosaico a partir de una cámara estabilizada que hace un travelling (desplazamiento longitudinal). Qué tipo de proyección conseguiremos:",
        options: ["a) esférica", "b) cilíndrica", "c) perspectiva", "d) ortográfica"],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "25.- Cuál de estas homografías lleva a una vista cenital el suelo de una determinada imagen con un punto de fuga con horizonte plano (vista desde un coche de una carretera):",
        options: ["a) [ 1, 0, 0; 0, 1, 0; 0, 0, 1]", "b) [ 1,-1, 0; 0, 1, 0; 0,-0.01, 1]", "c) [ 1, 0, 0;-1, 0, 1; 0, 0, 1]", "d) [ 1,-1, 0; 0, 1, 0; 0, 0, 1]"],
        correct: 1
    }
];

let currentQuestion = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const categoryText = document.getElementById('category');
const qNumberText = document.getElementById('question-number');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.innerText = q.q;
    categoryText.innerText = q.category;
    qNumberText.innerText = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
    
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, q.correct, btn);
        optionsContainer.appendChild(btn);
    });

    prevBtn.disabled = currentQuestion === 0;
}

function checkAnswer(selected, correct, btn) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(b => b.disabled = true); // Bloquear tras responder

    if (selected === correct) {
        btn.classList.add('correct');
    } else {
        btn.classList.add('incorrect');
        allOptions[correct].classList.add('correct');
    }
}

nextBtn.onclick = () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
};

prevBtn.onclick = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
};

// Iniciar
loadQuestion();
