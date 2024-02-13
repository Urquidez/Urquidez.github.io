$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

// $('#v-card').on('click', function() {
//   $('#modal1').modal();

// })

// $('#v-card').click(function(){ MyFunction(); return false; });