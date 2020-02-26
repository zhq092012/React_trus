import React, { Component } from "react";
import BlogItem from "./BlogItem";
import { connect } from "react-redux";
import { fetchBLogList } from "../../actions/blog";
//这是一个容器组件
class BlogList extends Component {
  componentDidMount() {
    this.props.fetchBLogList();
  }
  render() {
    const { list, isLoading, errMsg } = this.props;
    const hasError = Boolean(errMsg);
    return isLoading ? (
      <div>Loading...</div>
    ) : hasError ? (
      <div>{errMsg}</div>
    ) : (
      <ul>
        {list.map(blog => {
          return <BlogItem key={blog.id} {...blog} />;
        })}
      </ul>
    );
  }
}
const mapState = state => {
  return {
    list: state.blog.list,
    isLoading: state.blog.isLoading,
    errMsg: state.blog.errMsg
  };
};
export default connect(mapState, { fetchBLogList })(BlogList);
