"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[78902],{83172:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return u}});var i=a(87462),t=a(45987),o=(a(35776),a(3905)),d=a(91515);const m=["components"],l={},r=(x="InlineAlert",function(e){return console.warn("Component "+x+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var x;const p={_frontmatter:l},s=d.Z;function u(e){let{components:n}=e,a=(0,t.Z)(e,m);return(0,o.mdx)(s,(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"magento_indexer-module"},"Magento_Indexer module"),(0,o.mdx)("p",null,"This module provides Magento Indexing functionality.\nIt allows to:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"read indexers configuration"),(0,o.mdx)("li",{parentName:"ul"},"represent indexers in admin"),(0,o.mdx)("li",{parentName:"ul"},"regenerate indexes by cron schedule"),(0,o.mdx)("li",{parentName:"ul"},"regenerate indexes from console"),(0,o.mdx)("li",{parentName:"ul"},"view and reset indexer state from console"),(0,o.mdx)("li",{parentName:"ul"},"view and set indexer mode from console")),(0,o.mdx)("h2",{id:"installation"},"Installation"),(0,o.mdx)("p",null,"The Magento_Indexer module is one of the base Magento 2 modules. You cannot disable or uninstall this module."),(0,o.mdx)("p",null,"This module is dependent on the following modules:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Magento_Store")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Magento_AdminNotification"))),(0,o.mdx)("p",null,"The Magento_Indexer module creates the following tables in the database:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"indexer_state")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"mview_state"))),(0,o.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/manage-modules.html"},"Enable or disable modules"),"."),(0,o.mdx)("h2",{id:"structure"},"Structure"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"App/")," - the directory that contains launch application entry point."),(0,o.mdx)("p",null,"For information about a typical file structure of a module in Magento 2, see ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/component-file-structure/#module-file-structure"},"Module file structure"),"."),(0,o.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,o.mdx)("p",null,"Extension developers can interact with the Magento_Indexer module. For more information about the Magento extension mechanism, see ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plugins"),"."),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_Indexer module."),(0,o.mdx)("h3",{id:"events"},"Events"),(0,o.mdx)("p",null,"The module dispatches the following events:"),(0,o.mdx)("h4",{id:"model"},"Model"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"clean_cache_by_tags")," event in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Indexer\\Model\\Indexer\\CacheCleaner::cleanCache")," method. Parameters:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"object")," is a ",(0,o.mdx)("inlineCode",{parentName:"li"},"cacheContext")," object (",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\Indexer\\CacheContext")," class)")))),(0,o.mdx)("h4",{id:"plugin"},"Plugin"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"clean_cache_after_reindex")," event in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Indexer\\Model\\Processor\\CleanCache::afterUpdateMview")," method. Parameters:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"object")," is a ",(0,o.mdx)("inlineCode",{parentName:"li"},"context")," object (",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\Indexer\\CacheContext")," class)"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"clean_cache_by_tags")," event in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Indexer\\Model\\Processor\\CleanCache::afterReindexAllInvalid")," method. Parameters:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"object")," is a ",(0,o.mdx)("inlineCode",{parentName:"li"},"context")," object (",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\Indexer\\CacheContext")," class)")))),(0,o.mdx)("p",null,"For information about an event in Magento 2, see ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/events-and-observers/#events"},"Events and observers"),"."),(0,o.mdx)("h3",{id:"layouts"},"Layouts"),(0,o.mdx)("p",null,"This module introduces the following layout handles in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/layout")," directory:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"indexer_indexer_list")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"indexer_indexer_list_grid"))),(0,o.mdx)("p",null,"For more information about layouts in Magento 2, see the ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,o.mdx)("h2",{id:"additional-information"},"Additional information"),(0,o.mdx)("h3",{id:"indexer-modes"},"Indexer modes"),(0,o.mdx)("p",null,"There are 2 modes of the Indexers:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Update on Save - index tables are updated immediately after the dictionary data is changed"),(0,o.mdx)("li",{parentName:"ul"},"Update by Schedule - index tables are updated by cron job according to the configured schedule")),(0,o.mdx)("h3",{id:"console-commands"},"Console commands"),(0,o.mdx)("p",null,"Magento_Indexers provides console commands:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"bin/magento indexer:info")," - view a list of all indexers"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"bin/magento indexer:status [indexer]")," - view index status"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"bin/magento indexer:reindex [indexer]")," - run reindex"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"bin/magento indexer:reset [indexer]")," - reset indexers"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"bin/magento indexer:show-mode [indexer]")," - view the current indexer configuration"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"bin/magento indexer:set-mode {realtime|schedule} [indexer]")," - specify the indexer configuration"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"bin/magento indexer:set-dimensions-mode [indexer]")," - set indexer dimension mode"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"bin/magento indexer:show-dimensions-mode [indexer]")," - set indexer dimension mode")),(0,o.mdx)("h3",{id:"cron-options"},"Cron options"),(0,o.mdx)("p",null,"Cron group configuration can be set at ",(0,o.mdx)("inlineCode",{parentName:"p"},"etc/crontab.xml"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"indexer_reindex_all_invalid")," - regenerate indexes for all invalid indexers"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"indexer_update_all_views")," - update indexer views"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"indexer_clean_all_changelogs")," - clean indexer view changelogs")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/configure-cron-jobs.html"},"Learn how to configure and run cron in Magento."),"."),(0,o.mdx)("p",null,"More information can get at articles:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/php/development/components/indexing/"},"Learn more about indexing")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/php/development/components/indexing/optimization/"},"Learn more about Indexer optimization")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/php/development/components/indexing/custom-indexer/"},"Learn more how to add custom indexer")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-indexers.html"},"Learn how to manage indexers")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-admin/systems/tools/index-management.html"},"Learn more about Index Management"))),(0,o.mdx)(r,{slots:"text",mdxType:"InlineAlert"}),"The version of this module is 100.4.7.")}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-indexer-md-a12dc745f7f1a33bf37a.js.map