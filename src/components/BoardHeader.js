import React from "react";
import BoardTitle from "./BoardTitle";
import ColorPicker from "./ColorPicker";
import BoardDeleter from "./BoardDeleter";
import ImportModal from "./ImportModal";

class BoardHeader extends React.Component{
  constructor() {
    super();
    this.state = {
      isModalOpen: false
    };
  }
  
  render() {
    return (
      <div className="board-header">
        <BoardTitle />
        <div className="board-header-right">
          <ColorPicker />
          <div className="vertical-line" />
          <BoardDeleter />
          <ImportModal
              isOpen={isModalOpen}
            />
        </div>
      </div>
    );
  }
}

export default BoardHeader;
