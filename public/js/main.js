$(".button-quantity_inner").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    console.log("Hell")
    console.log(oldValue)
  
    if ($button.text() === "+") {
        var newVal = parseFloat(oldValue) + 1;
        console.log("add")
      } else {
     // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
  
    $button.parent().find("input").val(newVal);
  
  });


  $('.btn-cf').click(function(){

    Swal.fire({
        title: '<strong>Selamat!</strong>',
        text: 'Orderan anda sudah terkirim ke chief. silakan menunggu di tempat duduk sesuai nomor yang anda masukan dalam order tadi',
        type: 'success',
      });

});