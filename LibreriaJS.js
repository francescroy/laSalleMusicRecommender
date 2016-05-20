
    // Clase MusicRecommender


    function MusicRecommender(){
    
        // Atributos
    
        this.acces_token = null;
        
        this.llista_cancons = [];
        
        this.id_llista_actual = null;
        
    } 
    
    
 
    
    // Metodos publicos
    
    MusicRecommender.prototype.getAcces_token = function() {
        return this.acces_token;
    };
    
    MusicRecommender.prototype.setAcces_token = function(acces_token) {
        this.acces_token=acces_token;
    };
    
    MusicRecommender.prototype.getId_llista_actual = function() {
        return this.id_llista_actual;
    };
    
    MusicRecommender.prototype.setId_llista_actual = function(id_llista_actual) {
        this.id_llista_actual=id_llista_actual;
    };
    
    MusicRecommender.prototype.getLlista_cancons = function(){
        return this.llista_cancons;
    };
    
    MusicRecommender.prototype.setLlista_cancons = function(llista_cancons){
        this.llista_cancons=llista_cancons;
    };
    
    MusicRecommender.prototype.newReleases = function() {
        
        var xhr = new XMLHttpRequest();
        
        xhr.open("GET", "https://api.spotify.com/v1/browse/new-releases", false);
                
        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);
                                                       
        xhr.send();

        return JSON.parse(xhr.responseText);
        
    };
    
    MusicRecommender.prototype.pintaAlbums = function(response) {
        
        var index;
        
            for(index=0;index<response.albums.items.length;index++){
    
                    var recuadre = document.createElement('div');
    
                    recuadre.setAttribute("name","borrar");
        
                    recuadre.setAttribute("class","recuadre_albums");
        
                    var info = document.createElement('p');
        
                    info.innerHTML="Album: "+response.albums.items[index].name;
        
                    info.setAttribute("class","info_albums"); 
        
                    var imagen = document.createElement('img');
                    
                    if(response.albums.items[index].images.length!==0){
        
                    imagen.setAttribute("src",response.albums.items[index].images[0].url);
        
                    }
        
                    imagen.setAttribute("class","img_albums");
        
                    var boton = document.createElement('button');
        
        
                    boton.innerHTML="Detalles";
                    boton.setAttribute("onclick","funcio_mes_info(\""+response.albums.items[index].id+"\")");
                    boton.setAttribute("id",response.albums.items[index].id);
                    boton.setAttribute("class","btn2 boto_1_albums");
                    
        
                    var boton2 = document.createElement('button');
        
                    boton2.innerHTML="Canciones del album";
                    boton2.setAttribute("class","btn2 boto_2_albums");
                    boton2.setAttribute("onclick","funcio_cancons(\""+response.albums.items[index].id+"\")");
                    boton2.setAttribute("id",response.albums.items[index].id+"_2");
        
        
        
                    recuadre.appendChild(imagen);
                    recuadre.appendChild(info);
                    recuadre.appendChild(boton); 
                    recuadre.appendChild(boton2);
                    document.body.appendChild(recuadre);
    
        }
    
        
        
        
        
    };
    
    MusicRecommender.prototype.albumInfo = function(id) {
       
        var xhr = new XMLHttpRequest();
        
        xhr.open("GET", "https://api.spotify.com/v1/albums/"+id, false);
                
        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);
                                                       
        xhr.send();

        return JSON.parse(xhr.responseText);
       
       
    };
    
    MusicRecommender.prototype.albumTracks = function(id) {
       
        var xhr = new XMLHttpRequest();
        
        xhr.open("GET", "https://api.spotify.com/v1/albums/"+id+"/tracks", false);
                
        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);
                                                       
        xhr.send();

        return JSON.parse(xhr.responseText);
       
       
    };
    
    MusicRecommender.prototype.searchAlbums = function(nom) {
       
        var xhr = new XMLHttpRequest();
        
        var nom_formatejat = nom.replace(" ", "+");
        
        xhr.open("GET", "https://api.spotify.com/v1/search?q="+nom_formatejat+"&type=album", false);
                
        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);
                                                       
        xhr.send();
        
        return JSON.parse(xhr.responseText);
       
       
    };
    
    MusicRecommender.prototype.pintaCancons = function(response){
        
        var index;
        
        for(index=0;index<response.tracks.items.length;index++){
    
        var recuadre = document.createElement('div');
        
        recuadre.setAttribute("name","borrar");
        
        recuadre.setAttribute("class","style_canco");
        
        var audio = document.createElement('audio');
        
        audio.setAttribute("controls","controls");
        
        audio.setAttribute("class","audio_canco");
        
        audio.setAttribute("onplay","funcio_reproduccio(\""+response.tracks.items[index].id+"\")");
        
        var source = document.createElement('source');
        
        source.setAttribute("src",response.tracks.items[index].preview_url);
        
        audio.appendChild(source);
        
        var info = document.createElement('p');
        
        info.innerHTML="Cancion: "+ response.tracks.items[index].name;
            
        info.setAttribute("class","info_canco"); 
            
        var info2 = document.createElement('p');
        
        info2.setAttribute("class","info_canco"); 
        
        info2.innerHTML="Artista: "+ response.tracks.items[index].artists[0].name;
        
        var info3 = document.createElement('p');
        
        info3.setAttribute("class","info_canco info_3");     
         
        info3.innerHTML="Album: "+response.tracks.items[index].album.name;    
            
        var imagen = document.createElement('img');
        
        if(response.tracks.items[index].album.images.length!==0){
        
        imagen.setAttribute("src",response.tracks.items[index].album.images[0].url);
        
        }
        
        imagen.setAttribute("class","imatge_canco");
        
        
        var boton = document.createElement('button');
        
        boton.innerHTML="Guarda en playlist";
        boton.setAttribute("class","btn2 boto_canco");//!!
        boton.setAttribute("onclick","funcio_afegir_a_playlist(\""+response.tracks.items[index].id+"\")");
        boton.setAttribute("id",response.tracks.items[index].id);
        
        
        recuadre.appendChild(boton);
        recuadre.appendChild(imagen);
        recuadre.appendChild(info);
        recuadre.appendChild(info2);
        recuadre.appendChild(info3);
        recuadre.appendChild(audio); 
        
        document.body.appendChild(recuadre);
    
        }
        
        
        
        
        
    };
    
    MusicRecommender.prototype.searchCancons = function(nom){
        
        var xhr = new XMLHttpRequest();
        
        var nom_formatejat = nom.replace(" ", "+");
        
        xhr.open("GET", "https://api.spotify.com/v1/search?q="+nom_formatejat+"&type=track", false);
                
        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);
                                                       
        xhr.send();

        return JSON.parse(xhr.responseText);
        
        
        
        
    };
     
    MusicRecommender.prototype.searchArtists = function(nom){
        
        var xhr = new XMLHttpRequest();
        
        var nom_formatejat = nom.replace(" ", "+");
        
        xhr.open("GET", "https://api.spotify.com/v1/search?q="+nom_formatejat+"&type=artist", false);
                
        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);
                                                       
        xhr.send();

        return JSON.parse(xhr.responseText);
        
        
        
        
    }; 
    
    MusicRecommender.prototype.pintaArtists = function(response) {
        
        
        var index;
        
            for(index=0;index<response.artists.items.length;index++){
    
                    var recuadre = document.createElement('div');
    
                    recuadre.setAttribute("name","borrar");
        
                    recuadre.setAttribute("class","recuadre_albums");
        
                    var info = document.createElement('p');
        
                    info.innerHTML="Artista: "+response.artists.items[index].name;
        
                    info.setAttribute("class","info_albums"); 
        
                    var imagen = document.createElement('img');
        
                    if(response.artists.items[index].images.length!==0){
        
                    imagen.setAttribute("src",response.artists.items[index].images[0].url);
        
                    }   
        
                    imagen.setAttribute("class","img_albums");
        
                    var boton = document.createElement('button');
        
        
                    boton.innerHTML="Albums";
                    boton.setAttribute("onclick","funcio_albums(\""+response.artists.items[index].id+"\")");
                    boton.setAttribute("id",response.artists.items[index].id);
                    boton.setAttribute("class","btn2 boto_1_albums");
                    
        
                    recuadre.appendChild(imagen);
                    recuadre.appendChild(info);
                    recuadre.appendChild(boton); 
                    document.body.appendChild(recuadre);
    
        }
    
        
        
        
        
    };
    
    MusicRecommender.prototype.getArtistAlbums = function(id){
        
        var xhr = new XMLHttpRequest();
        
        xhr.open("GET", "https://api.spotify.com/v1/artists/"+id+"/albums", false);
                                                       
        xhr.send();

        return JSON.parse(xhr.responseText);
        
        
    };
    
    MusicRecommender.prototype.pintaAlbumsArtista = function(response) {
        
        var index;
        
            for(index=0;index<response.items.length;index++){
    
                    var recuadre = document.createElement('div');
    
                    recuadre.setAttribute("name","borrar");
        
                    recuadre.setAttribute("class","recuadre_albums");
        
                    var info = document.createElement('p');
        
                    info.innerHTML="Album: "+response.items[index].name;
        
                    info.setAttribute("class","info_albums"); 
        
                    var imagen = document.createElement('img');
                    
                    if(response.items[index].images.length!==0){
        
                    imagen.setAttribute("src",response.items[index].images[0].url);
        
                    }
        
                    imagen.setAttribute("class","img_albums");
        
                    var boton = document.createElement('button');
        
        
                    boton.innerHTML="Detalles";
                    boton.setAttribute("onclick","funcio_mes_info(\""+response.items[index].id+"\")");
                    boton.setAttribute("id",response.items[index].id);
                    boton.setAttribute("class","btn2 boto_1_albums");
                    
        
                    var boton2 = document.createElement('button');
        
                    boton2.innerHTML="Canciones del album";
                    boton2.setAttribute("class","btn2 boto_2_albums");
                    boton2.setAttribute("onclick","funcio_cancons(\""+response.items[index].id+"\")");
                    boton2.setAttribute("id",response.items[index].id+"_2");
        
        
        
                    recuadre.appendChild(imagen);
                    recuadre.appendChild(info);
                    recuadre.appendChild(boton); 
                    recuadre.appendChild(boton2);
                    document.body.appendChild(recuadre);
    
        }
    
        
        
        
        
    };
    
    MusicRecommender.prototype.getTrack = function(id) {
       
        var xhr = new XMLHttpRequest();
        
        xhr.open("GET", "https://api.spotify.com/v1/tracks/"+id, false);
                
        xhr.send();

        return JSON.parse(xhr.responseText);
       
       
    };
    
    MusicRecommender.prototype.pintaCanco = function (canco) {
        
        var response = this.getTrack(canco.getId());
        
        var recuadre = document.createElement('div');
        
        recuadre.setAttribute("name","borrar");
        
        recuadre.setAttribute("class","style_canco");
        
        var audio = document.createElement('audio');
        
        audio.setAttribute("controls","controls");
        
        audio.setAttribute("class","audio_canco");
        
        audio.setAttribute("onplay","funcio_reproduccio(\""+canco.getId()+"\")");
        
        var source = document.createElement('source');
        
        source.setAttribute("src",response.preview_url);
        
        audio.appendChild(source);
        
        var info = document.createElement('p');
        
        info.innerHTML="Cancion: "+ response.name;
            
        info.setAttribute("class","info_canco"); 
            
        var info2 = document.createElement('p');
        
        info2.setAttribute("class","info_canco"); 
        
        info2.innerHTML="Artista: "+ response.artists[0].name;
        
        var info3 = document.createElement('p');
        
        info3.setAttribute("class","info_canco info_3");     
         
        info3.innerHTML="Album: "+response.album.name;     
            
        var imagen = document.createElement('img');
        
        if(response.album.images.length!==0){
        
        imagen.setAttribute("src",response.album.images[0].url);
        
        }
        
        imagen.setAttribute("class","imatge_canco");
       
        var boton = document.createElement('button');
        
        boton.innerHTML="Guarda en playlist";
        boton.setAttribute("class","btn2 boto_canco");//!!
        boton.setAttribute("onclick","funcio_afegir_a_playlist(\""+response.id+"\")");
        boton.setAttribute("id",response.id);
        
        
        recuadre.appendChild(boton);
        recuadre.appendChild(imagen);
        recuadre.appendChild(info);
        recuadre.appendChild(info2);
        recuadre.appendChild(info3);
        recuadre.appendChild(audio); 
        
        document.body.appendChild(recuadre);
        
    };
    
    MusicRecommender.prototype.artistasRelacionados = function (id_artista){
        
        
        var xhr = new XMLHttpRequest();
        
        xhr.open("GET", "https://api.spotify.com/v1/artists/"+id_artista+"/related-artists", false);
                
        xhr.send();

        return JSON.parse(xhr.responseText);
        
        
    };
    
    MusicRecommender.prototype.pintaArtists2 = function(response) {
        
        
        var index;
        
            for(index=0;index<response.artists.length;index++){
    
                    var recuadre = document.createElement('div');
    
                    recuadre.setAttribute("name","borrar");
        
                    recuadre.setAttribute("class","recuadre_albums");
        
                    var info = document.createElement('p');
        
                    info.innerHTML="Artista: "+response.artists[index].name;
        
                    info.setAttribute("class","info_albums"); 
        
                    var imagen = document.createElement('img');
        
                    if(response.artists[index].images.length!==0){
        
                    imagen.setAttribute("src",response.artists[index].images[0].url);
        
                    }   
        
                    imagen.setAttribute("class","img_albums");
        
                    var boton = document.createElement('button');
        
        
                    boton.innerHTML="Albums";
                    boton.setAttribute("onclick","funcio_albums(\""+response.artists[index].id+"\")");
                    boton.setAttribute("id",response.artists[index].id);
                    boton.setAttribute("class","btn2 boto_1_albums");
                    
        
                    recuadre.appendChild(imagen);
                    recuadre.appendChild(info);
                    recuadre.appendChild(boton); 
                    document.body.appendChild(recuadre);
    
        }
    
        
        
        
        
    };

    MusicRecommender.prototype.recuperaIdUsuari = function() {

        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api.spotify.com/v1/me", false);

        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);

        xhr.send();

        return (JSON.parse(xhr.responseText));


    };
    
    MusicRecommender.prototype.creaPlaylist = function(user_id,nom_playlist) {

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "https://api.spotify.com/v1/users/"+user_id+"/playlists", false);

        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);
        
        xhr.setRequestHeader("Content-Type","application/json");
        
        xhr.send(JSON.stringify({name:nom_playlist}));

        return (JSON.parse(xhr.responseText));


    };
    
    MusicRecommender.prototype.retornaPlaylists = function(user_id) {

        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api.spotify.com/v1/me/playlists", false);

        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);
        
        xhr.send();

        return (JSON.parse(xhr.responseText));


    };
    
    MusicRecommender.prototype.pintaPlaylists = function(response) {

        
        var recuadre_principal = document.createElement('div');
    
        recuadre_principal.setAttribute("name","borrar");

        recuadre_principal.setAttribute("class","recuadre_albums");//!!


        var input_principal = document.createElement('input');

        input_principal.setAttribute("type","text");
        input_principal.setAttribute("class","input_playlist");
        input_principal.setAttribute("id","nom_playlist_a_crear"); 
            

        var boton_principal = document.createElement('button');

        boton_principal.innerHTML="Crear playlist";
        boton_principal.setAttribute("class","btn2 boto_1_albums");//!!
        boton_principal.setAttribute("onclick","funcio_crear_playlist()");
        

        recuadre_principal.appendChild(input_principal); 
        recuadre_principal.appendChild(boton_principal); 
        document.body.appendChild(recuadre_principal);
        
        
        
        
        

        var index;
        
            for(index=0;index<response.items.length;index++){
    
                    var recuadre = document.createElement('div');
    
                    recuadre.setAttribute("name","borrar");
        
                    recuadre.setAttribute("class","recuadre_albums");//!!
        
                    var info = document.createElement('p');
        
                    info.innerHTML="Nombre: "+response.items[index].name;
        
                    info.setAttribute("class","info_albums");//!! 
        
        
        
                    var boton = document.createElement('button');
        
        
                    boton.innerHTML="Canciones";
                    boton.setAttribute("class","btn2 boto_1_albums");//!!
                    boton.setAttribute("onclick","funcio_canciones_playlist(\""+response.items[index].id+"\")");
                    boton.setAttribute("id",response.items[index].id); 
        
                    var boton2 = document.createElement('button');
        
                    boton2.innerHTML="Playlist actual";
                    boton2.setAttribute("class","btn2 boto_2_albums");//!!
                    boton2.setAttribute("onclick","funcio_playlist_per_defecte(\""+response.items[index].id+"\")");
                    boton2.setAttribute("id",response.items[index].id+"_2");
        
                    
                    recuadre.appendChild(info);
                    recuadre.appendChild(boton); 
                    recuadre.appendChild(boton2);
                    document.body.appendChild(recuadre);
    
        }

    };
    
    MusicRecommender.prototype.inserirCancion = function(id_cancion) {

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "https://api.spotify.com/v1/users/"+this.recuperaIdUsuari().id+"/playlists/"+this.id_llista_actual+"/tracks?uris=spotify%3Atrack%3A"+id_cancion, false);

        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);
        
        xhr.setRequestHeader("Content-Type","application/json");
        
        xhr.send();

        return (JSON.parse(xhr.responseText));


    };
    
    MusicRecommender.prototype.retornaCanconsPlaylist = function(id_playlist){
        
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api.spotify.com/v1/users/"+this.recuperaIdUsuari().id+"/playlists/"+id_playlist+"/tracks", false);

        xhr.setRequestHeader("Authorization","Bearer "+ this.acces_token);
        
        xhr.send();

        return (JSON.parse(xhr.responseText));

        
        
    };
    
    MusicRecommender.prototype.pintaCanconsPlaylist = function(response){
        
        var index;
        
        for(index=0;index<response.items.length;index++){
    
            var recuadre = document.createElement('div');

            recuadre.setAttribute("name","borrar");

            recuadre.setAttribute("class","style_canco");

            var audio = document.createElement('audio');

            audio.setAttribute("controls","controls");

            audio.setAttribute("class","audio_canco");

            audio.setAttribute("onplay","funcio_reproduccio(\""+response.items[index].track.id+"\")");

            var source = document.createElement('source');

            source.setAttribute("src",response.items[index].track.preview_url);

            audio.appendChild(source);

            var info = document.createElement('p');

            info.innerHTML="Cancion: "+ response.items[index].track.name;

            info.setAttribute("class","info_canco"); 

            var info2 = document.createElement('p');

            info2.setAttribute("class","info_canco"); 

            info2.innerHTML="Artista: "+ response.items[index].track.artists[0].name;

            var info3 = document.createElement('p');

            info3.setAttribute("class","info_canco info_3");     

            info3.innerHTML="Album: "+response.items[index].track.album.name;    

            var imagen = document.createElement('img');

            if(response.items[index].track.album.images.length!==0){

                imagen.setAttribute("src",response.items[index].track.album.images[0].url);

            }

            imagen.setAttribute("class","imatge_canco");


            
            recuadre.appendChild(imagen);
            recuadre.appendChild(info);
            recuadre.appendChild(info2);
            recuadre.appendChild(info3);
            recuadre.appendChild(audio); 

            document.body.appendChild(recuadre);
    
        }
        
        
        
        
        
    };



