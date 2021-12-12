import React from "react";
import {Formik, Form} from "formik";
import * as Yup from 'yup'
import css from './Login.module.css'

const formSchema = Yup.object().shape({
    email: Yup.string().required('enter email').email(),
    password: Yup.string().required('enter password').min(6),
})

function Login(){
    return (
        <div>
            <Formik initialValues={{
                email:"",
                password:""
            }}
                    validationSchema={formSchema}
                    onSubmit={(data)=> console.log(data)}>
                {({
                    handleSubmit,
                    handleChange,
                    // handleBlur,
                    values,
                    errors,


                  }) => {
                    console.log(errors)
                    return(
                        <div>

                            <form  className={css.form} onSubmit={handleSubmit}>

                                <div className={css.inputWrapper}>
                                    <label>Email:</label>
                                    <input className={css.inputs} type="text"
                                           name={'email'}
                                           value={values.email}
                                           onChange={handleChange}
                                        // onBlur={handleBlur}
                                           placeholder={'Email'}/>
                                    {errors.email  && <p style={{color:"red"}} className={'error'}>{errors.email}</p>}
                                </div>
                                <div className={css.inputWrapper}>
                                    <label>Password:</label>
                                    <input className={css.inputs} type="text"
                                           name={'password'}
                                           value={values.password}
                                           onChange={handleChange}
                                        // onBlur={handleBlur}
                                           placeholder={'Password'}/>
                                    {errors.password  && <p style={{color:"red"}} className={'error'}>{errors.password}</p>}

                                </div>

                                <button className={css.btnLogin} type={'submit'}>Submit</button>
                                <p>Dont have Account ? <a href={'/Register'}>Register here</a></p>
                            </form>
                        </div>

                    )
                }}
            </Formik>
        </div>
    )
}
export default Login
