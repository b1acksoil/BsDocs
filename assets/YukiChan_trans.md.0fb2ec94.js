import{_ as t,c as a,o as s,a as d}from"./app.ae27d8d0.js";const _=JSON.parse('{"title":"BaiduTranslate - \u767E\u5EA6\u7FFB\u8BD1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6307\u4EE4\u5E2E\u52A9","slug":"\u6307\u4EE4\u5E2E\u52A9","link":"#\u6307\u4EE4\u5E2E\u52A9","children":[{"level":3,"title":"/trans - \u6267\u884C\u767E\u5EA6\u7FFB\u8BD1","slug":"trans-\u6267\u884C\u767E\u5EA6\u7FFB\u8BD1","link":"#trans-\u6267\u884C\u767E\u5EA6\u7FFB\u8BD1","children":[]}]}],"relativePath":"YukiChan/trans.md","lastUpdated":1668178074000}'),r={name:"YukiChan/trans.md"},n=d(`<h1 id="baidutranslate-\u767E\u5EA6\u7FFB\u8BD1" tabindex="-1">BaiduTranslate - \u767E\u5EA6\u7FFB\u8BD1 <a class="header-anchor" href="#baidutranslate-\u767E\u5EA6\u7FFB\u8BD1" aria-hidden="true">#</a></h1><h2 id="\u6307\u4EE4\u5E2E\u52A9" tabindex="-1">\u6307\u4EE4\u5E2E\u52A9 <a class="header-anchor" href="#\u6307\u4EE4\u5E2E\u52A9" aria-hidden="true">#</a></h2><h3 id="trans-\u6267\u884C\u767E\u5EA6\u7FFB\u8BD1" tabindex="-1">/trans - \u6267\u884C\u767E\u5EA6\u7FFB\u8BD1 <a class="header-anchor" href="#trans-\u6267\u884C\u767E\u5EA6\u7FFB\u8BD1" aria-hidden="true">#</a></h3><p><strong>\u6307\u4EE4\u683C\u5F0F</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#abb2bf;">/trans [\u9009\u9879] &lt;\u6587\u672C&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">\u7FFB\u8BD1 [\u9009\u9879] &lt;\u6587\u672C&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>\u9009\u9879\u8BF4\u660E</strong></p><p><code>-s, --source &lt;\u8BED\u8A00&gt;</code>: \u6E90\u8BED\u8A00\uFF0C\u9ED8\u8BA4\u4E3A\u81EA\u52A8\u68C0\u6D4B<br><code>-t, --target &lt;\u8BED\u8A00&gt;</code>: \u76EE\u6807\u8BED\u8A00\uFF0C\u9ED8\u8BA4\u4E3A\u4E2D\u6587</p><details class="details custom-block"><summary>\u4F7F\u7528\u793A\u4F8B</summary><ul><li>\u5C06 pure \u7FFB\u8BD1\u6210\u4E2D\u6587\uFF08\u6E90\u8BED\u8A00\u5C06\u81EA\u52A8\u68C0\u6D4B\uFF09</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#abb2bf;">/trans pure</span></span>
<span class="line"><span style="color:#abb2bf;">/trans -s auto -t zh pure</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>\u5C06 rabbit \u7531\u82F1\u6587\u7FFB\u8BD1\u6210\u65E5\u6587</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#abb2bf;">/trans -s en -t jp rabbit</span></span>
<span class="line"><span style="color:#abb2bf;">/trans -s \u82F1\u8BED -t \u65E5\u8BED rabbit</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><ul><li>\u4F7F\u7528\u7B80\u5199\u5F62\u5F0F</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#abb2bf;">\u7FFB\u8BD1 -t jp world ender</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></details><p><strong>\u8BED\u8A00\u5217\u8868</strong></p><p>\u4EE3\u53F7\u548C\u4E2D\u6587\u540D\u90FD\u53EF\u4EE5\u4F7F\u7528</p><table><thead><tr><th>\u8BED\u8A00\u4EE3\u53F7</th><th>\u8BED\u8A00\u4E2D\u6587\u540D</th></tr></thead><tbody><tr><td>auto</td><td>\u81EA\u52A8, \u81EA\u52A8\u68C0\u6D4B</td></tr><tr><td>zh</td><td>\u4E2D\u6587, \u7B80\u4E2D</td></tr><tr><td>en</td><td>\u82F1\u8BED, \u82F1\u6587</td></tr><tr><td>yue</td><td>\u7CA4\u8BED</td></tr><tr><td>wyw</td><td>\u6587\u8A00\u6587</td></tr><tr><td>jp</td><td>\u65E5\u8BED, \u65E5\u6587</td></tr><tr><td>kor</td><td>\u97E9\u8BED, \u97E9\u6587</td></tr><tr><td>fra</td><td>\u6CD5\u8BED, \u6CD5\u6587</td></tr><tr><td>spa</td><td>\u897F\u73ED\u7259\u8BED</td></tr><tr><td>th</td><td>\u6CF0\u8BED</td></tr><tr><td>ara</td><td>\u963F\u62C9\u4F2F\u8BED</td></tr><tr><td>ru</td><td>\u4FC4\u8BED, \u4FC4\u6587</td></tr><tr><td>pt</td><td>\u8461\u8404\u7259\u8BED</td></tr><tr><td>de</td><td>\u5FB7\u8BED, \u5FB7\u6587</td></tr><tr><td>it</td><td>\u610F\u5927\u5229\u8BED</td></tr><tr><td>el</td><td>\u5E0C\u814A\u8BED</td></tr><tr><td>nl</td><td>\u8377\u5170\u8BED</td></tr><tr><td>pl</td><td>\u6CE2\u5170\u8BED</td></tr><tr><td>bul</td><td>\u4FDD\u52A0\u5229\u4E9A\u8BED</td></tr><tr><td>est</td><td>\u7231\u6C99\u5C3C\u4E9A\u8BED</td></tr><tr><td>dan</td><td>\u4E39\u9EA6\u8BED</td></tr><tr><td>fin</td><td>\u82AC\u5170\u8BED</td></tr><tr><td>cs</td><td>\u6377\u514B\u8BED</td></tr><tr><td>rom</td><td>\u7F57\u9A6C\u5C3C\u4E9A\u8BED</td></tr><tr><td>slo</td><td>\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED</td></tr><tr><td>swe</td><td>\u745E\u5178\u8BED</td></tr><tr><td>hu</td><td>\u5308\u7259\u5229\u8BED</td></tr><tr><td>cht</td><td>\u7E41\u4F53\u4E2D\u6587, \u7E41\u4E2D</td></tr><tr><td>vie</td><td>\u8D8A\u5357\u8BED</td></tr></tbody></table>`,11),e=[n];function l(p,o,c,i,b,u){return s(),a("div",null,e)}const g=t(r,[["render",l]]);export{_ as __pageData,g as default};