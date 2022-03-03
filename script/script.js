const container = document.getElementById('output');
let playButton = document.getElementById('button');
let selectedElement = document.getElementById('select_difficult');

playButton.addEventListener('click', play);


function play(){
    let selectDifficult = selectedElement.value;
    if (selectDifficult == "easy"){
    container.innerHTML = '';        
    for (i=1; i<=49; i++) {
            container.style.width ='420px';
           
            container.innerHTML += `<div class= "box flex"> ${i}</div>`
        }
    } else if(selectDifficult == "medium"){
        container.innerHTML ='';
        for (i=1; i<=81; i++) {
            container.style.width ='540px';
            container.innerHTML += `<div class= "box flex">${i}</div>`
        }
    }
    else if (selectDifficult == "hard"){
        container.innerHTML ='';
        for (i=1; i<=100; i++) {
            container.style.width ='600px';
            container.innerHTML += `<div class= "box flex">${i}</div>`
        }
    }
}