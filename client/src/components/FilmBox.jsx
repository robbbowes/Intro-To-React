import React from "react";
import FilmList from "./FilmList";

class FilmBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{id: 1, name: "Sausage Party", time: "17:00"},
            {id: 2, name: "Café Society", time: "19:00"},
            {id: 3, name: "Morgan", time: "13:00"},
            {id: 4, name: "The 9th Life of Louis Drax", time: "15:00"},
            {id: 5, name: "Naam Hai Akira", time: "20:00"},
            {id: 6, name: "Equity", time: "21:00"},
            {id: 7, name: "Things To Come", time: "18:00"}
    ]}
  }

  render() {
    return (
      <div className="film-box">
        <FilmList data={this.state.data} />
      </div>
    )
  }
}

export default FilmBox;
