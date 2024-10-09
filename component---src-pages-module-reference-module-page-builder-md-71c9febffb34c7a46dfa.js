"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[6958],{44034:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return g}});var a=t(58168),i=t(80045),l=(t(88763),t(15680)),o=t(83407);const d=["components"],m={},r=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)});var s;const u={_frontmatter:m},p=o.A;function g(e){let{components:n}=e,t=(0,i.A)(e,d);return(0,l.mdx)(p,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"magento_pagebuilder-module"},"Magento_PageBuilder module"),(0,l.mdx)("p",null,"The Magento_PageBuilder module provides an enhancement for the default Magento WYSIWYG editor. It installs an alternative editor in the Admin area for building content."),(0,l.mdx)("p",null,"The PageBuilder editor can be used on the following content pages:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Category Pages"),(0,l.mdx)("li",{parentName:"ul"},"CMS Pages"),(0,l.mdx)("li",{parentName:"ul"},"CMS Blocks"),(0,l.mdx)("li",{parentName:"ul"},"Dynamic Blocks")),(0,l.mdx)("h2",{id:"enable-the-module"},"Enable the module"),(0,l.mdx)("p",null,"The PageBuilder module and the editor is enabled by default after installation."),(0,l.mdx)("p",null,"The editor itself is enabled globally in the Admin area under ",(0,l.mdx)("em",{parentName:"p"},"Stores > Configuration > Content Management > Advanced Content Tool > Enable Page Builder"),".\nThis setting determines the ",(0,l.mdx)("inlineCode",{parentName:"p"},"is_pagebuilder_enabled")," configuration value."),(0,l.mdx)("h2",{id:"disable-the-module"},"Disable the module"),(0,l.mdx)("p",null,"You can disable the PageBuilder module for a specific field by adding the following entry to a field configuration in an XML configuration file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<item name="wysiwygConfigData" xsi:type="array">\n    <item name="is_pagebuilder_enabled" xsi:type="boolean">false</item>\n</item>\n')),(0,l.mdx)("h3",{id:"example"},"Example"),(0,l.mdx)("p",null,"The following example disables the PageBuilder editor for the content field."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">\n    <fieldset name="content" sortOrder="10">\n        <field name="content" formElement="wysiwyg">\n            <argument name="data" xsi:type="array">\n                <item name="config" xsi:type="array">\n                    <item name="source" xsi:type="string">page</item>\n                    <item name="wysiwygConfigData" xsi:type="array">\n                        <item name="is_pagebuilder_enabled" xsi:type="boolean">false</item>\n                    </item>\n                </item>\n            </argument>\n        </field>\n    </fieldset>\n</form>\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Note:")," Disabling the editor this way overrides the value of ",(0,l.mdx)("inlineCode",{parentName:"p"},"is_pagebuilder_enabled")," for the specified field."),(0,l.mdx)(r,{slots:"text",mdxType:"InlineAlert"}),"The version of this module is 2.2.5.")}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-page-builder-md-71c9febffb34c7a46dfa.js.map