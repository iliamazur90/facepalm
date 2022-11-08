import React from "react";
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  toggleFetching,
} from "../../../Redux/friends-reducer";
import { connect } from "react-redux";
import axios from "axios";
import Friends from "./Friends";

class friendsContainer extends React.Component {
  componentDidMount() {
        this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
        this.props.toggleFetching(false);
      });
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.toggleFetching(false);
      });
  };

  render() {
    return (
      <Friends
        users={this.props.users}
        totalUsers={this.props.totalUsers}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
        onPageChange={this.onPageChange}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.friends.users,
    pageSize: state.friends.pageSize,
    totalUsers: state.friends.totalUsers,
    currentPage: state.friends.currentPage,
    isFetching: state.friends.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  toggleFetching,
})(friendsContainer);
