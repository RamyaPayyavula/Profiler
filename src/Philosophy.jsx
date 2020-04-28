import React from "react";
import philosophyPDF from "../src/docs/TeachingPhilosophyStatement.pdf";

export class Labs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="philosophy-container">
        <iframe src={philosophyPDF} height="100%" width="100%"></iframe>
      </div>
    );
  }
}
export default Labs;
