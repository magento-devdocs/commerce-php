"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[28114],{59991:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return s}});var a=t(87462),o=t(45987),d=(t(35776),t(3905)),i=t(91515);const r=["components"],l={},m={_frontmatter:l},p=i.Z;function s(e){let{components:n}=e,t=(0,o.Z)(e,r);return(0,d.mdx)(p,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"magento_adobeioeventsclient"},"Magento_AdobeIoEventsClient"),(0,d.mdx)("p",null,"Welcome to the Magento Adobe IO Events integration repository!"),(0,d.mdx)("h2",{id:"overview"},"Overview"),(0,d.mdx)("p",null,"Adobe IO Events is a package that enables integration between Magento and Adobe IO Events to create custom Event\nProvider and custom Events Metadata."),(0,d.mdx)("h2",{id:"usage"},"Usage"),(0,d.mdx)("p",null,"This is a two-step process:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"We will create an Event Provider, this is required once per Adobe Commerce instance"),(0,d.mdx)("li",{parentName:"ol"},"We will update the Events Metadata, this should happen during the deployment phase")),(0,d.mdx)("h3",{id:"configure-adobe-commerce-for-io-events"},"Configure Adobe Commerce for IO Events"),(0,d.mdx)("p",null,"Depending on credential type complete steps for ",(0,d.mdx)("inlineCode",{parentName:"p"},"OAuth Server-to-Server")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"Service Account (JWT) DEPRECATED")),(0,d.mdx)("h4",{id:"oauth-server-to-server"},"OAuth Server-to-Server"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"In the Adobe Developer Console, download your Adobe IO Console workspace configuration."),(0,d.mdx)("li",{parentName:"ol"},"In the Commerce admin panel, navigate to Stores > Settings > Configuration > Adobe Services > Adobe I/O Events > General configuration and make the following changes:",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Select ",(0,d.mdx)("inlineCode",{parentName:"li"},"OAuth (recommended)")," as  ",(0,d.mdx)("inlineCode",{parentName:"li"},"Adobe I/O Authorization Type")),(0,d.mdx)("li",{parentName:"ul"},"Populate the ",(0,d.mdx)("inlineCode",{parentName:"li"},"Adobe I/O Workspace Configuration")," fields"),(0,d.mdx)("li",{parentName:"ul"},"Enter a unique ID  in the ",(0,d.mdx)("inlineCode",{parentName:"li"},"Adobe Commerce Instance ID")," field")))),(0,d.mdx)("h4",{id:"service-account-jwt-deprecated"},"Service Account (JWT) DEPRECATED"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"In the Adobe Developer Console, download your Adobe IO Console workspace configuration and its associated Service Account private key."),(0,d.mdx)("li",{parentName:"ol"},"In the Commerce admin panel, navigate to Stores > Settings > Configuration > Adobe Services > Adobe I/O Events > General configuration and make the following changes:",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Select ",(0,d.mdx)("inlineCode",{parentName:"li"},"JWT")," as  ",(0,d.mdx)("inlineCode",{parentName:"li"},"Adobe I/O Authorization Type")),(0,d.mdx)("li",{parentName:"ul"},"Populate the ",(0,d.mdx)("inlineCode",{parentName:"li"},"Service Account Private Key")," and ",(0,d.mdx)("inlineCode",{parentName:"li"},"Adobe I/O Workspace Configuration")," fields"),(0,d.mdx)("li",{parentName:"ul"},"Enter a unique ID  in the ",(0,d.mdx)("inlineCode",{parentName:"li"},"Adobe Commerce Instance ID")," field")))),(0,d.mdx)("h4",{id:"create-event-provider"},"Create Event Provider"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Run the following command to create an event provider"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},'bin/magento events:create-event-provider --label "<unique_provider_label>" --description "<provider description>"\n'))),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Enter the Event Provider ID output by the command in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Event Provider ID")," field"))),(0,d.mdx)("h2",{id:"update-events-metadata"},"Update Events Metadata"),(0,d.mdx)("p",null,"Events Metadata in the following format can optionally be stored in ",(0,d.mdx)("inlineCode",{parentName:"p"},"app/etc/event-types.json"),":"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "events": [\n        {\n            "event_code": "com.adobe.commerce.product.created",\n            "label": "Product created",\n            "description": "A product was created in your catalog"\n        },\n        {\n            "event_code": "my.custom.event.code",\n            "label": "Custom event",\n            "description": "custom event"\n        }\n    ]\n}\n')),(0,d.mdx)("p",null,"To update the metadata using the ",(0,d.mdx)("inlineCode",{parentName:"p"},"app/etc/event-types.json")," file, add the following step to your ",(0,d.mdx)("inlineCode",{parentName:"p"},"ece-tool")," or deployment script:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:sync-events-metadata\n")),(0,d.mdx)("h2",{id:"delete-events-metadata"},"Delete Events Metadata"),(0,d.mdx)("p",null,"You can alternatively delete the Events Metadata no longer required by adding the ",(0,d.mdx)("inlineCode",{parentName:"p"},"--delete")," option to the command as such:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:sync-events-metadata --delete\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-adobe-io-events-client-md-478055838569927a37c9.js.map