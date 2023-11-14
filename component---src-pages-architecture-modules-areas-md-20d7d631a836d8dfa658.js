"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[66519],{36970:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return m},default:function(){return s}});var t=n(87462),r=n(45987),o=(n(35776),n(3905)),i=n(91515);const l=["components"],m={},d={_frontmatter:m},p=i.Z;function s(e){let{components:a}=e,n=(0,r.Z)(e,l);return(0,o.mdx)(p,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"modules-and-areas"},"Modules and areas"),(0,o.mdx)("p",null,"An ",(0,o.mdx)("em",{parentName:"p"},"area")," is a logical component that organizes code for optimized request processing. The Adobe Commerce and Magento Open Source framework (Commerce framework) uses areas to streamline web service calls by loading only the dependent code for the specified area.  Each of the default areas defined by the Commerce framework can contain completely different code on how to process URLs and requests."),(0,o.mdx)("p",null,"For example, if you are invoking a REST web service call, rather than load all the code related to generating user HTML pages, you can specify a separate area that loads code whose scope is limited to answering  REST calls."),(0,o.mdx)("h2",{id:"area-types"},"Area types"),(0,o.mdx)("p",null,"The Commerce framework is organized into these main areas:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Admin")," (",(0,o.mdx)("inlineCode",{parentName:"p"},"adminhtml"),"): entry point for this area is ",(0,o.mdx)("inlineCode",{parentName:"p"},"pub/index.php"),". The Admin panel area includes the code needed for store management. The /app/design/adminhtml directory contains all the code for components you'll see while working in the Admin.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Storefront")," (",(0,o.mdx)("inlineCode",{parentName:"p"},"frontend"),"): entry point for this area is ",(0,o.mdx)("inlineCode",{parentName:"p"},"pub/index.php"),". The storefront (or ",(0,o.mdx)("inlineCode",{parentName:"p"},"frontend"),")  contains template and layout files that define the appearance of your storefront.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Basic")," (",(0,o.mdx)("inlineCode",{parentName:"p"},"base"),"): used as a fallback for files absent in ",(0,o.mdx)("inlineCode",{parentName:"p"},"adminhtml")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"frontend")," areas.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Cron")," (",(0,o.mdx)("inlineCode",{parentName:"p"},"crontab"),"): In ",(0,o.mdx)("inlineCode",{parentName:"p"},"pub/cron.php"),", the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/App/Cron.php#L68-L70"},(0,o.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Framework\\App\\Cron"))," class always loads the 'crontab' area."))),(0,o.mdx)("p",null,"You can also send requests to the Commerce framework using the SOAP, REST and GraphQL APIs. These three areas"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Web API REST")," (",(0,o.mdx)("inlineCode",{parentName:"p"},"webapi_rest"),"): entry point for this area is ",(0,o.mdx)("inlineCode",{parentName:"p"},"pub/index.php"),". The REST area has a front controller that understands how to do URL lookups for REST-based URLs.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"GraphQL")," (",(0,o.mdx)("inlineCode",{parentName:"p"},"graphql"),"): entry point for this area is ",(0,o.mdx)("inlineCode",{parentName:"p"},"pub/index.php"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Web API SOAP")," (",(0,o.mdx)("inlineCode",{parentName:"p"},"webapi_soap"),"): entry point for this area is ",(0,o.mdx)("inlineCode",{parentName:"p"},"pub/index.php"),"."))),(0,o.mdx)("h2",{id:"how-areas-work-with-modules"},"How areas work with modules"),(0,o.mdx)("p",null,"Modules define which resources are visible and accessible in an area, as well as an area's behavior. The same module can influence several areas. For instance, the RMA module is represented partly in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"adminhtml")," area and partly in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"frontend")," area."),(0,o.mdx)("p",null,"If your extension works in several different areas, ensure it has separate behavior and view components for each area."),(0,o.mdx)("p",null,"Each area declares itself within a module. All resources specific for an area are located within the same module as well."),(0,o.mdx)("p",null,"You can enable or disable an area within a module. If this module is enabled, it injects an area's routers into the general application's routing process. If this module is disabled, the Commerce framework will not load an area's routers and, as a result, an area's resources and specific functionality are not available."),(0,o.mdx)("h3",{id:"modulearea-interaction-guidelines"},"Module/area interaction guidelines"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Modules should not depend on other modules' areas.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Disabling an area does not result in disabling the modules related to it.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Areas are registered in the Dependency Injection framework ",(0,o.mdx)("inlineCode",{parentName:"p"},"di.xml")," file."))),(0,o.mdx)("h3",{id:"note-about-request-processing"},"Note about request processing"),(0,o.mdx)("p",null,"The Commerce framework processes a URL request by first stripping off the base URL. The first path segment of the remaining URL identifies the request area."),(0,o.mdx)("p",null,"After the area name, the URI segment specifies the ",(0,o.mdx)("em",{parentName:"p"},"frontname"),". When an HTTP request arrives, the Commerce framework extracts the handle from the URL and interprets it as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-http"},"[frontName]/[controller folder]/[controller class]\n")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"frontName")," is a value defined in the module. Using ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalog/product/view")," as an example:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"catalog")," is the ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/etc/frontend/routes.xml#L10"},"frontName")," in the module area's ",(0,o.mdx)("inlineCode",{parentName:"li"},"routes.xml")," file"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"product")," is in the ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Controller/Product"},"controller folder")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"view")," is the ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Controller/Product/View.php"},"controller class"))),(0,o.mdx)("p",null,"For deeper directory structures, the controller folders are separated with an underscore (",(0,o.mdx)("inlineCode",{parentName:"p"},"_"),"). For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"catalog/product_compare/add = Magento/Catalog/Controller/Product/Compare/Add.php\n")),(0,o.mdx)("p",null,"Note that only the ",(0,o.mdx)("strong",{parentName:"p"},"execute()")," method of any given controller is executed."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-modules-areas-md-20d7d631a836d8dfa658.js.map