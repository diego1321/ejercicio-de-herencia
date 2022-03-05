class Persona{
    static contadorPersonas = 0;
    
    constructor( nombre, apellido, edad,){
      this._nombre = nombre;
      this._apellido = apellido;
      this._edad = edad;
      this._idPersona = ++Persona.contadorPersonas;
    }
    get idPersona(){
     return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    datosCompletos(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad
    }
    toString(){
        return this.datosCompletos
    }
}


class Empleado extends Persona{
    static contadorEmpleados = 0;
    
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }
get idEmpleado(){
    return this._idEmpleado;
}
get sueldo(){
    return this._sueldo;
}
set sueldo(sueldo){
     this._sueldo;
}
datosCompletos(){
    return super.datosCompletos()+ ', ' + this._sueldo
}
}


class Cliente extends Persona{
    static contadorClientes = 0;
    
    constructor(nombre, apellido, edad, fechaRegistro ){
    super(nombre, apellido, edad)
    this._fechaRegistro = fechaRegistro;
    this._idCliente == ++Cliente.contadorClientes;
    this._fechaRegistro = new Date();
}
get idCliente(){
    return this._idCliente;
}
get fechaRegistro(){
    return this._fechaRegistro;
}
set fechaRegistro(fechaRegistro){
    this._fechaRegistro = fechaRegistro;
}
datosCompletos(){
    return this.datosCompletos()+ ', ' + this._idCliente + ', ' + this._fechaRegistro
}
}

let persona1 = new Persona('pepe', 'sanchez', 19);
console.log(persona1);


let empleado1 = new Empleado('carlos', 'suarez', 22, 5000);
console.log(empleado1);

let Cliente1 = new Cliente('jose', 'perez', 32 );
console.log(Cliente1);