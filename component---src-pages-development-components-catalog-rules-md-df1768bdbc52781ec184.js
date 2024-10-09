"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[22517],{55207:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return u}});var o=n(58168),a=n(80045),i=(n(88763),n(15680)),d=n(83407);const l=["components"],r={},p=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var s;const c={_frontmatter:r},m=d.A;function u(e){let{components:t}=e,n=(0,a.A)(e,l);return(0,i.mdx)(m,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"extend-catalog-rule-conditions"},"Extend catalog rule conditions"),(0,i.mdx)("p",null,"Catalog price rules can be used to offer products to buyers at a discounted price, based on a set of defined conditions. Catalog price rules do not use coupon codes. The discounts are applied to the final product price in the product listing and the product description page even before adding the product to the shopping cart.\nFor more information about catalog price rules, refer to ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/marketing/price-rules-catalog.html"},"Catalog Rules"),"."),(0,i.mdx)("h2",{id:"default-conditions"},"Default conditions"),(0,i.mdx)("p",null,"In the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Conditions")," tab, Adobe Commerce and Magento Open Source have the following product attributes in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"add conditions")," section."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/1fab8926a461a7378da7f4047662c8f4/5530d/conditions-section-v2.webp 320w","/commerce-php/static/1fab8926a461a7378da7f4047662c8f4/0c8fb/conditions-section-v2.webp 640w","/commerce-php/static/1fab8926a461a7378da7f4047662c8f4/94b1e/conditions-section-v2.webp 1280w","/commerce-php/static/1fab8926a461a7378da7f4047662c8f4/91d04/conditions-section-v2.webp 1297w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/1fab8926a461a7378da7f4047662c8f4/dd4a7/conditions-section-v2.png 320w","/commerce-php/static/1fab8926a461a7378da7f4047662c8f4/0f09e/conditions-section-v2.png 640w","/commerce-php/static/1fab8926a461a7378da7f4047662c8f4/bbbf7/conditions-section-v2.png 1280w","/commerce-php/static/1fab8926a461a7378da7f4047662c8f4/a8e5d/conditions-section-v2.png 1297w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/1fab8926a461a7378da7f4047662c8f4/bbbf7/conditions-section-v2.png",alt:"Catalog Rule Conditions",title:"Catalog Rule Conditions",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"implementation-of-existing-conditions"},"Implementation of existing conditions"),(0,i.mdx)("p",null,"In the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/CatalogRule/etc/di.xml")," configuration, the following ",(0,i.mdx)("inlineCode",{parentName:"p"},"type")," configuration is defined:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\CatalogRule\\Model\\Rule\\Condition\\Combine">\n    <arguments>\n        <argument name="data" xsi:type="array">\n            <item name="form_name" xsi:type="string">catalog_rule_form</item>\n        </argument>\n    </arguments>\n</type>\n<type name="Magento\\CatalogRule\\Model\\Rule\\Condition\\Product">\n    <arguments>\n        <argument name="data" xsi:type="array">\n            <item name="form_name" xsi:type="string">catalog_rule_form</item>\n        </argument>\n    </arguments>\n</type>\n')),(0,i.mdx)("p",null,"In the above configuration, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"catalog_rule_form")," is a UI component form. It is defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/CatalogRule/view/adminhtml/ui_component/catalog_rule_form.xml"),"."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\CatalogRule\\Model\\Rule\\Condition\\Combine")," and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\CatalogRule\\Model\\Rule\\Condition\\Product")," classes contain the list of conditions and validations used for creating extended conditions."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"getNewChildSelectOptions")," method in ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/CatalogRule/Model/Rule/Condition/Combine.php")," is responsible for the listed conditions. It returns an array of the lists of valid conditions."),(0,i.mdx)("p",null,"Below is the definition of ",(0,i.mdx)("inlineCode",{parentName:"p"},"getNewChildSelectOptions")," method:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * @return array\n */\npublic function getNewChildSelectOptions()\n{\n    $productAttributes = $this->_productFactory->create()->loadAttributeOptions()->getAttributeOption();\n    $attributes = [];\n    foreach ($productAttributes as $code => $label) {\n        $attributes[] = [\n            'value' => 'Magento\\CatalogRule\\Model\\Rule\\Condition\\Product|' . $code,\n            'label' => $label,\n        ];\n    }\n    $conditions = parent::getNewChildSelectOptions();\n    $conditions = array_merge_recursive(\n        $conditions,\n        [\n            [\n                'value' => \\Magento\\CatalogRule\\Model\\Rule\\Condition\\Combine::class,\n                'label' => __('Conditions Combination'),\n            ],\n            ['label' => __('Product Attribute'), 'value' => $attributes]\n        ]\n    );\n    return $conditions;\n}\n")),(0,i.mdx)("p",null,"In the above example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"$conditions")," array will contain the list of valid conditions. Each item in the array will have the ",(0,i.mdx)("inlineCode",{parentName:"p"},"value")," and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"label")," key with the appropriate values."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"validate")," method from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/CatalogRule/Model/Rule/Condition/Product.php")," file is responsible for the validations of the conditions defined in the catalog price rules."),(0,i.mdx)("p",null,"Below is the definition of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"validate")," method:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Catalog\\Model\\Product;\nuse Magento\\Framework\\Model\\AbstractModel;\n\n/**\n * Validate product attribute value for condition\n *\n * @param Product|AbstractModel $model\n * @return bool\n */\npublic function validate(AbstractModel $model): bool\n{\n    $attrCode = $this->getAttribute();\n    if ('category_ids' === $attrCode) {\n        return parent::validate($model);\n    }\n\n    $oldAttrValue = $model->getData($attrCode);\n    if ($oldAttrValue === null) {\n        if ($this->getOperator() === '<=>') {\n            return true;\n        }\n        return false;\n    }\n\n    $this->_setAttributeValue($model);\n\n    $result = $this->validateAttribute($model->getData($attrCode));\n    $this->_restoreOldAttrValue($model, $oldAttrValue);\n\n    return (bool)$result;\n}\n")),(0,i.mdx)("p",null,"In the above example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"validate")," method defines the logic to validate the specified conditions in the catalog price rule."),(0,i.mdx)("p",null,"Note that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/CatalogRule/Model/Rule/Condition/Product.php")," class extends from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Rule/Model/Condition/Product/AbstractProduct.php")," abstract class."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Rule/Model/Condition/Product/AbstractProduct.php")," abstract class extends from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Rule/Model/Condition/AbstractCondition.php")," class."),(0,i.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The validation class for the catalog price rule must extend the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Rule\\Model\\Condition\\AbstractCondition")," class."),(0,i.mdx)("h2",{id:"steps-to-extend-catalog-rule-conditions"},"Steps to extend catalog rule conditions"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create the ",(0,i.mdx)("inlineCode",{parentName:"li"},"after")," plugin for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"getNewChildSelectOptions")," method and add your custom condition to it."),(0,i.mdx)("li",{parentName:"ul"},"Add the ",(0,i.mdx)("inlineCode",{parentName:"li"},"type")," configuration in ",(0,i.mdx)("inlineCode",{parentName:"li"},"<custom_module_dir>/etc/di.xml"),"."),(0,i.mdx)("li",{parentName:"ul"},"Create a class that extends the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\Rule\\Model\\Condition\\AbstractCondition")," class. Then define the ",(0,i.mdx)("inlineCode",{parentName:"li"},"validate")," method with your custom logic.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-catalog-rules-md-df1768bdbc52781ec184.js.map