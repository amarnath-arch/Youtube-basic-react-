import React,{Component} from 'react';


class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={terms:''};
        this.onInputChangeHandler=this.onInputChangeHandler.bind(this);
    }

    // state={
    //     term:' '
    // }

    onInputChangeHandler(event){
        this.setState({terms: event.target.value });
        this.props.onSearch(event.target.value);
    }

    render(){
        return (
            <div className="search-bar">
                <input value={this.state.terms} onChange={this.onInputChangeHandler} placeholder="search"/>
            </div>
        );
    }
}

export default SearchBar;