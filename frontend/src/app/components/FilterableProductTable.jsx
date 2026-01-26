'use client';
import {useState} from "react";
import './FilterableProductTable.css';
function SearchBar({onChange})
{
    const [filter, setFilter] = useState('');
    const [inStock, setInStock] = useState(false);
    const filterOnChange = (e) => {
        setFilter(e.target.value);
        onChange({
            filter:e.target.value,
            inStock,
        })
    }
    const inStockOnChange = (e) => {
        setInStock(e.target.checked);
        onChange({
            filter,
            inStock:e.target.checked,
        })
    }
    return(<div>
        <form>
            <div>
                <input type={"text"} value={filter} onChange={filterOnChange}/>
            </div>
            <div>
                <input type={"checkbox"} checked={inStock} onChange={inStockOnChange}/>Only show product in stock
            </div>
        </form>
    </div>);
}
function ProductTable({products}){
    return(<div>
        <div className={'product-name'}>Name </div>
        <div className={'product-price'}>Price </div>
        <ProductCategoryRow products={products}/>

        <ProductCategoryRow products={products}/>
    </div>);
}
function ProductCategoryRow({products}){
    let category = products[0].category;
    return(<div>
        <h3 className={'product-category'}>{category}</h3>
        <ProductRow products={products}/>
    </div>);
}
function ProductRow({products}){
    return(<div>
        {
            products.map( (product, index) => (
                <div  key={index} >

                    <div className={'product-name'}>
                        {product.name}
                    </div>
                    <div className={'product-price'}>
                        {product.price}
                    </div>
                </div>
            ))
        }
    </div>);
}
export default function FilterableProductTable()
{
    const searchBarChange=(filterData)=>{
        console.log('Parent search bar change',filterData);
    }
    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];
    return(<div>
        <SearchBar onChange = {searchBarChange}/>
        <ProductTable products={products}/>
    </div>);
}