function ItemList(){
    const items =[
        {id:1,name:'Apple'},
        {id:2,name:'pineApple'},
        {id:3,name:'Cheery'},
    ];

    return (
        <ul>
            {items.map(items=>(
                <li key={items.id}>
                    {items.name}
                </li>
            ))}
        </ul>
    )
}
 export default ItemList