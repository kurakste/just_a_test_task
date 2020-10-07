const rbc = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>What is require? | Node.js</title>

  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link rel="dns-prefetch" href="https://api.github.com">

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=fallback">
  <link rel="stylesheet" href="/static/css/styles.css">

  <meta name="author" content="Node.js">
  <meta name="robots" content="index, follow">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.">

  <link rel="apple-touch-icon" href="/static/images/favicons/apple-touch-icon.png" sizes="180x180">
  <link rel="icon" href="/static/images/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
  <link rel="icon" href="/static/images/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
  <link rel="manifest" href="/static/images/favicons/manifest.json">
  <link rel="mask-icon" href="/static/images/favicons/safari-pinned-tab.svg" color="#43853d">
  <link rel="shortcut icon" href="/static/images/favicons/favicon.ico">
  <meta name="msapplication-TileColor" content="#333333">
  <meta name="msapplication-config" content="/static/images/favicons/browserconfig.xml">
  <meta name="theme-color" content="#333333">

  <meta property="og:site_name" content="Node.js">
  <meta property="og:title" content="What is require? | Node.js">
  <meta property="og:image" content="https://nodejs.org/static/images/logo-hexagon-card.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="224">
  <meta property="og:image:height" content="256">
  <meta property="og:description" content="Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.">

  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@nodejs">
  <meta name="twitter:title" content="What is require? | Node.js">
  <meta name="twitter:image" content="https://nodejs.org/static/images/logo-hexagon-card.png">
  <meta name="twitter:image:alt" content="The Node.js Hexagon Logo">

  <link rel="canonical" href="https://nodejs.org/en/knowledge/getting-started/what-is-require/">
  <link rel="alternate" href="/en/feed/blog.xml" title="Node.js Blog" type="application/rss+xml">
  <link rel="alternate" href="/en/feed/releases.xml" title="Node.js Blog: Releases" type="application/rss+xml">
  <link rel="alternate" href="/en/feed/vulnerability.xml" title="Node.js Blog: Vulnerability Reports" type="application/rss+xml">
</head>

