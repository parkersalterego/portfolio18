(function(){
    const menuButtons = [
        document.getElementById('aboutBtn'), 
        document.getElementById('workBtn'), 
        document.getElementById('contactBtn')
    ];
    
    const panelBackButtons = [
        document.getElementById('aboutBackBtn'),
        document.getElementById('workBackBtn'),
        document.getElementById('contactBackBtn')
    ];

    const panels = [
        document.getElementById('about'), 
        document.getElementById('work'), 
        document.getElementById('contact')
    ];

    const headerLogo = document.getElementById('headerLogo');

    for(let i = 0; i < menuButtons.length; i++) {

        menuButtons[i].addEventListener('click', () => {
            panels[i].classList.add('panel-open');
            menuButtons.forEach((button) => {
                button.style.opacity = 0;
            });

            headerLogo.style.opacity = 0;
            headerLogo.firstChild.classList.remove('neon');
        });

        panelBackButtons[i].addEventListener('click', () => {

            panels[i].classList.remove('panel-open');
            menuButtons.forEach((button) => {
                button.style.opacity = 1; 
            });

            headerLogo.style.opacity = 1;
            headerLogo.firstChild.classList.add('neon');
        });
    }
})();
