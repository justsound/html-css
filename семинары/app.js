// alert("Привет Мир!");
// alert(158+2);
// alert(`результат:${(158+2)}`);
// let name = prompt("Введите ваше имя", "Имя")
// alert(`Привет, ${name}`)

/* let name = "sanek";
function sayHello() {
    // let user = "bob"
    // alert(user);
    alert(name)
}
sayHello();
// alert(user) */

// if (confirm("are you sure?")) {
//     alert("We are happy")
// }
// else{
//     alert("We are not happy")
// }

let age = parseInt(prompt("Введите ваш возраст"));
switch(age) {
    case 18:
        alert("Вы совершеннолетний");
        break;
    case 10:
        alert("Пора учить уроки");
        break;
    case 30:
        alert("Пора спать");
        break;
    default:
        alert("Мы не знаем что вам делать");
}