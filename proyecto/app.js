
window.onload = function(){
    document.querySelector("#DomainGeneratorHtml").innerHTML = DomainGenerator();
}

function DomainGenerator(){

    let pronoun = ['the','our'];
    let adj = ['great', 'big'];
    let noun = ['jogger','racoon'];
    let net = ['.com','.es','.net']

    let resultado = [];
    for(let i = 0; i < pronoun.length; i++){
        for(let j = 0; j < adj.length; j++){
            for(let k = 0; k < noun.length; k++){
                for(let l = 0; l < net.length; l++){
                    resultado.push("www." + pronoun[i] + adj [j] + noun [k] + net[l]);
                }                
            }
        }
    }
    return resultado.join("<br>");
};

console.log(DomainGenerator());