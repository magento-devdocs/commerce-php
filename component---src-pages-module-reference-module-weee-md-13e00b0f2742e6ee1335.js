"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[34421],{98272:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return u}});var t=a(87462),i=a(63366),l=(a(15007),a(64983)),m=a(91515),d=["components"],o={},r={_frontmatter:o},p=m.Z;function u(e){var n=e.components,a=(0,i.Z)(e,d);return(0,l.mdx)(p,(0,t.Z)({},r,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"magento_weee-module"},"Magento_Weee module"),(0,l.mdx)("p",null,"The Magento_Weee module enables the application of fees/fixed product taxes (FPT) on certain types of products, usually related to electronic devices and recycling."),(0,l.mdx)("p",null,"Fixed product taxes can be used to setup a WEEE tax that is a fixed amount, rather than a percentage of the product price. FPT can be configured to be displayed at various places in Magento. Rules, amounts, and display options can be configured in the backend."),(0,l.mdx)("p",null,"This module extends the existing functionality of Magento_Tax."),(0,l.mdx)("p",null,"The Magento_Weee module includes the following:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Ability to add different number of fixed product taxes to product. They are treated as a product attribute."),(0,l.mdx)("li",{parentName:"ul"},"Configuration of where WEEE appears (on category, product, sales, invoice, or credit memo pages) and whether FPT should be taxed."),(0,l.mdx)("li",{parentName:"ul"},"A new line item in the totals section.")),(0,l.mdx)("h2",{id:"installation-details"},"Installation details"),(0,l.mdx)("p",null,"The Magento_Weee module can be installed automatically (using native Magento install mechanism) without any additional actions."),(0,l.mdx)("p",null,"Before installing this module, note that the Magento_Weee is dependent on the following modules:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Magento_Catalog"),(0,l.mdx)("li",{parentName:"ul"},"Magento_Checkout"),(0,l.mdx)("li",{parentName:"ul"},"Magento_Customer"),(0,l.mdx)("li",{parentName:"ul"},"Magento_Quote"),(0,l.mdx)("li",{parentName:"ul"},"Magento_Sales"),(0,l.mdx)("li",{parentName:"ul"},"Magento_Store"),(0,l.mdx)("li",{parentName:"ul"},"Magento_Tax")),(0,l.mdx)("p",null,"Refer to ",(0,l.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html"},"how to enable or disable modules in Magento 2"),"."),(0,l.mdx)("h2",{id:"structure"},"Structure"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Pricing/")," - directory that contain tax adjustment."),(0,l.mdx)("p",null,"For information about a typical file structure of a module, see ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/component-file-structure/#module-file-structure"},"Module file structure"),"."),(0,l.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,l.mdx)("p",null,"Extension developers can interact with the Magento_Weee module. For more information about the Magento extension mechanism, see ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plug-ins"),"."),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_Weee module."),(0,l.mdx)("h3",{id:"layouts"},"Layouts"),(0,l.mdx)("p",null,"This module introduces the following layouts and layout handles in the directories:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/layout"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"catalog_product_form")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_creditmemo_item_price")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_invoice_item_price")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_create_item_price")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_creditmemo_new")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_creditmemo_updateqty")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_creditmemo_view")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_invoice_new")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_invoice_updateqty")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_invoice_view")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_item_price")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_view")))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"view/base/layout"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"catalog_product_prices")))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"checkout_cart_index")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"checkout_index_index")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"checkout_item_price_renderers")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"default")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_email_item_price")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_email_order_creditmemo_items")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_email_order_invoice_items")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_email_order_items")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_guest_creditmemo")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_guest_invoice")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_guest_print")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_guest_printcreditmemo")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_guest_printinvoice")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_guest_view")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_creditmemo")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_invoice")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_item_price")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_print")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_printcreditmemo")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_printinvoice")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_order_view"))))),(0,l.mdx)("p",null,"For more information about a layout, see the ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,l.mdx)("h3",{id:"ui-components"},"UI components"),(0,l.mdx)("p",null,"You can extend a customer form and widgets using the configuration files located in the directories "),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"view/adminhtml/ui_component"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"product_attribute_add_form")))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"view/frontend/ui_component"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"widget_recently_compared")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"widget_recently_viewed"))))),(0,l.mdx)("p",null,"For information about a UI component, see ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/"},"Overview of UI components"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-weee-md-13e00b0f2742e6ee1335.js.map