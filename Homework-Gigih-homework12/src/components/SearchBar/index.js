const SearchBar = ({ onSubmit, onChange }) => {
    return (
        <div className="search-container">
            <form onSubmit={onSubmit}>
                <input className="input-search" onChange={onChange} />
                <button type="submit" className="btn search"> Search </button>
            </form>
        </div>
    )
}

export default SearchBar;