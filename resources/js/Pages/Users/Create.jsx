import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BtnLink from '@/Components/BtnLink';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelecSimple from '@/Components/SelecSimple';

export default function Create({ genders, documentTypes, statuses }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('users.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Crear Usuario
                </h2>
            }
        >
            <Head title="Crear Usuario" />

            <div className="py-0 mt-3">
                <div className="mx-auto max-w-lg sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className='p-3'>
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="name" value="Nombre" />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="email" value="Correo" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="gender" value="Género" />

                                    <SelecSimple
                                        id="gender"
                                        name="gender"
                                        label="Género"
                                        value={data.gender}
                                        options={Object.entries(genders).map(([value, label]) => ({ value, label }))}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(selected) => setData('gender', selected?.value)}
                                    />

                                    <InputError message={errors.gender} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="type_document" value="Tipo de Documento" />
                                    <SelecSimple
                                        id="type_document"
                                        name="type_document"
                                        label="Tipo de Documento"
                                        options={Object.entries(documentTypes).map(([value, label]) => ({ value, label }))}
                                        className="mt-1 block w-full"
                                        value={data.document_type}
                                        isFocused={true}
                                        onChange={(selected) => setData('document_type', selected?.value)}
                                    />
                                </div>

                                <div className="mt-4">

                                    <InputLabel htmlFor="status" value="Estado" />
                                    <SelecSimple
                                        id="status"
                                        name="status"
                                        label="Estado"
                                        options={Object.entries(statuses).map(([value, label]) => ({ value, label }))}
                                        className="mt-1 block w-full"
                                        value={data.status}
                                        isFocused={true}
                                        onChange={(selected) => setData('status', selected?.value)}
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="password" value="Contraseña" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Confirmar Contraseña"
                                    />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData('password_confirmation', e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>


                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Crear
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

