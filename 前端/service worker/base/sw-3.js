const CACHE_NAME = "fed-cache";
this.addEventListener("install", function(e){
    this.skipWaiting();
    console.log("install service worker");
    caches.open(CACHE_NAME);
    let cacheResources = ["http://localhost:8080"];
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                cache.addAll(cacheResources);
            })
    )
})