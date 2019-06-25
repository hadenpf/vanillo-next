module.exports = {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss')('./tailwind.js'),
        require('postcss-nested'),
        require('postcss-import')
    ]
}
