var figura = [];
figura[0]="https://free4kwallpapers.com/uploads/originals/2015/12/01/jennifer-lawrence-katniss-everdeen-wallpaper.jpg";
figura[1]="https://s1.1zoom.me/b5050/128/Smile_Model_Brown_haired_Glance_Beautiful_Gray_572108_3840x2160.jpg";
figura[2]="https://s1.1zoom.me/b6555/764/Bokeh_Blonde_girl_Glance_Hair_568304_3840x2160.jpg";
figura[3]="https://i.pinimg.com/originals/ce/1b/3c/ce1b3ce005af039b1a9bc2ae639cd94c.jpg";
figura[4]="https://i.pinimg.com/originals/09/06/f3/0906f300489793f9b381cbc018ed78a7.jpg";
figura[5]="https://images.wallpapersden.com/image/download/kirsten-dunst-cute-pose_49133_3840x2160.jpg";
figura[6]="https://www.pixel4k.com/wp-content/uploads/2018/12/mila-kunis-2019-4k_1546277165.jpg";
figura[7]="https://i.pinimg.com/originals/dc/71/68/dc71680f8205bb31200a8db3c014910b.jpg";
figura[8]="https://images.hdqwalls.com/download/salma-hayek-evening-standarad-k7-3840x2160.jpg";
figura[9]="https://i.pinimg.com/originals/a8/54/eb/a854eb59e426d639d2a83c6f1a997f00.jpg";
figura[10]="https://filmschoolrejects.com/wp-content/uploads/2018/03/Captain-America-Civil-War-Black-Widow.jpg";
figura[11]="https://i.pinimg.com/originals/da/7d/69/da7d69dd989d0c9275e892c71e8518b8.jpg";
figura[12]="https://www.10wallpaper.com/wallpaper/3840x2160/1801/Hansel_Gretel_Witch_Hunters_4k_Movie_Poster_3840x2160.jpg";
figura[13]="https://screenbeauty.com/image/download/160446-karen-gillan-in-jumanji-3840-x-2160.jpg";
figura[14]="https://i.pinimg.com/originals/06/ee/1d/06ee1ddb36f8fb63198d85eae389bb03.jpg";
figura[15]="https://websimposio.com/wp-content/uploads/2020/02/xl5oCFLVMo4d4Pgxvrf8Jmc2IlA.jpg";
figura[16]="https://images.wallpapersden.com/image/download/halle-berry-smile-pic_46611_3840x2160.jpg";

var numeroImagenes = figura.length;
var contador = 0;
var puedeCargar = true;

$(window).scroll(function(){
    var altoPagina = parseFloat($("html,body").css("height"));
    if(puedeCargar == true){
        if(contador<numeroImagenes){
            if(window.scrollY>altoPagina-2000){
                agregarmas();
                contador++;
            }
        }
    }
})

function agregarmas(){
    /*
    fetch("subclientes.html")
            .then(function(response){
                return response.text();
            })
            .then(function(html){
                //console.log(html);
                $("#contenido-clientes").append(html);    
            })
    */
    puedeCargar = false;
    $("#contenido-clientes").append(
        "<img src='" + figura[contador]  + "' class='img-fluid'>"
    )
    $("#loading").css("display","flex");
    var imgTemp = new Image();
    imgTemp.src = $("#contenido-clientes img:last-child").attr("src");
    imgTemp.onload = function(){
        $("#loading").css("display","none");
         console.log("ya cargo!");
        puedeCargar = true; 
    }
            
}