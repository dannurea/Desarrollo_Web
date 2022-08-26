//JSON = JavaScript Object Notation 
// : (dos puntos) = objeto json

let user = {}

console.log('user',user)
console.log('colony',user.adress.colony?.municipality)

user = {
    address: {}
}

user = {
    address: {
        street: 'Random Street Value',
        colony: {
            municipality: 'l'
        }
    }
}
console.log('user',user)
console.log('colony',user.adress.colony?.municipality)