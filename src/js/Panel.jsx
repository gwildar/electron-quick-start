import React, { PropTypes } from 'react';


const Panel = (props) =>
  <div className="panel panel-default">
    <div className="panel-body">
      panel no. {props.panelNo}<br />
      2 - 1
    </div>
  </div>;

Panel.propTypes = {
  panelNo: PropTypes.string,
};

export default Panel;
