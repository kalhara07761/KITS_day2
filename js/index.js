const navigation = () => {
    const hamberguer = document.querySelector('.nav-btn');
    const nav = document.querySelector('.nav-ul');

    hamberguer.addEventListener('click', () => {
        nav.classList.toggle('show');
        console.log('clicked');
    });

}

navigation();