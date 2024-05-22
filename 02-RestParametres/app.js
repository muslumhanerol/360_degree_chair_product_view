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

console.log(calculateCircleArea2(5, 3.14));
