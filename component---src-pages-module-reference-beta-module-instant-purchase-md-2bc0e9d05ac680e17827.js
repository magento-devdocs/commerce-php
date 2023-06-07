"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[3586],{54550:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return p}});var n=a(87462),o=a(63366),i=(a(15007),a(64983)),m=a(91515),r=["components"],d={},s={_frontmatter:d},l=m.Z;function p(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.mdx)(l,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"magento_instantpurchase-module"},"Magento_InstantPurchase module"),(0,i.mdx)("p",null,"This module allows the Customer to place the order in seconds without going through full checkout. Once clicked, system places the order using default shipping and billing addresses and stored payment method. Order is placed and customer gets confirmation message in notification area."),(0,i.mdx)("h2",{id:"installation"},"Installation"),(0,i.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html"},"Enable or disable modules"),"."),(0,i.mdx)("h2",{id:"structure"},"Structure"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"PaymentMethodsIntegration")," - directory contains interfaces and basic implementation of integration vault payment method to the instant purchase."),(0,i.mdx)("p",null,"For information about a typical file structure of a module in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.4/extension-dev-guide/build/module-file-structure.html#module-file-structure"},"Module file structure"),"."),(0,i.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,i.mdx)("p",null,"Extension developers can interact with the Magento_InstantPurchase module. For more information about the Magento extension mechanism, see ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/plugins.html"},"Magento plugins"),"."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/depend-inj.html"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_InstantPurchase module."),(0,i.mdx)("h3",{id:"public-apis"},"Public APIs"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\InstantPurchase\\Model\\BillingAddressChoose\\BillingAddressChooserInterface")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"choose billing address for a customer if available"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\InstantPurchase\\Model\\PaymentMethodChoose\\PaymentTokenChooserInterface")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"choose one of the stored payment methods for a customer if available"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\InstantPurchase\\Model\\ShippingAddressChoose\\ShippingAddressChooserInterface")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"choose shipping address for a customer if available"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\InstantPurchase\\Model\\ShippingMethodChoose\\DeferredShippingMethodChooserInterface")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"choose shipping method for a quote address"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\InstantPurchase\\Model\\ShippingMethodChoose\\ShippingMethodChooserInterface")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"choose shipping method for customer address if available"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\InstantPurchase\\Model\\InstantPurchaseInterface")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"detects instant purchase options for a customer in a store"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\InstantPurchase\\PaymentMethodIntegration\\AvailabilityCheckerInterface")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"checks if payment method may be used for instant purchase"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\InstantPurchase\\PaymentMethodIntegration\\PaymentAdditionalInformationProviderInterface")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"provides additional information part specific for payment method"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\InstantPurchase\\PaymentMethodIntegration\\PaymentTokenFormatterInterface")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"provides mechanism to create string presentation of token for payment method")))),(0,i.mdx)("p",null,"For information about a public API in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.4/extension-dev-guide/api-concepts.html"},"Public interfaces & APIs"),"."),(0,i.mdx)("h2",{id:"additional-information"},"Additional information"),(0,i.mdx)("h3",{id:"instant-purchase-customization"},"Instant purchase customization"),(0,i.mdx)("p",null,"Almost all aspects of instant purchase may be customized. See comments to classes and interfaces marked with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@api")," tag."),(0,i.mdx)("p",null,"All payments created for instant purchase also have ",(0,i.mdx)("inlineCode",{parentName:"p"},"'instant-purchase' => true")," in addition information. Use this only if all other customization points not suitable,"),(0,i.mdx)("h3",{id:"payment-method-integration"},"Payment method integration"),(0,i.mdx)("p",null,"Instant purchase support may be implemented for any payment method with ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/payments-integrations/vault/vault-intro.html"},"vault support"),".\nBasic implementation provided in ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\InstantPurchase\\PaymentMethodIntegration")," should be enough in most cases. It is not enabled by default to avoid issues on production sites and authors of vault payment method should verify correct work for instant purchase manually.\nTo enable basic implementation just add single option to configuration of payemnt method in ",(0,i.mdx)("inlineCode",{parentName:"p"},"config.xml"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},"<instant_purchase>\n    <supported>1</supported>\n</instant_purchase>\n")),(0,i.mdx)("p",null,"Basic implementation is a good start point but it's recommended to provide own implementation to improve user experience. If instant purchase integration has customization then ",(0,i.mdx)("inlineCode",{parentName:"p"},"supported")," option is not required."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},"<instant_purchase>\n    <available>Implementation_Of_Magento\\InstantPurchase\\PaymentMethodIntegration\\AvailabilityCheckerInterface</available>\n    <tokenFormat>Implementation_Of_Magento\\InstantPurchase\\PaymentMethodIntegration\\PaymentTokenFormatterInterface</tokenFormat>\n    <additionalInformation>Implementation_Of_Magento\\InstantPurchase\\PaymentMethodIntegration\\PaymentAdditionalInformationProviderInterface</additionalInformation>\n</instant_purchase>\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\InstantPurchase\\PaymentMethodIntegration\\AvailabilityCheckerInterface")," - allows programmatically defines if instant purchase supported (e.g. support may not be available if some payment method option switched on/off). Basic implementation always returns ",(0,i.mdx)("inlineCode",{parentName:"li"},"true"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\InstantPurchase\\PaymentMethodIntegration\\PaymentTokenFormatterInterface")," - creates string that describes stored payment method. Basic implementation returns payment method name. It is highly recommended to implement own formatter."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\InstantPurchase\\PaymentMethodIntegration\\PaymentAdditionalInformationProviderInterface")," - allows to add some extra values to payment additional information array. Default implementation returns empty array.")),(0,i.mdx)("h3",{id:"prerequisites-to-display-the-instant-purchase-button"},"Prerequisites to display the Instant Purchase button"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Instant purchase enabled for a store at ",(0,i.mdx)("inlineCode",{parentName:"li"},"Store / Configurations / Sales / Sales / Instant Purchase")),(0,i.mdx)("li",{parentName:"ol"},"Customer is logged in"),(0,i.mdx)("li",{parentName:"ol"},"Customer has default shipping and billing address defined"),(0,i.mdx)("li",{parentName:"ol"},"Customer has valid stored payment method with instant purchase support")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/sales/checkout-instant-purchase.html"},"Learn more about Instant Purchase"),"."),(0,i.mdx)("h3",{id:"backward-incompatible-changes"},"Backward incompatible changes"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_InstantPurchase")," module does not introduce backward incompatible changes."),(0,i.mdx)("p",null,"You can track ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/release-notes/backward-incompatible-changes/reference.html"},"backward incompatible changes in patch releases"),"."),(0,i.mdx)("hr",null),(0,i.mdx)("p",null,"This module was initially developed by the ",(0,i.mdx)("a",{parentName:"p",href:"https://creatuity.com/"},"Creatuity Corp.")," and ",(0,i.mdx)("a",{parentName:"p",href:"mailto:engcom@magento.com"},"Magento Community Engineering Team"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-beta-module-instant-purchase-md-2bc0e9d05ac680e17827.js.map