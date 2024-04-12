"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[85115],{54162:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return x}});var a=n(87462),d=n(45987),i=(n(35776),n(3905)),r=n(91515);const o=["components"],l={},m=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var p;const c={_frontmatter:l},s=r.Z;function x(e){let{components:t}=e,n=(0,d.Z)(e,o);return(0,i.mdx)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"indexing"},"Indexing"),(0,i.mdx)("p",null,"Indexing is how Adobe Commerce and Magento Open Source transform data such as products and categories, to improve the performance of your storefront. As data changes, the transformed data must be updated or reindexed. The application has a very sophisticated architecture that stores lots of merchant data (including catalog data, prices, users, and stores) in many database tables. To optimize storefront performance, the application accumulates data into special tables using indexers."),(0,i.mdx)("p",null,"For example, if you change the price of an item from $4.99 to $3.99. the application must reindex the price change to display it on your storefront."),(0,i.mdx)("p",null,"Without indexing, the application would have to calculate the price of every product on the fly, taking into account shopping cart price rules, bundle pricing, discounts, tier pricing, etc. Loading the price for a product would take a long time, possibly resulting in cart abandonment."),(0,i.mdx)("h2",{id:"indexing-terminology"},"Indexing terminology"),(0,i.mdx)("p",null,"Dictionary\n: Original data entered to the system. Dictionaries are organized in ",(0,i.mdx)("a",{href:"http://en.wikipedia.org/wiki/Database_normalization",target:"_blank"},"normal form")," to facilitate maintenance (updating the data)."),(0,i.mdx)("p",null,"Index\n: Representation of the original data for optimized reading and searching. Indexes can contain results of aggregations and various calculations. Index data can be always re-created from a dictionary using a certain algorithm."),(0,i.mdx)("p",null,"Indexer\n: Object that creates an index."),(0,i.mdx)("h3",{id:"create-custom-indexers"},"Create custom indexers"),(0,i.mdx)("p",null,"Adobe Commerce and Magento Open Source contain several indexers out of the box, but you might want to add your own if your customization requires data searches, which are not optimized by the default indexers."),(0,i.mdx)("p",null,"This topic provides a high level description of how indexing is implemented from a developer's point of view, and practical advice for how to add your own indexer."),(0,i.mdx)("h2",{id:"how-the-application-implements-indexing"},"How the application implements indexing"),(0,i.mdx)("p",null,"The following components are involved in the indexing process:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Component"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Indexer"},"Magento_Indexer")),(0,i.mdx)("td",{parentName:"tr",align:null},"Implements the following",(0,i.mdx)("ul",null,(0,i.mdx)("li",null,"indexer declaration"),(0,i.mdx)("li",null,"indexer running"),(0,i.mdx)("li",null,"indexer running mode configuration"),(0,i.mdx)("li",null,"indexer status")))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Mview"},"Magento/Framework/Mview")),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows tracking database changes for a certain entity (product, category, etc.) and running change handler.",(0,i.mdx)("br",null),(0,i.mdx)("br",null),"Emulates the materialized view technology for MySQL using triggers and separate materialization process (provides executing PHP code instead of SQL queries, which allows materializing multiple queries).")))),(0,i.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_Indexer")," replaces the Magento 1.x ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_Index")," module. Use ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_Indexer")," for all new development."),(0,i.mdx)("h3",{id:"indexing-types"},"Indexing types"),(0,i.mdx)("p",null,"Each index can perform the following types of reindex operations:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Full reindex, which means rebuilding all the indexing-related database tables"),(0,i.mdx)("p",{parentName:"li"},"Full reindexing can be caused by a variety of things, including creating a new web store or new customer group."),(0,i.mdx)("p",{parentName:"li"},"You can optionally fully reindex at any time using the ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-indexers.html"},"command line"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Partial reindex, which means rebuilding the database tables only for the things that changed (like changing a single product attribute or price)"))),(0,i.mdx)("p",null,"The type of reindex performed in each particular case depends on the type of changes made in the dictionary or in the system. This dependency is specific for ",(0,i.mdx)("a",{parentName:"p",href:"#indexers"},"each indexer"),"."),(0,i.mdx)("p",null,"The following figure shows the logic for partial reindexing."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"170.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/873f3f908c1d581b331c09fbb20cc27c/5530d/index_indexers_flow.webp 320w","/commerce-php/static/873f3f908c1d581b331c09fbb20cc27c/0c8fb/index_indexers_flow.webp 640w","/commerce-php/static/873f3f908c1d581b331c09fbb20cc27c/94b1e/index_indexers_flow.webp 1280w","/commerce-php/static/873f3f908c1d581b331c09fbb20cc27c/bdb72/index_indexers_flow.webp 1300w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/873f3f908c1d581b331c09fbb20cc27c/dd4a7/index_indexers_flow.png 320w","/commerce-php/static/873f3f908c1d581b331c09fbb20cc27c/0f09e/index_indexers_flow.png 640w","/commerce-php/static/873f3f908c1d581b331c09fbb20cc27c/bbbf7/index_indexers_flow.png 1280w","/commerce-php/static/873f3f908c1d581b331c09fbb20cc27c/4c573/index_indexers_flow.png 1300w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/873f3f908c1d581b331c09fbb20cc27c/bbbf7/index_indexers_flow.png",alt:"Partial indexing workflow",title:"Partial indexing workflow",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h3",{id:"indexer-status"},"Indexer status"),(0,i.mdx)("p",null,"Depending on whether index data is up to date, an indexer status value is one of the following:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Database Status"),(0,i.mdx)("th",{parentName:"tr",align:null},"Admin Status"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"valid")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ready"),(0,i.mdx)("td",{parentName:"tr",align:null},"Data is synchronized, no reindex required")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"invalid")),(0,i.mdx)("td",{parentName:"tr",align:null},"Reindex Required"),(0,i.mdx)("td",{parentName:"tr",align:null},"The original data was changed, the index should be updated")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"working")),(0,i.mdx)("td",{parentName:"tr",align:null},"Processing"),(0,i.mdx)("td",{parentName:"tr",align:null},"Indexing is in progress")))),(0,i.mdx)("p",null,"The database status can be seen when viewing the SQL table ",(0,i.mdx)("inlineCode",{parentName:"p"},"indexer_state"),".\nThe admin status can be seen when viewing the indexer grid in Admin or when running the index status from the CLI."),(0,i.mdx)("p",null,"The indexing mechanism uses the status value in reindex triggering process. You can check the status of an indexer in the Admin panel in ",(0,i.mdx)("strong",{parentName:"p"},"System >")," Tools ",(0,i.mdx)("strong",{parentName:"p"},"> Index Management")," or manually using the ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-indexers.html#view-indexer-status"},"command line"),"."),(0,i.mdx)("h3",{id:"using-application-lock-mode-for-reindex-processes"},"Using application lock mode for reindex processes"),(0,i.mdx)("p",null,"Starting with 2.4.3, you can enable ",(0,i.mdx)("inlineCode",{parentName:"p"},"use_application_lock")," mode for reindexing through the use of environment variables or by configuring the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/etc/env.php")," file like so:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nreturn [\n    'indexer' => [\n        'use_application_lock' => true\n    ]\n];\n")),(0,i.mdx)("p",null,"In case of a failure during the reindexing of a certain indexer, having this mode enabled will return a more accurate status of the indexer.\nThe status can be obtained from the indexer grid in the Admin or through the ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento indexer:status")," command in the CLI."),(0,i.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The status values in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"indexer_state")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"mview_state")," database tables may not be the same as what is observed, because they sometimes do not get updated when an indexer fails."),(0,i.mdx)("p",null,"An additional benefit of this mode is that the application will, internally, also see a more accurate status of the indexers and if an indexer failed, the application will now see this and the cronjob will pick up the indexer to try it again.\nWithout this mode, it was necessary to manually reset the indexer when it failed. With this mode enabled, this should no longer be the case if the reindexing doesn't fail again during the next attempt."),(0,i.mdx)("h3",{id:"indexing-modes"},"Indexing modes"),(0,i.mdx)("p",null,"Reindexing can be performed in two modes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Update on Save - index tables are updated immediately after the dictionary data is changed.")),(0,i.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Update on Save")," indexers must use custom code (plugins, events or any other working approach) in order to trigger reindexing when entities are saved/deleted etc."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Update by Schedule - index tables are updated by cron job according to the configured schedule.")),(0,i.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Update by Schedule")," does not support the ",(0,i.mdx)("inlineCode",{parentName:"p"},"customer_grid")," indexer. You must either use ",(0,i.mdx)("strong",{parentName:"p"},"Update on Save")," or reindex the customer grid manually (",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento indexer:reindex customer_grid"),"). See the ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-knowledge-base/kb/troubleshooting/miscellaneous/new-customers-not-displayed-in-customer-grid-after-csv-import.html"},"Help Center article"),"."),(0,i.mdx)("p",null,"To set these options:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Log in to the Admin."),(0,i.mdx)("li",{parentName:"ol"},"Click ",(0,i.mdx)("strong",{parentName:"li"},"System >")," Tools ",(0,i.mdx)("strong",{parentName:"li"},"> Index Management"),"."),(0,i.mdx)("li",{parentName:"ol"},"Select the checkbox next to each type of indexer to change."),(0,i.mdx)("li",{parentName:"ol"},"From the ",(0,i.mdx)("strong",{parentName:"li"},"Actions")," list, click the indexing mode."),(0,i.mdx)("li",{parentName:"ol"},"Click ",(0,i.mdx)("strong",{parentName:"li"},"Submit"),".")),(0,i.mdx)("p",null,"You can also reindex from the ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-indexers.html#configure-indexers"},"command line")),(0,i.mdx)("p",null,"The following figure shows an example of setting indexers to Update by Schedule:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1138px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/9c496e92d10fde80e2d988de47d505d0/5530d/index_index-modes.webp 320w","/commerce-php/static/9c496e92d10fde80e2d988de47d505d0/0c8fb/index_index-modes.webp 640w","/commerce-php/static/9c496e92d10fde80e2d988de47d505d0/58ffc/index_index-modes.webp 1138w"],sizes:"(max-width: 1138px) 100vw, 1138px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/9c496e92d10fde80e2d988de47d505d0/dd4a7/index_index-modes.png 320w","/commerce-php/static/9c496e92d10fde80e2d988de47d505d0/0f09e/index_index-modes.png 640w","/commerce-php/static/9c496e92d10fde80e2d988de47d505d0/0ff2a/index_index-modes.png 1138w"],sizes:"(max-width: 1138px) 100vw, 1138px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/9c496e92d10fde80e2d988de47d505d0/0ff2a/index_index-modes.png",alt:"Changing indexer modes",title:"Changing indexer modes",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h3",{id:"mview"},"Mview"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"mview.xml")," file is used to track database changes for a certain entity."),(0,i.mdx)("p",null,"For example part of ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento/Catalog/etc/mview.xml")," is tracking category to product relation described in the following record:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- ... --\x3e\n<view id="catalog_category_product" class="Magento\\Catalog\\Model\\Indexer\\Category\\Product" group="indexer">\n  <subscriptions>\n    <table name="catalog_category_entity" entity_column="entity_id" />\n    <table name="catalog_category_entity_int" entity_column="entity_id" />\n  </subscriptions>\n</view>\n\x3c!-- ... --\x3e\n')),(0,i.mdx)("p",null,"Explanation of nodes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"view")," node defines an indexer. The ",(0,i.mdx)("inlineCode",{parentName:"li"},"id")," attribute is a name of the indexer table, the ",(0,i.mdx)("inlineCode",{parentName:"li"},"class")," attribute is the indexer executor, the ",(0,i.mdx)("inlineCode",{parentName:"li"},"group")," attribute defines the indexer group."),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"subscriptions")," node is a list of tables for tracking changes."),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"table")," node defines the certain table to observe and track changes. The attribute ",(0,i.mdx)("inlineCode",{parentName:"li"},"name")," is the name of an observable table, the attribute ",(0,i.mdx)("inlineCode",{parentName:"li"},"entity_column")," is an identifier column of the entity to be re-indexed. So, in the case of ",(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_category_product"),", whenever one or more categories are saved, updated or deleted in ",(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_category_entity"),", the ",(0,i.mdx)("inlineCode",{parentName:"li"},"execute")," method of ",(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Model\\Indexer\\Category\\Product")," will be called with the argument ",(0,i.mdx)("inlineCode",{parentName:"li"},"ids")," containing ids of entities from the column defined under the ",(0,i.mdx)("inlineCode",{parentName:"li"},"entity_column"),' attribute. If the indexer type is set to "Update on Save", the method is called right away after the operation. If it is set to "Update by Schedule" the mechanism creates a record in the change log table using MYSQL triggers.')),(0,i.mdx)("p",null,"A change log table is created according to the naming rule - INDEXER_TABLE_NAME + '_cl', in case of ",(0,i.mdx)("inlineCode",{parentName:"p"},"catalog_category_product")," it will be ",(0,i.mdx)("inlineCode",{parentName:"p"},"catalog_category_product_cl"),".\nThe table contains the ",(0,i.mdx)("inlineCode",{parentName:"p"},"version_id")," auto-increment column and ",(0,i.mdx)("inlineCode",{parentName:"p"},"entity_id")," column that contains identifiers of entities to be re-indexed.\nFor each ",(0,i.mdx)("inlineCode",{parentName:"p"},"table")," node the framework automatically creates MYSQL AFTER triggers for each possible event (INSERT, UPDATE, DELETE)."),(0,i.mdx)("p",null,"For the table ",(0,i.mdx)("inlineCode",{parentName:"p"},"catalog_category_entity")," triggers will be created with the following statements.\nINSERT operation:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-mysql"},"BEGIN\n    INSERT IGNORE INTO `catalog_category_product_cl` (`entity_id`) VALUES (NEW.`entity_id`);\nEND\n")),(0,i.mdx)("p",null,"UPDATE operation:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-mysql"},"BEGIN\n    IF (NEW.`entity_id` <=> OLD.`entity_id`\n        OR NEW.`attribute_set_id` <=> OLD.`attribute_set_id`\n        OR NEW.`parent_id` <=> OLD.`parent_id`\n        OR NEW.`created_at` <=> OLD.`created_at`\n        OR NEW.`path` <=> OLD.`path`\n        OR NEW.`position` <=> OLD.`position`\n        OR NEW.`level` <=> OLD.`level`\n        OR NEW.`children_count` <=> OLD.`children_count`)\n            THEN INSERT IGNORE INTO `catalog_category_product_cl` (`entity_id`) VALUES (NEW.`entity_id`);\n    END IF;\nEND\n")),(0,i.mdx)("p",null,"DELETE operation:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-mysql"},"BEGIN\n    INSERT IGNORE INTO `catalog_category_product_cl` (`entity_id`) VALUES (OLD.`entity_id`);\nEND\n")),(0,i.mdx)("p",null,"The method ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\Mview\\ViewInterface::update")," is responsible for handling records in the changelog. The method is being called by CRON and\nit defines IDs to be re-indexed from the change log by last applied ",(0,i.mdx)("inlineCode",{parentName:"p"},"version_id")," and calls the ",(0,i.mdx)("inlineCode",{parentName:"p"},"execute")," method for each particular indexer with IDs as an argument."),(0,i.mdx)("h3",{id:"how-to-reindex"},"How to reindex"),(0,i.mdx)("p",null,"You can reindex by:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Using a ",(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/configure-cron-jobs.html"},"cron job"),", which is preferred because indexing runs every minute."),(0,i.mdx)("li",{parentName:"ul"},"Using the ",(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-indexers.html#config-cli-subcommands-index-reindex"},(0,i.mdx)("inlineCode",{parentName:"a"},"magento indexer:reindex [indexer]"))," command, which reindexes selected indexers, or all indexers, one time only.")),(0,i.mdx)("h2",{id:"indexers"},"Indexers"),(0,i.mdx)("p",null,"Magento Open Source implements the following indexers (use ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/reference/cli/magento.html#indexerinfo"},"bin/magento indexer:info")," to list the indexers):"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Indexer method name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Indexer class"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"design_config_grid")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Theme/Model/Indexer/Design/Config.php"},"Magento\\Theme\\Model\\Indexer\\Design\\Config")),(0,i.mdx)("td",{parentName:"tr",align:null})),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"customer_grid")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Indexer/Action/Entity.php"},"Magento\\Framework\\Indexer\\Action\\Entity")),(0,i.mdx)("td",{parentName:"tr",align:null},"Rebuilds the customer grid index. Not supported by the ",(0,i.mdx)("inlineCode",{parentName:"td"},"Update by Schedule")," indexing mode. See the ",(0,i.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/commerce-knowledge-base/kb/troubleshooting/miscellaneous/new-customers-not-displayed-in-customer-grid-after-csv-import.html"},"Help Center article"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"catalog_category_product")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Model/Indexer/Category/Product.php"},"Magento\\Catalog\\Model\\Indexer\\Category\\Product")),(0,i.mdx)("td",{parentName:"tr",align:null},"Creates category/products association")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"catalog_product_category")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Model/Indexer/Product/Category.php"},"Magento\\Catalog\\Model\\Indexer\\Product\\Category")),(0,i.mdx)("td",{parentName:"tr",align:null},"Creates category/products association")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"catalog_product_price")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Model/Indexer/Product/Price.php"},"Magento\\Catalog\\Model\\Indexer\\Product\\Price")),(0,i.mdx)("td",{parentName:"tr",align:null},"Pre-calculates product prices")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"catalog_product_attribute")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Model/Indexer/Product/Eav.php"},"Magento\\Catalog\\Model\\Indexer\\Product\\Eav")),(0,i.mdx)("td",{parentName:"tr",align:null},"Reorganizes the EAV product structure to flat structure")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"inventory")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/develop/InventoryIndexer/Indexer/InventoryIndexer.php"},"Magento\\InventoryIndexer\\Indexer\\InventoryIndexer")),(0,i.mdx)("td",{parentName:"tr",align:null},"Provides indexation logic for Inventory Management")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"cataloginventory_stock")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Model/Indexer/Stock.php"},"Magento\\CatalogInventory\\Model\\Indexer\\Stock")),(0,i.mdx)("td",{parentName:"tr",align:null})),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"catalogrule_rule")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogRule/Model/Indexer/Rule/RuleProductIndexer.php"},"Magento\\CatalogRule\\Model\\Indexer\\Rule\\RuleProductIndexer")),(0,i.mdx)("td",{parentName:"tr",align:null})),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"catalogrule_product")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogRule/Model/Indexer/Product/ProductRuleIndexer.php"},"Magento\\CatalogRule\\Model\\Indexer\\Product\\ProductRuleIndexer")),(0,i.mdx)("td",{parentName:"tr",align:null})),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"catalogsearch_fulltext")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogSearch/Model/Indexer/Fulltext.php"},"Magento\\CatalogSearch\\Model\\Indexer\\Fulltext")),(0,i.mdx)("td",{parentName:"tr",align:null})))),(0,i.mdx)("p",null,"Adobe Commerce also provides the following indexers:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Indexer name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Indexer method name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Indexer class"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Product/Target Rule"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"targetrule_product_rule")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"\\Magento\\TargetRule\\Model\\Indexer\\TargetRule\\Product\\Rule")),(0,i.mdx)("td",{parentName:"tr",align:null},"Indexes product/rule association")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Target Rule/Product"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"targetrule_rule_product")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Magento\\TargetRule\\Model\\Indexer\\TargetRule\\Rule\\Product")),(0,i.mdx)("td",{parentName:"tr",align:null},"Indexes rule/product association")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Sales Rule"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"salesrule_rule")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Magento\\AdvancedSalesRule\\Model\\Indexer\\SalesRule")),(0,i.mdx)("td",{parentName:"tr",align:null},"Indexes sales rule")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-indexing-index-md-9926e2677452bbe0d3ab.js.map