import React from "react";
import Film from "./Film.jsx";

class FilmList extends React.Component {

  render() {

    const films = this.props.data.map(function(film) {
      return (
        <Film name={film.name} key={film.id}>
          {film.time}
        </Film>
      )
    })

    return (
      <div className="film-list">
        {films}
      </div>
    )
  }
}

export default FilmList;
