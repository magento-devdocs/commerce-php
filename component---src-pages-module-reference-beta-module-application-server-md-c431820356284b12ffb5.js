"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[15165],{20928:function(e,o,r){r.r(o),r.d(o,{_frontmatter:function(){return l},default:function(){return d}});var n=r(87462),t=r(63366),i=(r(15007),r(64983)),a=r(91515),p=["components"],l={},s={_frontmatter:l},u=a.Z;function d(e){var o=e.components,r=(0,t.Z)(e,p);return(0,i.mdx)(u,(0,n.Z)({},s,r,{components:o,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"applicationserver-module"},"ApplicationServer module"),(0,i.mdx)("p",null,"The ApplicationServer module provides possibility to use Application Server (Container) to decrease bootstrapping time of each request."),(0,i.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.mdx)("p",null,"To take advantage of the Application Server, ensure that you have installed either the OpenSwoole or Swoole PHP extension and configure your Web Server to route all GraphQL requests to the Application Server."),(0,i.mdx)("h3",{id:"php-extension-installation"},"PHP extension installation"),(0,i.mdx)("p",null,"Install either the OpenSwoole or Swoole PHP extension, and ensure that corresponding Composer package are also installed to be able to run this extension."),(0,i.mdx)("p",null,"Example of the installation command:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"pecl install openswoole-22.0.0 | composer require openswoole/core:22.1.1")),(0,i.mdx)("h3",{id:"routing-requests-to-application-server"},"Routing requests to Application Server"),(0,i.mdx)("p",null,"Configure Web Server to route all GraphQL requests to Application Server."),(0,i.mdx)("p",null,"Here is an example configuration for Nginx: "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"location /graphql {\n    proxy_set_header Host $http_host;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_pass http://127.0.0.1:9501/graphql;\n}\n")),(0,i.mdx)("h2",{id:"how-to-run-application-server"},"How to run Application Server"),(0,i.mdx)("p",null,"To launch the Application Server, execute the following CLI command: ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento server:run"),". This will start HTTP service on 9501 port for GraphQl area"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-beta-module-application-server-md-c431820356284b12ffb5.js.map