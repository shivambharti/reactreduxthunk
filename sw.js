let cacheData="apv1";

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData)
        .then((cache)=>{
            cache.addAll([
                "/",
                "index.html",
                "/static/js/bundle.js",
                "/manifest.json",
                "/favicon.ico",
                "/logo192.png",
                "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
                "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
                // "https://jsonplaceholder.typicode.com/posts"
                
                
            ])

        })
    )
})

this.addEventListener('fetch',(event)=>{
    if(!navigator.onLine)
    {
        event.respondWith(
            caches.match(event.request)
            .then((result)=>{
                if(result){
                    return result
                }
                let requestUrl=event.request.clone();
                fetch(requestUrl);
    
            })
        )
    }
   
})