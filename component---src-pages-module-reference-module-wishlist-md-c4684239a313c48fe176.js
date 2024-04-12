"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[41862],{7296:function(e,i,t){t.r(i),t.d(i,{_frontmatter:function(){return o},default:function(){return p}});var n=t(87462),l=t(45987),a=(t(35776),t(3905)),m=t(91515);const d=["components"],o={},r={_frontmatter:o},s=m.Z;function p(e){let{components:i}=e,t=(0,l.Z)(e,d);return(0,a.mdx)(s,(0,n.Z)({},r,t,{components:i,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"magento_wishlist-module"},"Magento_Wishlist module"),(0,a.mdx)("p",null,"The Magento_Wishlist module implements the Wishlist functionality."),(0,a.mdx)("p",null,"This module allows customers to create a list of products that they can add to their shopping cart to be purchased at a later date, or share with friends."),(0,a.mdx)("h2",{id:"installation-details"},"Installation details"),(0,a.mdx)("p",null,"Before installing this module, note that the Magento_Wishlist is dependent on the following modules:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Magento_Captcha"),(0,a.mdx)("li",{parentName:"ul"},"Magento_Catalog"),(0,a.mdx)("li",{parentName:"ul"},"Magento_Customer")),(0,a.mdx)("p",null,"Before disabling or uninstalling this module, note the following dependencies:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Magento_WishlistAnalytics")),(0,a.mdx)("p",null,"Refer to ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/manage-modules.html"},"how to enable or disable modules in Magento 2"),"."),(0,a.mdx)("h2",{id:"structure"},"Structure"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"Pricing/")," - the directory that contain solutions for configurable and downloadable product price."),(0,a.mdx)("p",null,"For information about a typical file structure of a module, see ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/component-file-structure/#module-file-structure"},"Module file structure"),"."),(0,a.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,a.mdx)("p",null,"Extension developers can interact with the Magento_Wishlist module. For more information about the Magento extension mechanism, see ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plug-ins"),"."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_Wishlist module."),(0,a.mdx)("h3",{id:"events"},"Events"),(0,a.mdx)("p",null,"The module dispatches the following events:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"product_option_renderer_init")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Block\\Customer\\Wishlist\\Item\\Options::_construct()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"block")," is a Wishlist block customer items (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Block\\Customer\\Wishlist\\Item\\Options")," class)."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"rss_wishlist_xml_callback")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\Rss\\Wishlist::getRssData()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"$args")," is a array of product object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Catalog\\Model\\Product")," class)."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_add_item")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\Wishlist::addItem()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"item")," is an item object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\Item")," class)."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_add_product")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Controller\\Index\\Add::execute()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist")," is a Wishlist object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\Wishlist")," class)."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"product")," is a product object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Catalog\\Api\\Data\\ProductInterface")," class)."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"item")," is an item object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\Item")," class)."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_item_collection_products_after_load")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\ResourceModel\\Item\\Collection::_assignProducts()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"product_collection")," is a product collection object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Catalog\\Model\\ResourceModel\\Product\\Collection")," class)."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_items_renewed")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Helper\\Data::calculate()")," method."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_product_add_after")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\Wishlist::addNewItem()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"items")," is an array of item object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\Item")," class)."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_share")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Controller\\Index\\Send::execute()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist")," is a Wishlist object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\Wishlist")," class)."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_update_item")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Controller\\Index\\UpdateItemOptions::execute()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist")," is a Wishlist object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\Wishlist")," class)."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"product")," is a product object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Catalog\\Api\\Data\\ProductInterface")," class)."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"item")," is an item object (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Wishlist\\Model\\Item")," class).")))),(0,a.mdx)("p",null,"For information about the event, see ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/events-and-observers/#events"},"Events and observers"),"."),(0,a.mdx)("h3",{id:"layouts"},"Layouts"),(0,a.mdx)("p",null,"This module introduces the following layouts and layout handles in the directories:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"view/adminhtml/layout"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"customer_index_wishlist")))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"view/base/layout"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"catalog_product_prices")))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"view/frantend/layout"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"catalog_category_view")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"catalog_product_view")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"catalogsearch_advanced_result")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_index")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_item_renderers")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"customer_account")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"default")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_email_items")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_email_rss")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_index_configure")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_index_configure_type_bundle")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_index_configure_type_configurable")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_index_configure_type_downloadable")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_index_configure_type_grouped")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_index_configure_type_simple")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_index_index")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_index_share")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"wishlist_shared_index.xml"))))),(0,a.mdx)("p",null,"For more information about a layout, see the ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,a.mdx)("h3",{id:"ui-components"},"UI components"),(0,a.mdx)("p",null,"You can extend a customer form and widgets using the configuration files located in the directories"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"view/base/ui_component"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"customer_form")))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"view/frontend/ui_component"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"widget_recently_compared")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"widget_recently_viewed"))))),(0,a.mdx)("p",null,"For information about a UI component, see ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/"},"Overview of UI components"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-wishlist-md-c4684239a313c48fe176.js.map