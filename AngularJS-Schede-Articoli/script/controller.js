var products = [
    {
        codice: "J766",
        nome: "DORA",
        des: " Shopping bag 130 gr/mq in 100% Cotone.",
        mater: "Cotone",
        dim: "cm 38x42",
        prezzo: "€ 2,2800"
    },
    {
        codice: "J7355",
        nome: "LOOP",
        des: "Sacca/Zaino in Poliestere 210D. Chiusura con doppio cordoncino in tinta. Asole laterali. 4 colori neon fluo Densità al mq di classe A.",
        mater: "210D Poliestere",
        dim: "cm 34x43",
        prezzo: "€ 1,8300"
    },
    {
        codice: "J7356",
        nome: "LOOP DELUXE",
        des: "Sacca/Zaino in Poliestere 210D di classe A. Tasca anteriore a rete colorata con zip. Chusura con doppio cordoncino. 75 gr/mq.",
        mater: "Poliestere",
        dim: "cm 34x43",
        prezzo: "€ 2,1450"
    },
    {
        codice: "J7309",
        nome: "TRACKER",
        des: " Zaino in Poliestere 600D. Schienale imbottito. 2 tasche con zip. Schienale imbottito. 3 tasche con zip puller. 2 tasche laterali con retina.",
        mater: "Poliestere",
        dim: "cm 33x44x16",
        prezzo: "€ 16,5000"
    },
    {
        codice: "J7701",
        nome: "TOWEL",
        des: " Asciugamano piccolo in Microfibra. Turbo-Dry. Profili rifiniti. 170 gr/mq. Maxi assorbenza.",
        mater: "Microfibra",
        dim: "cm 50x100",
        prezzo: "€ 4,8000"
    }
]

var mainController = function ($scope) {
    $scope.products = products;
}

console.log(angular.toJson(products));
/*Usare JsonLint per validare il codice*/
