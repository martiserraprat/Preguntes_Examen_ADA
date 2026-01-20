const questions = [
    // --- BACKTRACKING ---
    {
        category: "BACKTRACKING",
        q: "1.- Quan és millor aplicar les restriccions que han d’acomplir les solucions d’un problema a un algorisme de backtracking?",
        options: ["a) En arribar a les fulles de l’arbre de cerca, ja que axis es visiten més ràpidament els nodes intermedis de l’arbre.", "b) Com més tard millor.", "c) Com més aviat millor.", "d) a) i b).", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "BACKTRACKING",
        q: "2.- Que vol dir sortir d’una crida recursiva en un algorisme de backtracking?",
        options: ["a) Fer un pas enrere, i a més a més, en un problema que no sigui d’optimització pot indicar que s’ha trobat la solució.", "b) Fer un pas enrere o pot indicar que s’ha trobat la solució.", "c) Fer un pas enrere, i a més a més, pot indicar que s’ha trobat la solució en un problema d’optimització.", "d) Afegir un element a la solució.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "BACKTRACKING",
        q: "3.- Quins són els tipus d’algorismes de backtracking segons la seva capacitat de poda?",
        options: ["a) Algorismes que cerquen una solució i algorismes que cerquen la solució òptima.", "b) Backtracking amb profunditat prioritària i amb amplitud prioritària.", "c) Backtracking no informat i backtracking informat.", "d) Força bruta, solució completable i forward checking.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "BACKTRACKING",
        q: "4.- Quan volem resoldre un problema mitjançant la tècnica de backtracking",
        options: ["a) cal fer la crida recursiva per triar les opcions possibles i un bucle per avançar en la solució", "b) cal fer dues crides recursives, una per avançar en la solució i l’altra per poder triar les opcions disponibles", "c) cal fer dos bucles, un per triar les opcions disponibles i un altre per avançar en la solució", "d) cal fer la crida recursiva per avançar en la solució i un bucle per triar les opcions possibles", "e) cal fer un bucle per triar la millor opció a cada pas i avançar en la solució"],
        correct: 3
    },
    {
        category: "BACKTRACKING",
        q: "5.- Un algorisme de backtracking",
        options: ["a) afegeix un element a la solució a cada pas i, independentment que compleixi les restriccions proposades, el treu abans de fer la crida recursiva", "b) afegeix un element a la solució a cada pas i, si compleix les restriccions proposades, el treu abans de fer la crida recursiva", "c) afegeix un element a la solució a cada pas i, independentment que compleixi les restriccions proposades, el treu després de fer la crida recursiva", "d) afegeix un element a la solució a cada pas i, si compleix les restriccions proposades, el treu després de fer la crida recursiva", "e) afegeix un element a la solució a cada pas si compleix les restriccions i, independentment que compleixi les restriccions proposades, el treu després de fer la crida recursiva"],
        correct: 2
    },
    {
        category: "BACKTRACKING",
        q: "6.- Per accelerar un algorisme de backtracking",
        options: ["a) podem crear una estructura de solucions per treballar-les en paral·lel", "b) podem verificar les restriccions un cop hem construït cada solució", "c) podem augmentar el nombre de restriccions una vegada hem trobat la primera solució", "d) hem de mirar totes les opcions possibles", "e) podem definir predicats acotadors que ens diguin si un estat pot conduir a una solució satisfactòria"],
        correct: 4
    },
    {
        category: "BACKTRACKING",
        q: "7.- Quin avantatge té l'algoritme de backtracking sobre altres algoritmes de cerca, com pot ser greedy?",
        options: ["a) És més ràpid en la majoria dels casos", "b) És més precís en la majoria dels casos", "c) No requereix gaire memòria", "d) No genera solucions invàlides", "e) No requereix de recursió"],
        correct: 3
    },
    {
        category: "BACKTRACKING",
        q: "8.- Com es pot reduir la mida de l'espai de solucions en un algoritme de backtracking?",
        options: ["a) Augmentant la complexitat del problema", "b) Utilitzant una estratègia de cerca diferent", "c) Afegint restriccions al problema", "d) Reduint el nombre de variables involucrades en el problema", "e) Augmentant el nombre d'estats no vàlids"],
        correct: 2
    },
    {
        category: "BACKTRACKING",
        q: "9.- En un problema en que només cal trobar una solució completa qualsevol, de quina forma efectiva cal aturar un algoritme de backtracking quan es troba una solució vàlida?",
        options: ["a) Continuar explorant totes les possibilitats fins que no n’hi hagi més", "b) Aturar l'exploració i retornar la solució trobada immediatament", "c) Aturar l'exploració i guardar la solució trobada en una llista", "d) Aturar l'exploració i guardar la solució trobada en un arxiu", "e) Continuar explorant fins a trobar la solució amb el valor més alt."],
        correct: 1
    },

    // --- BRANCH & BOUND ---
    {
        category: "BRANCH & BOUND",
        q: "10.- Quan solucionem un problema d’optimització amb Branch & Bound amb dues cotes, podem podar x1 si",
        options: ["a) L(x1)>L(x2) on x1 i x2 són nodes de Branch & Bound.", "b) L(x1)>U(x2) on x1 i x2 són nodes de Branch & Bound.", "c) U(x1)>L(x2) on x1 i x2 són nodes de Branch & Bound.", "d) U(x1)>U(x2) on x1 i x2 són nodes de Branch & Bound.", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "BRANCH & BOUND",
        q: "11.- En un problema en que només cal trobar una solució completa qualsevol, quins seran els nodes vius a l’algorisme de Branch & Bound?",
        options: ["a) Nodes no ramificats que són solucions parcials.", "b) Nodes ramificats que són solucions parcials.", "c) Nodes ramificats que poden ser solucions parcials o completes.", "d) Nodes no ramificats que poden ser solucions parcials o completes.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "BRANCH & BOUND",
        q: "12.- Aplicant Branch & Bound amb una única funció d’estimació a un problema d’optimització, quan podrem podar solucions parcials pel valor de la funció d’estimació?",
        options: ["a) Ja podrem podar des del principi de la cerca.", "b) Podrem podar abans de trobar una solució completa.", "c) Podrem podar després de trobar una solució completa.", "d) b) i c).", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "BRANCH & BOUND",
        q: "13.- Quan podem considerar que una solució completa és la solució que cerquem a Branch & Bound?",
        options: ["a) En problemes d’optimització, quan creem la solució en el pas de ramificació.", "b) En problemes que no són d’optimització, hem de esperar a treure-la de la cua.", "c) En problemes d’optimització, hem trobat la solució en crear-la al pas de ramificació.", "d) En problemes d’optimització, quan traiem la solució de la cua amb prioritat.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "BRANCH & BOUND",
        q: "14.- Si en un problema d’optimització tenim un algorisme ràpid per trobar una solució propera a l’òptima, com el podem utilitzar per accelerar la cerca en un algorisme de branch&bound?",
        options: ["a) No és d’utilitat.", "b) Podem executar-lo al principi per obtenir una cota inferior.", "c) Podem executar-lo al principi per obtenir una cota superior.", "d) Podem executar-lo al principi per obtenir el cost de l’arrel de l’arbre de cerca.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "BRANCH & BOUND",
        q: "15.1- Els nodes vius d’un algorisme de branch&bound els trobem a...",
        options: ["a) A la cua de prioritat.", "b) A la millor solució trobada fins el moment.", "c) A la pila de prioritat.", "d) A variables globals.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "BRANCH & BOUND",
        q: "15.2 - Quins problemes suposa utilitzar una mala heurística en un algorisme de branch&bound?",
        options: ["a) Serà lent.", "b) Serà lent i gastarà molta memòria.", "c) Serà lent, gastarà molta memòria i no trobarà la solució òptima.", "d) Serà lent, gastarà molta memòria i es quedarà en bucle infinit.", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "BRANCH & BOUND",
        q: "16.- Avantatges de branch&bound respecte backtracking?",
        options: ["a) B&B poda les solucions parcials que no es poden completar.", "b) B&B consumeix menys memòria que backtracking.", "c) B&B fa un cerca amb amplitud prioritària.", "d) B&B poda les solucions parcials pitjors.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "BRANCH & BOUND",
        q: "17.- En un problema d’optimització, en quin pas d’un algorisme de branch&bound trobarem la solució?",
        options: ["a) En el pas where seleccionem el següent node a ramificar.", "b) En el pas on podem les solucions.", "c) En el pas de ramificació.", "d) En el pas on buidem la cua amb prioritat.", "e) Cap de les anteriors"],
        correct: 0
    },
    {
        category: "BRANCH & BOUND",
        q: "18.- Quines condicions demanem a la funció d’estimació?",
        options: ["a) Que la funció d’estimació d’una solució parcial sigui una cota inferior del cost de les solucions completes que podem crear al ramificar-la.", "b) Que la funció d’estimació d’una solució parcial sigui una cota superior del cost de les solucions completes que podem crear en ramificar-la.", "c) a) i Que per solucions completes sigui igual al seu cost.", "d) b) i Que per solucions completes sigui igual al seu cost.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "BRANCH & BOUND",
        q: "19.- Quin avantatge té un algorisme de branch&bound que calcula amb dues cotes (L(X) cota inferior d’X, U(X) cota superior d’X) respecta el que calcula només una estimació?",
        options: ["a) Permet podar pel valor de les cotes abans de crear la primera solució completa. Poda totes les solucions Y per les que existeix una solució X creada que compleix L(Y)>U(X).", "b) Poda totes les solucions Y per les que existeix una solució X completa ja creada que compleix L(Y)>U(X).", "c) Poda totes les solucions Y completes per les que existeix una solució X completa ja creada que compleix L(Y)>U(X).", "d) Permet podar pel valor de les cotes abans de crear la primera solució completa. Poda totes les solucions Y per les que existeix una solució X creada que compleix U(Y)>L(X).", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "BRANCH & BOUND",
        q: "20.- Quina és l’operació que es repeteix més en un algorisme de branch&bound?",
        options: ["a) Seleccionar el node de B&B a ramificar.", "b) Ramificar nodes de B&B.", "c) L’intercanvi de nodes de B&B al fer operacions de posar i treure nodes de la cua amb prioritat.", "d) Crear nodes de B&B.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "BRANCH & BOUND",
        q: "21.- Quins problemes pateixen els algorismes de branch&bound?",
        options: ["a) Poden repetir el càlcul de subproblemes.", "b) En començar la cerca hi ha poca informació per fer una bona estimació.", "c) a) i b).", "d) a) i hi ha molta poda de solucions quasi completes.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "BRANCH & BOUND",
        q: "22.- En quin cas es pot acabar l’execució d’un algorisme de branch&bound",
        options: ["a) En crear una solució completa en el pas de ramificació si el problema és d’optimització.", "b) En treure una solució completa de la cua amb prioritat en un problema que no és d’optimització.", "c) En crear una solució completa en el pas de ramificació si el problema no és d’optimització.", "d) En treure una solució completa de la cua amb prioritat.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "BRANCH & BOUND",
        q: "23.- Per quines parts ha d’estar formada la funció d’estimació?",
        options: ["a) El cost de la part de la solució creada i el cost de la part de la solució que falta per crear.", "b) Una estimació del cost de la part de la solució creada i una altra estimació del cost de la part de la solució que falta per crear.", "c) El cost de la part de la solució creada i una estimació del cost de la part de la solució que falta per crear.", "d) Una estimació del cost de la part de la solució creada i el cost de la part de la solució que falta per crear.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "BRANCH & BOUND",
        q: "24.- Quins són els passos que repeteix un algorisme de branch&bound?",
        options: ["a) Selecció, ramificació i poda.", "b) Ramificació i poda.", "c) Selecció, valoració, ramificació i poda.", "d) Valoració, ramificació i poda.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "BRANCH & BOUND",
        q: "25.- Quan es pot podar un node de branch&bound Y donada l’existència d’un node X?",
        options: ["a) Si L(Y)>L(X).", "b) Si U(Y)>U(X).", "c) Si L(Y)>U(X).", "d) c) i X es una solució completa.", "e) Cap de les anteriors."],
        correct: 2
    },

    // --- PROGRAMACIÓ DINÀMICA ---
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "26.- Perquè un problema es pugui resoldre amb programació dinàmica",
        options: ["a) Hem de poder dividir-lo en subproblemes dependents entre ells i tota subseqüència de decisions d’una seqüència de decisions òptima també ho ha de ser.", "b) Hem de poder dividir-lo en subproblemes dependents entre ells i tota subseqüència de decisions d’una seqüència de decisions òptima també ho ha de ser.", "c) Hem de poder dividir-lo en subproblemes independents entre ells, però tota subseqüència de decisions d’una seqüència de decisions òptima pot ser òptima o no.", "d) Hem de poder dividir-lo en subproblemes dependents entre ells, però tota subseqüència de decisions d’una seqüència de decisions òptima pot ser òptima o no.", "e) El problema sempre funciona com un tot, sense subtasques, però tota subseqüència de decisions d’una seqüència de decisions òptima també ho ha de ser."],
        correct: 0
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "27.- Quin problema vol atacar la programació dinàmica durant la cerca de solucions?",
        options: ["a) Dirigir la cerca per la part de l’espai de cerca més prometedora per trobar abans la solució.", "b) Evitar repetir el càlcul de solucions parcials o completes durant la cerca de solucions.", "c) Simplificar els algoritmes de cerca utilitzant sempre una taula.", "d) Utilitzar heurístiques per valorar les solucions parcials.", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "28.- Què vol dir que dos problemes A i B són dependents?",
        options: ["a) Que el problema A és igual al problema B.", "b) Que el conjunt de subproblemes que s’han de solucionar pel problema A és disjunt del conjunt de subproblemes que s’han solucionar per B.", "c) Que el conjunt de subproblemes que s’han de solucionar pel problema A té intersecció amb el conjunt de subproblemes que s’han solucionar per B.", "d) Que el problema A és equivalent al problema B.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "29.- Què signifiquen els índexs de la taula utilitzada per solucionar un problema mitjançant programació dinàmica?",
        options: ["a) Són els paràmetres dels subproblemes en què subdividim el problema a solucionar.", "b) Són les solucions dels subproblemes en què subdividim el problema a solucionar.", "c) És el cost de les solucions dels subproblemes en què subdividim el problema a solucionar.", "d) És la funció d’estimació de les solucions dels subproblemes en què subdividim el problema a solucionar.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "30.- Quin és el propòsit de la programació dinàmica en la resolució de problemes?",
        options: ["a) Utilitzar tècniques de cerca exhaustiva per trobar la solució", "b) Reduir el temps d'execució emmagatzemant i reutilitzant resultats intermitjos", "c) Utilitzar algorismes d'optimització per trobar la solució òptima", "d) Podar possibles resultats que no portin a la solució òptima", "e) Reduir el temps d'execució desant tots els càlculs dels subproblemes independents en una taula"],
        correct: 1
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "31.- Què permet a l'algoritme de Wagner & Fisher trobar la distància d'edició entre dues seqüències de text?",
        options: ["a) Compara caràcters individuals i calcula la distància d'edició per a cadascun de forma independent", "b) Fa una cerca exhaustiva de totes les possibles combinacions d'operacions d'edició", "c) Utilitza una matriu de distàncies que guarda el resultat de les comparacions prèvies", "d) Compara seqüències completes i calcula la distància d'edició una sola vegada", "e) Utilitza un algorisme greedy per realitzar les operacions d'edició en l'ordre òptim."],
        correct: 2
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "32.- El principi d’optimalitat de Bellmann diu",
        options: ["a) Podem aconseguir una solució òptima trobant una solució parcial i ajustant-la posteriorment", "b) La solució òptima es pot calcular recursivament", "c) La solució òptima es pot calcular mitjançant un algorisme greedy", "d) La solució òptima es pot trobar mitjançant una cerca exhaustiva", "e) Una solució òptima es pot construir a partir de solucions òptimes prèvies"],
        correct: 4
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "33.- En quins tipus d’algorismes de programació dinàmica s’utilitza la memorització dels resultats dels subproblemes?",
        options: ["a) Top down.", "b) bottom up.", "c) a) i b).", "d) A programació dinàmica no s’utilitza la memorització.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "34.- En quin tipus de problemes d’optimització es pot aplicar la programació dinàmica?",
        options: ["a) Problemes que es divideixen en subproblemes independents i on les solucions sempre estan formades per passos òptims.", "b) Problemes que es divideixen en subproblemes independents i on les solucions poden està formades per passos òptims i no òptims.", "c) Problemes que es divideixen en subproblemes dependents i on les solucions sempre estan formades per passos òptims.", "d) Problemes que es divideixen en subproblemes dependents i on les solucions sempre estan formades per passos òptims i no òptims.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "35.- Quina reducció de complexitat s’espera quan apliquem programació dinàmica respecte branch&bound?",
        options: ["a) Els algorismes de branch&bound solen tenir complexitat polinòmica que amb programació dinàmica es pot arribar a reduir a una complexitat lineal.", "b) Els algorismes de branch&bound solen tenir complexitat exponencial que amb programació dinàmica es pot arribar a reduir a una complexitat logarítmica.", "c) Els algorismes de branch&bound solen tenir complexitat polinòmica que amb programació dinàmica es pot arribar a reduir a una complexitat logarítmica.", "d) Els algorismes de branch&bound solen tenir complexitat exponencial que amb programació dinàmica es pot arribar a reduir a una complexitat polinòmica.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "36.- Quines estratègies utilitza la programació dinàmica per no repetir càlculs?",
        options: ["a) Identificar els subproblemes que resolt i guarda el seu resultat.", "b) Assegurar que obté la solució òptima de cada subproblema.", "c) Seguir una única seqüència de decisions per arribar a la solució.", "d) a) i b)", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "37.- Que ha d’acomplir un problema per aplicar la programació dinàmica?",
        options: ["a) Que es divideix en subproblemes que es poden repetir.", "b) Que la solució sempre està composta per les solucions òptimes de subproblemes.", "c) El problema ha d’acomplir sempre l’ a) i només si és un problema d’optimització ha d’acomplir la b).", "d) a) i b).", "e) Cap de les anteriors"],
        correct: 2
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "38.- El càlcul de la distància d’edició mínima entre dos strings de longitud n i m es pot fer amb backtracking i programació dinàmica. Quina complexitat té en cada cas?",
        options: ["a) Backtracking: O(2^n), programació dinàmica O(n^2).", "b) Backtracking: O(3^m), programació dinàmica O(m^2).", "c) Backtracking: O(3^(n+m)), programació dinàmica O(n*m).", "d) Backtracking: O(2^(n+m)), programació dinàmica O(n*m).", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "PROGRAMACIÓ DINÀMICA",
        q: "39.- Quan excel calcula els valors d’un full de càlcul, quina tècnica algorísmica utilitza?",
        options: ["a) Backtracking.", "b) Branch & bound.", "c) Programació dinàmica.", "d) Algorismes probabilístics.", "e) Cap de les anteriors."],
        correct: 2
    },

    // --- ALGORISMES PROBABILISTICS ---
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "40.- Si volem incrementar la probabilitat d’encert d’un algorisme p-correcte executant-lo diverses vegades, per quin tipus d’algorisme pujarà més ràpidament la probabilitat d’encert en incrementar el número d’execucions?",
        options: ["a) Algorismes numèrics.", "b) Algorismes de Monte Carlo.", "c) Algorismes de Las Vegas.", "d) Algorismes de Sherwood.", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "41.- Si tenim un algorisme de Monte Carlo 0.8-correcte, quin és el número mínim de vegades que hauré d’executar-lo per obtenir un algorisme 0.9-correcte?",
        options: ["a) 3", "b) 5", "c) 7", "d) 9", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "42.- Quan un algorisme no dona sempre el resultat correcte el podem classificar en...",
        options: ["a) Algorismes de Las Vegas i algorismes de Monte Carlo.", "b) Algorismes numèrics i algorismes de Monte Carlo.", "c) Algorismes de las Vegas i algorismes de Sherwood.", "d) Algorismes numèrics i algorismes de Las Vegas.", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "43.- L’algorisme de RANSAC pot treballar amb algunes dades incorrectes perquè...",
        options: ["a) calcula el resultat utilitzant tot el conjunt de les dades d’entrada.", "b) fa un mitjana de les dades d’entrada per calcular el resultat.", "c) fa una votació per seleccionar el millor resultat.", "d) a) i c).", "e) Cap de les anteriors"],
        correct: 2
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "44.- De quin tipus d’algorisme probabilístic són les enquestes electorals per predir el resultat de les eleccions?",
        options: ["a) Monte Carlo.", "b) Numèric.", "c) Las Vegas.", "d) Sherwood.", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "45.- Quin tipus d’algorisme probabilístic és el que soluciona el problema de les n-reines",
        options: ["a) Monte Carlo.", "b) Numèric.", "c) Las Vegas.", "d) Sherwood.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "46.- Si utilitzo una inicialització aleatòria per crear una configuració que després milloro amb l’algorisme de descens del gradient, és fàcil saber quantes vegades l’he d’executar per arribar a obtenir una configuració/solució òptima amb una alta probabilitat d’encert?",
        options: ["a) Sí, ja que la probabilitat d’encert de cada execució serà el quocient entre el número de solucions òptimes i el número de configuracions possibles.", "b) Sí, ja que el número d’execucions necessàries serà el quocient entre el número de configuracions possibles i el número de solucions òptimes.", "c) No, ja que es tracta d’un procés estocàstic.", "d) No, ja que hauríem de saber quantes valls te la funció a optimitzar i de quina mida son.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "47.- Quan analitzem l’eficiència d’un algorisme, podem utilitzar una funció resum de les següents mesures",
        options: ["a) Nombre de crides recursives realitzades per l'algoritme", "b) Temps d’execució i nombre mínim de solucions en memòria", "c) Quantitat de dades llegides o escrites pel disc i temps d’execució.", "d) Solucions creades i nombre mínim de solucions en memòria", "e) Temps d’execució i nombre màxim de solucions en memòria"],
        correct: 4
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "48.- Quin efecte té afegir aleatorietat a un algorisme?",
        options: ["a) L’algorisme serà no determinista.", "b) Cada execució de l’algorisme pot donar un resultat diferent.", "c) Ja no fa falta que l’algoritme funcioni correctament en totes les execucions.", "d) Totes les anteriors.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "49.- Quina de les ordenacions següents va de pitjors algorismes a millors en funció de la seva capacitat de trobar el resultat correcte a un problema?",
        options: ["a) Las Vegas, Monte Carlo, Sherwood, numèrics.", "b) Monte Carlo, Las Vegas, numèrics, Sherwood.", "c) Monte Carlo, numèrics, Las Vegas, Sherwood.", "d) Monte Carlo, numèrics, Sherwood, Las Vegas.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "50.- Quina és la formula correcte per calcular la probabilitat d’encert d’un algorisme de Monte Carlo p-correcte aprofitant l’avantatge estocàstic?",
        options: ["a) 1-(1-p)^n .", "b) p^n .", "c) Suma de k=floor(n/2)+1 fins n de p^k * (1-p)^(n-k) * (n sobre k)", "d) p^k * (1-p)^(n-k) * (n sobre k)", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "51.- Com és que l’algorisme RANSAC pot obtenir la solució exacta d’un problema encara que hi hagi algunes dades d’entrada errònies?",
        options: ["a) Perquè calcula possibles solucions a partir d’un subconjunt de les dades d’entrada i selecciona la solució més votada.", "b) Perquè calcula la solució fent una mediana a partir de totes les dades.", "c) Perquè fa un primer pas on elimina les dades errònies per votació. Amb les que queden calcula la solució.", "d) Perquè aplica el mètode de mínims quadrats.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "52.- En el cas de repetir un 'descens del gradient' amb inicialització aleatòria com hem de gestionar les diverses configuracions o solucions?",
        options: ["a) Tenim una la configuració que estem optimitzant, un altre que és la de mínim cost de les configuracions veïnes, un altre que és la de mínim cost per la repetició actual del descens del gradient i un altre que és la de mínim cost per totes les repeticions executades.", "b) Tenim una la configuració que estem optimitzant, un altre que és la de mínim cost de les configuracions veïnes i un altre que és la de mínim cost trobada fins al moment.", "c) Tenim una la configuració que estem optimitzant i un altre que és la de mínim cost trobada fins al moment.", "d) Tenim una la configuració que estem optimitzant, un altre que és la de mínim cost de totes les configuracions creades fins al moment.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "53.- De quin tipus són els algoritmes probabilístics de: 1. Col·locar n-reines en un taulell d’escacs de nxn sense que s’ataquin, 2. Trobar el camí òptim del viatjant de comerç.",
        options: ["a) 1. Monte Carlo, 2. Monte Carlo.", "b) 1. Monte Carlo, 2. Las Vegas.", "c) 1. Las Vegas, 2. Monte Carlo.", "d) 1. Las Vegas, 2. Las Vegas.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "54.- Quins comportaments podem admetre que tingui un algorisme probabilístic?",
        options: ["a) No trobar la solució.", "b) No trobar la solució, donar resultats erronis.", "c) No trobar la solució, donar resultats erronis, produir errors d’execució.", "d) No trobar la solució, donar resultats erronis, produir errors d’execució, no finalitzar l’execució.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "55.- Quines condicions es demanen a un algorisme de Monte Carlo per poder incrementar la seva probabilitat d’encert per execució repetida?",
        options: ["a) Que el problema que resolt només tingui una solució correcta.", "b) Que tingui una probabilitat d’encert superior a 0,5.", "c) a) i b).", "d) a) i b) i que sigui esbiaixat.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "56- Quina fórmula s’utilitza per calcular la probabilitat d’encert d’un algorisme de Las Vegas p-correcta en executar-lo n vegades?",
        options: ["a) 1-(1-p)^n .", "b) p^n .", "c) Suma de k=floor(n/2)+1 fins n de p^k * (1-p)^(n-k) * (n sobre k)", "d) p^k * (1-p)^(n-k) * (n sobre k)", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "ALGORISMES PROBABILISTICS",
        q: "57.- Que compleix l’algorisme RANSAC (Random sample consensus)?",
        options: ["a) No es veu afectat per alguns errors a les dades d’entrada.", "b) a) i incrementar el nombre d’execucions millora la precisió del resultat.", "c) a) i incrementar el nombre d’execucions millora la seva probabilitat d’encert.", "d) Troba o no la solució, però mai dona resultats erronis.", "e) Cap de les anteriors."],
        correct: 2
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