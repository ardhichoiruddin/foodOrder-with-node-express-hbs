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

        fetchProduct(function(food){

        var sum = 0;

              for (price of food){
                  var x = price.harga_produk;

                  sum += x;

              }

              $('#sumSidebar').html(sum)


        })


      }
      else if(!$(this).is(":checked")){

        var xVal = $(this).val();

        
        if(xVal === $(".cart-box .media").attr('data-id')){

          console.log("delete html")

          $(`.cart-box .media[data-id=${xVal}]`).remove();

        }

        fetchProduct(function(food){

              var sum = 0;

              for (price of food){
                  var x = price.harga_produk;

                  sum += x;

              }

              $('#sumSidebar').html(sum)


        })

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
            <p class="m-0">Rp. <span class="price">${ foods.harga_produk }</span></p>
            <div class="d-flex align-items-center">
                <p class="m-0 mr-2">Jumlah</p>
                <div class="d-flex button-quantity">
                    <input name="jumlah-food" class="button-quantity_form" type="number" value="2">
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

fetchProduct(function(food){

      var sum = 0;

      for (price of food){
          var x = price.harga_produk;

          sum += x;

      }

      $('#sumSidebar').html(sum)


})


$('#sidebar-carts .media-body').change(function(){




    // var priceSum = 0;

    // $(this).find('.price').each(function(){
    //     console.log($(this).html())
    // })

})


// click order

$('.btn-goOrder').click(function(){

  var id_transaksi = 2343;
  var nama = $('input[name=nama-pemesan]').val();
  var nomorMeja = $('select.nomor-meja option:selected').val();
  var jumlahHarga = $('#sumSidebar').html();

  var jumlahPesanan = [];
  var id_pesan = [];

  console.log(nomorMeja)

  var today = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
    
  })

  console.log(today)

  var data ={

    id_transaksi : id_transaksi,
    nama_pemesan : nama,
    id_produk : '',
    nomor_meja : nomorMeja,
    quantity : '',
    tanggal : today,
    status : 'menunggu'

  }

  $('#sidebar-carts .media').each(function(){

    data.id_produk = $(this).attr('data-id');
    data.quantity = $(this).find('input[name=jumlah-food]').val();
    
    $.post('/cart/tambahtrans', data);
   

  })

})