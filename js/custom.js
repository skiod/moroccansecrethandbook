
$('#one-img').click(() => {
    removeClass()
    $('#overviewOne a').addClass('highlight-nav')
    $('#overviewTwo a').addClass('highlight-nav')
    $('#overviewTree a').addClass('highlight-nav')
    $('#overviewFour a').addClass('highlight-nav')

    if ($('#one-img').hasClass('focus-one')) {
        $('#one-img').removeClass('focus-one')
        $('#bawsala').css('transform', 'initial')
    } else {
        $('#one-img').addClass('focus-one')
        $('#bawsala').css('transform', 'rotate(-45deg')
    }
})

$('#two-img').click(() => {
    removeClass()
    $('#overviewOne a').addClass('highlight-nav')
    $('#overviewTwo a').addClass('highlight-nav')
    $('#overviewTree a').addClass('highlight-nav')
    $('#overviewFour a').addClass('highlight-nav')
    if ($('#two-img').hasClass('focus-one')) {
        $('#two-img').removeClass('focus-one')
        $('#bawsala').css('transform', 'initial')

    } else {
        $('#two-img').addClass('focus-one')
        $('#bawsala').css('transform', 'rotate(45deg')
    }
})

$('#tree-img').click(() => {
    removeClass()
    $('#overviewOne a').addClass('highlight-nav')
    $('#overviewTwo a').addClass('highlight-nav')
    $('#overviewTree a').addClass('highlight-nav')
    $('#overviewFour a').addClass('highlight-nav')
    if ($('#tree-img').hasClass('focus-one')) {
        $('#tree-img').removeClass('focus-one')
        $('#bawsala').css('transform', 'initial')

    } else {
        $('#tree-img').addClass('focus-one')
        $('#bawsala').css('transform', 'rotate(210deg')
    }
})

$('#four-img').click(() => {
    removeClass()
    $('#overviewOne a').addClass('highlight-nav')
    $('#overviewTwo a').addClass('highlight-nav')
    $('#overviewTree a').addClass('highlight-nav')
    $('#overviewFour a').addClass('highlight-nav')
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
    removeClass()
    $('#overviewOne a').addClass('highlight-nav')
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
    removeClass()
    $('#overviewTwo a').addClass('highlight-nav')
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
    removeClass()
    $('#overviewTree a').addClass('highlight-nav')
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
    removeClass()
    $('#overviewFour a').addClass('highlight-nav')
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
    removeClass()
    $('#itineraryOne a').addClass('highlight-nav')
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
    removeClass()
    $('#itineraryTwo a').addClass('highlight-nav')
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
    removeClass()
    $('#itineraryTree a').addClass('highlight-nav')
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
    removeClass()
    $('#itineraryFour a').addClass('highlight-nav')
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
    removeClass()
    $('#hightlightOne a').addClass('highlight-nav')
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
    removeClass()
    $('#hightlightTwo a').addClass('highlight-nav')
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
    removeClass()
    $('#hightlightTree a').addClass('highlight-nav')
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
    removeClass()
    $('#hightlightFour a').addClass('highlight-nav')
    $('#modalFourHightlight').removeClass('display-none')
    if (!$('#modalFourOverview').hasClass('display-none')) {
        $('#modalFourOverview').addClass('display-none')
    }
    if (!$('#modalFourItinerary').hasClass('display-none')) {
        $('#modalFourItinerary').addClass('display-none')
    }
  })


$('#modalOne').on('hidden.bs.modal', function () {
    console.log('one')
    $('#modalOneOverview').removeClass('display-none')
    removeClass()
});

$('#modalTwo').on('hidden.bs.modal', function () {
    console.log('two')
    $('#modalTwoOverview').removeClass('display-none')
    removeClass()
});

$('#modalTree').on('hidden.bs.modal', function () {
    console.log('three')
    $('#modalTreeOverview').removeClass('display-none')
    removeClass()
});

$('#modalFour').on('hidden.bs.modal', function () {
    console.log('four')
    $('#modalFourOverview').removeClass('display-none')
    removeClass()
});


function removeClass(){
    $('#hightlightFour a').removeClass('highlight-nav')
    $('#hightlightTree a').removeClass('highlight-nav')
    $('#hightlightTwo a').removeClass('highlight-nav')
    $('#hightlightOne a').removeClass('highlight-nav')
    $('#itineraryFour a').removeClass('highlight-nav')
    $('#itineraryTree a').removeClass('highlight-nav')
    $('#itineraryTwo a').removeClass('highlight-nav')
    $('#itineraryOne a').removeClass('highlight-nav')
    $('#overviewFour a').removeClass('highlight-nav')
    $('#overviewTree a').removeClass('highlight-nav')
    $('#overviewTwo a').removeClass('highlight-nav')
    $('#overviewOne a').removeClass('highlight-nav')
}