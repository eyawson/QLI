$(function() {
    $('.backgroundTransition').backgroundTransition({
        backgrounds:[
            { src: 'images/1.jpg' },
            { src: 'images/2.jpg' },
            { src: 'images/3.jpg' },
            { src: 'images/4.jpg' },
            { src: 'images/5.jpg' },
            { src: 'images/6.jpg' },
            { src: 'images/7.jpg' },
            { src: 'images/8.jpg' },
            { src: 'images/9.jpg' },
            { src: 'images/10.jpg' },
        ],
        transitionDelay: 5,
        animationSpeed: 500
    });
  });

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };