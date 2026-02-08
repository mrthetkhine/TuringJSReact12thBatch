'use client';

import Table, {TableBody, TableCell, TableHead, TableRow} from "@/app/components/table/Table";

const todoList = [
    {
        id:1,
        title :'Task1',
        completed:true,
    },
    {
        id:2,
        title :'Task2',
        completed:true,
    },
    {
        id:3,
        title :'Task3',
        completed:true,
    },
]
export default function TableDemo()
{
    return(<div>
       
        <Table style={{'min-width':'650px'}}>
            <TableHead>
                <TableRow>
                    <TableCell component="th">
                        Id
                    </TableCell>
                    <TableCell component="th">
                        Title
                    </TableCell>
                    <TableCell component="th">
                        Completed
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    todoList.map(row=><TableRow key={row.id}>
                        <TableCell >
                            {row.id}
                        </TableCell>
                        <TableCell >
                            {row.title}
                        </TableCell>
                        <TableCell >
                            {row.completed.toString()}
                        </TableCell>
                    </TableRow>)
                }
               {/* <TableRow>
                    <TableCell>
                            1
                    </TableCell>
                    <TableCell>
                        Task 1
                    </TableCell>
                    <TableCell>
                        false
                    </TableCell>
                </TableRow>*/}
            </TableBody>
        </Table>
    </div>);
}