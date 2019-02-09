import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
        console.log('song detail props: ', this.props)
        if (this.props.selectedSong !== null) {
            return (
                <div>
                    <h3>Details for:</h3>
                    <p>
                        Title: {this.props.selectedSong.title}
                        <br />
                        Duration: {this.props.selectedSong.duration}
                    </p>
                </div>
            );
        }

        return (
            <div>Loading...</div>
        )
    }
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);