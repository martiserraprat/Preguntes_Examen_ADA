const questions = [
    // --- Preguntas iniciales (1-25) ---
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
    },

    // --- Nuevas Preguntas Añadidas (26-50) ---
    {
        category: "Visión por Computador",
        q: "26.- En el espectro electromagnético se cumple que:",
        options: ["a) a mayor energía, mayor longitud de onda.", "b) a menor energía, menor longitud de onda.", "c) a mayor frecuencia, mayor longitud de onda.", "d) a menor frecuencia, menor energía."],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "27.- Cuál de estos emisores nos da un color más saturado:",
        options: ["a) láser rojo monocromático", "b) led rojo con un ancho de banda de 40 nm", "c) fuente blanca cálida incandescente (luz anaranjada)", "d) fuente blanca fría de fluorescente (luz azulada)"],
        correct: 0
    },
    {
        category: "Visión por Computador",
        q: "28.- Qué partes del ojo no estarían asociadas a las funciones que en una cámara encontramos en el sensor, el diafragma y parte del sistema óptico:",
        options: ["a) retina", "b) iris", "c) humor vítreo", "d) punto ciego"],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "29.- Qué tipo de sensor se caracterizan en mayor medida por (1) sensibilidad no lineal, (2) global shutter:",
        options: ["a) (1) CCD, (2) CCD", "b) (1) CCD, (2) CMOS", "c) (1) CMOS, (2) CMOS", "d) (1) CMOS, (2) CCD"],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "30.- Cuál de estas afirmaciones es verdadera sobre la corriente oscura en un sensor.",
        options: ["a) En presencia de luz desaparece.", "b) Genera un patrón de ruido impulsional", "c) Se tapan unos píxeles en los bordes del sensor para cuantificarla.", "d) Si enfriamos el sensor subimos su contribución en la señal."],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "31.- Cuántos terabytes aproximadamente se necesitarán para almacenar, en imágenes color sin comprimir de 8 bits por canal, toda la superficie de la tierra (radio = 6371 km):",
        options: ["a) 4.6 TB", "b) 14 TB", "c) 37 TB", "d) 112 TB"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "32.- Cuál de estas representaciones de los datos es una función creciente:",
        options: ["a) el histograma de la mayoría de las imágenes", "b) una discretización de la función gausiana", "c) la LUT que permite hacer la ecualización de una imagen", "d) la LUT que aplicaríamos para conseguir la imagen negativa"],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "33.- Cuál de estos códigos representa una maximización del contraste:",
        options: ["a) 255*((max(im(:))-min(im(:)))/(im-min(im(:))));", "b) 255*((im-min(im(:)))/(max(im(:))-min(im(:))));", "c) 255*(im-min(im(:))));", "d) 255*((im-max(im(:)))./(im-min(im(:))));"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "34.- En una imagen de una cuadrícula queremos encontrar los cruces utilizando una máscara en forma de cruz.",
        options: ["a) Sólo con una convolución obtendremos valores máximos locales en los cruces.", "b) Ya sea con correlación o convolución obtendremos máximos locales en los cruces.", "c) Sólo usando una correlación obtendremos valores máximos locales en los cruces.", "d) Ya sea con correlación o convolución obtendremos valores mínimos locales en cruces."],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "35.- En una secuencia de una cámara estática que mira a una carretera. ¿Para qué no usaríamos la suma (promedio) de imágenes directamente?",
        options: ["a) para eliminar ruido", "b) para detectar coches", "c) para montar un modelo de fondo", "d) para eliminar la contribución de los elementos que se mueven"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "36.- Cuál es el resultado de esta operación, conv2([1, 2; 3, 4],[1, -1]’,‘valid’):",
        options: ["a) [-1,-1]’", "b) [2,2]", "c) [-2,-2]’", "d) [1,1]"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "37.- Cuál es el resultado de esta operación, conv2([1, 2; 3, 4],[-1, 1], ‘valid’):",
        options: ["a) [-1,-1]’", "b) [2,2]", "c) [-2,-2]’", "d) [1,1]"],
        correct: 0
    },
    {
        category: "Visión por Computador",
        q: "38.- La mejora que obtenemos usando la FFT respecto a la convolución en el espacio viene de:",
        options: ["a) La convolución sólo se aplica con máscaras impares.", "b) La FFT permite hacer convoluciones en más de una dimensión.", "c) La FFT transforma la señal a una representación donde la mayoría son 0.", "d) La FFT tiene un coste N log N y la convolución N^2."],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "39.- Cuál de estos detectores de contorno genera el gradiente con máscaras 2×2:",
        options: ["a) Laplacian of Gaussian", "b) Roberts", "c) Sobel", "d) Canny"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "40.- La convolución en el dominio espacial se convierte en el dominio frecuencial en:",
        options: ["a) una sustracción.", "b) un escalado de la máscara.", "c) un producto.", "d) una simetría."],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "41.- Recibimos una imagen con ruido donde unos pocos píxeles cambian su valor de forma radical. Qué filtro utilizarías:",
        options: ["a) filtro de media", "b) filtro homomórfico", "c) filtro de mediana", "d) una erosión seguida de una dilatación"],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "42.- i=zeros(9), i(5,5)=1, i=imdilate(i,ones(3)), i=imdilate(i,ones(3)) genera un cuadrado centrado de tamaño:",
        options: ["a) 3×3", "b) 5×5", "c) 7×7", "d) 9×9"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "43.- Cómo podemos tener un contorno con morfología matemática:",
        options: ["a) imagen menos closing", "b) imagen menos opening", "c) imagen menos erosión", "d) opening menos closing"],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "44.- Cuál de estas operaciones es un opening residue:",
        options: ["a) f ◦ ((f − B) + B)", "b) f ◦ (f ⊕ B)", "c) ((f ⊕ B) ◦ B) − ((f ◦ B) ⊕ B)", "d) f − ((f ⊖ B) ⊕ B)"],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "45.- Cuántos puntos (píxeles vecinos) se necesitan para hacer una interpolación bilineal:",
        options: ["a) 1", "b) 4", "c) 9", "d) 16"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "46.- Queremos hacer una transformación geométrica basada en un polinomio de tercer orden. Cuántas parejas por lo menos:",
        options: ["a) 3", "b) 6", "c) 10", "d) 15"],
        correct: 2
    },
    {
        category: "Visión por Computador",
        q: "47.- En la homografía que pasa suelo a vista cenital, v1 y v2 representan:",
        options: ["a) el aspect ratio.", "b) el tamaño del rectángulo output.", "c) el tamaño del rectángulo input.", "d) el punto de fuga."],
        correct: 3
    },
    {
        category: "Visión por Computador",
        q: "48.- Algoritmo para mejorar correspondencias erróneas (outliers):",
        options: ["a) RANSAC", "b) Regresión lineal", "c) Transformada de Radon", "d) Transformada de Hough"],
        correct: 0
    },
    {
        category: "Visión por Computador",
        q: "49.- Con una cámara que gira sobre un eje vertical que pasa por su centro óptico qué tipo de mosaicos podemos recrear:",
        options: ["a) sólo mosaico plano", "b) mosaico plano y cilíndrico", "c) sólo mosaico cilíndrico", "d) un travelling"],
        correct: 1
    },
    {
        category: "Visión por Computador",
        q: "50.- Queremos rotar la imagen 'in' un ángulo α para obtener 'out'. Qué propuesta tiene más sentido:",
        options: ["a) ∀x, y ∈ out, out(x, y) = in(x cos(α) − y sin(α), ...)", "b) ∀x, y ∈ out, out(x, y) = in(x cos(−α) − y sin(−α), ...)", "c) ∀x, y ∈ in , out(x cos(α) − y sin(α), ...) = in(x, y)", "d) ∀x, y ∈ in , out(x cos(−α) − y sin(−α), ...) = in(x, y)"],
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
