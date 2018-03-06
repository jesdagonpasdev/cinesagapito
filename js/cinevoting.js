function error() {
    console.log("No se ha podido realizar la sentencia.");
}
var k = 1;
$(document).ready(function () {
    
    cardDeck = $(".row").first();

    results = [{ "title": 'Star Wars: Episode IV', "image": 'images/1.jpg', "sinopsis": "Los gobernantes del Imperio Galáctico, la fuerza del mal que domina el universo, capturan a la princesa Leia, quien posee datos confidenciales sobre su centro de operaciones militares, denominado Estrella de la Muerte. Antes de su secuestro, la Princesa transfiere la información ultrasecreta a la base de datos del robot R2-D2. Catalogado como un material inservible, R2-D2, junto con su compañero C3PO, son deportados a un planeta remoto, siendo comprados por el joven Luke Skywalker en el mercado negro. Debido a un hecho fortuito, Luke accede al mensaje de la princesa Leia, quien solicita el auxilio del veterano Caballero Jedi Obi-Wan Kenobi. Luke, Obi-Wan, los robots, el piloto Han Solo y el gigantesco wookiee Chewbacca conforman la tripulación que intentará liberar a la princesa Leia de los dominios de Darth Vader, la autoridad suprema del Imperio Galáctico." },
    { "title": 'Star Wars: Episode V', "image": 'images/2.jpg', "sinopsis": "Luke Skywalker junto a R2D2 acuden al planeta Dagobah para que el legendario maestro Yoda, le convierta en un verdadero maestro Jedi. Mientras, el astuto piloto Han Solo, la valiente princesa Leia y el simpático C3PO destruyen la Estrella de la Muerte. Parece que todo ha terminado, pero el terrible Lord Darth Vader ha escapado, sigue vivo y prepara una trampa para las tropas imperiales. Además hará todo lo posible por que el joven Luke se pase al lado oscuro." },
    { "title": 'Star Wars: Episode VI', "image": 'images/3.jpg', "sinopsis": "Luke Skywalker tenía un claro objetivo: acabar con el imperio y con su ya conocido padre Darth Vader. Lo tenía crudo, aunque sin Yoda no hubiera ido a ninguna parte. Se mantenía vivo porque tenía un objetivo claro, no como el resto de la humanidad. En cuanto dejas de tener objetivos y metas, te atrapa el lado oscuro." },
    { "title": 'Star Wars: Episode I', "image": 'images/4.jpg', "sinopsis": "Hace mucho tiempo, en una galaxia muy, muy lejana... La República sufre numerosos tormentos: la corrupción hace temblar sus cimientos, el Senado está enfrascado en discusiones políticas interminables y empiezan a surgir numerosas fuerzas disidentes, anuncio de la caída de un sistema antaño pacífico. Poderosa e intocable, la Federación de Comercio impone por la fuerza impuestos en las rutas comerciales. Al negarse a pagar, el pacífico planeta Naboo, gobernado por la joven reina Amidala, sufre un bloqueo militar por parte de la Federación. Enviados por el Senado para solucionar el asunto, los Caballeros Jedi Qui-Gon Jinn y Obi-Wan Kenobi descubren que la Federación va a lanzar una ofensiva inminente. Rescatan a la reina y su séquito, huyen del planeta pero deben aterrizar en Tatooine para reparar su nave..." },
    { "title": 'Star Wars: Episode II', "image": 'images/5.jpg', "sinopsis": "Tras el bloqueo de Naboo por la Federación de Comercio, la República, gobernada por el Canciller Palpatine, sufre una verdadera crisis. Un grupo de disidentes, encabezado por el jedi oscuro Conde Dooku, manifiesta su descontento en cuanto al funcionamiento del régimen. El Senado y la población intergaláctica están inquietos ante el surgimiento de una tal amenaza. Algunos senadores quieren que la República cree un sólido ejército para evitar que la situación no vaya a peor. Al mismo tiempo, Padmé Amidala, ahora senadora, está amenazada por los separatistas y escapa por los pelos de un atentado. El Padawan Anakin Skywalker es el encargado de su protección. Su maestro Obi-Wan Kenobi, parte a investigar esta tentativa de asesinato y descubre la creación de un misterioso ejército de clones" },
    { "title": 'Star Wars: Episode III', "image": 'images/6.jpg', "sinopsis": "La Guerra de los Clones causa furor. Existe una clara hostilidad entre el Canciller Palpatine y el Consejo Jedi. Anakin Skywalker, joven Caballero Jedi entre la espada y la pared, duda sobre qué camino seguir. Seducido por la promesa de un poder sin parangón, tentado por el lado oscuro de la Fuerza, jura lealtad al maléfico Darth Sidious y se convierte en Darth Vader." },
    { "title": 'Star Wars: Clone War', "image": 'images/7.jpg', "sinopsis": "La galaxia está en manos de las Guerras Clon, un conflicto a gran escala que enfrenta a los separatistas del mal y a los ejércitos masivos de androides de la República. Al otro lado, los caballeros Jedi, protectores de la República, luchan por mantener el orden y restablecer la paz." },
    { "title": 'Star Wars: Episode VII', "image": 'images/8.jpg', "sinopsis": "Han pasado más de treinta años desde la caída del Imperio Galáctico, derrotado por la Alianza Rebelde. Luke Skywalker (Mark Hamill) ha desaparecido, pero existe un mapa que revela dónde se encuentra el último guerrero Jedi con vida. Muchos de los héroes de antes, Leia (Carrie Fisher), Han Solo (Harrison Ford), Chewbacca, R2-D2 y C-3PO, todavía están activos y luchan en la resistencia. Y es que la tiranía y la opresión no han acabado en la galaxia, que todavía se encuentra en guerra. Una Nueva República ha surgido, aunque su gobierno es frágil, un mero títere. Aprovechando la inestabilidad del sistema político y las diferencias de las diversas corrientes republicanas, un misterioso guerrero, Kylo Ren (Adam Driver), obsesionado con acabar con los Jedi, amenaza la paz galáctica. El siniestro Ren lidera la Primera Orden, una fuerza leal a la memoria de Lord Vader y Palpatine, surgida de las cenizas del Imperio Galáctico." },
    { "title": 'Star Wars: Episode VIII', "image": 'images/9.jpg', "sinopsis": "Una nueva aventura está a punto de comenzar, antiguos y nuevos personajes además de viejas caras conocidas, se preparan para lo que está por llegar, pues arcaicos secretos de la Fuerza e impactantes revelaciones del pasado serán revelados." },
    { "title": 'Star Wars: Rogue One', "image": 'images/10.jpg', "sinopsis": "Jyn Erso (Felicity Jones) es una problemática recluta Rebelde, hábil y testaruda, que está a punto de experimentar su mayor desafío hasta la fecha. Mon Mothma (Genevieve O'Reilly), Senadora y líder secreto de la Alianza Rebelde, le ha confiado el mando de un importante cometido: robar los planos de la Estrella de la Muerte, la última y destructiva arma del Imperio Galáctico que tiene a Orson Krennic (Ben Mendelsohn) como director de seguridad." },
    { "title": 'Sharknado 2', "image": 'images/11.jpg', "sinopsis": "Después de un accidentado viaje para llegar a Nueva York,Fin (Ian Ziering) y Alex (Tara Reid) tendrán que volver a enfrentarse a otro terrible sharknado, esta vez junto a Ellen Brody (Kari Wuhrer) y Martin Brody (Mark McGrath), la hermana y el cuñado de Fin." },
    { "title": 'Sharknado 5', "image": 'images/12.jpg', "sinopsis": "En esta nueva aventura, Fin Shepard (Ian Ziering) y su esposa April (Tara Reid) se toman esta nueva misión como algo personal cuando el más joven de sus hijos queda atrapado en un “viajenado” y transportado por todo el mundo. De Londres a Río de Janeiro, Tokio, Roma, Amsterdam y más allá, nuestros héroes necesitarán la ayuda de un grupo altamente cualificado: gente de la realeza, estudiosos y deportistas olímpicos, uniéndolos con caras conocidas del mundo de la comunicación, el entretenimiento y los deportes en su batalla más épica hasta la fecha." }];
    var divGeneral = '<div class="card">';
    results.forEach(element => {
        var divGrande = '<div id="page' + k + '" class="serepite">';
        var rutaImagen = element.image;
        cardDeck.append(divGrande);
        //cardDeck.children().last().addClass('espacioAlrededor');
        cardDeck.children().last().append(divGeneral);
        var divImage = '<div class="card-image">';
        var imagen = '<img src="' + rutaImagen + '" alt="' + element.title + '">';
        //var abrir = '<a class="btn-floating halfway-fab waves-effect waves-light red">';
        //var boton = '<i class="material-icons muestran">add</i>';
        var divDos = '<div class="card-content">';
        var titulo = '<h5 class="flow-text tituloPeli" value="' + element.title + '">' + element.title + '</h5>';
        var escondido = '<p hidden>'+element.sinopsis+'</p>';
        var ultimoElemento = cardDeck.children().last().children().last();
        ultimoElemento.append(divImage);
        ultimoElemento.find('div').first().append(imagen);
        //ultimoElemento.find('div').first().append(abrir);
        ultimoElemento.find('div').first().append(escondido);
        //ultimoElemento.find('div').first().find('a').append(boton);
        ultimoElemento.append(divDos);
        ultimoElemento.find('div').last().append(titulo);
        k++;
    });
    $('.modal').modal();
    $('select').material_select();
    paginate({
        itemSelector: '.serepite',
        paginationSelector: '#pagination-1',
        itemsPerPage: 6
    });
    $('.muestran').click(function (e) {
        var nombreEspecifico = $(this).parent().parent().next().children().first().attr("value");
        var imagenEspecifica = $(this).parent().parent().find('img').attr("src");
        var sinopsisEspecifica = $(this).parent().parent().find('p').text();
        $('#nombre').text(nombreEspecifico);
        $('#imagenModal').attr("src", imagenEspecifica);
        $('#descripcionModal').text(sinopsisEspecifica);
        $('.modal').modal('open');
    });
    $('.card-image>img').click(function(){
        var nombreEspecifico = $(this).parent().next().children().first().attr("value");
        var imagenEspecifica = $(this).parent().find('img').attr("src");
        var sinopsisEspecifica = $(this).parent().find('p').text();
        $('#nombre').text(nombreEspecifico);
        $('#imagenModal').attr("src", imagenEspecifica);
        $('#descripcionModal').text(sinopsisEspecifica);
        $('.modal').modal('open');
    });
});

$('.horario1').click(function (){
    var nombrepeli = $(this).parent().parent().parent().children().first().text();
    var hora = $(this).text();
    var dia = $(this).parent().parent().find('select').val();
    localStorage.setItem("nuevaReserva", JSON.stringify({"nombre": nombrepeli, "hora": hora, "dia": dia}));
    window.location.href = "reserva.html";
    console.log(nombrepeli + "  " + hora);
});

$('.horario2').click(function (){
    var nombrepeli = $(this).parent().parent().parent().children().first().text();
    var hora = $(this).text();
    var dia = $(this).parent().parent().find('select').val();
    localStorage.setItem("nuevaReserva", JSON.stringify({"nombre": nombrepeli, "hora": hora, "dia": dia}));
    window.location.href = "reserva.html";

});

function paginate(options) {
    var items = $(options.itemSelector);
    var numItems = items.length;
    var perPage = options.itemsPerPage;
    items.slice(perPage).hide();
    $(options.paginationSelector).pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "dark-theme",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
            return false;
        }
    });
}