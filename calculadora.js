//constructor function - retorna objetos
//ela faz mt coisa automaticamente em comparaçao
// com a factory.
// sempre é preciso começar com letra maiuscula
// Molde 

function Calculadora(){

   const display = document.querySelector('.display');

  //metodo que inicia a calculadora
   this.inicia = ()=>this.clique();

   this.clique=()=>{
     document.addEventListener('click',(e)=>{
         const el = e.target;
         if(e.target.classList.contains('number'))this.botaoNodisplay(el);
         if(e.target.classList.contains('ac'))this.clearAll(el);
         //if(e.target.classList.contains('operator'))this.botaoNodisplay(el);
         if(e.target.classList.contains('del'))this.clearOne(el);
         if(e.target.classList.contains('equals'))this.realizaConta();

     })
  };
  
   this.botaoNodisplay =(el)=>
   display.value += el.innerText;
   
  
  this.clearAll =()=>
  display.value ='';


  this.clearOne =()=>
  display.value = display.value.slice(0,-1);
  
  this.realizaConta =()=>{

    try{
       const conta = eval(display.value);
       display.value = conta;
    }
    catch(e){
      alert('conta invalida');
      display.value ='';
      return
    }
  }

};

const calculadora = new Calculadora();
calculadora.inicia();


