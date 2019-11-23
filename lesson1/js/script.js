var prog = 0
var prog = prompt('Выберите число. Число соответствует заданию. 1-Первое задание. 2-Задание 2а. 3-Задание 2b. 4-Задание 4.')
if (prog == 1) {
function task1() {
    var cel=0
    var far=0
    var cel = prompt('Укажите температуру в градусах по цельсию: ')
    far = (9/5)*cel+32
    return 'Температура по Фаренгейту равна: ' + far
} 
alert (task1())}
if (prog == 2) {
    function task2() {
        var admin = ''
        var name = prompt('Введите имя: ')
        admin = name
        return 'Admin: ' + admin
    }
    alert (task2())
}
if (prog == 3) {
    function task3() {
        var a = 20
        var b = 30

    }
}
if (prog = 4) {
    function task4() {
        return '1000+"108"=' + 1000 + '108'
    }
    alert (task4())
}