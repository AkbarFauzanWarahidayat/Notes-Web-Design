class footerContainer extends HTMLElement{
    constructor(){
        super();

        this.render();
    }

    render(){
        this.innerHTML = `
        <section>
            <div class="container-footer">
            <p>Notes Web Application Design by Akbar Fauzan Warahidayat</p>
            </div>
        </section>`
    }
}

customElements.define('footer-container', footerContainer);