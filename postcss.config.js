module.exports = {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss')('./tailwind.config.js'),
        require('postcss-nested'),
        require('postcss-import')
    ]
}
