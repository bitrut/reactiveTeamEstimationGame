import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import slugify from "slugify";
import Header from "./Header";
import BoardAdder from "./BoardAdder";
import classnames from 'classnames';

class Home extends React.Component {
  static propTypes = {
    boards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    lists: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render = () => {
    const { boards, lists, history } = this.props;
    return (
      <div>
        <Helmet>
          <title>Home | React Kanban</title>
        </Helmet>
        <Header />
        <div className="home">
          <div className="main-content">
            <h1>Boards</h1>
            <div className="boards">
              {boards.map(board => (
                <Link
                  key={board.id}
                  className={classnames("board-link", board.color)}
                  to={`/b/${board.id}/${slugify(board.title, {
                    lower: true
                  })}`}
                >
                  <div className="board-link-title">{board.title}</div>
                  <div className="mini-board">
                    {board.lists.map(listId => (
                      <div
                        key={listId}
                        className="mini-list"
                        style={{
                          height: `${Math.min(
                            (lists[listId].cards.length + 1) * 18,
                            100
                          )}%`
                        }}
                      />
                    ))}
                  </div>
                </Link>
              ))}
              <BoardAdder history={history} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}
const mapStateToProps = (state) => {
  return {
    boards: Object.values(state.Boards),
    lists: state.Lists
  };
}
export default connect(mapStateToProps)(Home);