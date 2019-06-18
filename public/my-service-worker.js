/**
 * Удаление старого кеша
 */
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keyList => {
                return Promise.all(keyList.map(key => {
                    return caches.delete(key);
                }))
            })
    );
});

/**
 * Добавление кеша для запросов
 */
self.addEventListener('fetch', function(event) {

    const urlIncludes = event.request.url.includes.bind(event.request.url);

    /**
     * Кеш для апи
     */
    if (urlIncludes('typicode.com')) {
        setFetchCache(event, 'api-cache');
    }

    /**
     * Кеш для картинок
     */
    if (urlIncludes('placehold.it') || urlIncludes('favicon')) {
        setFetchCache(event, 'img-cache');
    }
});

function setFetchCache(event, cacheName) {
    event.respondWith(
        fetch(event.request)
            .then(res => {
                caches.open(cacheName).then(cache => {
                    cache.add(event.request);
                });
                return res;
            })
            .catch((err) => {
                return caches.open(cacheName).then(cache => {
                    return cache.match(event.request);
                })
            })
    );
}