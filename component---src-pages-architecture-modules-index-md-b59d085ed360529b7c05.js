"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[76746],{37407:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return l}});var n=a(87462),o=a(63366),r=(a(15007),a(64983)),s=a(91515),i=["components"],d={},m={_frontmatter:d},p=s.Z;function l(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.mdx)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"extensibility-and-modularity"},"Extensibility and modularity"),(0,r.mdx)("p",null,"Product ",(0,r.mdx)("em",{parentName:"p"},"extensibility")," describes how easy it is to expand a product's feature set. An extensible product has been designed from its earliest  stages for customization and enhancement. Extensible products are designed for ease in expanding your installation's feature set, enriching current features, and integrating with third-party software."),(0,r.mdx)("p",null,"Maximizing extensibility has been our goal through all aspects of development. Core tasks such as shipping are packaged as discrete modules, and you expand your features by installing modules that you either buy from third-party vendors or create yourself. While logic specific to each ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/shipping-carrier"},"shipping carrier")," is packaged in a discrete module, you can easily add or delete shipping providers by simply adding or deleting modules. The Adobe Commerce and Magento Open Source framework (Commerce framework) provides common logic to control routing and other core application functions."),(0,r.mdx)("h2",{id:"what-makes-a-product-extensible"},"What makes a product extensible?"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Extensibility")," describes the product's built-in ability for developers and merchants to routinely extend their storefront's capabilities as their business grows."),(0,r.mdx)("p",null,"The following factors significantly affect extensibility."),(0,r.mdx)("h3",{id:"architectural-principles-that-guide-product-structure"},"Architectural principles that guide product structure"),(0,r.mdx)("p",null,"Central to the Commerce framework model of software development is the practice of replacing or extending core code rather than editing it. This strategy supports your efforts to maintain the integrity of the tested code we provide while still extensively customizing your ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/storefront"},"storefront"),"."),(0,r.mdx)("h3",{id:"reliance-on-popular-design-patterns"},"Reliance on popular design patterns"),(0,r.mdx)("p",null,"Reliance on known architectural and programming structures helps ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP")," developers orient themselves to the specific development issues that affect coding in a particular product ecosystem. This can reduce the learning curve for new developers."),(0,r.mdx)("p",null,"Design patterns are time-tested, widely recognized software architecture constructs. The Commerce framework architecture incorporates many well known patterns, but Model-View-Controller (MVC) holds particular interest for extension developers."),(0,r.mdx)("h3",{id:"modularity"},"Modularity"),(0,r.mdx)("p",null,"The concept of the ",(0,r.mdx)("em",{parentName:"p"},"module")," is the heart of ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/extension"},"extension")," development, and modular design of software components (in particular, modules, themes, and language packages) is a core architectural principle of the product. Self-contained modules of discrete code are organized by feature, thereby reducing each module's external dependencies."),(0,r.mdx)("p",null,"If a ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," is self-contained, then you can modify or replace it without affecting other areas of the code. This ",(0,r.mdx)("em",{parentName:"p"},"loose coupling")," of software components reduces the ripple effects throughout your code base of changing code."),(0,r.mdx)("p",null," See the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/"},"PHP Developer Guide")," for detailed instructions on how to create modules."),(0,r.mdx)("h3",{id:"rich-product-ecosystem"},"Rich product ecosystem"),(0,r.mdx)("p",null,"The wider Adobe Commerce and Magento Open Source ecosystem provides an extensive community and rich third-party marketplace for extensions. Visit ",(0,r.mdx)("a",{parentName:"p",href:"https://marketplace.magento.com/"},"Commerce Marketplace")," for an overview of the many modules and themes available for download and to buy modules and ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/theme"},"theme")," packages, which offer more possibilities for extending your ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/storefront"},"storefront"),"."),(0,r.mdx)("h3",{id:"open-source-software-to-create-and-manage-extensions"},"Open-source software to create and manage extensions"),(0,r.mdx)("p",null,"The Commerce framework is built on open-source technologies, created for the development community. For example, it uses ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/composer"},"Composer")," to manage dependencies. See ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements.html"},"Technology Stack")," for a complete list of technologies used."),(0,r.mdx)("h3",{id:"coding-standards"},"Coding standards"),(0,r.mdx)("p",null,"Adherence to standard best practices for ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP")," and ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/javascript"},"JavaScript")," code ensures that the code base is sound. The Commerce framework has adopted most of the PSR2 Coding Standards for PHP. See ",(0,r.mdx)("a",{parentName:"p",href:"../coding-standards.md"},"Coding Standards")," for more information."),(0,r.mdx)("h3",{id:"upgrade-and-versioning-strategies"},"Upgrade and versioning strategies"),(0,r.mdx)("p",null,"The Commerce framework has well-defined upgrade and versioning strategies that can help you avoid any problems with software component dependencies. Add modules after confirming that the ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," version is compatible with the Commerce framework version."),(0,r.mdx)("h3",{id:"web-apis"},"Web APIs"),(0,r.mdx)("p",null,"Adobe or third-party services can be configured as a web ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API")," (REST or SOAP) with some simple ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/xml"},"XML"),". You can use these services to integrate your installation into third-party applications, such as CRM (Customer Relationship Management), ERP (Enterprise Resource Planning) back office systems, and ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/cms"},"CMS")," (Content Management Systems)."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/"},"Getting Started with web APIs")," for more information."),(0,r.mdx)("h3",{id:"flexible-attribute-types"},"Flexible attribute types"),(0,r.mdx)("p",null,"You can enhance your storefront by adding unique attributes to the default product attributes. For example, you might need to add a new attribute to describe a product, such as texture or an industry-specific rating. You can add these attributes from the Admin, and the storefront  displays them."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Displayed by storefront?"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"EAV"),(0,r.mdx)("td",{parentName:"tr",align:null},"no")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Custom"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Extension"),(0,r.mdx)("td",{parentName:"tr",align:null},"no")))),(0,r.mdx)("p",null,"Attribute types fall into three general categories:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"EAV (Entity-Attribute-Value) attributes")," are site-specific attributes that you can define for a local site using the ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/magento-admin"},"Admin"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"Custom attributes")," are a subset of EAV attributes. Objects that use EAV attributes typically store values in several MySQL tables. The Customer and ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/catalog"},"Catalog")," modules use EAV attributes.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"Extension attributes")," often use more ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/complex-data"},"complex data")," types than custom attributes. These attributes do not appear in the storefront. Extension attributes are introduced by modules."))),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/"},"PHP Developer Guide")," for information about using attributes."),(0,r.mdx)("h3",{id:"service-contracts-dependency-injection-and-dependency-inversion"},"Service contracts, dependency injection, and dependency inversion"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Service contracts")," provide a new way to access public API endpoints. These PHP interfaces offer robust, stable extension points to which clients can connect.  Service contracts define the endpoints that function as a module's public API. Defining these endpoints is an essential part of adding a module."),(0,r.mdx)("p",null,"Service contracts are discussed throughout the documentation set. See ",(0,r.mdx)("a",{parentName:"p",href:"../layers/service.md"},"Service layer")," for a high-level introduction. See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/"},"PHP Developer Guide")," for a more detailed discussion of service contracts and dependency injection."),(0,r.mdx)("p",null,"The Commerce framework implements ",(0,r.mdx)("em",{parentName:"p"},"dependency injection")," along with service contracts. Dependency injection provides a mechanism for changing a module's behavior without altering the client or understanding nitty-gritty details of implementation. Both dependency injection and its related concept ",(0,r.mdx)("em",{parentName:"p"},"dependency inversion")," support the Commerce framework's fundamental architectural principles of modularity and ease-of-extensibility. They strongly encourage basic coding practices that support the loose coupling of software modules."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/"},"PHP Developer Guide")," for information on both dependency injection and service contracts."),(0,r.mdx)("h3",{id:"plug-ins"},"Plug-ins"),(0,r.mdx)("p",null,"Plug-ins, like modules, are a mechanism for adding features to the core Commerce framework. Plug-ins enable you to make changes to the behavior of any public method in a class. You can consider it a form of extension that uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Plugin")," class."),(0,r.mdx)("p",null,"Plug-ins are also called ",(0,r.mdx)("em",{parentName:"p"},"interceptors"),". Applications use the ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/plug-in"},"plug-in")," pattern to change method behavior without modifying the actual class. Plug-ins can typically intercept method processing before or after the method runs, or only when the method throws an ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/exception"},"exception"),"."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Plug-ins")," in ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/"},"PHP Developer Guide")," for information on declaring and prioritizing plug-ins."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-modules-index-md-b59d085ed360529b7c05.js.map