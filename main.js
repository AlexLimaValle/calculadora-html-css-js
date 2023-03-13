const dispositivo_pantalla = document.querySelector(".dispositivo__calculo");
const dispositivo__teclas = document.querySelector(".dispositivo__teclas");
const caracteres = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','c','.']

let numeros = [];
const clickear = (e)=>{
    const {target} = e;
    if(caracteres.includes(target.innerHTML)){
        numeros = [...numeros,target.innerHTML];
        dispositivo_pantalla.innerHTML = `${desparramar(numeros)}`
        if(target.innerHTML == 'c'){
            numeros = []
            dispositivo_pantalla.innerHTML = '0'
        }
    }else if(target.innerHTML == '='){
        dispositivo_pantalla.innerHTML = `${eval(numeros.join(""))}`
        numeros = [eval(numeros.join("")).toString()];
    }
}

const desparramar = (lista)=>{
    let n = ''
    for(let i=0;i<lista.length;i++){
        n += lista[i];
    }
    return n;
}


dispositivo__teclas.addEventListener("click",clickear);


