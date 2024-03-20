import "./searchbar.css";

const SearchBar = () => {
    return(
    <div className="searchbar"> 
        <p>DEVDeakin</p>   
        <input type="search" placeholder='search' />
        <p>Post</p>
        <p>Login</p>
    </div>
    );
};

export default SearchBar;