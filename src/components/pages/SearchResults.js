const SearchResults = (props) => {
    {console.log('💰', props.content.data)}
    return (
        <div className="container">
            <div className="search-results">
                <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1>
                <h1>{props.searchQuery}</h1>
            </div>
        </div>
    );
}

export default SearchResults;