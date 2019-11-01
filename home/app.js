import Component from '../Component.js';
import Header from './header.js';
import PokemonList from './pokemon-list.js';


class App extends Component {
    
    onRender(dom){
        const header = new Header;
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);

        const props = {
            pokemon: pokemon
        };

        const pokemonList = new PokemonList(props);
        const imageListDom = pokemonList.renderDOM();

        const listSection = dom.querySelector('.image-placement');
        listSection.appendChild(imageListDom);
        const filterPokemon = new FilterPokemon({    
            pokemon: pokemon,
            onFilter: (pokemonType) => {
                let filteredPokemon;
                if (!pokemonType) {
                    filteredPokemon = pokemon;
                }
                else {
                    filteredPokemon = pokemons.filter(image => {
                        return pokemon.type === pokemonType;
                    });
                }
                const updateProps = { pokemon: filteredPokemon };
                pokemonList.update(updateProps);
            }
        });
        const filterPokemonDom = filterPokemon.renderDOM();

        const optionsSection = dom.querySelector('.menu-section');
        optionsSection.appendChild(filterPokemonDom);
    }
    renderHTML() {
        return /*html*/` 
        <div>
        
                <main>
                    <section class="search-bar"></section>
                    <section class="pokemon"></section>
                        
                    
                </main>
        </div>
        `;

    }
}
export default App;