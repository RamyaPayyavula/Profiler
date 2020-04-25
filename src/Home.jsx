import React from "react";
import pic from "./assets/profile-pic.jpg";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-container">
        <img src={pic} />
      </div>
    );
  }
}
export default Home;
