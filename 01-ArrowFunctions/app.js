function selamVer(){
    console.log("Merhaba, burası klasik bir function");
};

const selamVer2 = () => {
    console.log ("Merhaba, burası bir arrow function");
};

const selamVer3 = (ad) => { //Parametreli arrow function.
    console.log("Merhaba " + ad);
};


const topla = (sayi1,sayi2,sayi3) => { //2 Parametreli arrow function.
    return sayi1 + sayi2 + sayi3;
}


const selamVer4 = (ad) => {
    return console.log("Merhaba " + ad);
}


// selamVer();
// selamVer2();
// selamVer3("Müslüm");
// console.log(topla(4,6));
selamVer4("Halil");