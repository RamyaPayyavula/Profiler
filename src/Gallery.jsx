import React from "react";
import image4 from "../src/assets/Image4.jpg";
import image5 from "../src/assets/Image5.jpg";
import image6 from "../src/assets/Image6.jpeg";
import image7 from "../src/assets/Image7.jpg";
import image8 from "../src/assets/Image8.jpg";
import image9 from "../src/assets/Image9.jpg";
import image10 from "../src/assets/Image10.jpg";
import image11 from "../src/assets/Image11.jpg";
import image12 from "../src/assets/Image12.jpg";
import ImageViewer from "./ImageViewer";

export class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      currentIndex: -1,
      currentImageUrl: null,
    };
    this.onClickOpenImageViewer = this.onClickOpenImageViewer.bind(this);
    this.onClickImageCloseCallback = this.onClickImageCloseCallback.bind(this);
  }

  onClickImageCloseCallback() {
    this.setState({ isShow: false });
  }
  onClickOpenImageViewer(image) {
    this.setState({
      isShow: true,
      currentIndex: image.id,
      currentImageUrl: image.url,
    });
  }

  render() {
    const ImageList = [
      { id: 0, url: image4 },
      { id: 1, url: image5 },
      { id: 2, url: image6 },
      { id: 3, url: image7 },
      { id: 4, url: image8 },
      { id: 5, url: image9 },
      { id: 6, url: image10 },
      { id: 7, url: image11 },
      { id: 8, url: image12 },
    ];

    return (
      <div className="app-container gallery-wrapper">
        <h1>Gallery</h1>
        <div className="gallery-container">
          {ImageList.map((image) => {
            return (
              <img
                alt="galler"
                src={image.url}
                key={image.id}
                onClick={this.onClickOpenImageViewer.bind(this, image)}
              />
            );
          })}
        </div>
        {this.state.isShow ? (
          <ImageViewer
            currentIndex={this.state.currentIndex}
            ImageList={ImageList}
            currentImageUrl={this.state.currentImageUrl}
            onClickImageCloseCallback={this.onClickImageCloseCallback}
          />
        ) : null}
      </div>
    );
  }
}
export default Gallery;
