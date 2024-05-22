// let fullName = ["Kemal","Candan"];
// let firstName = fullName[0]; //firstName dediğimizde kemal i çağırmış olduk.
// let lastName = fullName[1];

// let [firstName, lastName] = fullName;
// console.log(firstName,lastName);

// ------------------------------------------------------------------------------

// let fullName = "Mustafa Kemal Atatürk";
// let [name1, name2, name3] = fullName.split(" ");

// console.log(name1);
// console.log(name2);
// console.log(name3);

// ------------------------------------------------------------------------------

//aşağıdaki kişisel bilgileri ayrı ayrı değişkenlere ata.
// let userInfo = ["muslumhan", "Muslum Han", "Erol", 48, "Gaziantep", "Türkiye"];
// let [userName,firstName,lastName,age,city,country] = userInfo;
// console.log(userName);
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(city);
// console.log(country);

// ------------------------------------------------------------------------------

//farklı bir yazım tekniği.
let userInfo = ["muslumhan", "Muslum Han", "Erol", 48, "Gaziantep", "Türkiye"];
let [userName,firstName,lastName,age, ...address] = userInfo; //sehir, ülke bilgilerini parametre içerisine aldık. eşleşme sonrası her bilgi parametre içerisinde yer ediniyor. yani age i silsem o da ...address içerisinde yer alır.
console.log(userName);
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(address);

