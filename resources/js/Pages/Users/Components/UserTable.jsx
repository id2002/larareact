import { useState } from 'react';
import { useRef } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import '../../../../css/datatable.css';
import lenguaje  from '../../../../lenguaje/datatable-español.json';

DataTable.use(DT);

function UserTable() {
    const table = useRef();
    const columns = [
        { data: 'name', title: 'Nombre', className: 'text-center font-medium text-white'},
        { data: 'email', title: 'Correo', className: 'text-center font-medium text-white' },
        { data: 'created_at', title: 'Fecha de Creación', className: 'text-center font-medium text-white'},
    ];

  return (
        <DataTable
            ajax={route('datatable.users')}
            className="display table table-auto table-bordered table-striped w-full table-hover hover"
            columns={columns}
            options={{
                responsive: true,
                select: true,
                order:[2, 'asc'] , // Ordenar por la primera columna (name) en ascendente
                language:lenguaje,
            }}

            ref={table}
        >
            <thead>
                <tr>
                    <th className='text-white'>Nombre</th>
                    <th className='text-white'>Correo</th>
                    <th className='text-white'>Fecha de Creación</th>
                </tr>
            </thead>
        </DataTable>
    );
}

export default UserTable;
