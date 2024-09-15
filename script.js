document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.querySelector('.menu-mobile');
    const closeButton = document.querySelector('.btn-fechar');
    const menuItems = document.querySelectorAll('.menu-item');

    // Abre o menu
    menuIcon.addEventListener('click', function () {
        menu.classList.add('open');
        document.body.style.overflow = 'hidden'; // Evita rolagem enquanto o menu está aberto
    });

    // Fecha o menu quando o botão de fechar é clicado
    closeButton.addEventListener('click', function () {
        menu.classList.remove('open');
        document.body.style.overflow = 'auto'; // Restaura a rolagem
    });

    // Fecha o menu quando um item do menu é clicado
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menu.classList.remove('open');
            document.body.style.overflow = 'auto'; // Restaura a rolagem
        });
    });
});
