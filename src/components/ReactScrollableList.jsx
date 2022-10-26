import React, { Component } from "react";

export default class ScrollableList extends Component {
  static defaultProps = {
    listItems: [],
    heightOfItem: 30,
    maxItemsToRender: 50,
  };
  constructor(props) {
    super(props);
    this.state = { scrollPosition: 0 };
    this.list = null;

    this.setListRef = (element) => {
      this.list = element;
    };
    this.onItemClick = (element) => {
      console.log("clicked on list item!");
    };

    this.updateScrollPosition = this.updateScrollPosition.bind(this);
  }
  componentDidMount() {
    this.list.addEventListener("scroll", this.updateScrollPosition);
  }
  componentWillUnmount() {
    this.list.removeEventListener("scroll", this.updateScrollPosition);
  }
  updateScrollPosition() {
    const newScrollPosition = this.list.scrollTop / this.props.heightOfItem;
    const difference = Math.abs(this.state.scrollPosition - newScrollPosition);

    if (difference >= this.props.maxItemsToRender / 5) {
      this.setState({ scrollPosition: newScrollPosition });
    }
  }
  render() {
    const startPosition =
      this.state.scrollPosition - this.props.maxItemsToRender > 0
        ? this.state.scrollPosition - this.props.maxItemsToRender
        : 0;

    const endPosition =
      this.state.scrollPosition + this.props.maxItemsToRender >=
      this.props.listItems.length
        ? this.props.listItems.length
        : this.state.scrollPosition + this.props.maxItemsToRender;

    return (
      <div
        className="react-scrollable-list"
        ref={this.setListRef}
        style={this.props.style}
      >
        <div
          key="list-spacer-top"
          style={{
            height: startPosition * this.props.heightOfItem,
          }}
        />
        {this.props.listItems.slice(startPosition, endPosition).map((item) => (
          <div
            className="react-scrollable-list-item"
            key={"list-item-" + item.id}
            onClick={() => this.props.onItemClick(item.content)}
          >
            {item.content}
          </div>
        ))}
        <div
          key="list-spacer-bottom"
          style={{
            height:
              this.props.listItems.length * this.props.heightOfItem -
              endPosition * this.props.heightOfItem,
          }}
        />
      </div>
    );
  }
}
