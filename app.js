let btnplay = document.getElementsByClassName('play');
let gagnant
let nb
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let corpsJeu = document.querySelector('ctn');
//le message d'aide
let aide = document.querySelector('.help')
let desc = document.querySelector('.aide')

aide.onclick = function(){
    resultat.classList.add('active');
    desc.classList.add('active');
}

//la variable pour les boites d'indication
let resultat = document.querySelector('.resultat')
//ajout des variable pour l'indication

let echec = document.querySelector('.echec');

let reussite =  document.querySelector('.reussite')

//le mode sombre


let body = document.querySelector('body');
        let toggle = document.querySelector(".toggle");

        let stockMode = localStorage.getItem("mode");
        if(stockMode && stockMode === "dark"){
            body.classList.add("dark");
            toggle.classList.add("active");
        }
        

        toggle.addEventListener("click", ()=>{
            if(!body.classList.contains('dark')){
                body.classList.toggle("dark");
                resultat.style.backgroundColor = "#301c50"
            }else{
                body.classList.remove('dark')
                resultat.style.backgroundColor = "#fff"
            }

            if(!body.classList.contains("dark")){
                return localStorage.setItem("mode", "light")
            }
            localStorage.setItem("mode", "dark");
        })
        toggle.addEventListener("click", () =>
            toggle.classList.toggle("active")
        )


        //fin du mode sombre


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

        nb = Math.floor(Math.random() * 2);
        c1.children.item(nb).innerText = "Gagnant"
        c2.children.item(nb).innerText = "Gagnant"
}

function main(){
    let temp = setInterval(
    changementCouleur, 0.25 * 1000)

    
   setTimeout(() => {
        clearInterval(temp);
        // On verifie dans quel bloc se trouve le mot GAGNANT et on donne le numero de ce bloc à la variable gagnant
    if (btn1.textContent.toLocaleLowerCase() == "gagnant"){
        gagnant =1;
    }

    if (btn2.textContent.toLocaleLowerCase() == "gagnant"){
        gagnant=2;
    }

    if (btn3.textContent.toLocaleLowerCase() == "gagnant"){
        gagnant =3;
    }


    if (btn4.textContent.toLocaleLowerCase() =="gagnant"){
        gagnant =4;
    }

    //On met un fond noir aux blocs
    btn1.style.backgroundColor = "#010101";
    btn2.style.backgroundColor = "#010101";
    btn3.style.backgroundColor = "#010101";
    btn4.style.backgroundColor = "#010101";

    // On donne une couleur blanche aux textes des blocs
    btn1.style.color = "#f1f1f1";
    btn2.style.color = "#f1f1f1";
    btn3.style.color = "#f1f1f1";
    btn4.style.color = "#f1f1f1";

    //On met des chiffres comme texte dans les blocks
    btn1.innerText = "1";
    btn2.innerText = "2";
    btn3.innerText = "3";
    btn4.innerText = "4";

    // Au clique sur un bloc, on verifie si la variable "gagnant" porte le numero de ce bloc
    btn1.onclick = function ()
    {
        if (gagnant ==1)
            {
                // Si oui on affiche "Gagné" pour preciser que l'utilisateur a gagné le jeu
                resultat.classList.add('active')
                echec.classList.remove('active');
               reussite.classList.add('active');

            }
        else
        {
            // Si non c'est perdu
            resultat.classList.add('active')
            reussite.classList.remove('active');
            echec.classList.add('active');
        }
    };
    
    // On fait la meme chose avec tous les 4 blocs
    btn2.onclick = function ()
    {
        if (gagnant ==2)
            {
                resultat.classList.add('active')
                echec.classList.remove('active');
                reussite.classList.add('active');
            }
        else{
                resultat.classList.add('active')
                reussite.classList.remove('active');
                echec.classList.add('active');
        }
    };
    
    btn3.onclick = function ()
    {
        if (gagnant==3)
            {
                resultat.classList.add('active')
                echec.classList.remove('active');
                reussite.classList.add('active');
            }
        else{
            
            resultat.classList.add('active')
            reussite.classList.remove('active');
            echec.classList.add('active');
        }
    };
    
    btn4.onclick = function ()
    {
        if (gagnant ==4)
            {
                resultat.classList.add('active')
                echec.classList.remove('active');
                reussite.classList.add('active');
            }
        else
        {
            resultat.classList.add('active')
            reussite.classList.remove('active');
            echec.classList.add('active');
        }
    };
    }, 1000);
}