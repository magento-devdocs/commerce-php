"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[40153],{49629:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return p}});var a=t(87462),o=t(63366),i=(t(15007),t(64983)),d=t(91515),l=t(1930),r=["components"],m={},s={_frontmatter:m},u=d.Z;function p(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.mdx)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(l.default,{mdxType:"Docs"}),(0,i.mdx)("h1",{id:"enable-vault"},"Enable vault"),(0,i.mdx)("p",null,"Store customers must have the ability to enable and disable credit cards details storing."),(0,i.mdx)("p",null,"Adobe Commerce out-of-the-box provides mechanisms for adding this ability, but you still need to add modifications in your payment method implementation."),(0,i.mdx)("p",null,"These modifications are the following:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Adding vault enabling controls.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Modifying the payment component (updating of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"additional_data")," property must be added).")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Creating a request data builder."))),(0,i.mdx)("p",null,"The following paragraphs describe these points in details."),(0,i.mdx)("h2",{id:"add-vault-enabling-controls"},"Add vault enabling controls"),(0,i.mdx)("p",null,"Add the vault enabling controls to the payment form. In the following example, a checkbox bound to the Vault enabler is added."),(0,i.mdx)("p",null,"Example (",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/app/code/Magento/Braintree/view/frontend/web/template/payment/form.html"},"Magento/Braintree/view/frontend/web/template/payment/form.html"),"):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<form id="co-transparent-form-braintree" class="form" data-bind="" method="post" action="#" novalidate="novalidate">\n    <fieldset data-bind="attr: {class: \'fieldset payment items ccard\' + getCode(), id: \'payment_form_\' + getCode()}">\n        <legend class="legend">\n            <span>\x3c!-- ko i18n: \'Credit Card Information\'--\x3e\x3c!-- /ko --\x3e</span>\n        </legend>\n        ...\n        \x3c!-- ko if: (isVaultEnabled())--\x3e\n        <div class="field choice">\n            <input type="checkbox"\n                name="vault[is_enabled]"\n                class="checkbox"\n                data-bind="attr: {\'id\': getCode() + \'_enable_vault\'}, checked: vaultEnabler.isActivePaymentTokenEnabler"/>\n            <label class="label" data-bind="attr: {\'for\': getCode() + \'_enable_vault\'}">\n                <span>\x3c!-- ko i18n: \'Save for later use.\'--\x3e\x3c!-- /ko --\x3e</span>\n            </label>\n        </div>\n        \x3c!-- /ko --\x3e\n        ...\n    </fieldset>\n    ...\n</form>\n')),(0,i.mdx)("h2",{id:"modifying-the-payment-component"},"Modifying the payment component"),(0,i.mdx)("p",null,"The payment component must process the state of the vault-enabling control and update payment ",(0,i.mdx)("inlineCode",{parentName:"p"},"additional_data")," before it is sent to the backend."),(0,i.mdx)("p",null,"Commerce has a default vault enabler UI component (",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_Vault/js/view/payment/vault-enabler"),"). In the payment component, you just need to call its ",(0,i.mdx)("inlineCode",{parentName:"p"},"visitAdditionalData")," to update the ",(0,i.mdx)("inlineCode",{parentName:"p"},"additional_data")," property. The rest is done by the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Vault/Observer/VaultEnableAssigner.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Vault\\Observer\\VaultEnableAssigner"))," observer."),(0,i.mdx)("p",null,"Example: ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/app/code/Magento/Braintree/view/frontend/web/js/view/payment/method-renderer/cc-form.js"},"the Braintree payment UI component")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"define([\n    ...\n    'Magento_Payment/js/view/payment/cc-form',\n    'Magento_Vault/js/view/payment/vault-enabler'\n], function (... Component, VaultEnabler) {\n    'use strict';\n\n    return Component.extend({\n\n        /**\n         * @returns {exports.initialize}\n         */\n        initialize: function () {\n            var self = this;\n\n            self._super();\n            this.vaultEnabler = new VaultEnabler();\n            this.vaultEnabler.setPaymentCode(this.getVaultCode());\n            ...\n            return self;\n        },\n\n        /**\n         * @returns {Object}\n         */\n        getData: function () {\n            var data = {\n                'method': this.getCode(),\n                'additional_data': {\n                    'payment_method_nonce': this.paymentPayload.nonce\n                }\n            };\n\n            data['additional_data'] = _.extend(data['additional_data'], this.additionalData);\n            this.vaultEnabler.visitAdditionalData(data);\n\n            return data;\n        },\n\n        /**\n         * @returns {Boolean}\n         */\n        isVaultEnabled: function () {\n            return this.vaultEnabler.isVaultEnabled();\n        },\n\n\n        /**\n         * Returns vault code.\n         *\n         * @returns {String}\n         */\n        getVaultCode: function () {\n            return window.checkoutConfig.payment[this.getCode()].ccVaultCode;\n        },\n    });\n});\n")),(0,i.mdx)("h2",{id:"add-request-data-builder"},"Add request data builder"),(0,i.mdx)("p",null,"Now when we have information about enabling or disabling vault, the payment must send it to the payment processor. This is done in the ",(0,i.mdx)("a",{parentName:"p",href:"../payment-gateway/request-builder.md"},"request builder"),"."),(0,i.mdx)("p",null,"You can create a new request builder, or update the existing request builder of the payment method."),(0,i.mdx)("p",null,"In the Braintree request builder, to pass the data, we set ",(0,i.mdx)("inlineCode",{parentName:"p"},"storeInVaultOnSuccess")," in transaction request:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"class VaultDataBuilder implements BuilderInterface\n{\n    /**\n     * Additional options in request to gateway\n     */\n    const OPTIONS = 'options';\n\n    /**\n     * The option that determines whether the payment method associated with\n     * the successful transaction should be stored in the Vault.\n     */\n    const STORE_IN_VAULT_ON_SUCCESS = 'storeInVaultOnSuccess';\n\n    /**\n     * @inheritdoc\n     */\n    public function build(array $buildSubject)\n    {\n        return [\n            self::OPTIONS => [\n                self::STORE_IN_VAULT_ON_SUCCESS => true\n            ]\n        ];\n    }\n}\n")),(0,i.mdx)("p",null,"The builder must be added to the payment authorize request in the DI configuration.\nExample from the Braintree ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="BraintreeAuthorizeRequest" type="Magento\\Payment\\Gateway\\Request\\BuilderComposite">\n    <arguments>\n        <argument name="builders" xsi:type="array">\n            ...\n            <item name="vault" xsi:type="string">Magento\\Braintree\\Gateway\\Request\\VaultDataBuilder</item>\n        </argument>\n    </arguments>\n</virtualType>\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-vault-enabler-md-60593c159477e7d54f7f.js.map