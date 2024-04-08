"use client";
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { PassThrough } from 'stream';
import Input from './inputs/input';
import Button from './Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';
type Variant = 'LOGIN' | 'REGISTER'
const AuthForm = () => {
  const [variant, setVarint] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant == 'LOGIN') {
      setVarint('REGISTER');
    } else {
      setVarint('LOGIN');
    }
  }, [variant])
  const { register, handleSubmit, formState: {
    errors
  } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant == 'REGISTER') {
      // Axios reg
    }
    if (variant == 'LOGIN') {
      //next auth signin
    }
  }
  const socialAction = (action: String) => {
    setIsLoading(true);
    //next auth social sign in
  }
  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form className='space-y-6 ' onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (<Input type='' errors={errors} label="Name" register={register} id='name' disabled={isLoading} />)}
          <Input type='email' errors={errors} label="Email" register={register} id='email' disabled={isLoading} />
          <Input type='password' errors={errors} label="Password" register={register} id='password' disabled={isLoading} />
          <div>
            <Button disabled={isLoading} fullWidth type='submit'>{variant === 'LOGIN' ? 'Sign In' : 'Register'}</Button>
          </div>
        </form>
        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute
             inset-0  
             flex 
             items-center'>
              <div className='w-full
               border-t
                border-gray-300'/>



            </div>
            <div className='relative 
               flex
               justify-center
               text-sm'>
              <span className='bg-white px-2 text-gray-500'>Or continue with
              </span>
            </div>
          </div>
          <div className='mt-6 flex gap-2'>
            <AuthSocialButton onClick={() => socialAction('google')} icon={BsGoogle} />
            <AuthSocialButton onClick={() => socialAction('github')} icon={BsGithub} />

          </div>

        </div>
        <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
          <div>{variant==='LOGIN'?'New to Messenger':'Already have an Account'}</div>
          <div onClick={toggleVariant} className='underline cursor-pointer'>{variant==='LOGIN'?'Create an  account':'Sign In'}</div>
        </div>
      </div>

    </div>
  )
}

export default AuthForm