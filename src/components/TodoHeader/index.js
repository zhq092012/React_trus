import React from "react";
import PropTypes from "prop-types";
export default function TodoHeader(props) {
  return (
    <>
      <h1>{props.children}</h1>
      <h3>{props.desc}</h3>
    </>
  );
}
//检查props参数的类型 引入prop-types
TodoHeader.propTypes = {
  desc: PropTypes.string.isRequired
};
