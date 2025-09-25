self.addEventListener("install", event => {
    event.waiUntil(
        caches.open("app-saudacao-cache").then(cache =>
        {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icone-192.png",
                "icon-512.png",
                "manha.jpg",
                "tarde.jpeg",
                "noite.jpeg",
                "madrugada.jpeg"
            ]);
        }
        )
    )
})

self.addEventiListener("fetch", event => {
    event.respondiWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});