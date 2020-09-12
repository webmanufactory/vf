$('#form').trigger('reset');
        $(function() {
          'use strict';
          $('#form').on('submit', function(e) {
            e.preventDefault();
            $.ajax({
              url: 'send.php',
              type: 'POST',
              contentType: false,
              processData: false,
              data: new FormData(this),
              success: function(msg) {
                console.log(msg);
                if (msg == 'ok') {
                  alert('Спасибо за сообщение! В скором времени мы свяжемся с вами.');
                  $('#form').trigger('reset'); // очистка формы
                } else {
                  alert('Ошибка');
                }
              }
            });
          });
        });