import React from "react";
import Modal from "./utils/Modal";

export class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: this.props.currentIndex,
      currentImageUrl: this.props.currentImageUrl,
    };
    this.handleNextImage = this.handleNextImage.bind(this);
    this.handlePrevImage = this.handlePrevImage.bind(this);
    this.upadteCurrentImage = this.upadteCurrentImage.bind(this);
  }

  componentWillReceiveProps(nextProps, prevProps) {
    if (nextProps.currentIndex !== this.state.currentIndex) {
      this.setState({ currentIndex: nextProps.currentIndex });
    }
    if (nextProps.currentImageUrl !== this.state.currentImageUrl) {
      this.setState({ currentImageUrl: nextProps.currentImageUrl });
    }
  }

  handleNextImage() {
    const id = this.state.currentIndex;
    this.setState({ currentIndex: id + 1 });
    this.upadteCurrentImage(id + 1);
  }

  handlePrevImage() {
    const id = this.state.currentIndex;
    this.setState({ currentIndex: id - 1 });
    this.upadteCurrentImage(id - 1);
  }

  upadteCurrentImage(id) {
    const { ImageList } = this.props;
    const image = ImageList.find((image) => image.id === id);
    this.setState({ currentImageUrl: image.url });
  }

  render() {
    const header = "Image Viewer";
    const modalBody = (
      <div className="image-viewer-body">
        <img src={this.state.currentImageUrl} alt="" />
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
    return (
      <Modal
        header={header}
        body={modalBody}
        footer={footer}
        showModal={true}
      />
    );
  }
}
export default ImageViewer;
