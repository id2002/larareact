import { useState } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';


DataTable.use(DT);

function UserTable() {
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
            order={[
                [0, 'asc'], // Ordenar por la primera columna (name) en ascendente
            ]}
            language={{
                url: 'https://cdn.datatables.net/plug-ins/2.0.2/i18n/es-ES.json',
            }}
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
