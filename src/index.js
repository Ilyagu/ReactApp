import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


function Restor(props) {
  return (
    <div className="restor">
      <div className="restorContainerImg">
        <img src={require('./imgs/nagoya.webp')} alt="NOIMG" />
      </div>
      <div className="restorContainerInfo">
        <div className="restorName">
          {props.restor.title}
        </div>
        <div className="restorRating">
          <img src={require('./imgs/star.png')} alt="NOIMG" />
          <p>{props.restor.rating}</p>
        </div>
      </div>
    </div>
  );
}

function Restors(props) {
  const restorsList = props.restors.map((restor) =>
    <Restor key={restor.id} restor={restor} />
  );
  return (
    <div>
      {restorsList}
    </div>
  );
}

const restors = [
  {id: 1, srcImg: './imgs/nagoya.webp', title: 'NAGOYA', rating: "4.8"},
  {id: 2, srcImg: './imgs/nagoya.webp', title: 'NAGOYA', rating: "4.8"}
];
ReactDOM.render(
  <Restors restors={restors} />,
  document.getElementById("root")
);
