const botonSi = document.getElementById("botonsi");
const botonNo = document.getElementById("botonno");
const audioNo = new Audio("sound/trompeta.mp3");
const imagenNo = document.getElementById("gatitotriste");
const audioPeo = new Audio("sound/peo.mp3");
const videoSi = document.getElementById("videogatito");
const textoSi = document.getElementById("textoSi");
const textoNo = document.getElementById("textoNo");


let intentos=0;
botonNo.addEventListener("click",()=>{
    audioNo.play();
    imagenNo.style.display="flex";
    
});
botonNo.addEventListener("mouseover", () => {
    const nuevoX = Math.random() * window.innerWidth * 0.7;
    const nuevoY = Math.random() * window.innerHeight * 0.7;
    
    botonNo.style.position = "absolute";
    botonNo.style.left = `${nuevoX}px`;
    botonNo.style.top = `${nuevoY}px`;
    intentos++;
    if(intentos==10){
        audioPeo.play();
        botonNo.style.display="none";
        botonSi.style.minHeight="500px";
        botonSi.style.fontSize="400px";
        botonSi.style.width="100%"
        textoNo.style.display="flex";
        textoNo.style.marginLeft="39%";
        textoNo.style.fontSize="40px";


    }  
});
botonSi.addEventListener("click", () => {
    botonNo.style.display = "none";
    botonSi.style.display = "none";
    videoSi.style.display = "flex";  
    textoSi.style.display = "block"; 
    textoSi.style.textAlign = "center";
    textoSi.style.margin = "0 auto";
    textoSi.style.width = "80%";     
    textoNo.style.display = "none";
    videoSi.play;                  
});