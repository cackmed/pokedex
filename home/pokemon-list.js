import Component from '../Component.js';
import PokemonItem from './pokemon-item.js';


class PokemonList extends Component {
    renderHTML() {
        return /*html*/` 
            <ul class="grid">
                
            <ul>
            `;
    }
    
    onRender(dom) {
        
        const pokeItem = this.props.pokemon;
        pokeItem.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokemonItem = new PokemonItem(props);
            const pokemonItemDom = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDom);
        });
    }
}
export default PokemonList;
