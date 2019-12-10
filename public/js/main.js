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

// cart


$(function(){


  $('.checklists').change(function(){

      if($(this).is(':checked')){

         var xVal = $(this).val();


        $.get(`/cart/${xVal}`);

        let productList = $('#sidebar-carts');

          fetchProduct(function(foods){

            productList.empty();

            for (food of foods){
              productList.append(createProductCard(food))
            }

          })


      }
      else if(!$(this).is(":checked")){

        var xVal = $(this).val();

        
        if(xVal === $(".cart-box .media").attr('data-id')){

          console.log("delete html")

          $(`.cart-box .media[data-id=${xVal}]`).remove();

        }

        $.get(`/cart/delete/${xVal}`);


      }
  })

});


// -------------

function fetchProduct(done){
  $.get('/showcart', function(data){
      console.log(data)
      done(data)
  });
}


function createProductCard(foods){
  return $(`
            
    <div class="media" data-id="${ foods.id_produk }">
        <img src="/uploads/${ foods.food_image }" class="align-self-start mr-3" alt="...">
        <div class="media-body">
            <h5 class="mt-0">${ foods.nama_produk }</h5>
            <p class="m-0">Rp. ${ foods.harga_produk }</p>
            <div class="d-flex align-items-center">
                <p class="m-0 mr-2">Jumlah</p>
                <div class="d-flex button-quantity">
                    <button class="button-quantity_inner red">-</button>
                    <input class="button-quantity_form" type="text" value="2">
                    <button class="button-quantity_inner green">+</button>
                </div>
            </div>
        </div>
        <a href="#"><img src="images/close-icon.png" alt=""></a>
    </div>
  
  `);
}


$(function(){

    let productList = $('#sidebar-carts');

    fetchProduct(function(foods){

      productList.empty();

      for (food of foods){
        productList.append(createProductCard(food))
      }

    })


})