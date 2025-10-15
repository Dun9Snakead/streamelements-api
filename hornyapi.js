const url = new URL(request.url);
const sender = url.searchParams.get("sender") || "Кто-то";

const percent = Math.floor(Math.random() * 100) + 1;
let text = `${sender} хорни на ${percent}%`;

if (percent >= 80) {
  text += " — направляйся в сейсо храм!";
}

return new Response(text, {
  headers: { "Content-Type": "text/plain" }
});
