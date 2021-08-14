import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
function Menubar(props) {
  const Content = props.data.map(show => (
    <div key={show.id}>
      <h3>
        {show.id}:{show.title}:{show.content}
      </h3>
    </div>
  ));
  return <div>{Content}</div>;
}
const Myvalue = [
  { id: 1, title: 'raja', content: 'he is boy' },
  { id: 2, title: 'rani', content: 'she is girl' }
];

ReactDOM.render(<Menubar data={Myvalue} />, document.getElementById('root'));
