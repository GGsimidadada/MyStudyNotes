//./src/Content.js
import React, {
	Component
} from "react";
import PropTypes from "prop-types";
import ThemeSwitch from "./ThemeSwitch";
import { connect } from './react-redux';

class Content extends Component {
	render() {
		return (
			<div>
				<p style={{ color: this.props.themeColor }}> this is content </p>
				<ThemeSwitch />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
  return {
    themeColor: state.themeColor
  }
};

Content = connect(mapStateToProps)(Content);

export default Content;
