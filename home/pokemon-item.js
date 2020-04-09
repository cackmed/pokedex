import Component from '../Component.js';


class PokemonItem extends Component {
    renderHTML() { 
        const pokeItem = this.props.pokemon;
        return /*html*/` 
        <li class="pokemon">
                <h3>Name: ${pokeItem.pokemon} </h3>
                <img src="${pokeItem.url_image}" alt="${pokeItem.title} image">
                <p>Type: ${pokeItem.type_1} ${pokeItem.type_2}</p>
            </li>
    `;
    }
    
}
export default PokemonItem;