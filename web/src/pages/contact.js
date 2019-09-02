import React, { useState } from 'react'

import Layout from '../layouts/default'
import SEO from '../utils/seo'
import PageTitle from '../components/PageTitle'

import styles from './contact.module.css'

const ContactPage = () => {
    const [formFields, setFormFields] = useState({
        'first-name': '',
        'last-name': '',
        subject: '',
        email: ''
    })
    const updateFormField = (e, field) => {
        let newFormFields = { ...formFields }
        newFormFields[field] = e.target.value
        setFormFields(newFormFields)
    }

    const [formErrors, setFormErrors] = useState([])
    const [formResponse, setFormResponse] = useState(false)

    const submitForm = e => {
        e.preventDefault()
        checkFields()
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
        /*
        if (!this.form.fields.message) errors.push('Please enter a message')
        if (!this.recaptchaVerified)
            errors.push('Please complete the reCAPTCHA')
            */
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

            {!formResponse ? (
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
                                    <p className="text-gray-600 text-sm italic">
                                        <span>Supports basic </span>
                                        <a
                                            href="https://www.markdownguide.org/cheat-sheet/#basic-syntax"
                                            className="text-purple-500"
                                        >
                                            Markdown
                                        </a>
                                        <span>.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full px-4">
                                    <label htmlFor="form-recaptcha">
                                        Verification
                                    </label>
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
                <section className="mx-8 my-12"></section>
            )}
        </Layout>
    )
}

export default ContactPage
