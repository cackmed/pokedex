import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <nav class="header">
                    Header
        <button>Placeholder</button><button id="home-button">Home</button><button id="pokedex">Pokedex</button>
    </nav>
    `;
    }
}
export default Header;