<body>
  <header>
    <div class="container">
  
      <a href="/en/" id="logo">
        <img src="/static/images/logo.svg" alt="Node.js" width="122" height="75">
      </a>
  
      <nav aria-label="primary">
        <ul class="list-divider-pipe">
          <li >
            <a href="/en/">Home</a>
          </li>
  
            <li >
                <a href="/en/about/">About</a>
            </li>
            <li >
                <a href="/en/download/">Downloads</a>
            </li>
            <li >
                <a href="/en/docs/">Docs</a>
            </li>
            <li >
                <a href="/en/get-involved/">Get Involved</a>
            </li>
            <li >
                <a href="/en/security/">Security</a>
            </li>
            <li >
                <a href="https://openjsf.org/certification">Certification</a>
            </li>
            <li >
                <a href="/en/blog/">News</a>
            </li>
        </ul>
      </nav>
  
      <button class="lang-picker-toggler" type="button" aria-controls="lang-picker" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25" height="25" aria-hidden="true" focusable="false" fill="currentColor">
          <path d="M217.982 201.586h-64.499c-5.537 0-10.026 4.489-10.026 10.026s4.489 10.026 10.026 10.026h53.547c-4.72 25.263-26.935 44.446-53.547 44.446-30.037 0-54.473-24.436-54.473-54.473s24.436-54.473 54.473-54.473c14.55 0 28.229 5.667 38.518 15.955 3.916 3.916 10.264 3.916 14.178 0 3.916-3.916 3.916-10.264 0-14.178-14.077-14.077-32.791-21.829-52.697-21.829-41.094 0-74.525 33.431-74.525 74.525 0 41.094 33.431 74.525 74.525 74.525s74.525-33.431 74.525-74.525c.001-5.536-4.488-10.025-10.025-10.025z"/>
          <path d="M470.331 92.24H269.728l-26.935-81.355a10.025 10.025 0 00-9.518-6.875H41.669C18.693 4.01 0 22.703 0 45.679v332.412c0 22.976 18.693 41.669 41.669 41.669h203.145l27.073 81.369a10.026 10.026 0 009.513 6.861h188.932c22.976 0 41.669-18.693 41.669-41.669V133.909c-.001-22.976-18.694-41.669-41.67-41.669zM41.669 399.708c-11.919 0-21.616-9.697-21.616-21.616V45.679c0-11.919 9.697-21.616 21.616-21.616h184.364l70.691 213.516a.366.366 0 00.015.043l53.664 162.086H41.669zm295.78-116.433c.805 1.11 10.824 14.877 26.355 34.066-4.377 5.756-9.015 11.474-13.91 17.036l-29.712-89.74h87.441c-6.196 13.031-16.938 33.813-31.692 55.736-13.553-16.921-22.069-28.622-22.249-28.87-3.251-4.482-9.519-5.481-14.002-2.23-4.482 3.25-5.48 9.518-2.231 14.002zM265.946 419.76h75.162l-55.503 59.084-19.659-59.084zm226.002 46.561c0 11.919-9.697 21.616-21.616 21.616H304.575l67.015-71.339-.004-.003c.293-.312.571-.64.823-.991a10.025 10.025 0 001.39-9.022l-16.688-50.402c7.073-7.406 13.68-15.143 19.805-22.965 13.299 15.772 29.037 33.446 45.778 50.187 1.957 1.957 4.524 2.937 7.089 2.937s5.132-.979 7.089-2.937c3.916-3.916 3.916-10.264 0-14.178-17.461-17.461-34.013-36.244-47.687-52.632 21.251-30.503 35.033-59.504 40.535-71.954h21.454c5.537 0 10.026-4.489 10.026-10.026s-4.489-10.026-10.026-10.026h-66.173v-18.047c0-5.537-4.489-10.026-10.026-10.026s-10.026 4.489-10.026 10.026v18.046h-51.406l-37.178-112.292H470.33c11.919 0 21.616 9.697 21.616 21.616v332.412z"/>
        </svg>
        <span class="sr-only">Toggle Language</span>
      </button>
  
      <ul id="lang-picker" class="lang-picker hidden">
          <li>
            <button data-lang="ar" title="Arabic">العربية</button>
          </li>
          <li>
            <button data-lang="ca" title="Catalan">Catalan</button>
          </li>
          <li>
            <button data-lang="de" title="German">Deutsch</button>
          </li>
          <li>
            <button data-lang="en" title="English">English</button>
          </li>
          <li>
            <button data-lang="es" title="Spanish">Español</button>
          </li>
          <li>
            <button data-lang="fa" title="Persian">زبان فارسی</button>
          </li>
          <li>
            <button data-lang="fr" title="French">Français</button>
          </li>
          <li>
            <button data-lang="gl" title="Galician">Galego</button>
          </li>
          <li>
            <button data-lang="it" title="Italian">Italiano</button>
          </li>
          <li>
            <button data-lang="ja" title="Japanese">日本語</button>
          </li>
          <li>
            <button data-lang="ko" title="Korean">한국어</button>
          </li>
          <li>
            <button data-lang="pt-br" title="Portuguese, Brazilian">Português do Brasil</button>
          </li>
          <li>
            <button data-lang="ro" title="Romanian">limba română</button>
          </li>
          <li>
            <button data-lang="ru" title="Russian">Русский</button>
          </li>
          <li>
            <button data-lang="tr" title="Turkish">Türkçe</button>
          </li>
          <li>
            <button data-lang="uk" title="Ukrainian">Українська</button>
          </li>
          <li>
            <button data-lang="zh-cn" title="Chinese Simplified">中文(简体)</button>
          </li>
          <li>
            <button data-lang="zh-tw" title="Traditional Chinese">中文 (繁體)</button>
          </li>
      </ul>
  
    </div>
  </header>

  <div id="main">
    <div class="container">

      <article>
        <div class="blogpost-header">
          <h1>What is require?</h1>
          <span class="blogpost-meta"><time datetime="2011-08-26T10:08:50.000Z">2011-08-26</time></span>
        </div>

        <p>Node.js follows the CommonJS module system, and the builtin <code>require</code> function is the easiest way to include modules that exist in separate files. The basic functionality of <code>require</code> is that it reads a JavaScript file, executes the file, and then proceeds to return the <code>exports</code> object. An example module:</p>
<pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;evaluating example.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">invisible</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;invisible&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&quot;hi&quot;</span><span class="token punctuation">;</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>exports<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
<p>So if you run <code>var example = require(&apos;./example.js&apos;)</code>, then <code>example.js</code> will get evaluated and then <code>example</code> be an object equal to:</p>
<pre><code>{
  message: &quot;hi&quot;,
  say: [Function]
}</code></pre>
<p>If you want to set the exports object to a function or a new object, you have to use the <code>module.exports</code> object. So for an example:</p>
<pre class="language-javascript"><code class="language-javascript">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;./example2.js&apos;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//require itself and run the exports object</span></code></pre>
<p>It is worth noting that each time you subsequently require an already-required file, the <code>exports</code> object is cached and reused. To illustrate this point:</p>
<pre><code>node&gt; require(&apos;./example.js&apos;)
evaluating example.js
{ message: &apos;hi&apos;, say: [Function] }
node&gt; require(&apos;./example.js&apos;)
{ message: &apos;hi&apos;, say: [Function] }
node&gt; require(&apos;./example.js&apos;).message = &quot;hey&quot; //set the message to &quot;hey&quot;
&apos;hey&apos;
node&gt; require(&apos;./example.js&apos;) //One might think that this &quot;reloads&quot; the file...
{ message: &apos;hey&apos;, say: [Function] } //...but the message is still &quot;hey&quot; because of the module cache.</code></pre>
<p>As you can see from the above, <code>example.js</code> is evaluated the first time, but all subsequent calls to <code>require()</code> only invoke the module cache, rather than reading the file again. As seen above, this can occasionally produce side effects.</p>
<p>The rules of where <code>require</code> finds the files can be a little complex, but a simple rule of thumb is that if the file doesn&apos;t start with &quot;./&quot; or &quot;/&quot;, then it is either considered a core module (and the local Node.js path is checked), or a dependency in the local <code>node_modules</code> folder. If the file starts with &quot;./&quot; it is considered a relative file to the file that called <code>require</code>. If the file starts with &quot;/&quot;, it is considered an absolute path. NOTE: you can omit &quot;.js&quot; and <code>require</code> will automatically append it if needed. For more detailed information, see <a href="https://nodejs.org/docs/v0.4.2/api/modules.html#all_Together...">the official docs</a></p>
<p>An extra note: if the filename passed to <code>require</code> is actually a directory, it will first look for <code>package.json</code> in the directory and load the file referenced in the <code>main</code> property. Otherwise, it will look for an <code>index.js</code>.</p>

      </article>

    </div>
  </div>

  <a href="#" id="scroll-to-top">&uarr; <span>Scroll to top</span></a>
  
  <footer >
  
    <div class="container">
      <div class="openjsfoundation-footer">
        <div class="issue-link-container">
          <a class="openjsfoundation-logo" href="https://openjsf.org/">
            <img src="/static/images/openjs_foundation-logo.svg" alt="OpenJS Foundation" width="120" height="38">
          </a>
          <ul class="list-divider-pipe issue-link">
            <li><a href="https://github.com/nodejs/node/issues">Report Node.js issue</a></li>
            <li><a href="https://github.com/nodejs/nodejs.org/issues">Report website issue</a></li>
            <li><a href="https://github.com/nodejs/help/issues">Get Help</a></li>
          </ul>
        </div>
  
        <p>© OpenJS Foundation. All Rights Reserved. Portions of this site originally © Joyent.</p>
        <p>Node.js is a trademark of Joyent, Inc. and is used with its permission. Please review the <a href="https://trademark-list.openjsf.org">Trademark List</a> and <a href="https://trademark-policy.openjsf.org">Trademark Guidelines</a> of the <a href="https://openjsf.org">OpenJS Foundation</a>.</p>
        <p>
          <a href="https://raw.githubusercontent.com/nodejs/node/master/LICENSE">Node.js Project Licensing Information</a>.
        </p>
  
        <div class="contributor-card">
          <a href="#" rel="nofollow noopener noreferrer">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <img id="contributor-avatar" class="hidden" src="/static/images/logos/js-green.svg" alt="Avatar of a Node.js contributor" width="40" height="40">
          </a>
        
          <p>
            Thank you <a href="#" id="contributor-username" rel="nofollow noopener noreferrer">username</a> for being a <a href="https://github.com/nodejs/node/graphs/contributors" rel="nofollow noopener noreferrer" title="List of all Node.js contributors">Node.js contributor</a>
            <a href="https://github.com/nodejs/node/graphs/contributors" rel="nofollow noopener noreferrer">
              <strong id="contributor-contributions">0 contributions</strong>
            </a>
          </p>
        </div>
  
      </div>
    </div>
  
  </footer>
  
  <script src="/static/js/main.js" async defer></script>
</body>
</html>
`

module.exports = rbc