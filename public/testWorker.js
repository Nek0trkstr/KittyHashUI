self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('fetch', event => {
    if (event.request.destination == 'audio') {
        let metaint;
        let fetchController = new AbortController();
        let signal = fetchController.signal;
        let payloadHeaders = new Headers({"Icy-Metadata": "1", 'Accept': '*/*'});
        fetch(event.request.url, { method: 'GET' ,headers: payloadHeaders})
        .then(res => {
            metaint = Number(res.headers.get("icy-metaint"));
            console.log(res)
            return res.body.getReader()
        })
        .then(data => {
            console.log('Got readable data')
            console.log(data.read())
        })
        .catch(err => {
            console.log('Error occured while intercepting stream' + err)
        })
        event.respondWith(new Response(stream, {
            headers: {'Content-Type': 'audio/mpeg'}
        }));
    }
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
  });

function sendMsg(msg){
    console.log(msg)
    self.clients.matchAll().then(function (clients){
        clients.forEach(function(client){
            client.postMessage({
                msg: msg
            });
        });
    });
}