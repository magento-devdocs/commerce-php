"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[13032],{34061:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return u}});var l=t(87462),i=t(63366),m=(t(15007),t(64983)),a=t(91515),o=["components"],d={},r={_frontmatter:d},p=a.Z;function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,m.mdx)(p,(0,l.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"magento_newsletter-module"},"Magento_Newsletter module"),(0,m.mdx)("p",null,"This module allows clients to subscribe for information about new promotions and discounts and allows store administrators to send newsletters to clients subscribed for them."),(0,m.mdx)("h2",{id:"installation"},"Installation"),(0,m.mdx)("p",null,"Before installing this module, note that the Magento_Newsletter is dependent on the following modules:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"Magento_Store")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"Magento_Customer")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"Magento_Eav")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"Magento_Widget"))),(0,m.mdx)("p",null,"Before disabling or uninstalling this module, note that the following modules depends on this module:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"Magento_NewsletterGraphQl"))),(0,m.mdx)("p",null,"This module creates the following tables in the database:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_template")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_queue")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_link")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_store_link")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_problem"))),(0,m.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html"},"Enable or disable modules"),"."),(0,m.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,m.mdx)("p",null,"Extension developers can interact with the Magento_Newsletter module. For more information about the Magento extension mechanism, see ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plug-ins"),"."),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_Newsletter module."),(0,m.mdx)("p",null,"A lot of functionality in the module is on JavaScript, use ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/javascript/mixins/"},"mixins")," to extend it."),(0,m.mdx)("h3",{id:"layouts"},"Layouts"),(0,m.mdx)("p",null,"This module introduces the following layouts in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/layout")," directories:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"view/adminhtml/layout"),":",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_problem_block")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_problem_grid")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_problem_index")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_edit")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_grid")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_grid_block")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_index")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_preview")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_preview_popup")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber_block")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber_exportcsv")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber_exportxml")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber_grid")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber_index")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_template_edit")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_template_preview")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_template_preview_popup")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"preview")))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"view/frontend/layout"),":",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customer_account")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customer_account_create")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_manage_index")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"default"))))),(0,m.mdx)("p",null,"For more information about a layout in Magento 2, see the ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,m.mdx)("h3",{id:"ui-components"},"UI components"),(0,m.mdx)("p",null,"This module extends customer form ui component the configuration file located in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"view/base/ui_component")," directory:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customer_form"))),(0,m.mdx)("p",null,"For information about a UI component in Magento 2, see ",(0,m.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.4/ui_comp_guide/bk-ui_comps.html"},"Overview of UI components"),"."),(0,m.mdx)("h2",{id:"additional-information"},"Additional information"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/marketing/newsletters.html"},"Learn more about newsletter"),"."),(0,m.mdx)("h3",{id:"cron-options"},"Cron options"),(0,m.mdx)("p",null,"Cron group configuration can be set at ",(0,m.mdx)("inlineCode",{parentName:"p"},"etc/crontab.xml"),":"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"newsletter_send_all")," - schedules newsletter sending")),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-cron.html"},"Learn how to configure and run cron in Magento."),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-newsletter-md-9fadefae31267c1cd870.js.map