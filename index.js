const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "flutter")));
app.set('trust proxy', true);

app.get('*', (req, res) => {
    const url = req.url;
    const base = `${req.protocol}://${req.get('host')}/`;
    res.send(`
        <script>
            localStorage.setItem("route", "${url}");
            localStorage.setItem("_", "${base}");
            window.location.href = "${base}";
        </script>
        <head>
            <meta name="author" content="Lucas Silveira">
            <meta name="keywords" content="carla language, morgana compiler, systems programming language">

            <meta name="description" content="True low-level control, without the noise — Carla compiles with Morgana to deliver predictable binaries, with safety inspired by Rust, without hiding what happens on the metal.">

            <meta property="og:title" content="Carla & Morgana languages">
            <meta property="og:description" content="True low-level control, without the noise — Carla compiles with Morgana to deliver predictable binaries, with safety inspired by Rust, without hiding what happens on the metal.">
            <meta property="og:type" content="website">
            <meta property="og:url" content="https://carla-corp-docs.vercel.app">
            <meta property="og:site_name" content="Carla & Morgana">

            <meta property="og:image" content="https://i.imgur.com/Dk2HGns.png">
            <meta property="og:image:width" content="1200">
            <meta property="og:image:height" content="630">
            <meta property="og:image:type" content="image/png">

            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="Carla & Morgana languages">
            <meta name="twitter:description" content="True low-level control, without the noise — Carla compiles with Morgana to deliver predictable binaries, with safety inspired by Rust, without hiding what happens on the metal.">
            <meta name="twitter:image" content="https://i.imgur.com/Dk2HGns.png">
            <meta name="twitter:site" content="@carla-corp">

            <!-- iOS meta tags & icons -->
            <meta name="mobile-web-app-capable" content="yes">
            <meta name="apple-mobile-web-app-status-bar-style" content="black">
            <meta name="apple-mobile-web-app-title" content="docs">
            <link rel="apple-touch-icon" href="icons/Icon-192.png">

            <title>Router working...</title>
        </head>
        <body style="background-color: #000; width: 100vw; height: 100vh; margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: #fff; text-align: center;">
                Router workinig...
            </h1>
        </body>
    `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
