
(function ($) {
  
    "use strict";
  
      // COUNTER NUMBERS
      jQuery('.counter-thumb').appear(function() {
        jQuery('.counter-number').countTo();
      });
      
      // CUSTOM LINK
      $('.smoothscroll').click(function(){
      const el = $(this).attr('href');
      const elWrapped = $(el);
      const header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        const offset = element.offset();
        const offsetTop = offset.top;
        const totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
  });
      
    })(window.jQuery);
  
    //SIDEBAR JS
    $(document).ready(function() {
          
        $('.happy88 .toggle-wrapper .show').on('click', function() {
            $('.happy88').addClass('open');
        });
              
          
        $('.happy88 .toggle-wrapper .hide').on('click', function() {
            $('.happy88').removeClass('open');
        });
          
          
        $('.happy88 .has-menu').on('click', function(e) {
            e.stopPropagation();
            $(this).toggleClass('open');
        });
          
          
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.happy88').length) {
                $('.happy88').removeClass('open');
                $('.happy88.has-menu').removeClass('open');
            }
        });
    });
  
    //LOADING JS
    $(document).ready(function() {
      // Tampilkan loading saat memulai
      $('#loading').show();
      $('#content').hide(); // Sembunyikan konten awal
  
      // Simulasi proses loading (ganti dengan proses sebenarnya)
      setTimeout(function() {
          // Sembunyikan loading setelah proses selesai
          $('#loading').fadeOut(500, function() {
          $('#content').fadeIn(500); // Tampilkan konten setelah loading
          });
          
          // Tampilkan tombol refresh jika diperlukan
          $('#refresh').fadeIn(500);
      }, 500); // Ubah durasi sesuai kebutuhan
  
      // Fungsi untuk refresh konten
      $('#refresh').on('click', function() {
          $('#loading').fadeIn(500);
          $('#content').fadeOut(500); // Sembunyikan konten saat loading
          setTimeout(function() {
              $('#loading').fadeOut(500, function() {
                  $('#content').fadeIn(500);
              });
          }, 500); // Ubah durasi sesuai kebutuhan
      });
  });
  
  function showLoading() {
    document.getElementById("loading").style.display = "block";
    document.body.classList.add("no-scroll"); // Menambah kelas
    }

    function hideLoading() {
    document.getElementById("loading").style.display = "none";
    document.body.classList.remove("no-scroll"); // Menghapus kelas
    }

// Contoh pemanggilan
    document.addEventListener("DOMContentLoaded", function() {
    // Simulasi memuat data
    showLoading(); // Tampilkan loading
    setTimeout(hideLoading, 800); // Sembunyikan loading setelah 3 detik
    });

          
  
  
  
