import { CiSearch } from "react-icons/ci";
function Search() {
    return (
        <div className="search">
            <input placeholder="What u wont?"></input>
            <CiSearch style={{ fontSize: '20px' }} />
        </div>
    );
}
export default Search;