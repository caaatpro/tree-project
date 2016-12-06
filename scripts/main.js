var trunks_time = 1,
    coma_time = 2,
    poligon,
    delay = 0;

jQuery(function($) {
  $('#tree').addClass('load');

  var trunks = $('.trunk');

  for (var i = 0; i < trunks.length; i++) {
    poligon = $(trunks[i]).find('polygon, path');

    delay = trunks_time/poligon.length;

    for (var j = 0; j < poligon.length; j++) {
      $(poligon[j]).css('transition-delay', j*delay+'s');
    }
  }

  var coma = $('.coma');

  for (var ii = 0; ii < coma.length; ii++) {
    poligon = $(coma[ii]).find('polygon, path');

    delay = coma_time/poligon.length;

    for (var jj = 0; jj < poligon.length; jj++) {
      $(poligon[jj]).css('transition-delay', jj*delay+1+'s');
    }
  }
});
