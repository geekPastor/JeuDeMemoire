let btnplay = document.getElementsByClassName('play');

let gagnant = 0;
let nb
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let ctn = document.getElementById('ctn')

function changementCouleur(){

        function couleurAlea(nombre){
            return Math.floor(Math.random() *  nombre);
        }
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

function main(){
    let temp = setInterval(
    changementCouleur, 0.05 * 1000)

    
   let finDujeu =  setTimeout(() => {
        clearInterval(temp);
        // On verifie dans quel bloc se trouve le mot GAGNANT et on donne le numero de ce bloc à la variable gagnant
    if (b1.textContent =="GAGNANT"){
        gagnant =1;
    }

    if (b2.textContent =="GAGNANT"){
        gagnant=2;
    }

    if (b3.textContent =="GAGNANT"){
        gagnant =3;
    }


    if (b4.textContent =="GAGNANT"){
        gagnant =4;
    }

    //On met un fond noir aux blocs
    b1.style.backgroundColor = "#010101";
    b2.style.backgroundColor = "#010101";
    b3.style.backgroundColor = "#010101";
    b4.style.backgroundColor = "#010101";

    // On donne une couleur blanche aux textes des blocs
    b1.style.color = "#f1f1f1";
    b2.style.color = "#f1f1f1";
    b3.style.color = "#f1f1f1";
    b4.style.color = "#f1f1f1";

    //On met des chiffres comme texte dans les blocks
    b1.textContent = "1";
    b2.textContent = "2";
    b3.textContent = "3";
    b4.textContent = "4";

    // Au clique sur un bloc, on verifie si la variable "gagnant" porte le numero de ce bloc
    b1.onclick = function ()
    {
        if (gagnant ==1)
            {
                // Si oui on affiche "Gagné" pour preciser que l'utilisateur a gagné le jeu
                alert("Gagné!");
            }
        else
        {
            // Si non c'est perdu
            alert("Perdu!");
        }
    };
    
    // On fait la meme chose avec tous les 4 blocs
    b2.onclick = function ()
    {
        if (gagnant ==2)
            {
                alert("Gagné!");
            }
        else
        {
            alert("Perdu!");
        }
    };
    
    b3.onclick = function ()
    {
        if (gagnant==3)
            {
                alert("Gagné!");
            }
        else
        {
            alert("Perdu!");
        }
    };
    
    b4.onclick = function ()
    {
        if (gagnant ==4)
            {
                alert("Gagné!");
            }
        else
        {
            alert("Perdu!");
        }
    };
    }, 500);
}