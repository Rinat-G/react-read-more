import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ReadMore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };

        this.toggleExpander = this.toggleExpander.bind(this);
        this.calculateText = this.calculateText.bind(this);
        this.calculateLinkText = this.calculateLinkText.bind(this);
    }

    toggleExpander() {
        this.setState((prevState) => {
            return {expanded: !prevState.expanded}
        })

    }

    calculateText() {
        return this.state.expanded ? this.props.children : this.props.children.substr(0, this.props.stringLength)

    }

    calculateLinkText() {
        if (this.props.children.length < this.props.stringLength) {
            return
        }
        return this.state.expanded ? this.props.linkTextCollapse : this.props.linkTextExpand

    }

    render() {
        return (
            <div>
                {this.calculateText()}
                <a href={'#'} onClick={this.toggleExpander}>{this.calculateLinkText()}</a>
            </div>
        )
    }

}


ReadMore.propTypes = {
    children: PropTypes.string.isRequired,
    linkTextExpand: PropTypes.string,
    linkTextCollapse: PropTypes.string,
    stringLength: PropTypes.number
};

ReadMore.defaultProps = {
    linkTextExpand: '...',
    linkTextCollapse: '...',
    stringLength: 10,
};