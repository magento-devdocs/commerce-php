"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[69698],{76120:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return u}});var a=n(87462),o=n(45987),i=(n(35776),n(3905)),l=n(91515);const d=["components"],m={},r=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var s;const p={_frontmatter:m},h=l.Z;function u(e){let{components:t}=e,n=(0,o.Z)(e,d);return(0,i.mdx)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"magento_releasenotification-module"},"Magento_ReleaseNotification module"),(0,i.mdx)("p",null,"This module serves to provide a notification delivery platform for displaying new features of a Magento installation or upgrade as well as any other required release notifications."),(0,i.mdx)("h2",{id:"installation"},"Installation"),(0,i.mdx)("p",null,"The Magento_ReleaseNotification module creates the ",(0,i.mdx)("inlineCode",{parentName:"p"},"release_notification_viewer_log")," table in the database."),(0,i.mdx)("p",null,"All database schema changes made by this module are rolled back when the module gets disabled and setup:upgrade command is run."),(0,i.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/manage-modules.html"},"Enable or disable modules"),"."),(0,i.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,i.mdx)("p",null,"Extension developers can interact with the Magento_ReleaseNotification module. For more information about the Magento extension mechanism, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plug-ins"),"."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_ReleaseNotification module."),(0,i.mdx)("h3",{id:"ui-components"},"UI components"),(0,i.mdx)("p",null,"You can extend release notification updates using the configuration files located in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/ui_component")," directory:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"release_notification"))),(0,i.mdx)("p",null,"For information about a UI component in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/"},"Overview of UI components"),"."),(0,i.mdx)("h2",{id:"additional-information"},"Additional information"),(0,i.mdx)("h3",{id:"purpose-and-content"},"Purpose and Content"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Provides a method of notifying administrators of changes, features, and functionality being introduced in a Magento release."),(0,i.mdx)("li",{parentName:"ul"},"Displays a modal containing a high level overview of the features included in the installed or upgraded release of Magento upon the initial login of each administrator into the Admin Panel for a given Magento version."),(0,i.mdx)("li",{parentName:"ul"},"The modal is enabled with pagination functionality to allow for easy navigation between each modal page."),(0,i.mdx)("li",{parentName:"ul"},"Each modal page includes detailed information about a highlighted feature of the Magento release or other notification."),(0,i.mdx)("li",{parentName:"ul"},"Release Notification modal content is determined and provided by Magento Marketing.")),(0,i.mdx)("h3",{id:"content-retrieval"},"Content Retrieval"),(0,i.mdx)("p",null,"Release notification content is maintained by Magento for each Magento version, edition, and locale. To retrieve the content, a response is returned from a request with the following parameters:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"version")," = The Magento version that the client has installed (ex. 2.4.0)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"edition")," = The Magento edition that the client has installed (ex. Community)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"locale")," = The chosen locale of the admin user (ex. en_US).")),(0,i.mdx)("p",null,"The module will make three attempts to retrieve content for the parameters in the order listed:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Version/Edition/Locale"),(0,i.mdx)("li",{parentName:"ol"},"Version/Edition/en_US (default locale)"),(0,i.mdx)("li",{parentName:"ol"},"Version (default file for a Magento version)")),(0,i.mdx)("p",null,"If there is no content to be retrieved after these requests, the release notification modal will not be displayed to the admin user."),(0,i.mdx)("h3",{id:"content-guidelines"},"Content Guidelines"),(0,i.mdx)("p",null,'The modal system in the ReleaseNotification module can have up to four modal pages. The admin user can navigate between pages using the "< Prev" and "Next >" buttons at the bottom of the modal. The last modal page will have a "Done" button that will close the modal and record that the admin user has seen the notification.'),(0,i.mdx)("p",null,"Each modal page can have the following optional content:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Main Content",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Title"),(0,i.mdx)("li",{parentName:"ul"},"URL to the image to be displayed alongside the title"),(0,i.mdx)("li",{parentName:"ul"},"Text body"),(0,i.mdx)("li",{parentName:"ul"},"Bullet point list"))),(0,i.mdx)("li",{parentName:"ul"},"Sub Headings (highlighted overviews of the content to be detailed on subsequent modal pages) - one to three Sub Headings may be displayed",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Sub heading title"),(0,i.mdx)("li",{parentName:"ul"},"URL to the image to be display before the sub heading title"),(0,i.mdx)("li",{parentName:"ul"},"Sub heading content"))),(0,i.mdx)("li",{parentName:"ul"},"Footer",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Footer content text")))),(0,i.mdx)("p",null,"The Sub Heading section is ideally used on the first modal page as a way to describe one to three highlighted features that will be presented in greater detail on the following modal pages. It is recommended to use the Main Content -> Text Body and Bullet Point lists as the paragraph and list content displayed on a highlighted feature's detail modal page."),(0,i.mdx)("p",null,"A clickable link to internal or external content in any text field will be created by using the following format and opened in a new browser tab. Providing the URL for the link followed by the text to be displayed for that link in brackets will cause a clickable link to be created. The text between the brackets ","[text]"," will be the text that the clickable link shows."),(0,i.mdx)("h4",{id:"link-format-example"},"Link Format Example:"),(0,i.mdx)("p",null,"The text: ",(0,i.mdx)("inlineCode",{parentName:"p"},"https://developer.adobe.com/commerce/docs/ [Adobe Commerce Developer Documentation].")," will appear as ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/docs/"},"Adobe Commerce Developer Documentation"),"."),(0,i.mdx)(r,{slots:"text",mdxType:"InlineAlert"}),"The version of this module is 100.4.5.")}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-release-notification-md-acfb6b186a679053745a.js.map