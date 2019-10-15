import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Friend from './Friends';
import { getFriends } from "../actions";

class Friends extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }
    render() {
        console.log(`in render fetching status: ${this.props.fetching}`)
        console.log(`in render friends array: ${this.props.friends}`)
        return (
            <div className="friends">
                {this.props.fetchingData && (
                    <p>Loading Data...</p>
                )}
                {this.props.friends && (this.props.friends.map(friend => (
                    <div className="friend" key={friend.id}>
                </div>)))}
            </div>
        )
    }
}
Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    }))
}
const mapStateToProps = state => ({
    friends: state.friends.friends,
    fetchingData: state.friends.fetchingData
})
export default withRouter(connect (mapStateToProps, {getFriends})(Friend));