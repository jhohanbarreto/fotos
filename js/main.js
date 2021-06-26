/*
$(document).ready(function(){
})
*/
$(function(){
    //Con $ se selecciona
    $("#logo-text").mouseover(function(){
        $("body").css("font-size","20px");
        $("#main-banner figcaption").css("background-color","#ffcc00")
                .css("color","#000000")
                .css("font-style","italic")
                .css("border-radius","0");
    });
    $("#logo-text").mouseout(function(){
        $("body").css("font-size","16px");
    });

    $("#empresa").mouseenter(function(){
        $("#empresa .row").css("flex-direction","row-reverse");
    })
    $("#empresa").mouseleave(function(){
        $("#empresa .row").css("flex-direction","row");
    })
    /*
    $("#mensaje h2 span").click(function(){
        $("#mensaje h2 span").text("Julio César");
    })
    */
    $("#mensaje h2 span").click(function(){
        $(this).text("Julio César").css("font-weight","900");
        //this hace referencia al objeto que recibe el evento
    })
    $("#mensaje").mouseleave(function(){
        $("#mensaje h2 span").text("Vine, ví y vencí").css("font-weight","100");
    }) 
    $("#noticias").mouseenter(function(){
        $(this).find("h2").html("<strong>Las últimas</strong><br>Novedades");
        $("#noticias p").css("border","solid 1px #aaaaaa").css("padding","10px");
    });
    $("#noticias").mouseleave(function(){
        $(this).find("h2").html("Noticias");
        $("#noticias p").css("border","none").css("padding","0");
    })
    $("#eventos h2").click(function(){
        var tmensaje = $(this).text();
        if(tmensaje == "Eventos"){
            $(this).text("Conferencias")
        }else{
            $(this).text("Eventos")
        }
    })

    $("#noticias article").prepend("<small>Lea...</small>");
    //Agrega contenido al inicio del objeto seleccionado

    $("#noticias article").append("<small>Recomendación del Editor</small>");

    $("#galeria figure").append("<figcaption>")
    
    $("#galeria figure").mouseenter(function(){
        //$(this).find("figcaption").stop().show("slow");
        //$(this).find("figcaption").stop().fadeIn("slow");
        var nombre = $(this).find("img").attr("title");
        var ruta = $(this).find("img").attr("src");
        console.log(nombre);
        $(this).find("figcaption").stop().slideDown("slow",function(){
            $(this).html("<i class='fas fa-search-plus'></i><h4>" + nombre + "</h4>");
            $(this).find("i").click(function(){
                $("body").append("<div id='fondo-oscuro'>");
                $("#fondo-oscuro")
                            .append("<div class='contenedor-foto'><i class='fas fa-times'></i><img src='" 
                            + ruta + "'></div>")
                            .append("<div class='nombre-foto'>" + nombre + "</div>")
                            .click(function(){
                            $(this).remove(); 
                            })
            })
        });
        
        $(this).find("figcaption").css("display","flex");
    })
    $("#galeria figure").mouseleave(function(){
        //$(this).find("figcaption").stop().hide("slow");
        //$(this).find("figcaption").stop().fadeOut("slow");
        $(this).find("figcaption").stop().slideUp("slow");
    })

    //$(".menu-main").append("<li><a href='#'>Hola</a></li>");
    $("section").each(function(){
        var titulomenu = $(this).find("h2").text();
        var idseccion = $(this).attr("id");
        console.log(titulomenu);
        $(".menu-main").append("<li><a href='#" + idseccion +  "'>" + titulomenu  + "</a></li>");
    })


    $("#irarriba").click(function(e){
        e.preventDefault();//Elimina el comportamiento por defecto del hipervínculo
        console.log("Hola");
        //El método animate implementa animciones de una o varias propiedades de un objeto

        console.log(parseFloat($("html, body").css("height")));

        var altopagina = parseFloat($("html, body").css("height"));
        var tiempo = altopagina / 3; 
        $("html, body").animate({"scrollTop":0},tiempo); // slow  ó fast
    })

    $(window).scroll(function(){
        //Este evento ocurre cuando el usuario scrollea

        // document.title = window.scrollY;

        if(window.scrollY > 200){
            //window.scrollY obtiene el valor de scroll en vertical
            $("#irarriba").fadeIn("fast");
        }
        else{
            $("#irarriba").fadeOut("fast");
        }
    })

    $(".menu-main li a").click(function(e){
        e.preventDefault();//Elimina el comportamiento por defecto del hipervínculo
        var destino = $(this).attr("href");
        var posicionSeccionY = $(destino).offset().top;
        //La propiedad offset().top permite obtener el valor de la distancia del objeto
        //al inicio de la página
        console.log(posicionSeccionY);
        var distancia;
        var posicion = $("html, body").scrollTop(); 
         distancia = Math.abs(posicionSeccionY - posicion); 
        var tiempo = distancia/3; 
         $("html, body").animate({"scrollTop": posicionSeccionY}, tiempo); 
    })
    $("#clientes").click(function(e){
        e.preventDefault();
        fetch("clientes.html")
            .then(function(response){
                return response.text();
            })
            .then(function(html){
                //console.log(html);
                $("main").html(html);    
            });
    });

    //Llenar de datos area del Slider
    fetch("json/vengadores.json")
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            //console.log(datos);
            $(datos).each(function(index,value){
                console.log(index);
                console.log(value.titulo);
                var imagenBanner = "<img src='" +
                    value.foto +  "' title='" + 
                    value.titulo + "' personaje='" + 
                    value.personaje +  "'>";
                $("#super-slider").append(imagenBanner);    
            })
            var url = "js/super-slider.js";
            $.getScript(url);            
        });

    //Llenar de datos area del Slider

    fetch("http://pix.pe/servicioandroid/servicioproductostodos.php")
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        //console.log(datos);
            

        $(datos).each(function(index,value){
            var precio = parseFloat(value.precio);
            var preciodec = precio.toFixed(2);
            var fila = "<tr imagengrande='" + value.imagengrande  
                + "' stock='" + value.unidadesenexistencia +  "' >";
            fila += "<td><h4>" + value.nombre + "</h4>" +
                "<p>" + value.detalle + "</p></td>";
            fila += "<td>" + preciodec + "</td>";
            fila += "<td><img src='http://pix.pe/servicioandroid/" +
                     value.imagenchica + "' class='img-circulo'></td>";
            fila += "<tr>";
            $("#tbody-productos").append(fila);    
        })
        $("#tbody-productos tr").click(function(){
            $("#tbody-productos tr").removeClass("fila-seleccionada");
            $(this).addClass("fila-seleccionada");
            var imagengrande = $(this).attr("imagengrande");
            var stock = $(this).attr("stock");
            var nombre = $(this).find("td:first-child h4").text();
            var detalle = $(this).find("td:first-child p").text();
            var precio = $(this).find("td:nth-child(2)").text();

            var contenidoDetalle = "<img src='http://pix.pe/servicioandroid/" 
                + imagengrande + "' class=''>";
            contenidoDetalle += "<h3>" + nombre +"</h3>";
            contenidoDetalle += "<p>" + detalle +"</p>";
            contenidoDetalle += "<p>S/. " + precio +"</p>";
            contenidoDetalle += "<p>Stock: " + stock +"</p>";
            $("#detalle").html(contenidoDetalle);
        })
    });

    
})