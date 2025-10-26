import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
  ctx.response.headers.set("X-Custom-Header", "Rawr eSolia");
  ctx.response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  ctx.response.headers.set("X-Frame-Options", "SAMEORIGIN");
  ctx.response.headers.set("Referrer-Policy", "strict-origin");
  ctx.response.headers.set("X-Content-Type-Options", "nosniff");
  ctx.response.headers.set("X-Powered-By", "Blood Sweat Tears");
  ctx.response.headers.set("Permissions-Policy", "accelerometer=(), ambient-light-sensor=*, autoplay=(self), battery=(self), camera=(), cross-origin-isolated=*, fullscreen=*, geolocation=(self), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), usb=()");
});

// Redirect middleware
app.use(async (ctx, next) => {
  const path = ctx.request.url.pathname;

  // Normalize: remove trailing slash for comparison
  const normalizedPath = path.endsWith('/') && path.length > 1
    ? path.slice(0, -1)
    : path;

  // Specific page redirects NO TRAILING SLASH IN KEYS!
  const redirects: Record<string, string> = {
    "/privacy": "https://esolia.co.jp/en/privacy",
    "/esolia-code-of-conduct": "https://esolia.co.jp/en/coc",
  };

  if (redirects[path]) {
    ctx.response.redirect(redirects[path]);
    ctx.response.status = 301;
    return; // Stop processing, don't call next()
  }

  // Homepage redirect
  if (path === "/") {
    ctx.response.redirect("https://esolia.co.jp/en/");
    ctx.response.status = 301;
    return;
  }

  // Pages to serve as-is (optional - just document them)
  // If a file exists, it will be served by the static handler below
  // Examples: /terms.html, /privacy.html, /legacy-docs/guide.html

  // For catch-all redirect of everything else, uncomment these lines:
  // ctx.response.redirect(`https://esolia.co.jp/en${path}`);
  // ctx.response.status = 301;
  // return;

  // Otherwise, continue to static file handler
  await next();
});

app.use(async (ctx) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/`,
      index: "index.html",
    });
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "404 - Thank you for visiting our website. The content you tried to access could not be found, but you can use our search feature to try to find what you are looking for: https://esolia.com/search";
  }
});

await app.listen({ port: 8000 });
