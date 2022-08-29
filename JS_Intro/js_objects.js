
let user = {
    name: 'Luis',
    age:200,
    toString(){
        return `{ name: ${this.name}, age ${this.age}}`;
    }
}

console.log('user',user)

//Template Literals
let templateLiteral = `Hello tehere my name is ${user.name} and 1+1 = ${1+1}`
console.log('templateLiteral', templateLiteral)

let json = JSON.stringify(user);
console.log('json',json)

let unparsedJson = '{"name":"Luis","age":200}';
let newuser = JSON.parse(unparsedJson);
console.log('newUser.name',newUser.name);