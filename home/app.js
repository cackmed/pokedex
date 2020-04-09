import Component from '../Component.js';
import Header from './header.js';
import PokemonList from './pokemon-list.js';
import FilterPokemon from './filter-pokemon.js';
import { getPokemon } from '../services/pokemon-api.js';


class App extends Component {
    
    async onRender(dom){
        const header = new Header;
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);
        const response = await getPokemon();
        const pokemon = response.results;
        const pokemonList = new PokemonList({ pokemon: [] });

        const pokemonListDom = pokemonList.renderDOM();

        const listSection = dom.querySelector('.pokemon');
        listSection.appendChild(pokemonListDom);
        
        pokemonList.update({ pokemon: pokemon });

        const filterPokemon = new FilterPokemon({    
            pokemon: pokemon,
            onFilter: (pokemonType) => {
                let filteredPokemon;
                if (!pokemonType) {
                    filteredPokemon = pokemon;
                }
                else {
                    filteredPokemon = pokemon.filter(pokemon => {
                        return pokemon.type_1 === pokemonType;
                    });
                }
                const updateProps = { pokemon: filteredPokemon };
                pokemonList.update(updateProps);
            }
        });
        const filterPokemonDom = filterPokemon.renderDOM();

        const optionsSection = dom.querySelector('.search-bar');
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