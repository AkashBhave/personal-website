<template>
    <main id="contact-form">
        <the-title :title="'Contact'" :subtitle="'Get in touch!'"></the-title>

        <div v-if="form.response == null" class="py-12 px-8">
            <div class="flex flex-col items-center mb-12" v-if="form.errors.length > 0">
                <div>
                    <div class="text-center text-highlight text-2xl">
                        <i class="fas fa-exclamation-circle"></i>
                        <h3>ERRORS</h3>
                    </div>
                    <ul class="my-1 ml-4 list-inside list-disc">
                        <li v-for="error in form.errors" :key="error">{{ error }}</li>
                    </ul>
                </div>
            </div>

            <form @submit.prevent="submit()" class="lg:w-1/2 w-full container mx-auto">
                <div class="-mx-4">
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/2 px-4">
                            <label for="form-first-name">First Name</label>
                            <input
                                id="form-first-name"
                                type="text"
                                placeholder="John"
                                v-model="form.fields.firstName"
                            />
                        </div>
                        <div class="w-full md:w-1/2 px-4">
                            <label for="form-last-name">Last Name</label>
                            <input
                                id="form-last-name"
                                type="text"
                                placeholder="Doe"
                                v-model="form.fields.lastName"
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full px-4">
                            <label for="form-subject">Subject</label>
                            <input
                                id="form-subject"
                                type="text"
                                placeholder="What's Up?"
                                v-model="form.fields.subject"
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full px-4">
                            <label for="form-email">Email</label>
                            <input
                                id="form-email"
                                type="email"
                                placeholder="john.doe@gmail.com"
                                v-model="form.fields.email"
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap mb-6">
                        <div class="w-full px-4">
                            <label for="form-message">Message</label>
                            <no-ssr>
                                <div class="style-normal">
                                    <editor-content
                                        id="form-message"
                                        :editor="form.fields.message"
                                    />
                                </div>
                            </no-ssr>
                            <p class="text-gray-600 text-sm italic">
                                Supports basic
                                <a
                                    href="https://www.markdownguide.org/cheat-sheet/#basic-syntax"
                                    class="text-purple-500"
                                >Markdown</a>.
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full px-4">
                            <label for="form-recaptcha">Verification</label>
                            <vue-recaptcha
                                id="form-recaptcha"
                                :sitekey="recaptchaSite"
                                :loadRecaptchaScript="true"
                                size="normal"
                                @verify="recaptchaVerified = true"
                                @expired="recaptchaVerified = false"
                            ></vue-recaptcha>
                        </div>
                    </div>
                    <div class="flex items-center mt-12">
                        <div class="mx-auto">
                            <button
                                class="shadow bg-blue-primary focus:shadow-outline focus:outline-none text-light text-lg font-bold py-2 px-4 rounded link-bg"
                                type="submit"
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div v-else class="py-12 px-8">
            <div class="container w-full mx-auto text-center">
                <div v-if="form.response == true">
                    <div class="text-green-400 text-4xl">
                        <span>Submission</span>
                        <span class="font-bold uppercase">
                            succeeded
                            <i class="fas fa-smile ml-2"></i>
                        </span>
                    </div>
                    <div class="mt-2 text-lg">Thanks for the message!</div>
                </div>
                <div v-else>
                    <div class="text-red-400 text-4xl">
                        <span>Submission</span>
                        <span class="font-bold uppercase">
                            failed
                            <i class="fas fa-frown ml-2"></i>
                        </span>
                    </div>
                    <div class="mt-2 text-lg">It's the thought that counts.</div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History
} from 'tiptap-extensions'

import VueRecaptcha from 'vue-recaptcha'

import TheTitle from '~/components/TheTitle'

export default {
    head() {
        return {
            title: 'Contact | ' + process.env.SITE_TITLE
        }
    },
    components: {
        EditorMenuBar,
        EditorContent,
        VueRecaptcha,
        TheTitle
    },
    data() {
        return {
            form: {
                fields: {
                    firstName: '',
                    lastName: '',
                    subject: '',
                    email: '',
                    message: null
                },
                errors: [],
                response: null
            },
            recaptchaSite: process.env.RECAPTCHA_SITE,
            recaptchaVerified: false
        }
    },
    methods: {
        submit() {
            if (this.checkFields()) {
                // Send the email
                const emailEndpoint = process.env.EMAIL_ENDPOINT
                let emailData = this.form.fields
                let vm = this
                this.$axios
                    .$post(
                        emailEndpoint,
                        {
                            name: `${emailData.firstName} ${emailData.lastName}`,
                            subject: emailData.subject,
                            email: emailData.email,
                            message: emailData.message.getHTML()
                        },
                        { headers: { Accept: 'application/json' } }
                    )
                    .then(function(response) {
                        if (response.success) {
                            vm.form.response = true
                        } else {
                            vm.form.response = false
                        }
                    })
                    .catch(function(error) {
                        vm.form.response = false
                    })
            }
        },
        checkFields() {
            // Reset errors
            let errors = []

            if (!this.form.fields.firstName)
                errors.push('Please enter a first name')
            if (!this.form.fields.lastName)
                errors.push('Please enter a last name')

            if (!this.form.fields.subject) errors.push('Please enter a subject')

            // regex adapted form https://vuejs.org/v2/cookbook/form-validation.html#Using-Custom-Validation
            var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!emailRe.test(this.form.fields.email))
                errors.push('Please enter a valid email address')

            if (!this.form.fields.message) errors.push('Please enter a message')

            if (!this.recaptchaVerified)
                errors.push('Please complete the reCAPTCHA')

            this.form.errors = errors
            return errors.length > 0 ? false : true
        }
    },
    mounted() {
        this.form.fields.message = new Editor({
            extensions: [
                new Blockquote(),
                new CodeBlock(),
                new HardBreak(),
                new Heading({ levels: [1, 2, 3] }),
                new BulletList(),
                new OrderedList(),
                new ListItem(),
                new TodoItem(),
                new TodoList(),
                new Bold(),
                new Code(),
                new Italic(),
                new Link(),
                new Strike(),
                new Underline(),
                new History()
            ],
            content: "I'd like to talk to you about something."
        })
    },
    beforeDestroy() {
        this.form.fields.message.destroy()
    }
}
</script>

<style lang="scss">
#contact-form {
    label {
        @apply block uppercase tracking-wide text-blue-tertiary font-bold mb-2;
    }

    input,
    #form-message .ProseMirror {
        @apply appearance-none block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-6 outline-none;
        @apply border-2 border-blue-secondary;

        &:focus {
            @apply bg-light border-blue-primary;
        }
    }

    .ProseMirror {
        margin-bottom: 8px !important;

        p,
        span {
            font-size: 16px;
        }
    }

    #form-recaptcha > div {
        @apply border border-blue-primary;
    }
}
</style>
