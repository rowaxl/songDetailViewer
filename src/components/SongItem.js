import React, { Component } from 'react';

class SongItem extends Component {
    render() {
        return (
            <div className="item">
                <div className="right floated content">
                    <button
                        className="ui button primary"
                        onClick={() => this.props.onSelect(this.props.song)}
                    >
                        Select
                    </button>
                </div>
                <div className="content">
                    Title: {this.props.song.title}
                </div>
            </div>
        )
    }
}

export default SongItem;