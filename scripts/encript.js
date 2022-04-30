
let entrada, salida; 

let leerDatos = ()=>{
    entrada = document.getElementById("entrada");
    salida = document.getElementById("salida");
}

let encriptador = (texto)=>{
let encript =[];
for(let i = 0; i<texto.length;i++){
    if(texto[i] == "e") 
    encript[i] = "enter";
    else if(texto[i] == "i")
    encript[i] = "imes"; 
    else if(texto[i] == "a")
    encript[i] = "ai"; 
    else if(texto[i] == "o")
    encript[i] = "ober"; 
   else if(texto[i] == "u") 
    encript[i] = "ufat";
    else encript[i] = texto[i];
    }
    return encript.join("");
}
let desencriptador = (texto="")=>{
  while(texto.includes("imes") || texto.includes("enter") || texto.includes("ai") || texto.includes("ober") || texto.includes("ufat")){
    texto= texto.replace("imes","i")
  texto=  texto.replace("enter","e")
  texto=  texto.replace("ai","a")
  texto=  texto.replace("ober","o")
  texto=  texto.replace("ufat","u");
  
}
return texto;
}

let encriptar = ()=>{
  document.getElementById('salida').style.backgroundImage = "none";
    leerDatos();
  salida.value =  encriptador(entrada.value);
}
let desencriptar = ()=>{
  document.getElementById('salida').style.backgroundImage = "none";
    leerDatos();
    salida.value = desencriptador(entrada.value);
}
let btnEncriptar = document.getElementById("btn-encript");
let btnDesencript = document.getElementById("btn-desencript");



btnEncriptar.onclick = encriptar; 
btnDesencript.onclick = desencriptar; 