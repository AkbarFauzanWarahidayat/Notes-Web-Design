class filterContainer extends HTMLElement{
    constructor(){
        super();

        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="filter-container">
                <div class="filter-item">
                    <ul>
                        <li><a href="#">All</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Personal</a></li>
                    </ul>
                </div>

                <div class="new-item">
                    <button id="newNote">(+) Add new notes</button>
                </div>
            </div>
        `
    }
}

customElements.define('filter-container', filterContainer);