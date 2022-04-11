const TracksContainer = ({ imgSrc, title, artists, album, isSelected, handleSelectTrack, uri }) => {
    return (
        <div className="song-container">
            <div className="img-container">
                <img src={imgSrc} alt={album} className="img album" />
            </div>
            <div className="description">
                <p className="title"> {title}</p>
                <p className="artists">{artists.map(artist => artist.name).join(', ')}</p>
                <p className="album">{album}</p>
            </div>
            <button className={isSelected? "btn selected" : "btn unselected"} onClick={() => handleSelectTrack(uri)}> {isSelected ? 'Deselect' : 'Select'} </button>
        </div>
    );
}

export default TracksContainer;