import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router-dom';
class HomePage extends Component {
    render() {
        return ( <
            div >
            <
            Link to = "/checkout" > Go to Checkout < /Link> </div >
        );
    }
}

export default HomePage;