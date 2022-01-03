import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { getHomeList } from "./store/action";

class Home extends Component {
  componentDidMount() {
    this.props.getHomeList();
  }

  render() {
    return (
      <div>
        <Header />
        <div
          onClick={() => {
            alert("Home");
          }}
        >
          This is {this.props.name}
        </div>

        <button onClick={this.props.addEle}>添加</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.home.name,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
