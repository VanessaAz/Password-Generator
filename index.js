const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatorBtn = document.getElementById('password-generator')
let passwordOne = document.getElementById('password-one')
let passwordTwo = document.getElementById('password-two')
let passwordThree = document.getElementById('password-three')
let passwordFour = document.getElementById('password-four')
let inputChr = document.getElementById('input-chr')


generatorBtn.addEventListener('click', function(){
    passwordOne.textContent = randomPassword()
    passwordTwo.textContent = randomPassword()
    passwordThree.textContent = randomPassword()
    passwordFour.textContent = randomPassword()
})

        
function randomPassword(){
    let password = ''
    for(let i = 0; i < inputChr.value; i++){
       let randomIndex = Math.floor(Math.random() * characters.length)
        let randomCharacters = characters[randomIndex]
        password += randomCharacters       
    }
    return password
}


