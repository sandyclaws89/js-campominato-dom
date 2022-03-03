

const container = document.getElementById('output');
let playButton = document.getElementById('button');
let selectedElement = document.getElementById('select_difficult');
let arrValue = [100, 81, 49];

playButton.addEventListener('click', play);



function play(){
    /*PULISCO AD OGNI CLICK IL CONTAINER*/
    container.innerHTML='';

    /*VALUE TIPO DI DIFFICOLTA' SELEZIONATA (0 , 1 , 2) */
    let diffValue = parseInt(selectedElement.value);
    
    /* VARIABILE DIFFICOLTA' SELEZIONATA NELL'ARRAY (NUMERO DI CELLE DA STAMPARE)*/
    let numCell = arrValue[diffValue];
    
    /* NUMERO DI CELLE PER LATO DEL CONTAINER */
    let cellsSide = Math.sqrt(numCell);

    for (let i=1; i<=numCell; i++){
        /*VARIABILE/ELEMENTO DIV*/
        const varElement = document.createElement(`div`);
        // varElement.innerHTML = '';

        /*AGGIUNGO LA CLASSE ALLA VARIBILE/ELEMENTO*/
        varElement.classList.add('box');
        
        /*STAMPO DENTRO LA VARIABILE/ELEMENTO IL NUMERO DELLE CELLE QUINDI IL NUMERO DEL CONTATORE*/
        varElement.append(i);

        /* DIMENSIONO LE CELLE DIVIDENDOLE PER LA RADICE QUADRATA DEL NUMERO TOT DI ELEMENTI, COSI FACENDO TROVO QUANTI CE NE SONO IN UN LATO , FLEXO VARELEMENT COSI DA CENTRARE LA I*/ 
        varElement.style.display='flex';
        varElement.style.alignItems='center';
        varElement.style.justifyContent='center';
        varElement.style.width =`calc(100% / ${cellsSide})`;
        varElement.style.height =`calc(100% / ${cellsSide})`;
        // varElement.style.hover = `color=blue`;
        // NON SO COME DARE HOVER DA JS 

        /*DENTRO IL CONTAINER STAMPO LA VARIABILE ELEMENTO, QUINDI TUTTI I DIV*/ 
        container.append(varElement);

        
        /*FUNZIONE CHE FA COLORARE AL CLICK LE CASELLE*/
        varElement.addEventListener('click', changeColor);
    
        function changeColor() {
            this.classList.add(`bomb`);
        }
    
    }
}


    // if (selectDifficult == "0"){
    // container.innerHTML = '';        
    // for (i=1; i<=49; i++) {
    //         container.style.width ='420px';
           
    //         container.innerHTML += `<div class= "box flex"> ${i}</div>`
    //     }
    // } else if(selectDifficult == "1"){
    //     container.innerHTML ='';
    //     for (i=1; i<=81; i++) {
    //         container.style.width ='540px';
    //         container.innerHTML += `<div class= "box flex">${i}</div>`
    //     }
    // }
    // else if (selectDifficult == "2"){
    //     container.innerHTML ='';
    //     for (i=1; i<=100; i++) {
    //         container.style.width ='600px';
    //         container.innerHTML += `<div class= "box flex">${i}</div>`
    //     }
    // }