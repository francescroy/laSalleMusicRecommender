

    // Clase Artista

    function Artista(){
    
        // Atributos
    
        this.id = null;
        this.num_reproducciones = 0;
        
        
    } 
    
    // Metodos publicos
    
    Artista.prototype.getId = function() {
        return this.id;
    };
    
    Artista.prototype.setId = function(id) {
        this.id=id;
    };  
    
    Artista.prototype.getNum_reproducciones = function() {
        return this.num_reproducciones;
    };
    
    Artista.prototype.setNum_reproducciones = function(num_reproducciones) {
        this.num_reproducciones=num_reproducciones;
    }; 
    
    Artista.prototype.aumentaReproducciones = function(num) {
        this.num_reproducciones= this.num_reproducciones + num; 
    }; 
    

