const SearchBar = ({ actQuery, setActQuery }) => (
    <form action="/" method="get">
        <input
       		value={actQuery}
       		onInput={a => setActQuery(a.target.value)}
            type="text"
            id="ActivitiySearch"
            placeholder="Search for an activity..."
            name="Act" 
        />
    </form>
);

export default SearchBar;