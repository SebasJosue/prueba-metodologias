'use strict'

function Student(nombre , correo , promedio){
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
}

Student.prototype.validarpromedio= function() {
    if (this.promedio > 90){
        return "aprobado";
    } else{
        return "aprobado";
    }
};  

Student.prototype.correo = function () {
    return this.correo.split("@")
    [0];
};

let student = new Student("Juan", "juan@gmail.com", 80);
alert (student.nombre); 
alert (student.correo); 
alert (student.promedio); ; 
alert (student.validarpromedio());