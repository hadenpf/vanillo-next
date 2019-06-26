const defaultTheme = require('tailwindcss/defaultTheme') // eslint-disable-line no-unused-vars

module.exports = {
    important: true,
    theme: {
        fontFamily: {
            body: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif', '"Font Awesome 5 Free"'],
            inherit: ['inherit']
        },
        extend: {
            colors: {
                inherit: 'inherit',
                primary: {
                    // primary brand colors when we have em
                }
            }
        }
    },
    variants: {

    }
}