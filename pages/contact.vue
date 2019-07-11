<template>
    <main id="contact-form" class="-mx-4">
        <the-title :title="'Contact'" :subtitle="'Get in touch!'"></the-title>
        <form class="lg:w-1/2 w-full container mx-auto px-8 py-12">
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 px-4">
                    <label for="form-first-name">First Name</label>
                    <input class id="form-first-name" type="text" placeholder="John" />
                </div>
                <div class="w-full md:w-1/2 px-4">
                    <label for="form-last-name">Last Name</label>
                    <input id="form-last-name" type="text" placeholder="Doe" />
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full px-4">
                    <label for="form-subject">Subject</label>
                    <input id="form-subject" type="text" placeholder="What's Up?" />
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full px-4">
                    <label for="form-email">Email</label>
                    <input id="form-email" type="email" placeholder="john.doe@gmail.com" />
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full px-4">
                    <label for="form-message">Message</label>
                    <no-ssr>
                        <div class="style-normal">
                            <editor-content id="form-message" :editor="editor" />
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
        </form>
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
        TheTitle
    },
    data() {
        return {
            editor: null
        }
    },
    mounted() {
        this.editor = new Editor({
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
        this.editor.destroy()
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
        @apply appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-6 outline-none border-blue-primary;

        &:focus {
            @apply bg-light border-blue-secondary;
        }
    }

    .ProseMirror {
        margin-bottom: 8px !important;

        p,
        span {
            font-size: 16px;
        }
    }
}
</style>
