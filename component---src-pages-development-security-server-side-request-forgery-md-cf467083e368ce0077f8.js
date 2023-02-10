"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[86573],{55957:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return d}});var n=a(87462),o=a(63366),i=(a(15007),a(64983)),s=a(91515),r=["components"],l={},c={_frontmatter:l},p=s.Z;function d(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.mdx)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"server-side-request-forgery-ssrf"},"Server-side request forgery (SSRF)"),(0,i.mdx)("p",null,"Server-side Request Forgery (SSRF) is a type of attack in which a server is tricked into sending a request to an internally-accessible server. This type of attack is not limited to the HTTP protocol. Depending on the network client library the targeted server is using, it could be forced to send requests using other protocols such as TCP or FTP. An SSRF attacker could force an application to send a request to FLUSHALL to an internally accessible Redis instance, or to load a file from an internal file host instead of a publicly accessible one provided by a user."),(0,i.mdx)("h2",{id:"identifying-potentially-vulnerable-functionality"},"Identifying potentially vulnerable functionality"),(0,i.mdx)("p",null,"Any functionality that allows a user to provide a URL that will later be requested on the server is vulnerable without proper validation."),(0,i.mdx)("p",null,"An example of such functionality would be an ability for a user to specify a URL for their profile image.\nYour application might attempt to download the image to allow the user to crop it so that it can be used as an avatar.\nIf there is also some internal service that exposes a web API accessible by GET HTTP method then an attacker can\ncraft a URL that will call the endpoint. If the API is not RESTful then calling the endpoint might actually modify state.\nFor example, calling the PHP ",(0,i.mdx)("inlineCode",{parentName:"p"},"file_get_contents('http://internal-service/mess-my-store')")," method with a malicious URL\nthat is subsequently used by the application will achieve this."),(0,i.mdx)("p",null,"Another example would be an integration with a 3rd-party service that provides tax information. Your module might need\nto display accurate tax information during checkout, but your company does not specialize in calculating taxes. Therefore,\nyour module provides a field in which an Admin user can set the tax service base URL or the path to a standard tax\nAPI. Now, a malicious Admin user can craft a base URL that will be requested by our application\nlater on, and the request is not using a GET method."),(0,i.mdx)("h2",{id:"prevention-measures"},"Prevention measures"),(0,i.mdx)("p",null,"Follow these measures to prevent SSRF attacks. They are listed in order of effectiveness."),(0,i.mdx)("h3",{id:"do-not-accept-urls-from-users"},"Do not accept URLs from users"),(0,i.mdx)("p",null,"The most effective measure to avoid potential SSRF attacks completely: do not allow users to provide URLs that will be\naccessed by the application. If you must allow users to provide URLs, limit this functionality to the most trusted users."),(0,i.mdx)("h3",{id:"limit-which-url-parts-are-accepted"},"Limit which URL parts are accepted"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Do not accept protocols/schemas"),(0,i.mdx)("p",{parentName:"li"},"When accepting URL from users, accept the host and query, but not the protocol (schema). If it's an avatar upload, then allow\nonly ",(0,i.mdx)("inlineCode",{parentName:"p"},"http://")," and maybe ",(0,i.mdx)("inlineCode",{parentName:"p"},"ftp://"),", but not ",(0,i.mdx)("inlineCode",{parentName:"p"},"phar://")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"tcp://"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Do not accept hosts"),(0,i.mdx)("p",{parentName:"li"},"Only accept the query, but not the host. If the host is always known and only the route can change, then only accept routes.\nOtherwise, try to limit the host to a list of trusted hosts"))),(0,i.mdx)("h3",{id:"do-not-expose-responses"},"Do not expose responses"),(0,i.mdx)("p",null,"Your application logic may try to show a response in the exception message when its structure is not expected. A response\nstructure may be unexpected if the URL was forged in order to access some internal service. If the response is not exposed\nthen the attacker, while having successfully tricked the application to sending the request, won't get the sensitive data."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-security-server-side-request-forgery-md-cf467083e368ce0077f8.js.map