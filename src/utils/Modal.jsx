import React from "react";
import closeIcon from "../../src/assets/close.png";
export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal,
    };
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillReceiveProps(nextProps, prevProps) {
    if (nextProps.showModal !== this.state.showModal) {
      this.setState({ showModal: nextProps.showModal });
    }
  }
  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { header, body, footer } = this.props;
    return this.state.showModal ? (
      <div id="overlay">
        <div className="modal-wrapper">
          <div className="modal-close" onClick={this.closeModal}>
            <img src={closeIcon} width="24px" alt="close" />
          </div>
          <div className="modal-container">
            <div className="modal-header">{header}</div>
            <div className="modal-body">{body}</div>
            <div className="modal-footer">{footer}</div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
