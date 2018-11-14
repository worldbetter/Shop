import React from 'react';
import { connect } from 'dva';

class Hello extends React.Component {
  render(){
    return (
      <div>
        <h2>List of Products</h2>
      </div>
    )
  }
}

// export default Products;
export default connect()(Hello);
