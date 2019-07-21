$(document).ready(function(){
    // codigo js que utiliza jquery
    configurarInicio();

    $('.myicono').click(function(e){
        $('#navbar ul').toggleClass('lista-sm');
    })
    function configurarInicio(){
        var urlPath=window.location.pathname;
        console.log(urlPath);
        $('nav a').each(function(){
            var href2= $(this).attr('href');
            var href ='/'+ href2;
            console.log(href);
            var indice= urlPath.lenght - href.length;
            if (urlPath==href){
                console.log('match');
                $(this).closest('li').addClass('active');
            }

        })
    }
}
)