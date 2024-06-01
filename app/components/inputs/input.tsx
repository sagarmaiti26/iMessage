"use client"
import React from 'react'
import clsx from 'clsx'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
interface InputProps {
    label: String;
    id: string;
    type: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({
    label, id, type, required, register, errors, disabled
}) => {
    return (
        <div>
            <label className='block text-sm font-medium loading-6 text-gray-900' htmlFor={id}>{label}</label>
<div className='mt-2'>
    <input id={type} type={type} autoComplete={id} disabled={disabled} {...register(id,{required})} className={clsx(`
    form-input
    block
    w-full
    border-0
    shadow-sm
    rounded-md
    py-1.5
    text-gray-900
    ring-1
    ring-inset
    ring-gray-300
    placeholder:text-gray-400
    focus:ring-2
    focus:ring-inset
    focus:ring-green-600
    sm:text-sm
    sm:loading-6`,
    errors[id] && "focus:ring-rose-500",
    disabled &&"opacity-50 cursor-default")}/>
</div>
        </div>
    )
}

export default Input