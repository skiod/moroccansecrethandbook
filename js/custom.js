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

// # Overview One
$('#overviewOne').click(() => {

    $('#modalOneOverview').removeClass('display-none')
    if (!$('#modalOneItinerary').hasClass('display-none')) {
        $('#modalOneItinerary').addClass('display-none')
    }
    if (!$('#modalOneHightlight').hasClass('display-none')) {
        $('#modalOneHightlight').addClass('display-none')
    }
  })

  // # Overview Two
  $('#overviewTwo').click(() => {

    $('#modalTwoOverview').removeClass('display-none')
    if (!$('#modalTwoItinerary').hasClass('display-none')) {
        $('#modalTwoItinerary').addClass('display-none')
    }
    if (!$('#modalTwoHightlight').hasClass('display-none')) {
        $('#modalTwoHightlight').addClass('display-none')
    }
  })

  // # Overview Tree
  $('#overviewTree').click(() => {

    $('#modalTreeOverview').removeClass('display-none')
    if (!$('#modalTreeItinerary').hasClass('display-none')) {
        $('#modalTreeItinerary').addClass('display-none')
    }
    if (!$('#modalTreeHightlight').hasClass('display-none')) {
        $('#modalTreeHightlight').addClass('display-none')
    }
  })

  // # Overview Four
  $('#overviewFour').click(() => {

    $('#modalFourOverview').removeClass('display-none')
    if (!$('#modalFourItinerary').hasClass('display-none')) {
        $('#modalFourItinerary').addClass('display-none')
    }
    if (!$('#modalFourHightlight').hasClass('display-none')) {
        $('#modalFourHightlight').addClass('display-none')
    }
  })

  // # Itinerary One
$('#itineraryOne').click(() => {

    $('#modalOneItinerary').removeClass('display-none')
    if (!$('#modalOneOverview').hasClass('display-none')) {
        $('#modalOneOverview').addClass('display-none')
    }
    if (!$('#modalOneHightlight').hasClass('display-none')) {
        $('#modalOneHightlight').addClass('display-none')
    }
  })

  // # Itinerary Two
  $('#itineraryTwo').click(() => {

    $('#modalTwoItinerary').removeClass('display-none')
    if (!$('#modalTwoOverview').hasClass('display-none')) {
        $('#modalTwoOverview').addClass('display-none')
    }
    if (!$('#modalTwoHightlight').hasClass('display-none')) {
        $('#modalTwoHightlight').addClass('display-none')
    }
  })

  // # Itinerary Tree
  $('#itineraryTree').click(() => {

    $('#modalTreeItinerary').removeClass('display-none')
    if (!$('#modalTreeOverview').hasClass('display-none')) {
        $('#modalTreeOverview').addClass('display-none')
    }
    if (!$('#modalTreeHightlight').hasClass('display-none')) {
        $('#modalTreeHightlight').addClass('display-none')
    }
  })

  // # Itinerary Four
  $('#itineraryFour').click(() => {

    $('#modalFourItinerary').removeClass('display-none')
    if (!$('#modalFourOverview').hasClass('display-none')) {
        $('#modalFourOverview').addClass('display-none')
    }
    if (!$('#modalFourHightlight').hasClass('display-none')) {
        $('#modalFourHightlight').addClass('display-none')
    }
  })


// # Hightlight One
$('#hightlightOne').click(() => {

    $('#modalOneHightlight').removeClass('display-none')
    if (!$('#modalOneOverview').hasClass('display-none')) {
        $('#modalOneOverview').addClass('display-none')
    }
    if (!$('#modalOneItinerary').hasClass('display-none')) {
        $('#modalOneItinerary').addClass('display-none')
    }
  })

  // # Hightlight Two
  $('#hightlightTwo').click(() => {

    $('#modalTwoHightlight').removeClass('display-none')
    if (!$('#modalTwoOverview').hasClass('display-none')) {
        $('#modalTwoOverview').addClass('display-none')
    }
    if (!$('#modalTwoItinerary').hasClass('display-none')) {
        $('#modalTwoItinerary').addClass('display-none')
    }
  })

  // # Hightlight Tree
  $('#hightlightTree').click(() => {

    $('#modalTreeHightlight').removeClass('display-none')
    if (!$('#modalTreeOverview').hasClass('display-none')) {
        $('#modalTreeOverview').addClass('display-none')
    }
    if (!$('#modalTreeItinerary').hasClass('display-none')) {
        $('#modalTreeItinerary').addClass('display-none')
    }
  })

  // # Hightlight Four
  $('#hightlightFour').click(() => {

    $('#modalFourHightlight').removeClass('display-none')
    if (!$('#modalFourOverview').hasClass('display-none')) {
        $('#modalFourOverview').addClass('display-none')
    }
    if (!$('#modalFourItinerary').hasClass('display-none')) {
        $('#modalFourItinerary').addClass('display-none')
    }
  })