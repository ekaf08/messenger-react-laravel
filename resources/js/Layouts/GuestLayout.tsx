import ApplicationLogo from '@/components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-secondary">
            <div className='flex w-full max-w-md flex-col space-y-6 overflow-hidden rounded-lg bg-background p-6 shadow-md'>
                <Link href="/" className='mx-auto w-20'>
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>

                {children}

            </div>
        </div>
    );
}
