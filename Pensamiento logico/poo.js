class Celular{
    constructor(color, peso, tamanio, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamanio = tamanio;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    botonEncendido(){
        if(this.encendido == false){
            alert ("celular prendido");
            this.encendido == true;
        } else{
            alert("el celular ya esta apagado");
            this.encendido == false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular")
        }else{
            alert("el celular esta apagado");
        }
    }
    tomarFotos(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabar(){
        alert(`grabando video en: ${this.resolucionDeCamara}`)
    }  
    mobileInfo(){
        return`  
        color: <b>${this.color}</b></br>
        peso: <b>${this.peso}</b></br>
        tamanio: <b>${this.tamanio}</b></br>
        resolucion de video: <b>${this.resolucionDeCamara}</b></br>
        memoriaRam: <b>${this.memoriaRam}</b></br>
        `;      
        }  
}

class CelularAltaGama extends Celular{
    constructor(color, peso, tamanio, rdc, ram, rdce){
        super(color, peso, tamanio, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `resolucion de camara trasera: <b>${this.resolucionDeCamaraExtra}</b>`;
    }
}

// celular1 = new Celular("rojo", "150g", "5 pulgadas", "HD", "1GB");
// celular2 = new Celular("negro", "155g", "5.4 pulgadas", "full HD", "2GB");
// celular3 = new Celular("blanco", "15046g", "5.9 pulgadas", "full HD", "2GB");

// celular1.botonEncendido();
// celular1.tomarFotos();
// celular1.grabar();
// celular1.reiniciar();
// celular1.botonEncendido();

celular1 = new CelularAltaGama("red", "150g", "5 ", "4K", "3GB", "full HD");
celular2 = new CelularAltaGama("black", "155g", "5.4 ", "4K", "4GB", "HD");


document.write(`
${celular1.infoAltaGama()}</br></br>
${celular2.infoAltaGama()}</br>
`);








