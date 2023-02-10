"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[70243],{72645:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return u}});var a,r=n(87462),d=n(63366),i=(n(15007),n(64983)),o=n(91515),l=["components"],m={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:m},c=o.Z;function u(e){var t=e.components,n=(0,d.Z)(e,l);return(0,i.mdx)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"observers-best-practices"},"Observers best practices"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"../../development/components/events-and-observers/index.md"},"Observers")," are capable of modifying the behavior of the Adobe Commerce and Magento Open Source applications because they are dynamically injected into the execution flow. Poorly designed and coded observers can cause issues, instabilities, or otherwise break the application."),(0,i.mdx)("p",null,"We encourage you to follow these best practices aimed towards reducing problems when your observer is executed."),(0,i.mdx)("h2",{id:"make-your-observer-efficient"},"Make your observer efficient"),(0,i.mdx)("p",null,"Try to keep your observer small and efficient by avoiding complex computations, if possible. This is especially important when your observer is listening to an ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/event"},"event")," that is frequently dispatched. Having complex computations in your observer can slow down application processes."),(0,i.mdx)("h2",{id:"do-not-include-business-logic"},"Do not include business logic"),(0,i.mdx)("p",null,"Your observer should not contain logic other than what is needed for it to run. Business logic should be encapsulated in other classes that your observer uses."),(0,i.mdx)("h2",{id:"declare-observer-in-the-appropriate-scope"},"Declare observer in the appropriate scope"),(0,i.mdx)("p",null,"Make your observer as specific as it needs to be. Declare your observer in the appropriate area:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Area"),(0,i.mdx)("th",{parentName:"tr",align:null},"File location"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"global")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/events.xml")),(0,i.mdx)("td",{parentName:"tr",align:null},"Observer will be executed in all areas: ",(0,i.mdx)("inlineCode",{parentName:"td"},"adminhtml"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"crontab"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"frontend"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"graphql"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"webapi_rest"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"webapi_soap"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"adminhtml")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/adminhtml/events.xml")),(0,i.mdx)("td",{parentName:"tr",align:null},"Observer will be executed in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"adminhtml")," area only.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"crontab")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/crontab/events.xml")),(0,i.mdx)("td",{parentName:"tr",align:null},"Observer will be executed in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"crontab")," area only.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"frontend")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/frontend/events.xml")),(0,i.mdx)("td",{parentName:"tr",align:null},"Observer will be executed in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"frontend")," area only.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"graphql")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/graphql/events.xml")),(0,i.mdx)("td",{parentName:"tr",align:null},"Observer will be executed in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"graphql")," area only.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"webapi_rest")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/webapi_rest/events.xml")),(0,i.mdx)("td",{parentName:"tr",align:null},"Observer will be executed in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"webapi_rest")," area only.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"webapi_soap")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/webapi_soap/events.xml")),(0,i.mdx)("td",{parentName:"tr",align:null},"Observer will be executed in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"webapi_soap")," area only.")))),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"It is ",(0,i.mdx)("inlineCode",{parentName:"p"},"NOT RECOMMENDED")," to register everything in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"global")," area, as the bootstrapping process will become much heavier. For example, the application must run and process additional checks for your observer."),(0,i.mdx)("h2",{id:"avoid-cyclical-event-loops"},"Avoid cyclical event loops"),(0,i.mdx)("p",null,"Cyclical event loops occur when your observer calls the method of an object that dispatches an event that triggers a chain of events that ends up dispatching that same initial event that executes your observer in a recurring manner. Make sure your observer is not dispatching an event that it immediately listens to or will listen to in the chain of events that follows."),(0,i.mdx)("h2",{id:"do-not-rely-on-invocation-order"},"Do not rely on invocation order"),(0,i.mdx)("p",null,"Your observer should not make assumptions about the order in which it will be invoked nor should it rely on the execution of another observer. Observers listening to the same event may be invoked in any order when that event is dispatched."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-best-practices-extensions-observers-md-313af424bf10e94e129e.js.map