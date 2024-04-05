const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css")
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);

// Tambahkan konfigurasi PostCSS ke dalam webpack.mix.js
mix.options({
    postCss: [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
        // Tambahkan plugin PostCSS lainnya jika diperlukan
    ],
});
