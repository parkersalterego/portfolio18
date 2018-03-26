const about = document.getElementById('about');
const aboutBtn = document.getElementById('aboutBtn');

aboutBtn.addEventListener('click', function() {
   if (about.classList.contains('panelOpen')) {
        about.classList.remove('panelOpen');
   } else {
       about.classList.add('panelOpen');
   }
});