module.exports = {
    theme: {
        extend: {
            colors: {
                dark: 'rgba(35, 35, 42, 1)',
                light: 'rgba(252, 255, 250, 1)',
                highlight: 'rgba(230, 57, 70, 1)',
                'blue-primary': 'rgba(69, 123, 157, 1)',
                'blue-secondary': 'rgba(168, 218, 220, 1)',
                'blue-tertiary': 'rgba(29, 53, 87, 1)'
            }
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
                'Iosevka Type Web',
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
