class navbarContainer extends HTMLElement{
    constructor(){
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
        <nav>
        <div class="container-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="search-note" id="search-note" placeholder="Search">
        </div>

        <div class="container-welcome">
            <img src="img/ukuran 1 1.jpeg" alt="">
            <p>Welcome, Akbar FW</p>

            <i class="fa-regular fa-bell"></i>
        </div>
        </nav>`;
    };
};

customElements.define('navbar-container', navbarContainer);