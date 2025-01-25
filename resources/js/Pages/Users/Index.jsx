import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UserTable from './Components/UserTable';
import BtnLink from '@/Components/BtnLink';

export default function Index() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Usuarios
                </h2>
            }
        >
            <Head title="Usuarios" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 flex justify-between">
                        <div className="p-6 text-gray-900 dark:text-gray-100 self-center">
                            Usuarios
                        </div>
                        <div className='p-6 text-gray-900 dark:text-gray-100'>
                            <BtnLink className="p-6 text-gray-900 dark:text-gray-100 " href={route('users.create')}>
                                +
                            </BtnLink>
                        </div>

                    </div>
                </div>
            </div>
            <div className="py-0">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className='table-responsive'>
                            <UserTable className="display table table-auto table-bordered table-striped w-full table-hover hover">

                            </UserTable>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
