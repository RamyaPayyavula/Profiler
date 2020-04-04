import React from "react";

import pic from "./assets/main_pic.jpg";

export class Protofolio extends React.Component {
  render() {
    return (
      <div>
        <img src={pic} height="200" width="200" className="profile-pic" />
        <h1>Sai Siva Kumar Pinnepalli</h1>
      </div>
    );
  }
}
export default Protofolio;
