<h1>Testing pre-rendering bug in +layout</h1>
<p>This project was created to test a bug that happens when you set prerender = true in layout.server.ts files.</p>
<h2>conditions to recreate this bug</h2>
<ul>
    <li>
        set "export const prerender = true" on a /+layout.server.ts file and try to load dynamic data on a sub-route
    </li>
    <li>
        deploy to netlify or vercel
    </li>
    <li>
        this bug does not happen when run on localhost through: dev | build | preview - only when deployed
    </li>
    <li>
        I have setup multiple versions of the same code. Only thing different is the prerender variable.
    </li>
</ul>
