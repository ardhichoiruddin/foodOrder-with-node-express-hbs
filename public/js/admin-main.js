
var nameAttr = $("select.kategori-edit").attr('data-value');
console.log(nameAttr)
$("select.kategori-edit").val(nameAttr);


// delete

$('.btn-delete').click(function(){

      var idAttr = $(this).attr('data-id');
      var namaAttr = $(this).attr('data-nama');

      swal({
            title: `Anda Ingin Menghapus ${namaAttr}?`,
            text: "jika data sudah terhapus maka tidak dapat dikembalikan",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                  location.href = `/admin/foodmenu/delete/${idAttr}`
            } else {
              
            }
      });

});

$('.btn-delete-m').click(function(){

      var idAttr = $(this).attr('data-id');
      var namaAttr = $(this).attr('data-nama');

      swal({
            title: `Anda Ingin Menghapus ${namaAttr}?`,
            text: "jika data sudah terhapus maka tidak dapat dikembalikan",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                  location.href = `/admin/delete/${idAttr}`
            } else {
              
            }
      });

})
