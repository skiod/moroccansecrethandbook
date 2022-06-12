$('#owl-carousel-one').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    items: 2,
    responsive: {
        0: {
            items: 1,
        },
        800: {
            items: 2,
        }
    }
})

$('#owl-carousel-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    items: 1

})


$('#one-img').click(() => {
    if ($('#one-img').hasClass('focus-one')) {
        $('#one-img').removeClass('focus-one')
        $('#bawsala').css('transform', 'initial')
    } else {
        $('#one-img').addClass('focus-one')
        $('#bawsala').css('transform', 'rotate(-45deg')
    }
})

$('#two-img').click(() => {
    if ($('#two-img').hasClass('focus-one')) {
        $('#two-img').removeClass('focus-one')
        $('#bawsala').css('transform', 'initial')

    } else {
        $('#two-img').addClass('focus-one')
        $('#bawsala').css('transform', 'rotate(45deg')
    }
})

$('#tree-img').click(() => {
    if ($('#tree-img').hasClass('focus-one')) {
        $('#tree-img').removeClass('focus-one')
        $('#bawsala').css('transform', 'initial')

    } else {
        $('#tree-img').addClass('focus-one')
        $('#bawsala').css('transform', 'rotate(210deg')
    }
})

$('#four-img').click(() => {
    if ($('#four-img').hasClass('focus-one')) {
        $('#four-img').removeClass('focus-one')
        $('#bawsala').css('transform', 'initial')
    } else {
        $('#four-img').addClass('focus-one')
        $('#bawsala').css('transform', 'rotate(130deg')
    }
})

$('#overview').click(() => {
    $('#modalOneOverview').removeClass('display-none')
    if (!$('#modalOneItinerary').hasClass('display-none')) {
        $('#modalOneItinerary').addClass('display-none')
    }
    if (!$('#modalOneHightlight').hasClass('display-none')) {
        $('#modalOneHightlight').addClass('display-none')
    }
})
$('#itinerary').click(() => {
    $('#modalOneItinerary').removeClass('display-none')
    if (!$('#modalOneOverview').hasClass('display-none')) {
        $('#modalOneOverview').addClass('display-none')
    }
    if (!$('#modalOneHightlight').hasClass('display-none')) {
        $('#modalOneHightlight').addClass('display-none')
    }
})
$('#hightlight').click(() => {
    $('#modalOneHightlight').removeClass('display-none')
    if (!$('#modalOneOverview').hasClass('display-none')) {
        $('#modalOneOverview').addClass('display-none')
    }
    if (!$('#modalOneItinerary').hasClass('display-none')) {
        $('#modalOneItinerary').addClass('display-none')
    }
})
