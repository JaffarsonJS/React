import React from "react";
import MaterialTable from 'material-table';
// import 'material-table/core/styles.css';

export const Table = () => {
    const data = [
        { name: "Aarif", age: 22 },
        { name: "Gopi", age: 21 }
    ];
    const columns = [
        { title: "Name", field: "name" },
        { title: "Age", field: "age" }
    ];

    return (
        <div>
            <MaterialTable
                title="MaterialTable"
                data={data}
                columns={columns}
            />
        </div>
    );
}
