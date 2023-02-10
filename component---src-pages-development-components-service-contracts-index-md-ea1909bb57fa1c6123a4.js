"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[8417],{97478:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return c},default:function(){return p}});var s=t(87462),n=t(63366),r=(t(15007),t(64983)),o=t(91515),i=["components"],c={},d={_frontmatter:c},m=o.Z;function p(e){var a=e.components,t=(0,n.Z)(e,i);return(0,r.mdx)(m,(0,s.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"service-contracts"},"Service contracts"),(0,r.mdx)("p",null,"Adobe Commerce and Magento Open Source are modular systems that enable third-party developers to customize and overwrite core parts of the application framework. This flexibility, however, comes at a price. Business logic tends to leak across the layers of the system, which manifests as duplicated and inconsistent code."),(0,r.mdx)("p",null,"Merchants might be reluctant to upgrade Adobe Commerce or Magento Open Source because customized extensions that they have purchased might not be compatible with new versions. Also, Adobe and third-party developers can find it difficult to track and report the dependencies that customized extensions have on other extensions."),(0,r.mdx)("p",null,"To address these issues, Adobe Commerce and Magento Open Source introduced ",(0,r.mdx)("em",{parentName:"p"},"service contracts"),"."),(0,r.mdx)("h2",{id:"what-is-a-service-contract"},"What is a service contract?"),(0,r.mdx)("p",null,"A ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/service-contract"},"service contract")," is a set of ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP")," interfaces that are defined for a ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module"),".\nA service contract includes ",(0,r.mdx)("a",{parentName:"p",href:"design-patterns.md#data-interfaces"},"data interfaces"),", which preserve data integrity, and ",(0,r.mdx)("a",{parentName:"p",href:"design-patterns.md#service-interfaces"},"service interfaces"),", which hide business logic details from service requestors such as controllers, web services, and other modules."),(0,r.mdx)("p",null,"If developers define data and service interfaces according to a set of ",(0,r.mdx)("a",{parentName:"p",href:"design-patterns.md"},"design patterns"),", the result is a well-defined, durable ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API")," that other modules and third-party extensions can implement through models and resource models."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"701px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"90.94339622641509%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/dda86/msc.webp 265w","/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/010e6/msc.webp 530w","/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/123bf/msc.webp 701w"],sizes:"(max-width: 701px) 100vw, 701px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/35d86/msc.jpg 265w","/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/7d9a0/msc.jpg 530w","/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/8144e/msc.jpg 701w"],sizes:"(max-width: 701px) 100vw, 701px",type:"image/jpeg"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/b2940dab7a42d12a6f8cef4c624aefb7/8144e/msc.jpg",alt:"Service Contracts",title:"Service Contracts",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"benefits"},"Benefits"),(0,r.mdx)("p",null,"Service contracts enhance the modularity of Magento. They enable Adobe and third-party developers to report system dependencies through ",(0,r.mdx)("inlineCode",{parentName:"p"},"composer.json")," files and, consequently, guarantee compatibility across versions of Adobe Commerce and Magento Open Source. This compatibility ensures that merchants can easily upgrade Magento.\nThese contracts ensure a well-defined, durable API that other modules and third-party extensions can implement. Also, these contracts make it easy to ",(0,r.mdx)("a",{parentName:"p",href:"../web-api/services.md"},"configure services as web APIs"),"."),(0,r.mdx)("p",null,"Data entities are a side benefit of service contracts.\nThe database tables that normally support these entities can be complicated.\nFor example, some attributes might be stored in an EAV table, so a set of MySQL database tables might define a single data ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/entity"},"entity"),".\nData entities in a service contract reveal a simpler data model than the data model in an underlying relational ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/database-schema"},"database schema"),".\nEventually, you will be able to use different storage technologies for different data collections. For example, you could use a NoSQL database to replace product tables."),(0,r.mdx)("h2",{id:"using-the-api-tag"},"Using the @api tag"),(0,r.mdx)("p",null,"Backward compatibility can be indicated by the use of ",(0,r.mdx)("inlineCode",{parentName:"p"},"@api"),". For more information, see ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/contributor/guides/code-contributions/backward-compatibility-policy/"},"Backward compatibility"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-service-contracts-index-md-ea1909bb57fa1c6123a4.js.map