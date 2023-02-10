"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[63804],{74448:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return c}});var n=a(87462),i=a(63366),o=(a(15007),a(64983)),r=a(91515),s=["components"],l={},u={_frontmatter:l},p=r.Z;function c(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.mdx)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"denial-of-service-dos-attacks"},"Denial of service (DOS) attacks"),(0,o.mdx)("p",null,"A ",(0,o.mdx)("strong",{parentName:"p"},"Denial-of-Service (DoS) attack")," attempts to shut down (halt) servers serving an application to make it\ninaccessible to users. It's accomplished by flooding a server with an excess amount of traffic or triggering heavy\noperations that cannot be handled efficiently by the server."),(0,o.mdx)("p",null,"DoS mitigation is usually handled on the infrastructure level by identifying suspicious traffic and throttling.\nHowever, there are cases when application knowledge is required to effectively protect against DoS attacks, and it's\nthe developer's job to identify them and take appropriate measures. These cases are the scope of this article."),(0,o.mdx)("h2",{id:"identifying-vulnerable-functionality"},"Identifying vulnerable functionality"),(0,o.mdx)("p",null,"There are several types of functionality that are especially vulnerable to DoS attacks and cannot be identified\nby the infrastructure level mechanisms:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Heavy operations"),(0,o.mdx)("p",{parentName:"li"},"   Heavy operations are routes/endpoints that take a lot of processing power or storage operations to complete. Identify operations\nthat issue a large number of requests (potentially heavy requests) to the database, work extensively with files, or perform intensive\ncalculations.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Using other services through the network"),(0,o.mdx)("p",{parentName:"li"},"   Routes or endpoints can send requests to other services, such as push notifications to a mobile client.\nBy sending an excessive amount of requests to these endpoints, an attacker can cause the application to exceed usage limits for the\nexternal service. As a result, the application is banned from using the service, effectively rendering the functionality as unusable.\nAlternatively, an attack on such routes or endpoints can make the server hang for a long time while waiting for responses.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Persisting/updating multiple entities"),(0,o.mdx)("p",{parentName:"li"},"   Routes and endpoints that allow the client to create or update multiple entities can be tricked into\nperforming an excessive amount of write operations in a single request. This trickery could halting the server and/or flood\nthe persistent storage.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Querying multiple entries"),(0,o.mdx)("p",{parentName:"li"},"   Routes and endpoints that allow querying a list of entities can be tricked into trying to load and render too much\ndata for the server to handle in a single request."))),(0,o.mdx)("p",null,"Infrastructure-level anti-DoS mechanisms cannot distinguish the routes/endpoints described above from any other endpoint that is part\nof the application. Developers must take measures to protect the functionality on a case-by-case basis."),(0,o.mdx)("h2",{id:"protection-from-dos"},"Protection from DoS"),(0,o.mdx)("p",null,"The following sections describe measures you can take to protect against DoS attacks."),(0,o.mdx)("h3",{id:"recaptchacaptcha"},"ReCaptcha/CAPTCHA"),(0,o.mdx)("p",null,'"Are you a robot?" challenges can stop automated traffic from going through by verifying that a client is a real person.\nThe downside of this approach is the friction created by requiring legitimate users to solve a challenge while\nshopping.'),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/stores/security-google-recaptcha.html"},"Google ReCaptcha")," is an example of a\nchallenge provider. One of the biggest advantages of ReCaptcha is that it avoids actually presenting\na user with a challenge, unless it detects suspicious behavior. ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/rest/use-rest/protected-endpoints/"},"Protected endpoints"),"\ncontains a list of forms/endpoints can be enabled for ReCaptcha out-of-the-box. You can extend the list by following the example\non how to add coverage can be found in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/security-package/tree/develop/ReCaptchaCustomer"},"SecurityPackage")," repo."),(0,o.mdx)("p",null,"Our own ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/stores/security-captcha.html"},"CAPTCHA")," implementation is also available."),(0,o.mdx)("h3",{id:"limited-inputoutput"},"Limited input/output"),(0,o.mdx)("p",null,"Each endpoint or route that allows querying multiple entities or creating/updating multiple entities must have a reasonable\nmaximum number of accepted/returned items set. You must inspect the functionality of your code to determine\nhow many create/update are enough for legitimate users."),(0,o.mdx)("h3",{id:"configure-infrastructure"},"Configure infrastructure"),(0,o.mdx)("p",null,"Some proxies/load-balancers allow you to configure specific throttling rules on a route-by-route basis. A developer must\nidentify especially vulnerable routes and configure the infrastructure accordingly."),(0,o.mdx)("h2",{id:"when-to-apply-these-protections"},"When to apply these protections"),(0,o.mdx)("p",null,"Use the following guidelines to determine when to apply each protection method."),(0,o.mdx)("h3",{id:"recaptcha-or-other-type-of-challenge"},"ReCaptcha (or other type of challenge)"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"For heavy operations"),(0,o.mdx)("li",{parentName:"ul"},"For routes/endpoints using other services over the network")),(0,o.mdx)("h3",{id:"inputoutput-limit"},"Input/output limit"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"For endpoints/routes accepting multiple entities to create or update"),(0,o.mdx)("li",{parentName:"ul"},"For endpoints/routes that return a list of entities")),(0,o.mdx)("h3",{id:"infrastructure-configuration"},"Infrastructure configuration"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Instead of ReCaptcha when having friction is absolutely unacceptable from a product standpoint"),(0,o.mdx)("li",{parentName:"ul"},"Alongside ReCaptcha to prevent malicious traffic from reaching the server in the first place"),(0,o.mdx)("li",{parentName:"ul"},"For input/output limited endpoints that are still vulnerable under an excessive amount of requests complying with the set limit")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-security-denial-of-service-attacks-md-77df1fae630f7596f47a.js.map