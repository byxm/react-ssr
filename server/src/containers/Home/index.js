import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { getHomeList, createDispatch } from "./store/action";

class Home extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
  }

  getHomeList() {
    return (
      <ul>
        {this.props.list.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.getHomeList()}</div>
        <button onClick={this.props.addEle}>添加</button>
      </div>
    );
  }
}

Home.loadData = (store) => {
  // 在路由加载的时候执行，获取一些初始化的数据
  return store.dispatch(getHomeList());
};

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.list,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
