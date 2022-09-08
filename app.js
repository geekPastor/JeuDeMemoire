let btnplay = document.getElementsByClassName('play');

let gagnant = 0;
let nb
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let ctn = document.getElementById('ctn')


function couleurAlea(nombre){
    return Math.floor(Math.random() *  nombre);
}

function changementCouleur(){

        
        let couleur1 = 'rgb(' + couleurAlea(255) + ', ' + couleurAlea(255) + ', ' + couleurAlea(255)
        let couleur2 = 'rgb(' + couleurAlea(255) + ', ' + couleurAlea(255) + ', ' + couleurAlea(255)
        let couleur3 = 'rgb(' + couleurAlea(255) + ', ' + couleurAlea(255) + ', ' + couleurAlea(255)
        let couleur4 = 'rgb(' + couleurAlea(255) + ', ' + couleurAlea(255) + ', ' + couleurAlea(255)

        btn1.style.backgroundColor = couleur1;
        btn2.style.backgroundColor = couleur2;
        btn3.style.backgroundColor = couleur3;
        btn4.style.backgroundColor = couleur4;

        btn1.innerText = "Trouve moi"
        btn2.innerText = "Trouve moi"
        btn3.innerText = "Trouve moi"
        btn4.innerText = "Trouve moi"

        nb = Math.floor(Math.random() * 4);
        ctn.children.item(nb).innerText = "Gagnant"
}

function finDujeu(){
    setTimeout(() => {
    clearInterval(temp);

    if(btn1.textContent === "Gagnant"){
        gagnant = 1;
    }

    if(btn2.textContent === "Gagnant"){
        gagnant = 2;
    }

    if(btn3.textContent === "Gagnant"){
        gagnant = 3;
    }

    if(btn4.textContent === "Gagnant"){
        gagnant = 4;
    }


    //on donne aux textes la couleur blanche

    b1.style.color = "#f1f1f1";
    b2.style.color = "#f1f1f1";
    b3.style.color = "#f1f1f1";
    b4.style.color = "#f1f1f1";

    //apres l'interval on met l'arriere plan noir aux blocks

    b1.style.backgroundColor = "#010101";
    b2.style.backgroundColor = "#010101";
    b3.style.backgroundColor = "#010101";
    b4.style.backgroundColor = "#010101";

}, 500);
}


function main(){
    let temp = setInterval(
    changementCouleur, 0.05 * 1000)
}