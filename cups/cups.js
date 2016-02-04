    var el = document.getElementById('container');
    var btn = document.getElementById('generate');
    btn.onclick = generateImg;

    function generateImg() {

        html2canvas(el, {
          onrendered: function(canvas) {
            document.body.appendChild(canvas);
            var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            window.location.href = image;
            document.body.removeChild(canvas);
          },
        });
    };

    window.setInterval(function(){
        generateImg();
    }, 1000);

    $('.counter').counterUp({
      delay: 1000,
      time: 1000000
    });

    $('.counter').addClass('animated fadeInDownBig');
    $('h3').addClass('animated fadeIn');


