
    // Clase Cancion

    function Cancion(){
    
        // Atributos
    
        this.id = null;
        this.titulo = null;
        this.artista = null;
        this.album = null;
        this.artista_id=null;
        this.num_reproducciones = 0;
        
        
    } 
    
    // Metodos publicos
    
    Cancion.prototype.getId = function() {
        return this.id;
    };
    
    Cancion.prototype.setId = function(id) {
        this.id=id;
    };  
    
    Cancion.prototype.getTitulo = function() {
        return this.titulo;
    };
    
    Cancion.prototype.setTitulo = function(titulo) {
        this.titulo=titulo;
    };
    
    Cancion.prototype.getArtista = function() {
        return this.artista;
    };
    
    Cancion.prototype.setArtista = function(artista) {
        this.artista=artista;
    }; 
    
    Cancion.prototype.getAlbum = function() {
        return this.album;
    };
    
    Cancion.prototype.setAlbum = function(album) {
        this.album=album;
    }; 
    
    Cancion.prototype.getNum_reproducciones = function() {
        return this.num_reproducciones;
    };
    
    Cancion.prototype.setNum_reproducciones = function(num_reproducciones) {
        this.num_reproducciones=num_reproducciones;
    }; 
    
    Cancion.prototype.getArtista_id = function() {
        return this.artista_id;
    };
    
    Cancion.prototype.setArtista_id = function(artista_id) {
        this.artista_id=artista_id;
    }; 


