addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  url.hostname = 'www.theveraapp.com'
  return Response.redirect(url.toString(), 301)
}
