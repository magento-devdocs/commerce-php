"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[10567],{57861:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return s}});var a=t(87462),r=t(63366),o=(t(15007),t(64983)),m=t(91515),i=t(1930),p=["components"],d={},l={_frontmatter:d},c=m.Z;function s(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.mdx)(c,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(i.default,{mdxType:"Docs"}),(0,o.mdx)("h1",{id:"payment-info-rendering-in-admin-checkout"},"Payment info rendering in Admin checkout"),(0,o.mdx)("p",null,"The payment information form rendering in ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"Admin")," order creation is defined by the block class, its template and ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/layout"},"layout"),"."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"formBlockType")," is one of the arguments you must ",(0,o.mdx)("a",{parentName:"p",href:"facade-configuration.md"},"configure for the payment method facade"),"."),(0,o.mdx)("p",null,"This block is used to display payment form on billing form in Admin panel. In\nmost cases it is enough to use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Payment\\Block\\Form\\Cc"),". All payments details are displayed according to specified keys in ",(0,o.mdx)("inlineCode",{parentName:"p"},"paymentInfoKeys")," option in ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," configuration."),(0,o.mdx)("h2",{id:"example-of-custom-formblocktype-braintree-payment-method-implementation"},"Example of custom formBlockType: Braintree payment method implementation"),(0,o.mdx)("p",null,"In the integration with the Braintree payment provider, we use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Braintree\\Block\\Form")," class as ",(0,o.mdx)("inlineCode",{parentName:"p"},"formBlockType"),". It allows displaying only card types available for configured countries:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"class Form extends Cc\n{\n    /**\n     * Get list of available card types of order billing address country\n     * @return array\n     */\n    public function getCcAvailableTypes()\n    {\n        $configuredCardTypes = $this->getConfiguredCardTypes();\n        $countryId = $this->sessionQuote->getQuote()->getBillingAddress()->getCountryId();\n        return $this->filterCardTypesForCountry($configuredCardTypes, $countryId);\n    }\n\n    /**\n     * Get card types available for Braintree\n     * @return array\n     */\n    private function getConfiguredCardTypes()\n    {\n        $types = $this->ccType->getCcTypeLabelMap();\n        $configCardTypes = array_fill_keys($this->gatewayConfig->getAvailableCardTypes(), '');\n\n        return array_intersect_key($types, $configCardTypes);\n    }\n\n    /**\n     * Filter card types for specific country\n     * @param array $configCardTypes\n     * @param string $countryId\n     * @return array\n     */\n    private function filterCardTypesForCountry(array $configCardTypes, $countryId)\n    {\n        $filtered = $configCardTypes;\n        $countryCardTypes = $this->gatewayConfig->getCountryAvailableCardTypes($countryId);\n        // filter card types only if specific card types are set for country\n        ...\n\n        return $filtered;\n    }\n}\n")),(0,o.mdx)("h2",{id:"template"},"Template"),(0,o.mdx)("p",null,"For creating a template for the payment information rendering class, you can use the default ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/view/adminhtml/templates/form/cc.phtml"},"cc.phtml")," as example."),(0,o.mdx)("p",null,"Then add the template to the billing form layout ",(0,o.mdx)("inlineCode",{parentName:"p"},"sales_order_create_index.xml"),"."),(0,o.mdx)("p",null,"The following example adds the Braintree-specific template ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/view/adminhtml/templates/form/cc.phtml"},(0,o.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Payment/view/adminhtml/templates/form/cc.phtml"))," to the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/app/code/Magento/Braintree/view/adminhtml/layout/sales_order_create_index.xml"},"billing form layout in the Braintree module"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <body>\n        <referenceBlock name="order_create_billing_form">\n            <action method="setMethodFormTemplate">\n                \x3c!-- your method code and template --\x3e\n                <argument name="method" xsi:type="string">braintree</argument>\n                <argument name="template" xsi:type="string">Magento_Braintree::form/cc.phtml</argument>\n            </action>\n        </referenceBlock>\n    </body>\n</page>\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-base-integration-formblocktype-md-6aaeace69f9c69413e73.js.map