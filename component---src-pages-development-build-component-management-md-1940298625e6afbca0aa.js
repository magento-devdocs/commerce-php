"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[42177],{61182:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return s}});var m=n(87462),t=n(63366),o=(n(15007),n(64983)),l=n(91515),r=["components"],d={},p={_frontmatter:d},i=l.Z;function s(e){var a=e.components,n=(0,t.Z)(e,r);return(0,o.mdx)(i,(0,m.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"enable-or-disable-a-component"},"Enable or disable a component"),(0,o.mdx)("p",null,"After you have built the component and are ready to enable it in your environment, do the following:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Disable the cache under ",(0,o.mdx)("inlineCode",{parentName:"p"},"System->Cache Management"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Enter the following in the command line:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:enable --clear-static-content Component_Name\n")),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:upgrade\n")),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento cache:clean\n")),(0,o.mdx)("p",{parentName:"li"},"Where ",(0,o.mdx)("inlineCode",{parentName:"p"},"Component_Name")," is the name of the component you are enabling.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Check that the component is enabled:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:status <extension-name>\n")),(0,o.mdx)("p",{parentName:"li"},"An extension name uses the format: ",(0,o.mdx)("inlineCode",{parentName:"p"},"<VendorName>_<ComponentName>"),"."),(0,o.mdx)("p",{parentName:"li"},"Sample response:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"Module is enabled\n")))),(0,o.mdx)("h2",{id:"order-of-operations"},"Order of operations"),(0,o.mdx)("p",null,"The general order of operations for ",(0,o.mdx)("inlineCode",{parentName:"p"},"setup:upgrade")," is:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Schema install/upgrade.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Schema post-upgrade"),"— handles any additional updates. These recurring upgrades occur independently and regardless of any changes to the schema."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Data install/upgrade")," — installs the data. Taken from ",(0,o.mdx)("inlineCode",{parentName:"li"},"setup/InstallData.php"),".")),(0,o.mdx)("h2",{id:"disable-a-component"},"Disable a component"),(0,o.mdx)("p",null,"To disable a component, enter the following at the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:disable --clear-static-content Component_Name\n")),(0,o.mdx)("p",null,"For more on enabling and disabling components, see ",(0,o.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable"},"enable or disable modules"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-build-component-management-md-1940298625e6afbca0aa.js.map