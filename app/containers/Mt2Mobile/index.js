/*
 *
 * Mt2Mobile
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Mt2Mobile extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Mt2Mobile" meta={[ { name: 'description', content: 'Description of Mt2Mobile' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
