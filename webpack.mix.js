let mix = require("laravel-mix");

mix.js("src/app.js", "dist").setPublicPath("dist").react();
mix.postCss("src/app.css", "dist", [require("tailwindcss")]);
