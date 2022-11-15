import React, { useEffect } from 'react';
import {
  setUserProfile,
} from '../../../../Redux/profiles-reducer';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileInfo from './ProfileInfo';

const ProfilesContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    // this.props.toggleFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        props.setUserProfile(response.data);
        // this.props.toggleFetching(false);
      });
  }, [userId]
  )

    return <ProfileInfo { ...props } />;
}

const mapStateToProps = state => {
  return {
    profile: state.profiles.profile,
    isFetching: state.profiles.isFetching,
  };
};


export default connect(mapStateToProps, {
  setUserProfile,
})(ProfilesContainer);
