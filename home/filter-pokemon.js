import Component from '../Component.js';

class FilterPokemon extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;
        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }
    renderHTML() {
        return /*html*/`
        <select class="menu">
                <option value="" selected>All Types</option>
                <option value="grass">Grass</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="ground">Ground</option>
            </select>
    `;
    }
}
export default FilterPokemon;
