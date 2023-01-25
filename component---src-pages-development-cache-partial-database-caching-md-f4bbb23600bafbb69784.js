"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[89669],{28957:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return r},default:function(){return h}});var t,o=n(87462),i=n(63366),m=(n(15007),n(64983)),c=n(91515),p=["components"],r={},d=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),s={_frontmatter:r},l=c.Z;function h(e){var a=e.components,n=(0,i.Z)(e,p);return(0,m.mdx)(l,(0,o.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"create-custom-cache-engines"},"Create custom cache engines"),(0,m.mdx)("p",null,"This topic discusses how to use the database for caching. After you complete these tasks, cached objects are stored in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"cache")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"cache_tag")," database tables. Nothing is stored ",(0,m.mdx)("inlineCode",{parentName:"p"},"var/cache")," or ",(0,m.mdx)("inlineCode",{parentName:"p"},"var/page_cache"),"."),(0,m.mdx)("p",null,"This topic discusses how to set up database caching and how to verify database caching is working. We discuss the following options:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Using the ",(0,m.mdx)("inlineCode",{parentName:"li"},"default")," cache frontend, in which case you modify ",(0,m.mdx)("inlineCode",{parentName:"li"},"di.xml")," only."),(0,m.mdx)("li",{parentName:"ul"},"Using a custom ",(0,m.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/cache"},"cache")," frontend, in which case you modify ",(0,m.mdx)("inlineCode",{parentName:"li"},"env.php")," only.")),(0,m.mdx)(d,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Database caching---like file-based caching--- works well in a development environment but we ",(0,m.mdx)("em",{parentName:"p"},"strongly recommend")," you use ",(0,m.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/varnish/config-varnish.html"},"Varnish")," in production instead.\nVarnish is designed to accelerate the HTTP protocol."),(0,m.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,m.mdx)("p",null,"Before you continue, if you're using your own frontend cache, make sure you ",(0,m.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/cache-types.html"},"associate cache frontends with cache types"),". If you're using the ",(0,m.mdx)("inlineCode",{parentName:"p"},"default")," ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/frontend"},"frontend")," cache, you don't have to do that."),(0,m.mdx)("p",null,"We provide ",(0,m.mdx)("a",{parentName:"p",href:"#configuration-examples"},"sample configurations")," at the end of this topic."),(0,m.mdx)("h2",{id:"database-caching-using-the-default-cache-frontend"},"Database caching using the ",(0,m.mdx)("inlineCode",{parentName:"h2"},"default")," cache frontend"),(0,m.mdx)("p",null,"To enable database caching using the ",(0,m.mdx)("inlineCode",{parentName:"p"},"default")," frontend, you must modify the ",(0,m.mdx)("inlineCode",{parentName:"p"},"<magento_root>/app/etc/di.xml")," file, which is the global deployment injection configuration for the application."),(0,m.mdx)("p",null,"To modify ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml"),":"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Log in to the application server as, or switch to, the ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html"},"file system owner"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Enter the following commands to make a copy of ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml"),":"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"cd <magento_root>/app/etc\n")),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"cp di.xml di.xml.bak\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Open ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," in a text editor and locate the following block:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Framework\\App\\Cache\\Frontend\\Pool">\n    <arguments>\n        <argument name="frontendSettings" xsi:type="array">\n            <item name="page_cache" xsi:type="array">\n                <item name="backend_options" xsi:type="array">\n                    <item name="cache_dir" xsi:type="string">page_cache</item>\n                </item>\n            </item>\n        </argument>\n    </arguments>\n</type>\n<type name="Magento\\Framework\\App\\Cache\\Type\\FrontendPool">\n    <arguments>\n        <argument name="typeFrontendMap" xsi:type="array">\n            <item name="full_page" xsi:type="string">page_cache</item>\n        </argument>\n    </arguments>\n</type>\n')),(0,m.mdx)("p",{parentName:"li"},"The ",(0,m.mdx)("inlineCode",{parentName:"p"},'<type name="Magento\\Framework\\App\\Cache\\Frontend\\Pool">')," node configures options for the in-memory pool of all frontend cache instances."),(0,m.mdx)("p",{parentName:"li"},"The ",(0,m.mdx)("inlineCode",{parentName:"p"},'<type name="Magento\\Framework\\App\\Cache\\Type\\FrontendPool">')," node configures cache frontend options specific to each cache type.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Replace the entire block with the following:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Framework\\App\\Cache\\Frontend\\Pool">\n    <arguments>\n        <argument name="frontendSettings" xsi:type="array">\n            <item name="page_cache" xsi:type="array">\n                <item name="backend" xsi:type="string">database</item>\n            </item>\n            <item name="<your cache id>" xsi:type="array">\n                <item name="backend" xsi:type="string">database</item>\n            </item>\n        </argument>\n    </arguments>\n</type>\n<type name="Magento\\Framework\\App\\Cache\\Type\\FrontendPool">\n    <arguments>\n        <argument name="typeFrontendMap" xsi:type="array">\n            <item name="backend" xsi:type="string">database</item>\n        </argument>\n    </arguments>\n</type>\n')),(0,m.mdx)("p",{parentName:"li"},"where ",(0,m.mdx)("inlineCode",{parentName:"p"},"<your cache id>")," is your unique cache identifier.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Save your changes to ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," and exit the text editor.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Continue with ",(0,m.mdx)("a",{parentName:"p",href:"#verify-database-caching-is-working"},"Verify database caching is working"),"."))),(0,m.mdx)("h2",{id:"database-caching-using-a-custom-cache-frontend"},"Database caching using a custom cache frontend"),(0,m.mdx)("p",null,"This section discusses how to set up database caching with a custom ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/cache-frontend"},"cache frontend"),"."),(0,m.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Due to a known issue, a custom cache frontend still results in some objects being cached to the file system; however, fewer assets are cached compared to file system caching."),(0,m.mdx)("p",null,"To enable database caching using a custom cache frontend, you must modify ",(0,m.mdx)("inlineCode",{parentName:"p"},"<magento_root>/app/etc/env.php")," as follows:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Log in to the application server as, or switch to, the ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html"},"file system owner"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Enter the following commands to make a copy of ",(0,m.mdx)("inlineCode",{parentName:"p"},"env.php"),":"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"cd <magento_root>/app/etc\n")),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"cp env.php env.php.bak\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Open ",(0,m.mdx)("inlineCode",{parentName:"p"},"env.php")," in a text editor and add the following anywhere, such as before ",(0,m.mdx)("inlineCode",{parentName:"p"},"'cache_types' =>"),":"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"'cache' => [\n    'frontend' => [\n        '<unique frontend id>' => [\n             <cache options>\n        ],\n    ],\n    'type' => [\n         <cache type 1> => [\n             'frontend' => '<unique frontend id>'\n        ],\n    ],\n    'type' => [\n         <cache type 2> => [\n            'frontend' => '<unique frontend id>'\n        ],\n    ],\n],\n")),(0,m.mdx)("p",{parentName:"li"},"An example is shown in ",(0,m.mdx)("a",{parentName:"p",href:"#configuration-examples"},"Configuration examples"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Save your changes to ",(0,m.mdx)("inlineCode",{parentName:"p"},"env.php")," and exit the text editor.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Continue with the next section."))),(0,m.mdx)("h2",{id:"verify-database-caching-is-working"},"Verify database caching is working"),(0,m.mdx)("p",null,"To verify database caching is working, clear the current cache directories, go to any cacheable page in a web browser, and verify that data is written to the database and not to the file system."),(0,m.mdx)("p",null,"Use the following steps:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"If you haven't done so already, log in to the application server as, or switch to, the ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html"},"file system owner"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Clear the current cache directories:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"rm -rf <magento_root>/var/cache/* <magento_root>/var/page_cache/* <magento_root>/generated/metadata/* <magento_root>/generated/code/*\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"In a web browser, go to any cacheable page (such as the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/storefront"},"storefront")," front door page)."),(0,m.mdx)("p",{parentName:"li"},"If exceptions display, verify ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," syntax and try again. (To see exceptions in the browser, you must ",(0,m.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html#change-to-developer-mode"},"enable developer mode"),".)")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Enter the following commands:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"ls <magento_root>/var/cache/*\n")),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"ls <magento_root>/var/page_cache/*\n")),(0,m.mdx)("p",{parentName:"li"},"Due to a known issue, a custom cache frontend still results in some objects being cached to the file system; however, fewer assets are cached compared to file system caching. If you use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"default")," cache frontend, you don't have this issue.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Verify both directories are empty; if not, edit ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," again and correct any issues.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Use a database tool such as ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/optional.html#install-optional-phpmyadmin"},"phpMyAdmin")," to verify there is data in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"cache")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"cache_tag")," tables."),(0,m.mdx)("p",{parentName:"li"},"The following figures show examples. The important thing is that there are rows in the tables. ",(0,m.mdx)("em",{parentName:"p"},"The data in your tables will be different than the following"),"."),(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"cache")," table example."),(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1075px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/47b9e45e996c19c481acff5b564ca724/5530d/config-db_cache-table.webp 320w","/commerce-php/static/47b9e45e996c19c481acff5b564ca724/0c8fb/config-db_cache-table.webp 640w","/commerce-php/static/47b9e45e996c19c481acff5b564ca724/9feb0/config-db_cache-table.webp 1075w"],sizes:"(max-width: 1075px) 100vw, 1075px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/47b9e45e996c19c481acff5b564ca724/dd4a7/config-db_cache-table.png 320w","/commerce-php/static/47b9e45e996c19c481acff5b564ca724/0f09e/config-db_cache-table.png 640w","/commerce-php/static/47b9e45e996c19c481acff5b564ca724/9c0ca/config-db_cache-table.png 1075w"],sizes:"(max-width: 1075px) 100vw, 1075px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/47b9e45e996c19c481acff5b564ca724/9c0ca/config-db_cache-table.png",alt:"Sample contents of the cache table with database caching enabled",title:"Sample contents of the cache table with database caching enabled",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"cache_tag")," table example."),(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"820px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/1e21c68a85943f38d9decd91465303c3/5530d/config-db_cache-tag-table.webp 320w","/commerce-php/static/1e21c68a85943f38d9decd91465303c3/0c8fb/config-db_cache-tag-table.webp 640w","/commerce-php/static/1e21c68a85943f38d9decd91465303c3/d9db4/config-db_cache-tag-table.webp 820w"],sizes:"(max-width: 820px) 100vw, 820px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/1e21c68a85943f38d9decd91465303c3/dd4a7/config-db_cache-tag-table.png 320w","/commerce-php/static/1e21c68a85943f38d9decd91465303c3/0f09e/config-db_cache-tag-table.png 640w","/commerce-php/static/1e21c68a85943f38d9decd91465303c3/0bbcd/config-db_cache-tag-table.png 820w"],sizes:"(max-width: 820px) 100vw, 820px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/1e21c68a85943f38d9decd91465303c3/0bbcd/config-db_cache-tag-table.png",alt:"Sample contents of the cache tag table with database caching enabled",title:"Sample contents of the cache tag table with database caching enabled",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,m.mdx)("h2",{id:"configuration-examples"},"Configuration examples"),(0,m.mdx)("p",null,"This section contains code sample snippets to refer to when configuring database caching."),(0,m.mdx)("h3",{id:"sample-dixml-for-the-default-cache-frontend"},"Sample ",(0,m.mdx)("inlineCode",{parentName:"h3"},"di.xml")," for the default cache frontend"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," snippet:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Framework\\App\\Cache\\Frontend\\Pool">\n    <arguments>\n        <argument name="frontendSettings" xsi:type="array">\n            <item name="page_cache" xsi:type="array">\n                <item name="backend" xsi:type="string">database</item>\n            </item>\n            <item name="default" xsi:type="array">\n                <item name="backend" xsi:type="string">database</item>\n            </item>\n        </argument>\n    </arguments>\n</type>\n<type name="Magento\\Framework\\App\\Cache\\Type\\FrontendPool">\n    <arguments>\n        <argument name="typeFrontendMap" xsi:type="array">\n            <item name="backend" xsi:type="string">database</item>\n        </argument>\n    </arguments>\n</type>\n')),(0,m.mdx)("h3",{id:"sample-envphp-for-a-custom-cache-frontend"},"Sample ",(0,m.mdx)("inlineCode",{parentName:"h3"},"env.php")," for a custom cache frontend"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"env.php")," snippet that enables all cache types with a custom frontend named ",(0,m.mdx)("inlineCode",{parentName:"p"},"magento_cache"),":"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"'cache' => [\n    'frontend' => [\n        'magento_cache' => [\n            'backend' => 'database'\n        ],\n    ],\n    'type' => [\n        'config' => [\n            'frontend' => 'magento_cache'\n        ],\n        'layout' => [\n            'frontend' => 'magento_cache'\n        ],\n        'block_html' => [\n            'frontend' => 'magento_cache'\n        ],\n        'view_files_fallback' => [\n            'frontend' => 'magento_cache'\n        ],\n        'view_files_preprocessing' => [\n            'frontend' => 'magento_cache'\n        ],\n        'collections' => [\n            'frontend' => 'magento_cache'\n        ],\n        'db_ddl' => [\n            'frontend' => 'magento_cache'\n        ],\n        'eav' => [\n            'frontend' => 'magento_cache'\n        ],\n        'full_page' => [\n            'frontend' => 'magento_cache'\n        ],\n        'translate' => [\n            'frontend' => 'magento_cache'\n        ],\n        'config_integration' => [\n            'frontend' => 'magento_cache'\n        ],\n        'config_integration_api' => [\n            'frontend' => 'magento_cache'\n        ],\n        'config_webservice' => [\n            'frontend' => 'magento_cache'\n        ],\n    ],\n],\n")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-cache-partial-database-caching-md-f4bbb23600bafbb69784.js.map