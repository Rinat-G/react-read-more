import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ReadMoreDivs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };

        this.toggleExpander = this.toggleExpander.bind(this);
        this.calculateChildren = this.calculateChildren.bind(this);
        this.calculateLinkText = this.calculateLinkText.bind(this);
    }

    toggleExpander() {
        this.setState((prevState) => {
            return {expanded: !prevState.expanded}
        })

    }

    calculateChildren() {
        if (Array.isArray(this.props.children)) {
            return this.state.expanded ? this.props.children : this.props.children.slice(0, this.props.elementsAmount)
        }
        return this.state.children

    }

    calculateLinkText() {
        if (!Array.isArray(this.props.children) || this.props.children.length < this.props.elementsAmount) {
            return
        }
        return this.state.expanded ? this.props.linkTextCollapse : this.props.linkTextExpand

    }

    render() {
        return (
            <div>
                {this.calculateChildren()}
                <a href={'#'} onClick={this.toggleExpander}>{this.calculateLinkText()}</a>
            </div>
        )
    }

}


ReadMoreDivs.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]),
    linkTextExpand: PropTypes.string,
    linkTextCollapse: PropTypes.string,
    elementsAmount: PropTypes.number
};

ReadMoreDivs.defaultProps = {
    linkTextExpand: '...',
    linkTextCollapse: '...',
    elementsAmount: 3,
};