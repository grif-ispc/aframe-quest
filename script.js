
      let button = document.querySelector('a-button');

      button.addEventListener('click', ()=> {
        toast.show();
      })

      let form = document.querySelector('a-rounded');
      form.setAttribute('visible', false);

      setTimeout(function(){ 
        let form = document.querySelector('a-rounded');
        form.setAttribute('visible', true);
        let video = document.getElementById('video');
    video.currentTime = 0;
    video.pause()
      }, 10000);