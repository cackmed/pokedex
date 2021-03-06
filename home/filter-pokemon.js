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
    <div> 
        <select class="menu2">
            <option>test</option>
            <option>test</option>
            <option>test</option>
            <option>test</option>
            <option>test</option>
            <option>test</option>
        </select>
        <select class="menu">
                <option value="" selected>All Types</option>
                <option value="grass">Grass</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="bug">Bug</option>
                <option value="normal">Normal</option>
            </select>
    </div>
    `;
    }
}
export default FilterPokemon;
