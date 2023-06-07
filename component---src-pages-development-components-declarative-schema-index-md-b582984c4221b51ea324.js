"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[88369],{31152:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return h}});var n,r=t(87462),o=t(63366),i=(t(15007),t(64983)),d=t(91515),l=["components"],s={},m=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:s},c=d.Z;function h(e){var a=e.components,t=(0,o.Z)(e,l);return(0,i.mdx)(c,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"declarative-schema"},"Declarative schema"),(0,i.mdx)("p",null,"Declarative schema aims to simplify the Adobe Commerce and Magento Open Source installation and upgrade processes. Previously, developers had to write database scripts in PHP for each new version of Adobe Commerce and Magento Open Source. Various scripts were required for"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Installing and upgrading the database schema"),(0,i.mdx)("li",{parentName:"ul"},"Installing and upgrading data"),(0,i.mdx)("li",{parentName:"ul"},"Invoking other operations that are required each time Adobe Commerce or Magento Open Source was installed or upgraded")),(0,i.mdx)("p",null,"When a customer upgrades Adobe Commerce or Magento Open Source to a version several releases ahead of the installed version, the upgrade script for each intermediate release still executes. Developers were required to fully understand what each install and upgrade script contained. They needed to account for this complexity when creating extensions."),(0,i.mdx)("p",null,"The new declarative schema approach allows developers to declare the final desired state of the database and has the system adjust to it automatically, without performing redundant operations. Developers are no longer forced to write scripts for each new version. In addition, this approach allows data be deleted when a module is uninstalled."),(0,i.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Implementing declarative schema is not a requirement for Adobe Commerce and Magento Open Source 2.3.")," However, upgrade scripts will be phased out in favor of declarative schema."),(0,i.mdx)("p",null,"To prepare a module for declarative schema, you must"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Develop a data patch and/or a schema patch"),(0,i.mdx)("li",{parentName:"ul"},"Configure the declarative schema for your module"),(0,i.mdx)("li",{parentName:"ul"},"Convert upgrade scripts to declarative schema (This step applies only to modules that have been released using upgrade scripts.)")),(0,i.mdx)("p",null,"Once a module is converted to the declarative schema approach, it cannot be reverted to upgrade scripts."),(0,i.mdx)("h2",{id:"data-patch-terminology"},"Data patch terminology"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("em",{parentName:"p"},"Data patch")," - A class that contains data modification instructions. It can have dependencies on other data or schema patches.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("em",{parentName:"p"},"Revertable data patch")," - A ",(0,i.mdx)("inlineCode",{parentName:"p"},"data patch")," that contains a ",(0,i.mdx)("inlineCode",{parentName:"p"},"revert()")," method (see ",(0,i.mdx)("a",{parentName:"p",href:"patches.md#reverting-data-patches"},"Reverting data patches"),") with provided operations that revert revertable changes caused by the module. Revertable operations are usually related to changes in the database.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("em",{parentName:"p"},"Migration")," - A type of non-revertable data patch that can be applied, but not reverted. Any complex operation, such as one that contains an application layer (for example, Collections or Serializers) is non-revertable. SQL delete operations are non-revertable because they can cause triggering.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("em",{parentName:"p"},"Schema patch")," - A class that contains custom schema modification instructions. Schema patches are used along with declarative schema, but these patches allow complex operations such as:"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Adding triggers, stored procedures, functions"),(0,i.mdx)("li",{parentName:"ul"},"Performing data migration with inside DDL operations"),(0,i.mdx)("li",{parentName:"ul"},"Renaming tables, columns, and other entities"),(0,i.mdx)("li",{parentName:"ul"},"Adding partitions and options to a table"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("em",{parentName:"p"},"Revertable schema patch")," - A ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema patch")," that contains a ",(0,i.mdx)("inlineCode",{parentName:"p"},"revert()")," method with the provided revert functionality. Like in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Revertable data patch"),", the revert functionality of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema patch")," affects changes in the database only."))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-declarative-schema-index-md-b582984c4221b51ea324.js.map