import React from 'react';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from '../../../Redux/friends-reducer';
import { connect } from 'react-redux';
import Friends from './Friends';

class friendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <Friends
        users={this.props.users}
        totalUsers={this.props.totalUsers}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        onPageChange={this.onPageChange}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    followingInProgress: state.friends.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(friendsContainer);
