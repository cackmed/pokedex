import Component from '../Component.js';
import Header from '../home/header.js';

class HomeApp extends Component {

    onRender(dom) {
        const header = new Header;
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);
    }
    renderHTML() {
        return /*html*/` 
        <div>
        
                <main>
                    
                   <p>Hello</p>     
                    
                </main>
        </div>
        `;

    }
}

export default HomeApp;