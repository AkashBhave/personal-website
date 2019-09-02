import React, { useState } from 'react'

import axios from 'axios'

import ReactQuill from 'react-quill'
import ReCAPTCHA from 'react-google-recaptcha'
import Layout from '../layouts/default'
import SEO from '../utils/seo'
import PageTitle from '../components/PageTitle'

import 'react-quill/dist/quill.snow.css'
import styles from './contact.module.css'

const ContactPage = () => {
    const [formFields, setFormFields] = useState({
        'first-name': '',
        'last-name': '',
        subject: '',
        email: ''
    })
    const [formEditor, setFormEditor] = useState('')
    const [isFormValidated, setFormValidated] = useState(false)

    const updateFormField = (e, field) => {
        let newFormFields = { ...formFields }
        newFormFields[field] = e.target.value
        setFormFields(newFormFields)
    }

    const [formErrors, setFormErrors] = useState([])
    const [formResponse, setFormResponse] = useState(null)

    const submitForm = e => {
        e.preventDefault()
        if (checkFields()) {
            // Send the email
            const emailEndpoint = process.env.GATSBY_EMAIL_ENDPOINT
            axios
                .post(
                    emailEndpoint,
                    {
                        name:
                            formFields['first-name'] +
                            ' ' +
                            formFields['last-name'],
                        subject: formFields['subject'],
                        email: formFields['email'],
                        message: formEditor
                    },
                    { headers: { Accept: 'application/json' } }
                )
                .then(response => {
                    if (response.data.success) {
                        setFormResponse(true)
                    } else {
                        setFormResponse(false)
                    }
                })
                .catch(error => {
                    setFormResponse(false)
                })
        }
    }
    const checkFields = () => {
        // Reset errors
        let errors = []

        if (!formFields['first-name']) errors.push('Please enter a first name')
        if (!formFields['last-name']) errors.push('Please enter a last name')
        if (!formFields['subject']) errors.push('Please enter a subject')
        // regex adapted form https://vuejs.org/v2/cookbook/form-validation.html#Using-Custom-Validation
        var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!emailRe.test(formFields['email']))
            errors.push('Please enter a valid email address')
        if (!formEditor) errors.push('Please enter a message')
        if (!isFormValidated) errors.push('Please complete the reCAPTCHA')

        setFormErrors(errors)

        return errors.length > 0 ? false : true
    }

    return (
        <Layout>
            <SEO
                title="Contact"
                keywords={[`contact`, `support`, `email`, `notify`]}
            />

            <PageTitle title="Contact" subtitle="Get in touch!" />

            {formResponse === null ? (
                <section className="mx-8 my-12">
                    {formErrors.length > 0 ? (
                        <div className="flex flex-col items-center mb-12">
                            <div>
                                <div className="text-center text-highlight text-2xl">
                                    <i className="fas fa-exclamation-circle"></i>
                                    <h3>ERRORS</h3>
                                </div>
                                <ul className="my-1 ml-4 list-inside list-disc">
                                    {formErrors.map(error => (
                                        <li
                                            key={error
                                                .split(' ')
                                                .join('-')
                                                .toLowerCase()}
                                        >
                                            {error}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : null}
                    <form
                        onSubmit={submitForm}
                        className={`lg:w-1/2 w-full ${styles.form}`}
                    >
                        <div className="-mx-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 px-4">
                                    <label htmlFor="form-first-name">
                                        First Name
                                    </label>
                                    <input
                                        id="form-first-name"
                                        type="text"
                                        placeholder="John"
                                        onChange={e =>
                                            updateFormField(e, 'first-name')
                                        }
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <label htmlFor="form-last-name">
                                        Last Name
                                    </label>
                                    <input
                                        id="form-last-name"
                                        type="text"
                                        placeholder="Doe"
                                        onChange={e =>
                                            updateFormField(e, 'last-name')
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full px-4">
                                    <label htmlFor="form-subject">
                                        Subject
                                    </label>
                                    <input
                                        id="form-subject"
                                        type="text"
                                        placeholder="What's Up?"
                                        onChange={e =>
                                            updateFormField(e, 'subject')
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full px-4">
                                    <label htmlFor="form-email">Email</label>
                                    <input
                                        id="form-email"
                                        type="email"
                                        placeholder="john.doe@gmail.com"
                                        onChange={e =>
                                            updateFormField(e, 'email')
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full px-4">
                                    <label htmlFor="form-message">
                                        Message
                                    </label>
                                    <div className={styles.formEditor}>
                                        <ReactQuill
                                            value={formEditor}
                                            onChange={setFormEditor}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full px-4">
                                    <label htmlFor="form-recaptcha">
                                        Verification
                                    </label>
                                    <ReCAPTCHA
                                        sitekey={
                                            process.env.GATSBY_RECAPTCHA_SITE
                                        }
                                        onChange={() => setFormValidated(true)}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mt-12">
                                <div className="mx-auto">
                                    <button
                                        className="shadow bg-blue-secondary text-light text-lg font-bold py-2 px-4 rounded link-bg"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            ) : (
                <section className="mx-8 my-12">
                    <div className="container w-full mx-auto text-center">
                        {formResponse === true ? (
                            <div>
                                <div className="text-green-400 text-4xl">
                                    <span>Submission </span>
                                    <span className="font-bold uppercase">
                                        succeeded
                                        <i className="fas fa-smile ml-2"></i>
                                    </span>
                                </div>
                                <div className="mt-2 text-lg">
                                    Thanks for the message!
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="text-red-400 text-4xl">
                                    <span>Submission </span>
                                    <span className="font-bold uppercase">
                                        failed
                                        <i className="fas fa-frown ml-2"></i>
                                    </span>
                                </div>
                                <div className="mt-2 text-lg">
                                    It's the thought that counts.
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </Layout>
    )
}

export default ContactPage
