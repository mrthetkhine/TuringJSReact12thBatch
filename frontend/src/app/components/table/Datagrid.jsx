'use client';

import Table, {TableBody, TableCell, TableHead, TableRow} from "@/app/components/table/Table";
import {useState} from "react";

function sortData(column, rowData) {
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
            return str1.localeCompare(str2);
        })
    } else {
        rowData.sort((a, b) => {
            return a[column.field] - (b[column.field]);
        })
    }
}

export default function Datagrid({columns,rows})
{
    const fields = columns.map(column => column.field);

    const [rowData,setRowData] = useState(rows);
    
    console.log('Fields ', fields);
    const onClickHeader = column => {
        console.log('Click on header ',column.field, ' type ',column.type);

        sortData(column, rowData);
        setRowData([...rowData]);
    };
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
                            {column.headerName}
                        </TableCell>)
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rowData.map((row, index) =><TableRow key={row.id}>
                        <TableCell>
                            <input type={"checkbox"}/>
                        </TableCell>
                        {
                            fields.map((field,index)=><TableCell key={index}>
                                {row[field]}
                            </TableCell>)
                        }
                    </TableRow>)
                }
            </TableBody>
        </Table>);
}