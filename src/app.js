import React from 'react';
import ReactDOM from 'react-dom';
import App from './playground/myBoard';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '2/2',
        cards: [
          {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
          {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
        ]
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: []
      }
    ]
  }

ReactDOM.render(<App/>, document.getElementById('app'));
