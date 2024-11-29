$(document).ready(function() {
  // MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // Por defecto es falso, así que no olvides habilitarlo

				duration: 300, // duración del efecto, en milisegundos
				easing: 'ease-in-out', // función de transición de CSS

				// La función "opener" debe devolver el elemento desde el que se ampliará el popup
				// y hacia el que se reducirá el popup
				// Por defecto, busca una etiqueta de imagen:
				opener: function(openerElement) {
				// openerElement es el elemento en el que se inicializó el popup, en este caso su etiqueta <a>
				// no es necesario agregar la opción "opener" si este código coincide con sus necesidades, es el predeterminado.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};

	var magnifVideo = function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
	};

	


	// Llamar a las funciones 
	magnifPopup();
	magnifVideo();
});