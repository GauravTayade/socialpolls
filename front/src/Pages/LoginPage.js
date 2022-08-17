import React from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLockOpen} from "@fortawesome/free-solid-svg-icons";

const LoginPage = (props) =>{

    const loginSchema = Yup.object().shape({
        username: Yup.string().min(4,'Enter valid username').email('Invalid email address').required('username is required'),
        password: Yup.string().min(4,'Enter valid password').required('Password is required')
    })

    const initialUserValue = {
        username:'',
        password:''
    }

    const submitLoginSchema= (values) =>{
           console.table(values)
    }

    return(
        <div className="w-screen h-screen flex">
            <div className="w-3/6 flex justify-center items-center w-full">
                <div className="max-w-md w-full space-y-8">
                    <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Create a Account
                        </a>
                    </p>
                    <Formik initialValues={initialUserValue} validationSchema={loginSchema} onSubmit={submitLoginSchema}>
                        {({values,errors,touched, handleChange,handleSubmit,isSubmitting})=>(
                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <label htmlFor="username-input" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="username-input"
                                            name="username"
                                            type="email"
                                            autoComplete="username"
                                            required
                                            onChange={handleChange}
                                            value={values.username}
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="username"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            onChange={handleChange}
                                            value={values.password}
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <FontAwesomeIcon icon={faLockOpen}/>
                                        </span>
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>

                </div>
            </div>
            <div className="w-4/6 bg-loginPageBg bg-cover bg-right">

            </div>

        </div>
    )

}

export default LoginPage;