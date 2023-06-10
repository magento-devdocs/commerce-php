"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[26593],{19361:function(e,o,t){t.r(o),t.d(o,{_frontmatter:function(){return i},default:function(){return p}});var a=t(87462),n=t(63366),r=(t(15007),t(64983)),s=t(91515),d=["components"],i={},l={_frontmatter:i},m=s.Z;function p(e){var o=e.components,t=(0,n.Z)(e,d);return(0,r.mdx)(m,(0,a.Z)({},l,t,{components:o,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"The Magento_SharedCatalog modules defines the visibility of products as well as product prices in the catalog and in B2B quotes for different company accounts."),(0,r.mdx)("p",null,"The module allows a merchant to create multiple shared catalogs, link them to one or more company accounts, and set different product prices. Shared catalogs also control the visibility of products and categories for a company in the storefront. The shared catalog type (public or custom) defines the scope of products and prices available for guest users vs logged-in users. The system can have only one public and any number of custom shared catalogs."),(0,r.mdx)("p",null,"The module relies on the CatalogPermissions module, in that the visibility of categories for a customer group is defined by category permissions for this customer group. Once a shared catalog is enabled in B2B features, the category permissions are automatically enabled. Adding a product or a category to a shared catalog enables appropriate category permissions for the customer groups linked to this shared catalog."),(0,r.mdx)("p",null,"The module provides web APIs and can be integrated with third-party solutions to manage shared catalogs in Magento."),(0,r.mdx)("h2",{id:"installation-details"},"Installation details"),(0,r.mdx)("p",null,"The module heavily depends on the Magento_Company module, which must be installed and enabled the first. Category permissions must be enabled for shared catalogs to work properly. Price configuration for a shared catalog requires the start of a message queue consumer ",(0,r.mdx)("inlineCode",{parentName:"p"},"sharedCatalogUpdatePrice"),"."),(0,r.mdx)("p",null,"The module does not create any backward incompatible changes. Can be deactivated and uninstalled at any time."),(0,r.mdx)("p",null,"When the module is uninstalled, the other ","[ProductType]","SharedCatalog modules won't work."),(0,r.mdx)("h2",{id:"structure"},"Structure"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/component-file-structure/"},"Learn about a typical file structure for a Magento 2 module"),"."),(0,r.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,r.mdx)("p",null,"Shared catalogs are using message queues to save prices. For more information about queues, see ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/message-queues/"},"Message Queues"),"."),(0,r.mdx)("p",null,"Extension developers can interact with the Magento_SharedCatalog module. For more information about the Magento extension mechanism, see ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plug-ins"),"."),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_SharedCatalog module."),(0,r.mdx)("h3",{id:"layouts"},"Layouts"),(0,r.mdx)("p",null,"You can extend and override layouts in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\SharedCatalog\\view\\adminhtml\\layout")," directory."),(0,r.mdx)("p",null,"For more information about layouts, see the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,r.mdx)("h3",{id:"ui-components"},"UI components"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\SharedCatalog\\view\\adminhtml\\ui_component")," directory contains extensible UI components."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Forms: Company, catalog rule, catalog rule staging, product, sales rule, sales rule staging update, shared catalog, shared catalog tier price.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Listings: Company, product, shared catalog company, shared catalog, shared catalog product pricing, shared catalog product listing."))),(0,r.mdx)("p",null,"For more information, see ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/components/listing-grid/"},"UI Listing/Grid Component")," and ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/components/form/"},"UI Form Component"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-beta-module-shared-catalog-md-0d59c0831e6bf8588c92.js.map