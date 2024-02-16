const turnOnOff = document.getElementById ( 'turnOnOff' );
// const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );


function isLampBroken(){
    return lamp.src.indexOf ( 'quebrada' ) > -1
}
function lampOn () {
    if ( !isLampBroken () ){
        lamp.src = './img/ligada.jpg';
    }
}
function lampOff () {
    if ( !isLampBroken () ){
        lamp.src = './img/desligada.jpg';
    }
}
function lampBroken(){
   if( !isLampBroken () ){
    lamp.src = './img/quebrada.jpg';
     turnOnOff.setAttribute('disabled', '');
   }
}

function lampOnhouver(){
    if (!isLampBroken () ){
        lamp.src = './img/ligada.jpg';
        if ( turnOnOff.textContent == 'Desligar' ){
            lampOn();
            turnOnOff.textContent = 'Ligar';
        }
    }
}

function lampOffonhouver(){
    if ( !isLampBroken () ){
        lamp.src = './img/desligada.jpg';
    }
}

function lampOnOff(){
    if( turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener ( 'click', lampOnOff );
// turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOnhouver );
lamp.addEventListener ( 'mouseleave', lampOffonhouver );
lamp.addEventListener ( 'dblclick', lampBroken );
