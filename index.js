document.addEventListener('DOMContentLoaded', function(event) {
    // array with texts to type in typewriter
    var dataText = ['TOOTH SCALING', 'TOOTH POLISHING', 'DENTAL IMPLANT', 'ROOT CANAL', 'COSMETIC FILLING', 'DENTAL EXTRATION', 'CROWN & BRIDGE', 'ORTHODONTICS'];
  
    function typeWriter(text, i, fnCallback) {
      var h1Element = document.getElementById('typewriter-heading'); // Select the h1 element by its ID
      if (i < text.length) {
        h1Element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
  
    function StartTextAnimation(i) {
      if (typeof dataText[i] == 'undefined') {
        setTimeout(function() {
          StartTextAnimation(0);
        }, 2000); // Adjust the delay here (in milliseconds)
      }
  
      if (i < dataText.length) {
        typeWriter(dataText[i], 0, function() {
          StartTextAnimation((i + 1) % dataText.length); // Use modulo to loop back to the beginning
        });
      }
    }
  
    StartTextAnimation(0);
  });
  
  $(document).ready(function(){
    $('.items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });

 
  
  $(document).ready(function() {
    var navbarSection = $('#navbarSection');
    var scrollStart = 0;
  
    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();
  
      // Change background to 90% opacity when scrolled to the top
      if (currentScroll <= 650) {
        navbarSection.removeClass('bg-opacity-100').addClass('bg-opacity-0');
      } else {
        navbarSection.removeClass('bg-opacity-0').addClass('bg-opacity-100');
      }
  

      scrollStart = currentScroll;
    });
  });
  
  
  

  // Function to animate the counting
//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
     target.innerText = Math.floor(progress * (end - start) + start);
     if (progress < 1) {
      window.requestAnimationFrame(step);
     }
    };
    window.requestAnimationFrame(step);
   };
   //#endregion - end of - number counter animation
   
   document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#count1", 0, 500, 700);
    counterAnim("#count2", 0, 40, 700);
    counterAnim("#count3", 0, 10, 700);
   });



   // updateYear.js
const year = new Date().getFullYear();
document.getElementById('currentYear').textContent = year;