'use client';

import Table, {TableBody, TableCell, TableHead, TableRow} from "@/app/components/table/Table";
import {useState} from "react";

function sortData(column, rowData,order) {
    let asc = order[column.field];
    let type = 'string';
    if (column.type === 'number') {
        type = 'number';
    }
    if (type === 'string') {
        rowData.sort((a, b) => {
            let str1 = a[column.field];
            let str2 = b[column.field];
            if (!str1) {
                str1 = '';
            }
            if (!str2) {
                str2 = '';
            }
            if(asc)
            {
                return str1.localeCompare(str2);
            }
            else
            {
                return str2.localeCompare(str1);
            }
        })
    } else {
        rowData.sort((a, b) => {
            if(asc)
            {
                return a[column.field] - (b[column.field]);
            }
            else
            {
                return b[column.field] - (a[column.field]);
            }
        })
    }
}

function toOrderObject(columns)
{
    let obj = {};
    columns.forEach(column => {
        obj[column.field] = true;
    })
    return obj;
}
export default function Datagrid({columns,rows})
{
    const fields = columns.map(column => column.field);

    const [rowData,setRowData] = useState(rows);
    const [order,setOrder]=useState(toOrderObject(columns));

    //console.log('Fields ', fields);
    //console.log('Order ',order);
    console.log('rowData',rowData);
    const onClickHeader = column => {
        console.log('Click on header ',column.field, ' type ',column.type);

        sortData(column, rowData,order);

        setRowData([...rowData]);
        setOrder({
            ...order,
            [column.field]: !order[column.field],
        });
    };
    const cellUpdateHandler = (rowIndex,field, cellValue) => {
        console.log('cell update data Index ',rowIndex, 'field ', field, ' cell ', cellValue);
        let newData = [...rowData];
        newData[rowIndex][field] = cellValue;
        setRowData(newData );
    }
    return (<Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <input type={"checkbox"}/>
                    </TableCell>
                    {
                        columns.map((column, index) => <TableCell onClick={()=>onClickHeader(column)}
                            key={column.field}
                            style={{
                                width: column.width,
                            }}>
                            {column.headerName } { order[column.field]?'⬇':'⬆' }
                        </TableCell>)
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rowData.map((row, rowIndex) =><TableRow key={row.id}>
                        <TableCell>
                            <input type={"checkbox"}/>
                        </TableCell>
                        {
                            fields.map((field,index)=><TableCell
                                onUpdate = {(data)=>cellUpdateHandler(rowIndex,field,data)}
                                key={index}
                                editable={true}>
                                {row[field]}
                            </TableCell>)
                        }
                    </TableRow>)
                }
            </TableBody>
        </Table>);
}