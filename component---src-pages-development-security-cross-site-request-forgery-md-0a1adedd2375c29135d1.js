"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[77251],{94935:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return d}});var o=n(87462),r=n(63366),a=(n(15007),n(64983)),i=n(91515),s=["components"],m={},c={_frontmatter:m},l=i.Z;function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.mdx)(l,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"cross-site-request-forgery-csrf"},"Cross-site request forgery (CSRF)"),(0,a.mdx)("p",null,"CSRF is an attack that tricks a user's browser into executing actions on a web application in which the user is currently authenticated. This attack can be achieved in multiple ways by crafting a form, or a resource reference, like ",(0,a.mdx)("inlineCode",{parentName:"p"},"<img/>"),' "src" attribute, that will trigger a browser to send the request to the targeted website where a user may already be authenticated and posses the authentication cookies. The target website will consider this request genuine and will execute the action, like transferring money to an account.'),(0,a.mdx)("p",null,"The most effective way of protecting against these attacks is with CSRF tokens. These tokens are generated server-side and inserted into forms. When receiving a form, the server verifies that a valid CSRF token is included in the request."),(0,a.mdx)("h2",{id:"built-in-csrf-protection"},"Built-in CSRF protection"),(0,a.mdx)("p",null,"There are anti-CSRF measures, like CSRF tokens, built into the framework. Only minimum action is\nrequired from developers to make these mechanisms work."),(0,a.mdx)("p",null,"The framework cannot be sure which controller is intended to change state and thus needs to be protected. A developer must inform the framework whether a controller needs protection by implementing one, or multiple, ",(0,a.mdx)("inlineCode",{parentName:"p"},"Http<Method>ActionInterface")," interfaces. In most scenarios, controllers that accept forms would expect ",(0,a.mdx)("em",{parentName:"p"},"POST")," requests and must be marked by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\App\\Action\\HttpPostActionInterface")," interface. These are marker-interfaces that require no additional implementation. If a controller implements at least one of them, the framework will deny requests with HTTP methods that do not correspond to one of the interfaces. The CSRF protection mechanism will become active for controllers that expect any HTTP method other than ",(0,a.mdx)("em",{parentName:"p"},"GET"),"."),(0,a.mdx)("p",null,"CSRF tokens will be added to all forms automatically by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"lib/web/mage/common.js")," file. If the file is disabled, you can manually add the CSRF token to a form by getting it from the global ",(0,a.mdx)("inlineCode",{parentName:"p"},"FORM_KEY")," variable on JS side, or by using ",(0,a.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\Data\\Form\\FormKey")," on backend."),(0,a.mdx)("h3",{id:"exceptions"},"Exceptions"),(0,a.mdx)("p",null,"There may be some cases when a controller expects POST requests, or any other non-GET HTTP method, but those requests are not supposed to be protected from CSRF. For example, a webhook that expect a request from another service. In such cases, you can disable CSRF protection for a controller by implementing the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\App\\CsrfAwareActionInterface interface"),". By doing so, you can also customize failed CSRF challenge exceptions or modify the validation logic."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-security-cross-site-request-forgery-md-0a1adedd2375c29135d1.js.map