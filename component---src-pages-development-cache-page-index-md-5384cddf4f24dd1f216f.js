"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[26667],{5372:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return u}});var n,o=t(87462),r=t(63366),c=(t(15007),t(64983)),s=t(91515),i=["components"],l={},m=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.mdx)("div",e)}),d={_frontmatter:l},p=s.Z;function u(e){var a=e.components,t=(0,r.Z)(e,i);return(0,c.mdx)(p,(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"page-caching"},"Page caching"),(0,c.mdx)("p",null,"Caching is one of the most effective ways to improve website performance. Generally speaking, there are two methods of caching content:"),(0,c.mdx)("ul",null,(0,c.mdx)("li",{parentName:"ul"},"Client-side (browser)"),(0,c.mdx)("li",{parentName:"ul"},"Server-side")),(0,c.mdx)("p",null,"Retrieving stored (",(0,c.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/cache"},"cached"),") content from a previous request for the same client instead of requesting files from your server every time someone visits your site is a more efficient use of network bandwidth."),(0,c.mdx)("p",null,"The Adobe Commerce and Magento Open Source page cache library contains a simple PHP reverse proxy that enables full page caching out of the box. A reverse proxy acts as an intermediary between visitors and your application and can reduce the load on your server."),(0,c.mdx)("p",null,"We recommend using ",(0,c.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/varnish/config-varnish.html"},"Varnish"),", but you can use Magento's default caching mechanism instead, which stores cache files in any of the following:"),(0,c.mdx)("ul",null,(0,c.mdx)("li",{parentName:"ul"},"File system (You don't need to do anything to use file-based caching.)"),(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("a",{parentName:"li",href:"../partial/database-caching.md"},"Database")),(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/redis/redis-pg-cache.html"},"Redis"))),(0,c.mdx)("h2",{id:"cacheable-and-uncacheable-pages"},"Cacheable and uncacheable pages"),(0,c.mdx)("p",null,(0,c.mdx)("em",{parentName:"p"},"Cacheable")," and ",(0,c.mdx)("em",{parentName:"p"},"uncacheable")," are terms we use to indicate whether or not a page should be cached at all. (By default, all pages are cacheable.) If any block in a ",(0,c.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/layout"},"layout")," is designated as uncacheable, the entire page is uncacheable."),(0,c.mdx)("p",null,"To create an uncacheable page, mark any block on that page as uncacheable in the layout using ",(0,c.mdx)("inlineCode",{parentName:"p"},'cacheable="false"'),"."),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-xml"},'<block class="Magento\\Customer\\Block\\Form\\Edit" name="customer_edit" template="Magento_Customer::form/edit.phtml" cacheable="false">\n    <container name="form.additional.info" as="form_additional_info"/>\n</block>\n')),(0,c.mdx)("p",null,"Examples of uncacheable pages include the compare products, cart, ",(0,c.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/checkout"},"checkout")," pages, and so on."),(0,c.mdx)("p",null,(0,c.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Paypal/view/frontend/layout/paypal_payflow_returnurl.xml"},"Example")),(0,c.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,c.mdx)("p",null,"Do not configure content pages (i.e., catalog, product, and CMS pages) to be uncacheable. Doing so has an adverse affect on performance."),(0,c.mdx)("h2",{id:"public-and-private-content"},"Public and private content"),(0,c.mdx)("p",null,'Reverse proxies serve "public" or shared content to more than one user. However, most Adobe Commerce and Magento Open Source websites generate dynamic and personalized "private" content that should only be served to one user, which presents unique caching challenges. To address these challenges, the application can distinguish between two types of content:'),(0,c.mdx)("ul",null,(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("p",{parentName:"li"},(0,c.mdx)("strong",{parentName:"p"},(0,c.mdx)("a",{parentName:"strong",href:"public-content.md"},"Public"))," - Public content is stored server side in your reverse proxy cache storage (e.g., file system, database, Redis, or Varnish) and is available to multiple customers. Examples of public content include header, footer, and category listing.")),(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("p",{parentName:"li"},(0,c.mdx)("strong",{parentName:"p"},(0,c.mdx)("a",{parentName:"strong",href:"private-content.md"},"Private"))," - Private content is stored client side (e.g., browser) and is specific to an individual customer. Examples of private content include wishlist, shopping cart, customer name, and address. You should limit stored private content to a small portion of the page's total content."))),(0,c.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,c.mdx)("p",null,"Only HTTP ",(0,c.mdx)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3"},"GET")," and ",(0,c.mdx)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4"},"HEAD")," requests are cacheable. For more information about caching, see ",(0,c.mdx)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html"},"RFC-2616 section 13"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-cache-page-index-md-5384cddf4f24dd1f216f.js.map