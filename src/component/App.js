import React from "react";
import Restors from './Restors'
import TapBar from './TapBar'
import './App.css';

export default class App extends React.Component {
    render() {
        const restors = [
            {id: 1, srcImg: './imgs/nagoya.webp', title: 'NAGOYA', rating: '4.1', firstTag: 'Japan', secondTag: 'Ramen'},
            {id: 2, srcImg: './imgs/nagoya.webp', title: 'RamenClub', rating: '4.8', firstTag: 'Japan'}
          ];
          
        return (
            <div className="app">
                <Restors restors={restors} />,
                <TapBar />
            </div>
        )
    }
}