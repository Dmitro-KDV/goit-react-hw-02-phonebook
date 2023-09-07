export const Filter = ({formThis}) => {
    return ( 
        <>
        <h4>Find contacts by name</h4>
        <input
            type="text"
            name="filter"
            onChange={formThis.handleChange}
            value={formThis.state.filter}
        />
        </>
    );
}