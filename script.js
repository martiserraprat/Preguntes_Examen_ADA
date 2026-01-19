const questions = [
    // --- BACKTRACKING ---
    {
        category: "BACKTRACKING",
        q: "1.- Quan és millor aplicar les restriccions que han d'acomplir les solucions d'un problema a un algorisme de backtracking?",
        options: ["a) En arribar a les fulles de l'arbre.", "b) Com més tard millor.", "c) Com més aviat millor.", "d) a) i b).", "e) Cap de les anteriors."],
        correct: 2 // [cite: 21, 24]
    },
    {
        category: "BACKTRACKING",
        q: "2.- Que vol dir sortir d'una crida recursiva en un algorisme de backtracking?",
        options: ["a) Fer un pas enrere y solución en no optimización.", "b) Fer un pas enrere o trobar solució.", "c) Pas enrere en optimització.", "d) Afegir element.", "e) Cap."],
        correct: 1 // [cite: 27, 29]
    },
    {
        category: "BACKTRACKING",
        q: "3.- Quins són els tipus d'algorismes de backtracking segons la seva capacitat de poda?",
        options: ["a) Una solució vs òptima.", "b) Profunditat vs Amplitud.", "c) No informat vs informat.", "d) Força bruta, solució completable i forward checking.", "e) Cap."],
        correct: 3 // [cite: 33, 37]
    },
    {
        category: "BACKTRACKING",
        q: "4.- Quan volem resoldre un problema mitjançant la tècnica de backtracking...",
        options: ["a) Crida per triar, bucle per avançar.", "b) Dues crides recursives.", "c) Dos bucles.", "d) Crida per avançar i bucle per triar opcions.", "e) Bucle per triar millor opció."],
        correct: 3 // [cite: 39, 43]
    },
    {
        category: "BACKTRACKING",
        q: "5.- Un algorisme de backtracking...",
        options: ["a) Treu abans de crida sempre.", "b) Treu abans de crida si compleix.", "c) Treu després de crida sempre.", "d) Treu després de crida si compleix.", "e) Afegeix si compleix i treu després de crida sempre."],
        correct: 4 // [cite: 45, 53, 54]
    },
    {
        category: "BACKTRACKING",
        q: "6.- Per accelerar un algorisme de backtracking...",
        options: ["a) Paral·lelisme.", "b) Verificar al final.", "c) Augmentar restriccions al trobar la 1a.", "d) Mirar totes les opcions.", "e) Predicats acotadors."],
        correct: 4 // [cite: 58, 63]
    },
    {
        category: "BACKTRACKING",
        q: "7.- Quin avantatge té l'algoritme de backtracking sobre altres com greedy?",
        options: ["a) Més ràpid.", "b) Més precís.", "c) Poca memòria.", "d) No genera solucions invalides.", "e) No recursió."],
        correct: 1 // [cite: 64, 66]
    },
    {
        category: "BACKTRACKING",
        q: "8.- Com es pot reduir la mida de l'espai de solucions?",
        options: ["a) Més complexitat.", "b) Cerca diferent.", "c) Afegint restriccions.", "d) Reduint variables.", "e) Més estats no vàlids."],
        correct: 2 // [cite: 70, 73]
    },
    {
        category: "BACKTRACKING",
        q: "9.- Aturar backtracking al trobar qualsevol solució completa:",
        options: ["a) Continuar tot.", "b) Aturar i retornar immediat.", "c) Guardar en llista.", "d) Guardar en arxiu.", "e) Buscar valor més alt."],
        correct: 1 // [cite: 76, 78]
    },
    // --- BRANCH & BOUND ---
    {
        category: "BRANCH & BOUND",
        q: "10.- B&B dues cotes: podem podar x1 si...",
        options: ["a) L(x1)>L(x2)", "b) L(x1)>U(x2)", "c) U(x1)>L(x2)", "d) U(x1)>U(x2)", "e) Cap."],
        correct: 1 // [cite: 141, 143]
    },
    {
        category: "BRANCH & BOUND",
        q: "11.- Nodes vius en Branch & Bound per solució qualsevol:",
        options: ["a) No ramificats parcials.", "b) Ramificats parcials.", "c) Ramificats parcials/completes.", "d) No ramificats parcials/completes.", "e) Cap."],
        correct: 3 // [cite: 147, 152]
    },
    {
        category: "BRANCH & BOUND",
        q: "12.- B&B amb una funció d'estimació: quan podar?",
        options: ["a) Des del principi.", "b) Abans de completa.", "c) Després de completa.", "d) b) i c).", "e) Cap."],
        correct: 2 // [cite: 153, 157]
    },
    {
        category: "BRANCH & BOUND",
        q: "13.- Quan una solució completa és la que cerquem a B&B?",
        options: ["a) Al ramificar (optimització).", "b) Al treure de cua (no òptim).", "c) Al crear (optimització).", "d) Al traure de la cua amb prioritat (optimització).", "e) Cap."],
        correct: 3 // [cite: 160, 164]
    },
    {
        category: "BRANCH & BOUND",
        q: "14.- Ús d'algorisme ràpid (heurístic) en B&B d'optimització:",
        options: ["a) No útil.", "b) Cota inferior al principi.", "c) Cota superior al principi.", "d) Cost arrel.", "e) Cap."],
        correct: 2 // [cite: 165, 168]
    },
    {
        category: "BRANCH & BOUND",
        q: "15.1- Els nodes vius es troben a...",
        options: ["a) Cua prioritat.", "b) Millor solució.", "c) Pila prioritat.", "d) Variables globals.", "e) Cap."],
        correct: 0 // [cite: 170, 171]
    },
    {
        category: "BRANCH & BOUND",
        q: "15.2- Problemes d'una mala heurística:",
        options: ["a) Lent.", "b) Lent i memòria.", "c) Lent, memòria i no òptim.", "d) Bucle infinit.", "e) Cap."],
        correct: 1 // [cite: 185, 187]
    },
    {
        category: "BRANCH & BOUND",
        q: "16.- Avantatges B&B respecte backtracking:",
        options: ["a) Poda parcials no completables.", "b) Menys memòria.", "c) Cerca amplitud.", "d) Poda parcials pitjors.", "e) Cap."],
        correct: 3 // [cite: 190, 194]
    },
    {
        category: "BRANCH & BOUND",
        q: "17.- Pas on trobarem la solució en optimització:",
        options: ["a) Selecció següent.", "b) Poda.", "c) Ramificació.", "d) Buidar cua.", "e) Cap."],
        correct: 0 // [cite: 196, 197]
    },
    {
        category: "BRANCH & BOUND",
        q: "18.- Condicions de la funció d'estimació:",
        options: ["a) Cota inferior.", "b) Cota superior.", "c) a) + igual cost en completes.", "d) b) + igual cost en completes.", "e) Cap."],
        correct: 2 // [cite: 202, 207]
    },
    {
        category: "BRANCH & BOUND",
        q: "19.- Avantatge de dues cotes (L y U) vs una estimació:",
        options: ["a) Poda abans de 1a completa si L(Y)>U(X).", "b) Poda si completa L(Y)>U(X).", "c) Poda completes L(Y)>U(X).", "d) Poda si U(Y)>L(X).", "e) Cap."],
        correct: 0 // [cite: 210, 212]
    },
    {
        category: "BRANCH & BOUND",
        q: "20.- Operació més repetida en B&B:",
        options: ["a) Seleccionar node.", "b) Ramificar.", "c) Intercanvi en cua.", "d) Crear nodes.", "e) Cap."],
        correct: 3 // [cite: 222, 227]
    },
    {
        category: "BRANCH & BOUND",
        q: "21.- Problemes de B&B:",
        options: ["a) Repetir subproblemes.", "b) Poca info al principi.", "c) a) i b).", "d) a) i poda quasi completes.", "e) Cap."],
        correct: 2 // [cite: 229, 232]
    },
    {
        category: "BRANCH & BOUND",
        q: "22.- Fi d'execució en B&B:",
        options: ["a) Crear completa en optimització.", "b) Treure completa (no optimització).", "c) Crear completa (no optimització).", "d) Treure completa de cua.", "e) Cap."],
        correct: 1 // [cite: 234, 236]
    },
    {
        category: "BRANCH & BOUND",
        q: "23.- Parts de la funció d'estimació:",
        options: ["a) Cost creat + cost falta.", "b) Est. creat + est. falta.", "c) Cost creat + est. falta.", "d) Est. creat + cost falta.", "e) Cap."],
        correct: 2 // [cite: 239, 244]
    },
    {
        category: "BRANCH & BOUND",
        q: "24.- Passos que repeteix B&B:",
        options: ["a) Selecció, ramificació, poda.", "b) Ramificació, poda.", "c) Selecció, valoració, ramificació, poda.", "d) Valoració, ramificació, poda.", "e) Cap."],
        correct: 2 // [cite: 247, 250]
    },
    {
        category: "BRANCH & BOUND",
        q: "25.- Quan podar node Y donat X:",
        options: ["a) L(Y)>L(X).", "b) U(Y)>U(X).", "c) L(Y)>U(X).", "d) c) i X és completa.", "e) Cap."],
        correct: 2 // [cite: 253, 256]
    },
    // --- PROGRAMACIÓ DINÀMICA ---
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "26.- Requisits per programació dinàmica:",
        options: ["a) Subproblemes dependents i seqüència òptima.", "b) Subproblemes dependents i seqüència òptima (rep).", "c) Independents i seqüència potser òptima.", "d) Dependents y potser òptima.", "e) Tot sense subtasques."],
        correct: 0 // [cite: 287, 288]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "27.- Problema que ataca la prog. dinàmica:",
        options: ["a) Dirigir cerca prometedora.", "b) Evitar repetir càlculs.", "c) Simplificar amb taula.", "d) Usar heurístiques.", "e) Cap."],
        correct: 1 // [cite: 294, 296]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "28.- Què vol dir que A i B són dependents?",
        options: ["a) A igual B.", "b) Conjunts disjunts.", "c) Intersecció de subproblemes.", "d) A equivalent B.", "e) Cap."],
        correct: 2 // [cite: 300, 303, 304]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "29.- Índexs de la taula en dinàmica:",
        options: ["a) Paràmetres subproblemes.", "b) Solucions subproblemes.", "c) Cost solucions.", "d) Estimació.", "e) Cap."],
        correct: 0 // [cite: 307, 308]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "30.- Propòsit de la programació dinàmica:",
        options: ["a) Cerca exhaustiva.", "b) Reutilitzar resultats intermitjos.", "c) Algorismes optimització.", "d) Podar resultats.", "e) Taula subproblemes independents."],
        correct: 1 // [cite: 316, 318]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "31.- Com Wagner & Fisher troba distància d'edició?",
        options: ["a) Independentment.", "b) Exhaustiva.", "c) Matriu de distàncies prèvies.", "d) Una sola vegada.", "e) Greedy."],
        correct: 2 // [cite: 322, 325]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "32.- Principi d'optimalitat de Bellmann:",
        options: ["a) Ajustar parcial.", "b) Recursivament.", "c) Greedy.", "d) Exhaustiva.", "e) Construir de òptimes prèvies."],
        correct: 4 // [cite: 328, 333]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "33.- On s'usa memorització?",
        options: ["a) Top down.", "b) Bottom up.", "c) a) i b).", "d) No s'usa.", "e) Cap."],
        correct: 2 // [cite: 334, 337]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "34.- Tipus de problemes d'optimització per dinàmica:",
        options: ["a) Independents + passos òptims.", "b) Independents + passos mixtos.", "c) Dependents + passos òptims.", "d) Dependents + passos mixtos.", "e) Cap."],
        correct: 2 // [cite: 340, 344]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "35.- Reducció complexitat Dinàmica vs B&B:",
        options: ["a) Polinòmica a Lineal.", "b) Exponencial a Logarítmica.", "c) Polinòmica a Logarítmica.", "d) Exponencial a Polinòmica.", "e) Cap."],
        correct: 3 // [cite: 352, 356]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "36.- Estratègies per no repetir càlculs:",
        options: ["a) Guarda resultat subproblemes.", "b) Òptima subproblema.", "c) Seqüència única.", "d) a) i b).", "e) Cap."],
        correct: 3 // [cite: 358, 361]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "37.- Què ha d'acomplir un problema per ser dinàmica?",
        options: ["a) Subproblemes repetits.", "b) Compost per òptimes.", "c) Sempre a), b) si és optimització.", "d) a) i b).", "e) Cap."],
        correct: 2 // [cite: 363, 366, 367]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "38.- Complexitat distància edició (Backtracking vs Dinàmica):",
        options: ["a) O(2^n) vs O(n^2).", "b) O(3^m) vs O(m^2).", "c) O(3^(n+m)) vs O(n*m).", "d) O(2^(n+m)) vs O(n*m).", "e) Cap."],
        correct: 2 // [cite: 370, 374]
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "39.- Quina tècnica usa Excel per calcular cel·les?",
        options: ["a) Backtracking.", "b) B&B.", "c) Dinàmica.", "d) Probabilístics.", "e) Cap."],
        correct: 2 // [cite: 377, 380]
    },
    // --- ALGORISMES PROBABILISTICS ---
    {
        category: "PROBABILISTICS",
        q: "40.- Incrementar encert en p-correcte, quin puja més ràpid?",
        options: ["a) Numèrics.", "b) Monte Carlo.", "c) Las Vegas.", "d) Sherwood.", "e) Cap."],
        correct: 1 // [cite: 398, 400]
    },
    {
        category: "PROBABILISTICS",
        q: "41.- Monte Carlo 0.8-correcte a 0.9-correcte, quantes execucions mínimes?",
        options: ["a) 3.", "b) 5.", "c) 7.", "d) 9.", "e) Cap."],
        correct: 0 // [cite: 404, 405]
    },
    {
        category: "PROBABILISTICS",
        q: "42.- Classificació si no dona sempre correcte:",
        options: ["a) Las Vegas i Monte Carlo.", "b) Numèrics i Monte Carlo.", "c) Las Vegas i Sherwood.", "d) Numèrics i Las Vegas.", "e) Cap."],
        correct: 1 // [cite: 410, 412]
    },
    {
        category: "PROBABILISTICS",
        q: "43.- RANSAC treballa amb dades incorrectes perquè...",
        options: ["a) Usa tot el conjunt.", "b) Fa mitjana.", "c) Fa votació.", "d) a) i c).", "e) Cap."],
        correct: 2 // [cite: 416, 419]
    },
    {
        category: "PROBABILISTICS",
        q: "44.- Tipus d'algorisme en enquestes electorals:",
        options: ["a) Monte Carlo.", "b) Numèric.", "c) Las Vegas.", "d) Sherwood.", "e) Cap."],
        correct: 0 // [cite: 422, 423]
    },
    {
        category: "PROBABILISTICS",
        q: "45.- Tipus d'algorisme per n-reines:",
        options: ["a) Monte Carlo.", "b) Numèric.", "c) Las Vegas.", "d) Sherwood.", "e) Cap."],
        correct: 2 // [cite: 428, 431]
    },
    {
        category: "PROBABILISTICS",
        q: "46.- Saber execucions per òptima en descens gradient?",
        options: ["a) Sí, quocient encert/possible.", "b) Sí, quocient possible/encert.", "c) No, estocàstic.", "d) No, valls funció.", "e) Cap."],
        correct: 3 // [cite: 438, 442]
    },
    {
        category: "PROBABILISTICS",
        q: "47.- Mesures eficiència algorisme:",
        options: ["a) Crides.", "b) Temps + mín memòria.", "c) Disc + temps.", "d) Creat + mín memòria.", "e) Temps + màx memòria."],
        correct: 4 // [cite: 444, 449]
    },
    {
        category: "PROBABILISTICS",
        q: "48.- Efecte aleatorietat:",
        options: ["a) No determinista.", "b) Resultat diferent.", "c) No correcte sempre.", "d) Totes.", "e) Cap."],
        correct: 3 // [cite: 450, 454]
    },
    {
        category: "PROBABILISTICS",
        q: "49.- Ordenació pitjor a millor encert:",
        options: ["a) Las Vegas, MC, Sherwood, Num.", "b) MC, Las Vegas, Num, Sherwood.", "c) MC, Num, Las Vegas, Sherwood.", "d) MC, Num, Sherwood, Las Vegas.", "e) Cap."],
        correct: 3 // [cite: 456, 461]
    },
    {
        category: "PROBABILISTICS",
        q: "50.- Fórmula encert Monte Carlo p-correcte (avantatge estocàstic):",
        options: ["a) 1-(1-p)^n.", "b) p^n.", "c) Sumatori i=floor(n/2)+1...", "d) p^i(1-p)^n-i.", "e) Cap."],
        correct: 2 // [cite: 463, 466]
    },
    {
        category: "PROBABILISTICS",
        q: "51.- RANSAC solució exacta amb dades errònies:",
        options: ["a) Subconjunt + votació.", "b) Mediana.", "c) Elimina errònies primer.", "d) Mínims quadrats.", "e) Cap."],
        correct: 0 // [cite: 477, 479]
    },
    {
        category: "PROBABILISTICS",
        q: "52.- Gestionar configuracions en descens gradient:",
        options: ["a) Optimitzant, veïnes, actual, totes.", "b) Optimitzant, veïnes, millor fins ara.", "c) Optimitzant, millor fins ara.", "d) Optimitzant, totes creades.", "e) Cap."],
        correct: 0 // [cite: 483, 484]
    },
    {
        category: "PROBABILISTICS",
        q: "53.- Tipus: 1. n-reines, 2. viatjant de comerç:",
        options: ["a) MC, MC.", "b) MC, LV.", "c) LV, MC.", "d) LV, LV.", "e) Cap."],
        correct: 2 // [cite: 490, 493]
    },
    {
        category: "PROBABILISTICS",
        q: "54.- Comportaments admesos en probabilístic:",
        options: ["a) No trobar solució.", "b) Resultat erroni.", "c) Errors execució.", "d) No finalitzar.", "e) Totes (a, b, c, d)."],
        correct: 3 // [cite: 496, 500]
    },
    {
        category: "PROBABILISTICS",
        q: "55.- Condicions Monte Carlo per repetir:",
        options: ["a) Una correcta.", "b) Encert > 0,5.", "c) a) i b).", "d) a), b) i esbiaixat.", "e) Cap."],
        correct: 3 // [cite: 502, 505]
    },
    {
        category: "PROBABILISTICS",
        q: "56- Fórmula encert Las Vegas p-correcta n vegades:",
        options: ["a) 1-(1-p)^n.", "b) p^n.", "c) Sumatori...", "d) p^i(1-p)^n-i.", "e) Cap."],
        correct: 0 // [cite: 511, 512]
    },
    {
        category: "PROBABILISTICS",
        q: "57.- Què compleix RANSAC?",
        options: ["a) No errors d'entrada.", "b) a) i millora precisió.", "c) a) i millora encert.", "d) Mai erronis.", "e) Cap."],
        correct: 2 // [cite: 517, 520]
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