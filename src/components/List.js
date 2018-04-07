import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import ListHeader from "./ListHeader";
import Cards from "./Cards";
import classnames from 'classnames';
import CardAdder from "./CardAdder";

class List extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    list: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  };

  render = () => {
    const { list, boardId, index } = this.props;
    return (
      <Draggable
        draggableId={list.id}
        index={index}
        disableInteractiveElementBlocking
      >
        {(provided, snapshot) => (
          <div>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              className="list-wrapper"
            >
              <div
                className={classnames("list", {
                  "list--drag": snapshot.isDragging
                })}
              >
                <ListHeader
                  dragHandleProps={provided.dragHandleProps}
                  listTitle={list.title}
                  listId={list.id}
                  cards={list.cards}
                  boardId={boardId}
                />
                <div className="cards-wrapper">
                  <Cards listId={list.id} />
                </div>
              </div>
              <CardAdder listId={list.id} />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  };
}

export default connect()(List);
