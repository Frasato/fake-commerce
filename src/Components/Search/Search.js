import '../../Styles/search.scss';

export default function Search(props){
    return(
        <div className="container-search">
            <input type="text" value={props.valueField} onChange={props.searchFunction} placeholder='Find what you want...'/>
        </div>
    );
}