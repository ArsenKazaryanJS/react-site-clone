import {Search} from '../Icons/Icons.jsx'
import './searchinputbox.css'



export const SearchInputBox = () => {
    return (
        <div className="search-input-box">
        <Search className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
        <span className="search-shortcut">Ctrl</span>
        <span className="search-shortcut"> K</span>
      </div>
    )
}
