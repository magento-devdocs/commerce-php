"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[10515],{45274:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return d},default:function(){return u}});var t=i(87462),o=i(45987),a=(i(35776),i(3905)),l=i(91515);const m=["components"],d={},p={_frontmatter:d},r=l.Z;function u(e){let{components:n}=e,i=(0,o.Z)(e,m);return(0,a.mdx)(r,(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"magento_offlineshipping-module"},"Magento_OfflineShipping module"),(0,a.mdx)("p",null,"This module implements the shipping methods which do not involve a direct interaction with shipping carriers, so called offline shipping methods.\nNamely, the following:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Free Shipping"),(0,a.mdx)("li",{parentName:"ul"},"Flat Rate"),(0,a.mdx)("li",{parentName:"ul"},"Table Rates"),(0,a.mdx)("li",{parentName:"ul"},"Store Pickup")),(0,a.mdx)("h2",{id:"installation"},"Installation"),(0,a.mdx)("p",null,"Before installing this module, note that the Magento_OfflineShipping is dependent on the following modules:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_Store")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_Sales")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_Quote")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_Quote")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_SalesRule"))),(0,a.mdx)("p",null,"The Magento_OfflineShipping module creates the ",(0,a.mdx)("inlineCode",{parentName:"p"},"shipping_tablerate")," table in the database."),(0,a.mdx)("p",null,"This module modifies the following tables in the database:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"salesrule")," - adds column ",(0,a.mdx)("inlineCode",{parentName:"li"},"simple_free_shipping")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"sales_order_item")," - adds column ",(0,a.mdx)("inlineCode",{parentName:"li"},"free_shipping")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"quote_address")," - adds column ",(0,a.mdx)("inlineCode",{parentName:"li"},"free_shipping")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"quote_item")," - adds column ",(0,a.mdx)("inlineCode",{parentName:"li"},"free_shipping")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"quote_address_item")," - adds column ",(0,a.mdx)("inlineCode",{parentName:"li"},"free_shipping"))),(0,a.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/manage-modules.html"},"Enable or disable modules"),"."),(0,a.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,a.mdx)("p",null,"Extension developers can interact with the Magento_OfflineShipping module. For more information about the Magento extension mechanism, see ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plug-ins"),"."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_OfflineShipping module."),(0,a.mdx)("p",null,"A lot of functionality in the module is on JavaScript, use ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/javascript/mixins/"},"mixins")," to extend it."),(0,a.mdx)("h3",{id:"layouts"},"Layouts"),(0,a.mdx)("p",null,"This module introduces the following layouts in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout")," directory:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_index")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_index_index"))),(0,a.mdx)("p",null,"For more information about a layout in Magento 2, see the ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,a.mdx)("h3",{id:"ui-components"},"UI components"),(0,a.mdx)("p",null,"This module extends following ui components located in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/ui_component")," directory:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"sales_rule_form")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"salesrulestaging_update_form"))),(0,a.mdx)("p",null,"For information about a UI component in Magento 2, see ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/"},"Overview of UI components"),"."),(0,a.mdx)("h2",{id:"additional-information"},"Additional information"),(0,a.mdx)("p",null,"You can get more information about offline shipping methods in magento at the articles:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://docs.magento.com/user-guide/shipping/shipping-free.html"},"How to configure Free Shipping")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://docs.magento.com/user-guide/shipping/shipping-flat-rate.html"},"How to configure Flat Rate")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://docs.magento.com/user-guide/shipping/shipping-table-rate.html"},"How to configure Table Rates")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://docs.magento.com/user-guide/shipping/shipping-in-store-delivery.html"},"How to configure Store Pickup"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-beta-module-offline-shipping-md-608a3379b2a49c2bd0b4.js.map