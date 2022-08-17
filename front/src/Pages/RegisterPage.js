import React from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLockOpen} from "@fortawesome/free-solid-svg-icons";

const LoginPage = (props) =>{

    const registerSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('email address is required'),
        password: Yup.string().min(4,'Password should be longer than 4 character').required('password address is required'),
        RetypePassword: Yup.string().oneOf([Yup.ref('password'),null],'Password must match')
    })

    const intialRegisterValue = {
        email:'',
        password:''
    }

    const submitRegisterSchema = (values) =>{
        console.table(values)
    }

    return(
        <div className="w-screen h-screen flex">
            <div className="w-3/6 flex justify-center items-center w-full">
                <div className="max-w-md w-full space-y-8">
                    <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
                        Register your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Login to Account
                        </a>
                    </p>
                    <Formik initialValues={intialRegisterValue} validationSchema={registerSchema} onSubmit={submitRegisterSchema}>
                        {({values,errors,touched, handleChange,handleSubmit,isSubmitting})=>(
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email Address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-t-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
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
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="Retype-Password" className="sr-only">
                                    Retype-Password
                                </label>
                                <input
                                    id="Retype-Password"
                                    name="Retype-Password"
                                    type="password"
                                    autoComplete="Retype-Password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Retype-Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FontAwesomeIcon icon={faLockOpen}/>
                </span>
                                Sign up
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