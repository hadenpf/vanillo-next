const defaultTheme = require('tailwindcss/defaultTheme') // eslint-disable-line no-unused-vars

module.exports = {
    important: true,
    theme: {
        fontFamily: {
            body: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
            inherit: ['inherit']
        },
        extend: {
            colors: {
                inherit: 'inherit',
                primary: {
                    200: '#ffd5b0',
                    300: '#ffc796',
                    400: '#ffba7d',
                    500: '#ffac63',
                    600: '#ff9e4a',
                    700: '#ff9130',
                    800: '#ff8317'
                }
            }
        }
    },
    variants: {

    }
}