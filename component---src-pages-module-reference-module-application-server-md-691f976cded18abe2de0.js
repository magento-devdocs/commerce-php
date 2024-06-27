"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[67818],{86064:function(e,o,n){n.r(o),n.d(o,{_frontmatter:function(){return p},default:function(){return c}});var r=n(87462),t=n(45987),i=(n(35776),n(3905)),a=n(91515);const l=["components"],p={},s=(d="InlineAlert",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var d;const u={_frontmatter:p},m=a.Z;function c(e){let{components:o}=e,n=(0,t.Z)(e,l);return(0,i.mdx)(m,(0,r.Z)({},u,n,{components:o,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"applicationserver-module"},"ApplicationServer module"),(0,i.mdx)("p",null,"The ApplicationServer module provides possibility to use Application Server (Container) to decrease bootstrapping time of each request."),(0,i.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.mdx)("p",null,"To take advantage of the Application Server, ensure that you have installed either the OpenSwoole or Swoole PHP extension and configure your Web Server to route all GraphQL requests to the Application Server."),(0,i.mdx)("h3",{id:"php-extension-installation"},"PHP extension installation"),(0,i.mdx)("p",null,"Install either the OpenSwoole or Swoole PHP extension, and ensure that corresponding Composer package are also installed to be able to run this extension."),(0,i.mdx)("p",null,"Example of the installation command:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"pecl install openswoole-22.0.0 | composer require openswoole/core:22.1.1")),(0,i.mdx)("h3",{id:"routing-requests-to-application-server"},"Routing requests to Application Server"),(0,i.mdx)("p",null,"Configure Web Server to route all GraphQL requests to Application Server."),(0,i.mdx)("p",null,"Here is an example configuration for Nginx:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-nginx"},"location /graphql {\n    proxy_set_header Host $http_host;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_pass http://127.0.0.1:9501/graphql;\n}\n")),(0,i.mdx)("h2",{id:"how-to-run-application-server"},"How to run Application Server"),(0,i.mdx)("p",null,"To launch the Application Server, execute the following CLI command: ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento server:run"),". This will start HTTP service on 9501 port for GraphQl area"),(0,i.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),"The version of this module is 100.4.0.")}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-application-server-md-691f976cded18abe2de0.js.map