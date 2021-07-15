import React from "react";
import AddComment from "./components/AddComment";
import Comment from "./components/Comment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }

  handleSetCommentList = (commentList) => {
    this.setState({ commentList });
  };

  render() {
    let commentList = this.state.commentList;
    return (
      <div className="App">
        <AddComment
          className="add-comment-div"
          commentList={commentList}
          setCommentList={this.handleSetCommentList}
        />
        {!commentList.length ? (
          <span>Hiç yorum yok.</span>
        ) : (
          <Comment className="comment-div" commentList={commentList} />
        )}
      </div>
    );
  }
}

export default App;
