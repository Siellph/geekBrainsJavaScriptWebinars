// Задание 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 т.к. a=1, то при префиксной инкрементации сразу будет выходить такой результат, а именно 1+1=2
// d = b++; alert(d);           // 1 посфиксная инкрементация сначала выведет результат переменной, а после уже результат самой инкрементации, а b=1
// c = (2+ ++a); alert(c);      // 5 т.к. a уже равно 2 то при инкрементации он станет равен 3 и прибавив 2 будет равно 5
// d = (2+ b++); alert(d);      // 4 d=4, потому что b после предыдущей постфиксной инкрементации стал равен 2, а 2+2=4
// alert(a);                    // 3 в конечном итоге после всех инкрементаций переменная a стала равна 3
// alert(b);                    // 3 b стала так же равной 3 после последней постфиксной инкрементации. the end)
// Задание 2
function unit2() {
    var a = 2
    var x = 1 + (a *= 2)
    return (x) // x = 5
}
// Задание 3
function unit3() {
    var a = +prompt('Введите первое число:')
    var b = +prompt('Введите второе число:')
    if ((a >= 0) && (b >= 0)) {
        var c = a - b
    } else if ((a <= 0) && (b <= 0)) {
        var c = a * b
    } else if (((a <= 0) && (b >= 0)) || ((a >= 0) && (b <= 0))) {
        var c = a + b
    }
    return (c)
} // Задание 4
function unit4() {
    var a = +prompt('Введите переменную a от 0 до 15:')
    switch (a) {
        case 0:
            return ('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break
        case 1:
            return ('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break
        case 2:
            return ('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break
        case 3:
            return ('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break
        case 4:
            return ('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break
        case 5:
            return ('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break
        case 6:
            return ('7, 8, 9, 10, 11, 12, 13, 14, 15');
            break
        case 7:
            return ('8, 9, 10, 11, 12, 13, 14, 15');
            break
        case 8:
            return ('9, 10, 11, 12, 13, 14, 15');
            break
        case 9:
            return ('10, 11, 12, 13, 14, 15');
            break
        case 10:
            return ('11, 12, 13, 14, 15');
            break
        case 11:
            return ('12, 13, 14, 15');
            break
        case 12:
            return ('13, 14, 15');
            break
        case 13:
            return ('14, 15');
            break
        case 14:
            return ('15');
            break
        case 15:
            return ('Это последнее число в диапазоне')
            break
    }
}
// Задание 5, 6
function unit5() {
    var num1 = +prompt('Введите первое число')
    var num2 = +prompt('Введите второе число')
    var op = +prompt('Выберите операцию. 1 - сложение. 2 - вычитание. 3 - умножение. 4 - деление')

    function sum(num1, num2) {
        return num1 + num2
    }

    function diff(num1, num2) {
        return num1 - num2
    }

    function multi(num1, num2) {
        return num1 * num2
    }

    function div(num1, num2) {
        return num1 / num2
    }
    switch (op) {
        case 1:
            return sum(num1, num2);
            break
        case 2:
            return diff(num1, num2);
            break
        case 3:
            return multi(num1, num2);
            break
        case 4:
            return div(num1, num2);
            break
    }
}
// Задание 7
function unit7() {
    return null == 0 // В данном случае 0 - это число с типом данных number, а null, возможно, строка, и поэтому результат выполнения 'false'. Больше вариантов нет.
}
