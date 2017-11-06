import React from "react";

class Film extends React.Component {

  render() {
    return (
      <div className="film">
        <h3 className="film-name">
          { this.props.name }
        </h3>
        <p className="film-details">
        { this.props.children }
        </p>
      </div>
    )
  }
}

export default Film;
