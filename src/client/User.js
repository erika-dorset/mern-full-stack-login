import React from 'react';

const imageIcon = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png';

// define one single user card component
class User extends React.Component {
  render() {
    return (
      <div className="column is-2" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{this.props.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
