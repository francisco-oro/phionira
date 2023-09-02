import { getAuthSession } from '@/lib/auth'
import { InfoIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'
import CreateCourseForm from '@/components/CreateCourseForm';

type Props = {}

const CreatePage = async (props: Props) => {
    const session = await getAuthSession();

    if (!session?.user) {
        return redirect('/gallery');
    }
  return (
    <div className='flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-8'>
      <h1 className='self-center text-3xl font-bold my-6 text-center sm:text-6xl'>
        Crear un nuevo curso
      </h1>
      <div className='flex p-4 mt-5 border-none bg-secondary'>
        <InfoIcon className='w-12 h-12 mr-3 text-blue-400'></InfoIcon>
        <div>
          Ingresa un título para el curso que deseas crear. A continuación, enlista las unidades de aprendizaje, de forma específica y ordenada. 
        </div>
      </div>
      <CreateCourseForm></CreateCourseForm>
    </div>
  )
}

export default CreatePage