"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[18241],{86853:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return l},default:function(){return d}});var t,o=n(87462),c=n(63366),i=(n(15007),n(64983)),r=n(91515),m=["components"],l={},p=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),s={_frontmatter:l},h=r.Z;function d(e){var a=e.components,n=(0,c.Z)(e,m);return(0,i.mdx)(h,(0,o.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"partial-caching"},"Partial caching"),(0,i.mdx)("p",null,"Adobe Commerce and Magento Open Source use ",(0,i.mdx)("a",{parentName:"p",href:"http://framework.zend.com/manual/1.12/en/zend.cache.html"},"Zend_Cache")," to interact with the cache storage. However, the applications also have the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Cache"},"Magento\\Cache")," ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/library"},"library")," for implementing Magento-specific caching. These topics discuss how to configure caching and ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/cache"},"cache")," types."),(0,i.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"By default, file system caching is enabled; no configuration is necessary to use it. This means the cache is located under ",(0,i.mdx)("inlineCode",{parentName:"p"},"<magento_root>/var"),"."),(0,i.mdx)("p",null,"To change the cache configuration, edit the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<magento_root>/app/etc/env.php")," file."),(0,i.mdx)("p",null,"The cache configuration is an associative array similar to the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"'cache_types' =>\n   array (\n      'config' => 1,\n      'layout' => 1,\n      'block_html' => 1,\n      'collections' => 1,\n      'db_ddl' => 1,\n      'eav' => 1,\n      'full_page' => 1,\n      'translate' => 1,\n      'config_integration' => 1,\n      'config_webservice' => 1,\n      'config_integration_api' => 1,\n   ),\n);\n")),(0,i.mdx)("p",null,"The preceding lists all cache types and shows they are all enabled."),(0,i.mdx)("h2",{id:"more-information-about-caching"},"More information about caching"),(0,i.mdx)("p",null,"The following topics discuss how to set up caching:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"cache-type.md"},"Create a cache type")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/files/config-create-types.html"},"Create or extend configuration types")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/cache-types.html"},"Associate cache frontends with cache types")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/cache-options.html"},"Low-level cache options")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/varnish/config-varnish.html"},"Configure and use Varnish")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/redis/config-redis.html"},"Configure Redis"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-cache-partial-index-md-46fecee145278cb2b998.js.map