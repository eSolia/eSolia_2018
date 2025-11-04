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
    "/about-us": "https://esolia.co.jp/en/about/",
    "/about": "https://esolia.co.jp/en/about/company-overview/",
    "/why-esolia": "https://esolia.co.jp/en/about/philosophy/",
    "/employment": "https://esolia.co.jp/en/about/employment/",
    "/esolia-code-of-conduct": "https://esolia.co.jp/en/coc",
    "/info-request": "https://esolia.co.jp/en/about/info-request/",
    "/privacy": "https://esolia.co.jp/en/legal/privacy",
    "/license": "https://esolia.co.jp/en/legal/license/",
    "/colophon": "https://esolia.co.jp/en/colophon/",
    "/services": "https://esolia.co.jp/en/services/",
    "/sitemap": "https://esolia.co.jp/sitemap.xml",
    "/solutions": "https://esolia.co.jp/en/solutions/",
    "/consulting": "https://esolia.co.jp/en/services/consulting/",
    "/outsourcing": "https://esolia.co.jp/en/services/outsourcing/",
    "/on-site": "https://esolia.co.jp/en/services/outsourcing/onsite/",
    "/office-moves": "https://esolia.co.jp/en/services/office-moves/",
    "/management": "https://esolia.co.jp/en/services/consulting/project-and-program-management/",
    "/management-team": "https://esolia.co.jp/en/about/team/",
    "/message-from-esolia": "https://esolia.co.jp/en/about/greetings/",
    "/project-management": "https://esolia.co.jp/en/services/consulting/project-and-program-management/",
    "/process": "https://esolia.co.jp/en/services/consulting/process-management/",
    "/training": "https://esolia.co.jp/en/services/outsourcing/training/",
    "/helpdesk": "https://esolia.co.jp/en/services/outsourcing/helpdesk/",
    "/infrastructure": "https://esolia.co.jp/en/services/infrastructure/",
    "/security": "https://esolia.co.jp/en/services/infrastructure/physical-security/",
    "/telephone": "https://esolia.co.jp/en/services/infrastructure/telephone/",
    "/website-design": "https://esolia.co.jp/en/services/outsourcing/website-design/",
    "/localization": "https://esolia.co.jp/en/services/outsourcing/localization/",
    "/disposal-and-recycling": "https://esolia.co.jp/en/services/infrastructure/disposal-and-recycling/",
    "/prodb": "https://esolia.co.jp/en/solutions/prodb/",
    "/prodb-support": "https://esolia.co.jp/en/solutions/prodb/support/",
    "/prodb-tos": "https://esolia.co.jp/en/solutions/prodb/tos/",
    "/prodb-security-and-privacy": "https://esolia.co.jp/en/solutions/prodb/security-and-privacy/",
    "/prodb-commercial-disclosure": "https://esolia.co.jp/en/solutions/prodb/commercial-disclosure/",
    "/japan-expat-home-setup": "https://esolia.co.jp/en/solutions/japan-expat-home-setup/",
  };

  if (redirects[normalizedPath]) {
    ctx.response.redirect(redirects[normalizedPath]);
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
