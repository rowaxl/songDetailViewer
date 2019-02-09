import React, { Component }from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import SongItem from './SongItem';

class SongList extends Component {
    render() {
        return (
            <div className="ui divided list">
                {this.props.songs.map(e =>
                    <SongItem
                        song={e}
                        onSelect={this.props.selectSong}
                        key={e.title} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(
    mapStateToProps,
    { selectSong }
)(SongList);
