
var assert = require("assert");

function EjerciciosObjetos(){
  this.ejercicio1 = function (_arr) {

    const nuevo ={
      inicio: 1,
      fin : 10,
      sumar: function (){
        var sum = 0;
        for(var i = this.inicio; i <= this.fin; i++){
          sum += i;
        }
        return sum;
      }
    }
    //console.log(nuevo.sumar());
    return nuevo.sumar();
  }

  this.ejercicio2 = function (nombre, edad, ocupacion, genero){
      function Persona (nombre, edad, ocupacion, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
        this.genero = genero;
        this.mensaje =  function (){
          if ((this.edad > 17) && (this.genero == "Femenino")){
            if ((this.ocupacion == "Web Developer") || (this.ocupacion == "Estudiante Laboratoria")){
            return "You are awesome";
            }else{
              return "Upsiii";
           }
         }else{
            return "Upsiii";
         }
       }
     }

    const nuevo = new Persona(nombre, edad, ocupacion, genero);
    return nuevo.mensaje();
    //console.log(tamar.mensaje());
  }

  this.ejercicio3 = function (propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6) {
    function Array (propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6){
      this.propiedad1 = propiedad1;
      this.propiedad2 = propiedad2;
      this.propiedad3 = propiedad3;
      this.propiedad4 = propiedad4;
      this.propiedad5 = propiedad5;
      this.propiedad6 = propiedad6;
    }

    function mostrarPropiedades(objeto){
      var resultado ="";
      for(var i in objeto){
        if (objeto.hasOwnProperty(i)){
          resultado += i +"-->" + objeto[i] + " ";
        }
      }
      return resultado;
    }
    /*
    const nuevoArray = {
      propiedad1: 6,
      propiedad2: 5,
      propiedad3: 4,
      propiedad4: 3,
      propiedad5: 2,
      propiedad6: 1
    } */

     const nuevoArray = new Array(propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6);
     return mostrarPropiedades(nuevoArray);
    //console.log(mostrarPropiedades(nuevoArray));
  }

  this.ejercicio4 = function (nombre, apellido, edad, genero, ciudad, pais) {
    function Persona(nombre, apellido, edad, genero, ciudad, pais){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.genero = genero;
      this.ciudad = ciudad;
      this.pais = pais;
      this.ficha = ficha;
    }

    function ficha(){
      return "Nombre : "+ this.nombre + " " + this.apellido + "\nEdad : " +this.edad + "\nPais: " +this.pais;
    }

    this.ficha = ficha;

   const blanca = new Persona(nombre, apellido, edad, genero, ciudad, pais);
   return blanca.ficha();
   //console.log(blanca.ficha());
  }
}
var ejercicios = new EjerciciosObjetos();


  // ********* PRUEBAS UNITARIAS ************

describe ("Ejercicios Objetos II", function(){
  describe("Ejercicio 1", function () {
    it("Prueba de [1,10]", function () {
      assert.equal(55, ejercicios.ejercicio1([1,10]));
    });
  /*  it("Prueba de 1 y 10", function () {
      assert.equal(55, ejercicios.ejercicio1([1,10]));
    }); */
  });

  describe("Ejercicio 2", function () {
    it("Prueba de ('Tamara', 22, 'Estudiante Laboratoria', 'Femenino')", function () {
      assert.equal("You are awesome", ejercicios.ejercicio2('Tamara', 22, 'Estudiante Laboratoria', 'Femenino'));
    });
   it("Prueba de ('Luisa', 29, 'Abogada', 'Femenino')", function () {
      assert.equal("Upsiii", ejercicios.ejercicio2('Luisa', 29, 'Abogada', 'Femenino'));
    });
   it("Prueba de ('Adrian', 20, 'Web Developer', 'Masculino')", function () {
      assert.equal("Upsiii", ejercicios.ejercicio2('Adrian', 20, 'Web Developer', 'Masculino'));
    });
  });

  describe("Ejercicio 3", function () {
    it("Prueba de [6,5,4,3,2,1]", function () {
      assert.deepEqual("propiedad1-->6 propiedad2-->5 propiedad3-->4 propiedad4-->3 propiedad5-->2 propiedad6-->1 ", ejercicios.ejercicio3(6,5,4,3,2,1));
    });
  });

  describe("Ejercicio 4", function () {
    it("Prueba de ('Blanca', 'Rios', 22, 'Femenino', 'Puebla', 'Mexico')", function () {
      assert.equal("Nombre : Blanca Rios" +"\nEdad : 22" +"\nPais: Mexico", ejercicios.ejercicio4("Blanca", "Rios", 22, "Femenino", "Puebla", "Mexico"));
    });
  });
});
