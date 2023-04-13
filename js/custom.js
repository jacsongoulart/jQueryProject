// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

   

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Promoção</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Promoção</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Promoção</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', 'red')
     
     $('.featured-item h4').click( function(){

        $(this).css({
           
            'color': 'red',
            'font-weight': '100',
        });

     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item b').on('blur', function(event){

        event.preventDefault();
        event.stopPropagation();

        alert('Produto esgotado');

     })
     
     
     
     







})
