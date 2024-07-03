import clsx from 'clsx';
import React from 'react'

type FormAlertProps = {
    message: string;
    className?: string; //classmame boleh nullable 
}

export default function FormAlert({message, className} : FormAlertProps) {
  return (
    <div className={clsx("rounded-lg bg-success/25 px-4 py-3 font-medium text-success-dark dark:bg-success/10", className)}>
        {message}
    </div>
  )
}
