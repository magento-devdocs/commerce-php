"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[96623],{78997:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return u}});var a=n(58168),i=n(80045),o=(n(88763),n(15680)),m=n(83407);const l=["components"],r={},d=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var p;const s={_frontmatter:r},c=m.A;function u(e){let{components:t}=e,n=(0,i.A)(e,l);return(0,o.mdx)(c,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"add-a-custom-template-for-a-form-field"},"Add a custom template for a form field"),(0,o.mdx)("p",null,"This topic describes how to replace the HTML template for a form field on the Checkout page. You might need to replace the template in order to add elements displayed with the field, change the CSS class assigned to it, add attributes and so on."),(0,o.mdx)("p",null,"The forms used on the Checkout page are implemented using Knockout JS."),(0,o.mdx)("p",null,"To change the template of the form field, do the following:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#step-1-implement-the-html-template-for-the-field"},"Create a custom HTML template for knockout JS script that will render the form field"),"."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#step-2-specify-the-new-template-in-layout"},"Specify the new template in the Checkout page layout"),"."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#step-3-clear-files-after-modification"},"Clear files after modification"),".")),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html"},"Change to developer mode")," when performing all customizations and debugging."),(0,o.mdx)("p",null,"For the sake of compatibility, upgradability, and easy maintenance, do not edit the default application code. Instead, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should ",(0,o.mdx)("a",{parentName:"p",href:"../../../development/build/composer-integration.md"},"depend")," on the Magento_Checkout module."),(0,o.mdx)("p",null,"Do not use ",(0,o.mdx)("inlineCode",{parentName:"p"},"Ui")," for your custom module name, because ",(0,o.mdx)("inlineCode",{parentName:"p"},"%Vendor%_Ui")," notation, required when specifying paths, might cause issues."),(0,o.mdx)("h2",{id:"step-1-implement-the-html-template-for-the-field"},"Step 1: Implement the HTML template for the field"),(0,o.mdx)("p",null,"Create a new ",(0,o.mdx)("inlineCode",{parentName:"p"},"<your_template>.html")," template in the following directory: ",(0,o.mdx)("inlineCode",{parentName:"p"},"<your_module_dir>/view/frontend/web/template/form/element")),(0,o.mdx)("p",null,"Example of a field template:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},'\x3c!-- input field element and corresponding bindings --\x3e\n<input class="input-text" type="text" data-bind="\n    value: value,\n    valueUpdate: \'keyup\',\n    hasFocus: focused,\n    attr: {\n        name: inputName,\n        placeholder: placeholder,\n        \'aria-describedby\': noticeId,\n        id: uid,\n        disabled: disabled\n    }" />\n\x3c!-- additional content --\x3e\n<img src="%path_to_image%" alt="image_de"/>\n')),(0,o.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The original templates of all form field types are located in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Ui/view/base/web/templates/form/element")," directory."),(0,o.mdx)("h2",{id:"step-2-specify-the-new-template-in-layout"},"Step 2: Specify the new template in layout"),(0,o.mdx)("p",null,"In your custom module directory, create a new ",(0,o.mdx)("inlineCode",{parentName:"p"},"<your_module_dir>/view/frontend/layout/checkout_index_index.xml")," file.\nIn this file, add content similar to the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <body>\n        <referenceBlock name="checkout.root">\n            <arguments>\n                <argument name="jsLayout" xsi:type="array">\n                    <item name="components" xsi:type="array">\n                        <item name="checkout" xsi:type="array">\n                            <item name="children" xsi:type="array">\n                                <item name="steps" xsi:type="array">\n                                    <item name="children" xsi:type="array">\n                                        <item name="shipping-step" xsi:type="array">\n                                            <item name="children" xsi:type="array">\n                                                <item name="shippingAddress" xsi:type="array">\n                                                    <item name="children" xsi:type="array">\n                                                        \x3c!-- The name of the form the field belongs to --\x3e\n                                                        <item name="shipping-address-fieldset" xsi:type="array">\n                                                            <item name="children" xsi:type="array">\n                                                                \x3c!-- the field you are customizing --\x3e\n                                                                <item name="telephone" xsi:type="array">\n                                                                    <item name="config" xsi:type="array">\n                                                                        \x3c!-- Assigning a new template --\x3e\n                                                                        <item name="elementTmpl" xsi:type="string">%Vendor_Module%/form/element/%your_template%</item>\n                                                                    </item>\n                                                                </item>\n                                                            </item>\n                                                        </item>\n                                                    </item>\n                                                </item>\n                                            </item>\n                                        </item>\n                                    </item>\n                                </item>\n                            </item>\n                        </item>\n                    </item>\n                </argument>\n            </arguments>\n        </referenceBlock>\n    </body>\n</page>\n')),(0,o.mdx)("h2",{id:"step-3-clear-files-after-modification"},"Step 3: Clear files after modification"),(0,o.mdx)("p",null,"If you modify your custom ",(0,o.mdx)("inlineCode",{parentName:"p"},".html")," template after it was applied on the store pages, the changes will not apply until you do the following:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Delete all files in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"pub/static/frontend")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"var/view_preprocessed")," directories."),(0,o.mdx)("li",{parentName:"ol"},"Reload the pages.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-frontend-custom-checkout-add-template-md-e64b6422742deed607ce.js.map