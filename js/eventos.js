function addNew(titulo,descripcion,imagen,valor){
    var divG=$("<div/>",{
        "class":"item col-xs-4 col-lg-4",
        "style": "padding: 5px;"
    })
    var divtc=$("<div/>",{
        "class":"thumbnail card",
        "style":" height: 700px;"
    })
    var divImg =$("<div/>",{
        "class":"img-event"
    })
    var img=$("<img/>",{
        "class":"group list-group-image img-fluid",
        "src": imagen,
        "style": "max-width: 250px; max-height: 250px; display:block; margin:auto; padding: 5px;",
        "alt":""
    })
    var divAc=$("<div/>",{
        "class":"caption card-body"
    })
   var title = $("<h4/>", {
      "class":"group card-title inner list-group-item-heading",
      html: titulo
    })
    var p = $("<p/>",{
      "class": "text-justify contenido card-body group inner list-group-item-text",
      html: descripcion
    })
    var div1 = $( "<div/>", {
      "class": "row"
    });
    var div2 = $( "<div/>", {
      "class": "col-xs-12 col-md-6"
    });
    var precio=$("<p/>",{
        "class":"lead",
        html: valor
    })
    var div22 = $( "<div/>", {
      "class": "col-xs-12 col-md-6"
    });
    var btn=$("<a/>",{
        "class":"btn btn-success",
        "href":"",
        html: "Inscribirse"
    })    
    img.appendTo(divImg);
    title.appendTo(divAc);
    p.appendTo(divAc);
    precio.appendTo(div2);
    btn.appendTo(div22);
    div2.appendTo(div1);
    div22.appendTo(div1);
    div1.appendTo(divAc);
    divImg.appendTo(divtc);
    divAc.appendTo(divtc);
    divtc.appendTo(divG)
    divG.appendTo("#products");
}


function loadNewsJson() {
   $.getJSON( "data/eventos.json", function( data ) {
    
      $.each( data, function( key, val ) {
        addNew(val.titulo, val.descripcion, val.imagen,val.valor)
      });
    
  });
}

$(document).ready(function(){
  loadNewsJson();
  $('#buscador').keyup(function(){
     var nombres = $('.contenido');
     var buscando = $(this).val();
     var item='';
     for( var i = 0; i < nombres.length; i++ ){
         item = $(nombres[i]).html().toLowerCase();
          for(var x = 0; x < item.length; x++ ){
              if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                  $(nombres[i]).parents('.item').show(); 
              }else{
                   $(nombres[i]).parents('.item').hide();
              }
          }
     }
  });
});