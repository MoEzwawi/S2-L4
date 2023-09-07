/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function(l1=0,l2=0){
    return l1 * l2
}


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function(n1=0,n2=0){
    if (Number.isInteger(n1) && Number.isInteger(n2)) {
        if (n1 !== n2) {
            return n1 + n2
        }else{
            return (n1+n2)*3
        }
    } else {
        return 'Inserisci due numeri interi'
    }
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function(x=0){
    if (x>19) {
        return Math.abs(x-19)*3
    } else {
        return Math.abs(x-19)
    }
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function(n=0){
    if ((n>20 && n<=100) || n===400) {
        return true
    } else {
        return false
    }
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function(inputString){
    const myString = inputString.toString()   
    if (myString.slice(0,7).toUpperCase() !== 'EPICODE') {
        return 'EPICODE '+myString
    } else {
        return myString.slice(0,7).toUpperCase() + myString.slice(7)
    }
}


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function(number){
    if (number>0) {
        if (number%3 === 0 && number%7 ===0) {
            return 'Il numero è un multiplo sia di 3 che di 7'
        } else if (number%3 === 0) {
            return 'Il numero è un multiplo di 3'
        } else if (number%7 === 0) {
            return 'Il numero è un multiplo di 7'
        } else {
            return 'Il numero non è multiplo né di 3 né di 7'
        }
    } else {
        return 'Inserisci un numero positivo'
    }
}


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (toBeReversed){
    let newString = ''
    for (let i = toBeReversed.length -1; i >= 0; i--) {
        newString += toBeReversed.charAt(i)      
    }
    return newString
}


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (providedString){
    let newString = providedString.charAt(0).toUpperCase()
    for (let i = 0; i < providedString.length -1; i++) {
        if (providedString.charAt(i) === ' ') {
            newString += providedString.charAt(i+1).toUpperCase()
        } else {
            newString += providedString.charAt(i+1)
        }     
    }
    return newString
}


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (providedString){
    let newString = ''
    for (let i = 0; i < providedString.length; i++)
    if (i !== 0 && i !== providedString.length -1) {
        newString += providedString.charAt(i)
    }
    return newString
}



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function(n){
    let randomNumbers = []
    if (Number.isInteger(n)) {
        for (let i = 0; i < n; i++) {
            randomNumbers.push(Math.ceil(Math.random()*10))
        }
    } else {
        return 'Inserisci un numero intero!'
    }
    return randomNumbers
}

console.log(giveMeRandom(6))