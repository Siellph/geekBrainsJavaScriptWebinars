// Задание 1
function getSimples (limit) {
    let arr = [2]
    let num = 2
    
            while (num <= limit) {
                if (checkNum(num, arr)) arr.push (num)
                ++num
            }
            console.log (arr)
        }
    
        function checkNum (number, arrr) {
            let check = true
            arrr.forEach (el => {
                if (number % el == 0) {
                    check = false
                }
            })
            return check
        }
// Задание 4.1
function unit4One() {
    let arr = []
    for (let i = 0; i <= 9; arr.push(i++)) {}
    console.log(arr)
}
// Задание 4.2
let symb = '*'
let v = +prompt('Высота пирамиды:')
let arr = []
function piramid() {
    for (let i = 0; i < v; i++) {
        arr.push (symb)
        console.log(arr)
    }
}