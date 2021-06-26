$(function(){
    var altoImagen;
    var posicionActual = 0;
    altoImagen = $("#super-slider>img:first-child").css("height");
    var altoSlider = parseFloat(altoImagen)

    console.log(altoImagen);
    $("#super-slider").css("height",altoImagen);
    $("#super-slider>img").wrapAll("<div id='super-slider-contenedor'>");
    //wrapAll envuelve el o los objetos seleccionados
    $("#super-slider").append("<div id='super-slider-nav'>")
    $("#super-slider-nav").append("<div id='super-slider-nav-previous'>")
    $("#super-slider-nav").append("<div id='super-slider-nav-next'>")

    
    //Crear los caption
    $("#super-slider").append("<div id='content-caption'>");
    $("#content-caption").append("<div id='content-caption-title'>");
    $("#content-caption").append("<div id='content-caption-content'>");    
  
    actualizarCaptions();

    function actualizarCaptions(){
        $("#content-caption").fadeIn("slow");
        var titulo = $("#super-slider-contenedor img:first-child").attr("title");
        var personaje = $("#super-slider-contenedor img:first-child").attr("personaje");
        $("#content-caption-title").text(titulo)
        $("#content-caption-content").text(personaje)
    }

    $("#super-slider-nav-previous").click(retroceder);
    
    $("#super-slider-nav-next").click(avanzar);

    function retroceder(){
        $("#content-caption").fadeOut("slow");
        $("#super-slider-contenedor").prepend($("#super-slider-contenedor").find("img:last-child"));
        $("#super-slider-contenedor").css("top","-" + altoImagen);
         $("#super-slider-contenedor").animate({top:0}, 500,function(){
            actualizarCaptions();
        });
        posicionActual--;
        if(posicionActual==-1){
            posicionActual = totalimagenes-1;
        }
    }
    function avanzar(){
        $("#content-caption").fadeOut("slow");
         $("#super-slider-contenedor").animate({top:-altoSlider}, 500,function(){
            $(this).append($(this).find("img:first-child"));
            $(this).css("top",0);
            actualizarCaptions();
        }); 
        posicionActual++;
        if(posicionActual==totalimagenes+1){
            posicionActual = 0;
        }
    }


    //Generando bullets para navegación
    $("#super-slider").append("<div id='content-bullets'>");
    var totalimagenes = $("#super-slider-contenedor img").length;
    console.log("Total: " + totalimagenes);
    var posicion = 0;
    $("#super-slider-contenedor img").each(function(){
        var rutaImagen = $(this).attr("src");
        $("#content-bullets").append(
            "<div class='bullet' posicion='" + posicion + "'><div class='bullet-image'><img src='" + 
            rutaImagen + "'></div></div>");
        posicion++;    
    })

    $(".bullet").mouseenter(function(){
        //var ruta = $(this).attr("foto-origen");
        //console.log(ruta);
        $(".bullet-image").fadeOut("slow");
        $(this).find(".bullet-image").fadeIn("slow");
    })

    $(".bullet").click(function(){
        var posicion = $(this).attr("posicion");
        console.log("posicion " +posicion)
        console.log("posicionActual " +posicionActual)
        if(posicion>posicionActual){
            for(var i=0;i<=posicion-posicionActual+1;i++){
                avanzar();
            }
        }
        if(posicionActual>posicion){
            for(var i=0;i<=posicionActual-posicion;i++){
                retroceder();
            }
        }       
    });
    /*
    for(var i=1 ; i<=totalimagenes ; i++){
        $("#content-bullets").append("<div class='bullet'>");
    }
    */

    //Para que el banner sea responsive
    $(window).resize(function(){
        //El evento resize ocurre al cambiar de tamaño a la ventana
        altoImagen = $("#super-slider-contenedor>img:first-child").css("height");
        console.log(altoImagen);
        $("#super-slider").css("height",altoImagen);
        altoSlider = parseFloat(altoImagen);
    });


});