"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[58718],{49247:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return p}});var i=t(87462),n=t(63366),m=(t(15007),t(64983)),l=t(91515),d=["components"],o={},r={_frontmatter:o},s=l.Z;function p(e){var a=e.components,t=(0,n.Z)(e,d);return(0,m.mdx)(s,(0,i.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"magento_giftmessage-module"},"Magento_GiftMessage module"),(0,m.mdx)("p",null,"This module allows to add a message to order or to each ordered item either on frontend or backend."),(0,m.mdx)("h2",{id:"installation"},"Installation"),(0,m.mdx)("p",null,"Before installing this module, note that the Magento_GiftMessage is dependent on the following modules:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"Magento_Catalog")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"Magento_Sales")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"Magento_Quote"))),(0,m.mdx)("p",null,"Before disabling or uninstalling this module, note that the Magento_GiftMessageGraphQl module depends on this module"),(0,m.mdx)("p",null,"The Magento_GiftMessage module creates the ",(0,m.mdx)("inlineCode",{parentName:"p"},"gift_message")," table in the database."),(0,m.mdx)("p",null,"This module modifies the following tables in the database:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," - adds column ",(0,m.mdx)("inlineCode",{parentName:"li"},"gift_message_id")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_address")," - adds column ",(0,m.mdx)("inlineCode",{parentName:"li"},"gift_message_id")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_item")," - adds column ",(0,m.mdx)("inlineCode",{parentName:"li"},"gift_message_id")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_address_item")," - adds column ",(0,m.mdx)("inlineCode",{parentName:"li"},"gift_message_id")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"sales_order")," - adds column ",(0,m.mdx)("inlineCode",{parentName:"li"},"gift_message_id")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"sales_order_item")," - adds columns ",(0,m.mdx)("inlineCode",{parentName:"li"},"gift_message_id")," and ",(0,m.mdx)("inlineCode",{parentName:"li"},"gift_message_available"))),(0,m.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html"},"Enable or disable modules"),"."),(0,m.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,m.mdx)("p",null,"Extension developers can interact with the Magento_GiftMessage module. For more information about the Magento extension mechanism, see ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plugins"),"."),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_GiftMessage module."),(0,m.mdx)("p",null,"A lot of functionality in the module is on JavaScript, use ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/javascript/mixins/"},"mixins")," to extend it."),(0,m.mdx)("h3",{id:"events"},"Events"),(0,m.mdx)("p",null,"The module dispatches the following events:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"gift_options_prepare_items")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\GiftMessage\\Block\\Message\\Inline::getItems")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"items")," is a entityItems (",(0,m.mdx)("inlineCode",{parentName:"li"},"array")," type)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"gift_options_prepare")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\GiftMessage\\Block\\Message\\Inline::isMessagesOrderAvailable")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"entity")," is an entity object")))),(0,m.mdx)("p",null,"For information about an event in Magento 2, see ",(0,m.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.4/extension-dev-guide/events-and-observers.html#events"},"Events and observers"),"."),(0,m.mdx)("h3",{id:"layout"},"Layout"),(0,m.mdx)("p",null,"This module introduces the following layouts in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/layout")," directories:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"view/adminhtml/layout"),":",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"sales_order_create_index")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"sales_order_create_load_block_data")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"sales_order_create_load_block_items")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"sales_order_view")))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"view/frontend/layout"),":",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"checkout_cart_index")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"checkout_cart_item_renderers"))))),(0,m.mdx)("p",null,"For more information about a layout in Magento 2, see the ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,m.mdx)("h3",{id:"public-apis"},"Public APIs"),(0,m.mdx)("h4",{id:"data"},"Data"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"Magento\\GiftMessage\\Api\\Data\\MessageInterface"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gift message data")))),(0,m.mdx)("h4",{id:"cart"},"Cart"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\GiftMessage\\Api\\CartRepositoryInterface"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"get the gift message by cart ID for specified shopping cart"),(0,m.mdx)("li",{parentName:"ul"},"set the gift message for an entire shopping cart"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\GiftMessage\\Api\\GuestCartRepositoryInterface"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"get the gift message by cart ID for specified shopping cart"),(0,m.mdx)("li",{parentName:"ul"},"set the gift message for an entire shopping cart")))),(0,m.mdx)("h4",{id:"cart-item"},"Cart Item"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\GiftMessage\\Api\\GuestItemRepositoryInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"get the gift message for a specified item in a specified shopping cart"),(0,m.mdx)("li",{parentName:"ul"},"set the gift message for a specified item in a specified shopping cart"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\GiftMessage\\Api\\ItemRepositoryInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"get the gift message for a specified item in a specified shopping cart"),(0,m.mdx)("li",{parentName:"ul"},"set the gift message for a specified item in a specified shopping cart")))),(0,m.mdx)("h4",{id:"order"},"Order"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\GiftMessage\\Api\\OrderItemRepositoryInterface"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"get the gift message for a specified order"),(0,m.mdx)("li",{parentName:"ul"},"set the gift message for an entire order")))),(0,m.mdx)("h4",{id:"order-item"},"Order Item"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\GiftMessage\\Api\\OrderItemRepositoryInterface"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"get the gift message for a specified item in a specified order"),(0,m.mdx)("li",{parentName:"ul"},"set the gift message for a specified item in a specified order")))),(0,m.mdx)("p",null,"For information about a public API in Magento 2, see ",(0,m.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.4/extension-dev-guide/api-concepts.html"},"Public interfaces & APIs"),"."),(0,m.mdx)("h2",{id:"additional-information"},"Additional information"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/sales/gift-options.html"},"Learn more about Gift Options and Gift Message"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-gift-message-md-7035c3a4aa603de3990e.js.map