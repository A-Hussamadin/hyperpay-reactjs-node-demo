import React, {
  Component
} from 'react';

import {
  Link
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Link to="/checkout" > Go to Checkout </Link>
      </div>
    )
  }
}

export default App;