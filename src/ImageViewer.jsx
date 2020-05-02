import React from "react";
import Modal from "./utils/Modal";

export class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
      currentIndex: this.props.currentIndex,
      currentImageUrl: this.props.currentImageUrl,
    };
    this.handleNextImage = this.handleNextImage.bind(this);
    this.handlePrevImage = this.handlePrevImage.bind(this);
    this.upadteCurrentImage = this.upadteCurrentImage.bind(this);
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleNextImage() {
    const id = this.state.currentIndex;
    this.setState({ currentIndex: id + 1 });
    this.upadteCurrentImage();
  }

  handlePrevImage() {
    const id = this.state.currentIndex;
    this.setState({ currentIndex: id - 1 });
    this.upadteCurrentImage();
  }

  upadteCurrentImage() {
    const { ImageList } = this.props;
    const image = ImageList.find(
      (image) => image.id === this.state.currentIndex
    );
    this.setState({ currentImageUrl: image.url });
  }

  render() {
    const header = "Image Viewer";
    const modalBody = (
      <div className="image-viewer-body">
        <img src={this.state.currentImageUrl} />
      </div>
    );
    const footer = (
      <>
        {this.state.currentIndex > 0 ? (
          <button onClick={this.handlePrevImage} className="prev-button">
            Previous Image
          </button>
        ) : null}
        {this.state.currentIndex < 8 ? (
          <button onClick={this.handleNextImage}>Next Image</button>
        ) : null}
      </>
    );

    return <Modal header={header} body={modalBody} footer={footer} />;
  }
}
export default ImageViewer;
