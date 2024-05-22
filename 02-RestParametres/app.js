const calculateCircleArea = (r, pi=3) => {
    return "Circle Area :" + r*r*pi;
}
// console.log(calculateCircleArea(5, 3.14));
// console.log(calculateCircleArea(5));
// console.log(calculateCircleArea(5, 3.145683));

// ---------------------------------------------------------------

const calculateCircleArea2 = (...parametres) =>{ 
    let array = [...parametres];
    let r = array[0];
    let pi = array[1] == undefined ? 3 : array[1]; //eğer array1 undefined sa buraya 3 yaz değilse array1 de ne yazıyorsa onu yaz.
    return "Circle Area :" + r*r*pi;
}

// ---------------------------------------------------------------
//soru: içerisine gönderilen sayıları toplayıp, sonucu ekrana yazan arrow functionu hazırlayın.

const getTotal = (...numbers) => {
    let numberssArray = [...numbers];
    let total = 0;
    for(let i=0; i<numbers.length; i++){
        total += numberssArray[i];
    }
    return total;
}

const basketItemsPrice = [135, 500, 900, 250];
console.log(getTotal(...basketItemsPrice));

// console.log(getTotal(5, 6, 55, 66, 44, 22, 64, 65));
