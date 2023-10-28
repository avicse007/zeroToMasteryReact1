import React,{ Component } from "react";
import './search-box-style.css';

// class SearchBox extends Component {

//     render() {
//         return (
//             <input type="search" 
//                 placeholder={this.props.placeholder} 
//                 onChange={this.props.onSearchChangeHandler} 
//                 className={this.props.className}
//                 />
//         );
//     }
// }

const SearchBox = ({placeholder, onSearchChangeHandler, className}) => {
    return (
        <input type="search" 
            placeholder={placeholder} 
            onChange={onSearchChangeHandler} 
            className={className}
            />
    );
}

export default SearchBox;