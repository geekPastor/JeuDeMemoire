let btnplay = document.getElementsByClassName('play');





function changementCouleur(){
        function couleurAlea(nombre){
            return Math.floor(Math.random() *  nombre);
        }
        let couleur1 = 'rgb(' + couleurAlea(255) + ', ' + couleurAlea(255) + ', ' + couleurAlea(255)
        let couleur2 = 'rgb(' + couleurAlea(255) + ', ' + couleurAlea(255) + ', ' + couleurAlea(255)
        let couleur3 = 'rgb(' + couleurAlea(255) + ', ' + couleurAlea(255) + ', ' + couleurAlea(255)
        let couleur4 = 'rgb(' + couleurAlea(255) + ', ' + couleurAlea(255) + ', ' + couleurAlea(255)

        let btn1 = document.querySelector('.bouton1')
        let btn2 = document.querySelector('.bouton2')
        let btn3 = document.querySelector('.bouton3')
        let btn4 = document.querySelector('.bouton4')

        btn1.style.backgroundColor = couleur1;
        btn2.style.backgroundColor = couleur2;
        btn3.style.backgroundColor = couleur3;
        btn4.style.backgroundColor = couleur4;
}

function main(){
    setInterval(
    changementCouleur, 1000)
}