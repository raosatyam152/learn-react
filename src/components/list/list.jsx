function List(props){
    const { item, category } = props;
    // const items = [{id:0, component:'monitor', price: 200},
    //     {id:1, component:'CPU', price: 300},
    //     {id:2, component:'Keyboard', price: 100},
    //     {id:3, component:'Mouse', price: 50},
    //     {id:4, component:'Printer', price: 150}];

// items.sort((a, b) => a.price - b.price); //sorts the items in ascending order based on price
// items.reverse(); //reverses the order of the items to display in descending order
// items.sort((a, b) => a.component.localeCompare(b.component)); //sorts the items in ascending order based on component name
// // replace a with b to sort in desending order Alphabetically
// items.sort((a, b) => b.component.localeCompare(a.component)); //sorts the items in descending order based on component name

// const lowPrice= items.filter(item => item.price < 300); //filters the items with price less than 300

// const highPrice= items.filter(item => item.price >= 300); //filters the items with price greater than or equal to 300

    const listItems = item.map((item) =>
        <li key={item.id}>
            {item.component} - ${item.price}
        </li>
    );
    //used key prop to help remove react error to give unique id to every component in the list
    //key is used to identify which items have changed, are added, or are removed.
    return(<>
        <h2>{category}</h2>
        <ol>
            {listItems}
        </ol>
    </>);
}
export default List;