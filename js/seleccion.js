var asientos = $('#asientos');
var contador = 0;
var precioUnidad = 5.50;
var session = $('#session');
var reservas = JSON.parse(localStorage.getItem('reservas')) || [];
var reservita = JSON.parse(localStorage.getItem("nuevaReserva"));
var asientosReservados = [];

$(document).ready(function () {
    $('#modal2').modal();
    $('#modal2').modal('open');
    cargaAsientosOcupados();
    $('[data-toggle="tooltip"]').tooltip();
    $('.seleccionable').click(function () {
        if ($(this).children().children().first().css('fill') == "rgb(255, 0, 0)") {
            alert("Lo siento, asiento ocupado.Escoja otro por favor.");
        } else {
            if ($(this).children().children().first().css('fill') == "rgb(255, 255, 255)") {
                $(this).children().children().attr("style", "fill:green;stroke-width:1;stroke:rgb(0,0,0)");
                contador++;
                var assi = 'asiento'+contador;
                asientosReservados.push($(this).attr('id'));
            } else {
                $(this).children().children().attr("style", "fill:white;stroke-width:1;stroke:rgb(0,0,0)");
                if (contador < 0) {
                    contador = 0;
                } else {
                    contador--;
                }
            }
        }
    });

    $('.pagar').click(function () {
        if (contador > 0) {
            $('#modal1').modal();
            session.html('<b>Pelicula:</b> ' + reservita.nombre + ' -   <b>Dia:</b> ' + reservita.dia + ' -   <b>Hora:</b> ' + reservita.hora + ' p.m. -   <b>Butacas:</b> ' + contador + ' -   <b>Precio:</b> ' + (parseFloat(contador * precioUnidad)) + ' €');
            $('#modal1').modal('open');
        } else {
            Materialize.toast('Debe elegir al menos 1 asiento.', 3000, 'rounded');
        }
    });

    $('.cancelado').click(function () {
        console.log("entre aqui");
        $('#modal1').modal('close');
    });

    $('.pagado').click(function () {
        var newItem =
            {
                'pelicula': reservita.nombre,
                'dia': reservita.dia,
                'hora': reservita.hora,
                'asientos': asientosReservados
            };

        reservas.push(newItem);

        localStorage.setItem('reservas', JSON.stringify(reservas));
        Materialize.toast('Compra realizada.', 2000, 'rounded');
        setTimeout(function () { Materialize.toast('Disfrute de la pelicula.', 2000, 'rounded'); }, 2500);        
        setTimeout(function () { window.location.href = "index.html"; }, 5000);
    });
})

var ocupados = [];

function cargaAsientosOcupados(){
    console.log("Entre");
    reservas.forEach(element => {
        console.log(element);
        if(element.pelicula == reservita.nombre){
            console.log(element.pelicula + "  " +reservita.nombre);
            if(element.dia == reservita.dia){
                console.log(element.dia + "  " +reservita.dia);
                if(element.hora == reservita.hora){
                    element.asientos.forEach(el => {
                        var ocupado = $('#'+el);
                        ocupado.addClass('disabled');
                        console.log(ocupado);
                    })
                }
            }
        }
    });
}