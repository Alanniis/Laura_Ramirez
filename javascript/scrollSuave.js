$(document).ready(function(){

    //Mostrar y ocultar botón

    var btnVolverArriba = $('#btnVolverArriba');

    $(window).on('scroll',function(){

        var proyectosOffsetTop = $('#acercaDe').offset().top;

        if($(window).scrollTop() >= proyectosOffsetTop){ //Medimos si la distancia recorrida en el buscador es la misma que se tiene a la sección de proyectos

            btnVolverArriba.css('margin-right',0); 
        }else if( $(window).scrollTop() <= proyectosOffsetTop/2){
         
            btnVolverArriba.css('margin-right','-60px');
        }
    });


    //Movimiento suave de scroll para los demás items del menú principal
    // $('a.scroll-acerca').on('click',function(e){
    //     e.preventDefault();
    //     var seccionOT = $($(this).attr('href')).offset().top;
    //     $('html,body').stop().animate({scrollTop:seccionOT},1000);
    // });

    // $('a.scroll-experiencia').on('click',function(e){
    //     e.preventDefault();
    //     var seccionOT = $($(this).attr('href')).offset().top -122;
    //     $('html,body').stop().animate({scrollTop:seccionOT},1000);
    // });

    // $('a.scroll-proyecto').on('click',function(e){
    //     e.preventDefault();
    //     var seccionOT = $($(this).attr('href')).offset().top -68;
    //     $('html,body').stop().animate({scrollTop:seccionOT},1000);
    // });

    // $('a.scroll-tecnologia').on('click',function(e){
    //     e.preventDefault();
    //     var seccionOT = $($(this).attr('href')).offset().top -68;
    //     $('html,body').stop().animate({scrollTop:seccionOT},1000);
    // });

    // $('a.scroll-contacto').on('click',function(e){
    //     e.preventDefault();
    //     var seccionOT = $($(this).attr('href')).offset().top -68;
    //     $('html,body').stop().animate({scrollTop:seccionOT},1000);
    // });
});