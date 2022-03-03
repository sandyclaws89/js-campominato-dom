

const container = document.getElementById('output');
let playButton = document.getElementById('button');
let selectedElement = document.getElementById('select_difficult');
let arrValue = [100, 81, 49];

playButton.addEventListener('click', play);



function play(){

    /*PULISCO AD OGNI CLICK IL CONTAINER*/
    container.innerHTML='';

/*DICHIARO ARRAY PER NUMERI CASUALI*/
let bombArray = [];
let arrCell = [];

    for(let n=1; n<=16; n++){

    /*GENERO IL PRIMO NUMERO FUORI DAL CONTROLLO PERCHE' TANTO ALL'INIZIO L'ARRAY E' VUOTO*/
    let bombNumber = parseInt(Math.floor(Math.random() * (16 - 0) )+1);

    /*ORA GLI STO DICENDO DI ENTRARE NEL CICLO WHILE SOLO SE IL NUMERO RANDOM E' GIA INCLUSO NELL'Array, COSI FACENDO EVITO I NUMERI DOPPI*/
    while (bombArray.includes(bombNumber)){
          bombNumber = (Math.floor(Math.random() * (16 - 0) )+1);
    }
    /*ALLA FINE DEL CICLO POSSO AGGIUNGERE IL VALORE ALL'ARRAY*/
    bombArray.push(parseInt(bombNumber));

    }


    /*VALUE TIPO DI DIFFICOLTA' SELEZIONATA (0 , 1 , 2) */
    let diffValue = parseInt(selectedElement.value);
    
    /* VARIABILE DIFFICOLTA' SELEZIONATA NELL'ARRAY (NUMERO DI CELLE DA STAMPARE)*/
    let numCell = arrValue[diffValue];
    
    /* NUMERO DI CELLE PER LATO DEL CONTAINER */
    let cellsSide = Math.sqrt(numCell);

    let varElement;

    for (let i=1; i<=numCell; i++){

        
        arrCell.push(parseInt(i));

        if (bombArray[i-1] != arrCell[i]){
      /*VARIABILE/ELEMENTO DIV*/
      varElement = document.createElement(`div`);

      /*AGGIUNGO LA CLASSE ALLA VARIBILE/ELEMENTO*/
      varElement.classList.add('bomb');
      
      /*STAMPO DENTRO LA VARIABILE/ELEMENTO IL NUMERO DELLE CELLE QUINDI IL NUMERO DEL CONTATORE*/
      varElement.append(i);
         

     

      /* DIMENSIONO LE CELLE DIVIDENDOLE PER LA RADICE QUADRATA DEL NUMERO TOT DI ELEMENTI, COSI FACENDO TROVO QUANTI CE NE SONO IN UN LATO , FLEXO VARELEMENT COSI DA CENTRARE LA I*/ 
      varElement.style.display='flex';
      varElement.style.alignItems='center';
      varElement.style.justifyContent='center';
      varElement.style.width =`calc(100% / ${cellsSide})`;
      varElement.style.height =`calc(100% / ${cellsSide})`;
      /*FUNZIONE CHE FA COLORARE AL CLICK LE CASELLE*/
      varElement.addEventListener('click', changeColorBomb);
        
        
        } else {
                // console.log ('non ciao')
           
        //    } 
             /*VARIABILE/ELEMENTO DIV*/
        varElement = document.createElement(`div`);

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
    
        }


        
        function changeColor() {
            this.classList.add(`selected`);
        }
    

        function changeColorBomb(){
            this.classList.add(`bomb`);
        }
         
       
        /* SE IL NUMERO E' PRESENTE NELLA LISTA DEI NUMERI GENERATI CASUALMENTE E L'UTENTE CLICCA SU QUELLA CASELLA LA CASELLA DIVENTA ROSSA E LA PARTITA TERMINA*/

        // ASSEGNO I VALORI 

        /*SE L'UTENTE VINCE LA PARTITA FINISCE COMUNQUE IL GIOCO*/

        /*COMUNICARE IL PUNTEGGIO ALLA FINE DI OGNI PARTITA */
       

        /*BONUS:
        1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
        2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste*/
    }
        console.log(arrCell);
        console.log(bombArray);

        
}
