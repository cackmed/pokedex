import Component from '../Component.js';


class PokemonItem extends Component {
    renderHTML() { 
        const pokeItem = this.props.image;
        return /*html*/` 
        <li class="pokemon">
                <h3>Name: ${pokeItem.name} </h3>
                <img src="${pokeItem.url}" alt="${pokeItem.title} image">
                <p>Type: ${pokeItem.type}</p>
            </li>
    `;
    }
    
}
export default PokemonItem;