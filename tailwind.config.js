module.exports = {
    theme: {
        colors: {
            black: 'rgba(35, 35, 42, 1)',
            white: 'rgba(252, 255, 250, 1)',
            red: 'rgba(230, 57, 70, 1)',
            'blue-primary': 'rgba(168, 218, 220, 1)',
            'blue-secondary': 'rgba(69, 123, 157, 1)',
            'blue-tertiary': 'rgba(29, 53, 87, 1)'
        },

        fontFamily: {
            sans: [
                'HK Grotesk',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"'
            ],
            serif: [
                'Libre Baskerville',
                'Georgia',
                'Cambria',
                '"Times New Roman"',
                'Times',
                'serif'
            ],
            mono: [
                'Hack',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace'
            ],
            body: this.sans,
            heading: this.serif
        }
    }
}