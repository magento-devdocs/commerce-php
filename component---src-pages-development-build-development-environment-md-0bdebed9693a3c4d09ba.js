"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[90283],{48395:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return m},default:function(){return d}});var t=n(87462),o=n(45987),i=(n(35776),n(3905)),r=n(91515);const l=["components"],m={},p={_frontmatter:m},s=r.Z;function d(e){let{components:a}=e,n=(0,o.Z)(e,l);return(0,i.mdx)(s,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"optimal-development-environment"},"Optimal development environment"),(0,i.mdx)("p",null,"A typical software development flow is as follows:"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Local dev machine")," > ",(0,i.mdx)("strong",{parentName:"p"},"QA/integration server")," > ",(0,i.mdx)("strong",{parentName:"p"},"Preview server")," (optional) > ",(0,i.mdx)("strong",{parentName:"p"},"Production server")),(0,i.mdx)("p",null,"Whether you are writing a new extension or contributing to the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2"},"code base"),", the first step for any developer is setting up a development environment.\nThis article will guide you in setting up and optimizing your local development machine."),(0,i.mdx)("h2",{id:"local-development-machine"},"Local development machine"),(0,i.mdx)("p",null,"Your local development machine is where you develop and deploy your code to test it against a running Adobe Commerce or Magento Open Source application.\nIts configuration should be as close to a production server as possible."),(0,i.mdx)("p",null,"In your development machine, make sure you are running the Adobe Commerce or Magento Open Source application in ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/setup/application-modes.html"},"developer mode"),".\nYou can enable this mode with the command ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento deploy:mode:set developer"),"."),(0,i.mdx)("h3",{id:"installation"},"Installation"),(0,i.mdx)("p",null,"The following is a list of the different ways you can install Adobe Commerce or Magento Open Source locally:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Manual installation:"),"\nIf you are developing on a local machine that meets the system requirements, you can follow the same steps for ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/bk-install-guide.html"},"installing")," on a production server.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Virtual Machine (VM) installation:"),"\nInstalling Adobe Commerce and Magento Open Source in a virtual environment allows you to run it without the need to install a local ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/LAMP_(software_bundle)"},"LAMP")," stack."),(0,i.mdx)("p",{parentName:"li"},"You can use a VM tool, such as ",(0,i.mdx)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/VirtualBox"},"VirtualBox"),", together with a virtual environment tool, such as ",(0,i.mdx)("a",{parentName:"p",href:"https://www.vagrantup.com/"},"Vagrant")," or ",(0,i.mdx)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),", to create reusable and shareable instances for development."),(0,i.mdx)("p",{parentName:"li"},'A search for "magento developer box" in GitHub provides a list of unofficial virtual machines configured for development.'))),(0,i.mdx)("h3",{id:"optimal-configuration"},"Optimal configuration"),(0,i.mdx)("p",null,"The following is a list of optimizations you can make on your local development machine"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"We recommend installing and using the latest supported version of PHP 8 to increase performance."),(0,i.mdx)("li",{parentName:"ul"},"Replace your MySQL database with ",(0,i.mdx)("a",{parentName:"li",href:"https://www.percona.com/software/mysql-database/percona-server"},"Percona"),"."),(0,i.mdx)("li",{parentName:"ul"},"Make sure you install and enable ",(0,i.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/intro.opcache.php"},"PHP OPcache"),"."),(0,i.mdx)("li",{parentName:"ul"},"Xdebug is off by default. Enable this feature only when you need it because it requires a lot of memory and degrades performance.\nThe ",(0,i.mdx)("inlineCode",{parentName:"li"},"xdebug.max_nesting_level")," configuration needs to be set to 200 or greater for Magento.\nYou can increase the memory available to PHP to get an increase in performance with Xdebug on."),(0,i.mdx)("li",{parentName:"ul"},"If you need sample data, you can install it using ",(0,i.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/web/install-web-sample-data-composer.html"},"composer")," or by ",(0,i.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/web/install-web-sample-data-clone.html"},"cloning repositories"),"."),(0,i.mdx)("li",{parentName:"ul"},"To speed up frontend development, ",(0,i.mdx)("a",{parentName:"li",href:"https://docs.magento.com/user-guide/system/file-optimization.html"},"turn off merging of CSS and JavaScript"),"."),(0,i.mdx)("li",{parentName:"ul"},"Make sure ",(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/caching-overview.html"},"caching")," is turned on (this is the default behavior).\nGenerally, only page cache and block cache should be turned off for development and turned back on when testing."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/opcache.configuration.php#ini.opcache.validate-timestamps"},"Opcache timestamp validation")," should always be on for development.\nDevelopment is impossible with opcache on and revalidation off because any PHP modification would require a cache reset.")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-build-development-environment-md-0bdebed9693a3c4d09ba.js.map