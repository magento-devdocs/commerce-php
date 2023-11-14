"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[27742],{11110:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return u}});var a=t(87462),i=t(45987),o=(t(35776),t(3905)),r=t(91515);const l=["components"],d={},m=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var s;const p={_frontmatter:d},c=r.Z;function u(e){let{components:n}=e,t=(0,i.Z)(e,l);return(0,o.mdx)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"content-security-policies"},"Content security policies"),(0,o.mdx)("p",null,"Content Security Policies (CSP) are a powerful tool to mitigate against Cross Site Scripting (XSS)\nand related attacks, including card skimmers, session hijacking, clickjacking, and more. Web servers\nsend CSPs in response HTTP headers (namely ",(0,o.mdx)("inlineCode",{parentName:"p"},"Content-Security-Policy")," and\n",(0,o.mdx)("inlineCode",{parentName:"p"},"Content-Security-Policy-Report-Only"),") to browsers that whitelist the origins of scripts, styles,\nand other resources. Together, CSPs and built-in browser features help prevent:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Loading a malicious script from an attacker's website"),(0,o.mdx)("li",{parentName:"ul"},"A malicious inline script from sending credit card info to an attacker's website"),(0,o.mdx)("li",{parentName:"ul"},"Loading a malicious style that will make users click on an element that wasn't supposed to be on a page")),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"Content Security Policy (CSP)"),"\nand ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"},"Content-Security-Policy"),"\nto learn more about CSP and each individual policy."),(0,o.mdx)("h2",{id:"application-support"},"Application support"),(0,o.mdx)("p",null,"As of version 2.3.5, Adobe Commerce and Magento Open Source support CSP headers and provides ways to configure them. (This\nfunctionality is defined in the Magento_Csp module.) The application also provides default configurations at\nthe application level and for individual core modules that require extra configuration. Policies can\nbe configured for ",(0,o.mdx)("inlineCode",{parentName:"p"},"adminhtml")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"storefront")," areas separately to accommodate different use cases.\nThe application also permits configuring unique CSPs for specific pages."),(0,o.mdx)("p",null,"CSP can work in two modes:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"report-only")," - In this mode, the application reports policy violations but does not interfere. This mode is useful for debugging.  By default, CSP violations are written to the browser console, but they can be configured to be reported to an endpoint as an HTTP request to collect logs. There are a number of services that will collect, store, and sort your store's CSP violations reports for you.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"restrict mode")," - In this mode, the application acts on any policy violations."))),(0,o.mdx)("h2",{id:"default-configuration"},"Default configuration"),(0,o.mdx)("p",null,"By default, CSP is configured in ",(0,o.mdx)("inlineCode",{parentName:"p"},"report-only")," mode, which allows merchants and developers to\nconfigure policies to work according to their custom code. After the policies have been configured,\nswitch the mode to ",(0,o.mdx)("inlineCode",{parentName:"p"},"restrict"),"."),(0,o.mdx)("p",null,"Once configured, the application can enforce policies like these:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Any resource, such as ",(0,o.mdx)("inlineCode",{parentName:"li"},".js"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},".css"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},".jpg"),", or ",(0,o.mdx)("inlineCode",{parentName:"li"},".ttf")," files, can only be loaded from the store's domain"),(0,o.mdx)("li",{parentName:"ul"},"Iframes can only include pages from the store itself"),(0,o.mdx)("li",{parentName:"ul"},"AJAX requests can only be sent to the store"),(0,o.mdx)("li",{parentName:"ul"},"Forms can only be sent to the store"),(0,o.mdx)("li",{parentName:"ul"},"Only whitelisted inline scripts and styles can be compiled by browser")),(0,o.mdx)("p",null,"For more details, check the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento/Csp/etc/config.xml")," file. Some domains have already been\nwhitelisted for modules that require it. For instance if the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Paypal")," module is installed,\n",(0,o.mdx)("inlineCode",{parentName:"p"},"www.paypal.com")," is already whitelisted for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"script-src")," policy. If inline scripts and styles have also been whitelisted,\ntheir hashes will be added to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Content-Security-Policy")," header only when inline scripts/styles are not allowed."),(0,o.mdx)("p",null,"Please note that ",(0,o.mdx)("inlineCode",{parentName:"p"},"eval()")," is still allowed."),(0,o.mdx)("h2",{id:"configure-a-modules-csp-mode"},"Configure a module's CSP mode"),(0,o.mdx)("p",null,"You can set the CSP mode in a custom module by editing the module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"etc/config.xml")," file. To\nset the mode to ",(0,o.mdx)("inlineCode",{parentName:"p"},"restrict"),", change the value of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"default/csp/mode/admin/report_only"),"\nand/or the ",(0,o.mdx)("inlineCode",{parentName:"p"},"default/csp/mode/storefront/report_only")," element to 0. To enable ",(0,o.mdx)("inlineCode",{parentName:"p"},"report-only")," mode,\nset the values to 1."),(0,o.mdx)("p",null,"Example ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.xml"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">\n    <default>\n        <csp>\n            <mode>\n                <storefront>\n                    <report_only>0</report_only>\n                </storefront>\n                <admin>\n                    <report_only>0</report_only>\n                </admin>\n            </mode>\n        </csp>\n    </default>\n</config>\n')),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"etc/config.xml")," file in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Csp")," module as a reference.\n",(0,o.mdx)("a",{parentName:"p",href:"../build/component-file-structure.md"},"Create your component file structure"),"\ndescribes how to create a module."),(0,o.mdx)("h2",{id:"configure-csps-for-your-custom-codeextensiontheme"},"Configure CSPs for your custom code/extension/theme"),(0,o.mdx)("p",null,"Adobe Commerce and Magento Open Source provide multiple ways to add whitelisted resources to your custom code, extension, or theme.\nBe sure to add resources only in modules that require it. For example, adding a domain to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"default-src"),"\npolicy when you only need to load a ",(0,o.mdx)("inlineCode",{parentName:"p"},".js")," file from it is not recommended. Add the domain to ",(0,o.mdx)("inlineCode",{parentName:"p"},"script-src"),"\ninstead."),(0,o.mdx)("p",null,"The following table describes each type of CSP:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Policy name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"default-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"The default policy.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"base-uri")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines which URLs can appear in a page's ",(0,o.mdx)("inlineCode",{parentName:"td"},"<base>")," element.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"child-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the sources for workers and embedded frame contents.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"connect-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the sources that can be loaded using script interfaces.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"font-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines which sources can serve fonts.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"form-action")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines valid endpoints for submission from ",(0,o.mdx)("inlineCode",{parentName:"td"},"<form>")," tags.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"frame-ancestors")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the sources that can embed the current page.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"frame-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the sources for elements such as ",(0,o.mdx)("inlineCode",{parentName:"td"},"<frame>")," and ",(0,o.mdx)("inlineCode",{parentName:"td"},"<iframe>"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"img-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the sources from which images can be loaded.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"manifest-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the allowable contents of web app manifests.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"media-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the sources from which images can be loaded.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"object-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the sources for the ",(0,o.mdx)("inlineCode",{parentName:"td"},"<object>"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"<embed>"),", and ",(0,o.mdx)("inlineCode",{parentName:"td"},"<applet>")," elements.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"script-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the sources for JavaScript ",(0,o.mdx)("inlineCode",{parentName:"td"},"<script>")," elements.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"style-src")),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the sources for stylesheets.")))),(0,o.mdx)("h3",{id:"add-a-domain-to-the-whitelist"},"Add a domain to the whitelist"),(0,o.mdx)("p",null,"You can add a domain to the whitelist for a policy (like ",(0,o.mdx)("inlineCode",{parentName:"p"},"script-src"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"style-src"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"font-src")," and others) by\nadding a ",(0,o.mdx)("inlineCode",{parentName:"p"},"csp_whitelist.xml")," to your custom module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"etc")," folder."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<csp_whitelist xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Csp:etc/csp_whitelist.xsd">\n    <policies>\n        <policy id="script-src">\n            <values>\n                <value id="devdocs-base" type="host">https://developer.adobe.com</value>\n                <value id="magento" type="host">https://magento.com</value>\n            </values>\n        </policy>\n        <policy id="connect-src">\n            <values>\n                <value id="devdocs" type="host">https://developer.adobe.com</value>\n            </values>\n        </policy>\n    </policies>\n</csp_whitelist>\n')),(0,o.mdx)("h3",{id:"whitelist-an-inline-script-or-style"},"Whitelist an inline script or style"),(0,o.mdx)("p",null,"Stores that have ",(0,o.mdx)("inlineCode",{parentName:"p"},"unsafe-inline")," disabled for ",(0,o.mdx)("inlineCode",{parentName:"p"},"style-src")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"script-src")," (default for Adobe Commerce and Magento Open Source 2.4) inline scripts and styles\nmust be whitelisted."),(0,o.mdx)("p",null,"You must use ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\View\\Helper\\SecureHtmlRenderer"),", which is available\nas a ",(0,o.mdx)("inlineCode",{parentName:"p"},"$secureRenderer")," variable in the ",(0,o.mdx)("em",{parentName:"p"},".phtml")," templates to achieve this."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"For ",(0,o.mdx)("inlineCode",{parentName:"li"},"script")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"style")," tags containing inline JavaScript/CSS, use ",(0,o.mdx)("inlineCode",{parentName:"li"},"renderTag"),":")),(0,o.mdx)("h4",{id:"inside-a-phtml-template"},"Inside a .phtml template"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},"<div>Other content</div>\n<?= $secureRenderer->renderTag('script', ['type' => 'text/javascript'], \"\\nconsole.log('I am a whitelisted script');\\n\", false); ?>\n")),(0,o.mdx)("h4",{id:"inside-a-class-responsible-for-html-rendering_"},"Inside a class responsible for HTML rendering_"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"/** @var \\Magento\\Framework\\View\\Helper\\SecureHtmlRenderer */\nprivate $secureRenderer;\n\n...\n\nfunction someMethod() {\n   ....\n\n   $html .= $this->secureRenderer->renderTag('style', [], \"#element { color: blue } \", false);\n\n   ....\n}\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"For event handlers previously defined in HTML attributes, use ",(0,o.mdx)("inlineCode",{parentName:"li"},"renderEventListenerAsTag"),":")),(0,o.mdx)("h4",{id:"inside-a-phtml-template-1"},"Inside a .phtml template"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},"\x3c!-- <div onclick=\"alert('Old way!')\">Old way</div> --\x3e\n\n<div id=\"alert-div\">New way</div>\n<?= $secureRenderer->renderEventListenerAsTag('onclick', 'alert(\"New way!\");', '#alert-div'); ?>\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"For inline styles previously defined in ",(0,o.mdx)("inlineCode",{parentName:"li"},"style")," attributes, use ",(0,o.mdx)("inlineCode",{parentName:"li"},"renderStyleAsTag"),":")),(0,o.mdx)("h4",{id:"inside-a-phtml-template-2"},"Inside a .phtml template"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},"\x3c!-- <div style=\"color:blue\">Old way</div> --\x3e\n\n<div id=\"blue-div\">New way</div>\n<?= $secureRenderer->renderStyleAsTag('color: blue', '#blue-div'); ?>\n")),(0,o.mdx)("h4",{id:"using-inline-scripts-and-styles-is-discouraged-in-favor-of-ui-components-and-classes"},"Using inline scripts and styles is discouraged in favor of UI Components and classes"),(0,o.mdx)("p",null,"You can also whitelist inline CSS and JS inside ",(0,o.mdx)("inlineCode",{parentName:"p"},"style")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"script")," tags in a ",(0,o.mdx)("inlineCode",{parentName:"p"},"csp_whitelist.xml")," file.\nTo do this, get a ",(0,o.mdx)("inlineCode",{parentName:"p"},"sha256")," hash of a tag's content and encode it as BASE64, then\nadd it to your module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"csp_whitelist.xml"),". Programmatically, it could look like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"$whitelistHash = base64_encode(hash('sha256', $content, true));\n")),(0,o.mdx)("p",null,"Add the corresponding policy to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"csp_whitelist.xml")," file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<csp_whitelist xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Csp:etc/csp_whitelist.xsd">\n    <policies>\n        <policy id="script-src">\n            <values>\n                <value id="my-scripts-hash" type="hash" algorithm="sha256">B4yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8=</value>\n            </values>\n        </policy>\n    </policies>\n</csp_whitelist>\n')),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"When ",(0,o.mdx)("em",{parentName:"p"},"unsafe-inline")," is allowed for ",(0,o.mdx)("inlineCode",{parentName:"p"},"script-src")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"style-src")," policies, whitelisted inline scripts/styles hashes\nwill not appear in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Content-Security-Policy")," header."),(0,o.mdx)("h3",{id:"advanced-csp-configuration"},"Advanced CSP configuration"),(0,o.mdx)("p",null,"To configure other CSPs such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"sandbox")," policy, which does not consist of whitelisted hosts\nand hashes, or for more advanced ",(0,o.mdx)("inlineCode",{parentName:"p"},"fetch")," policy configurations, like removing inline support from ",(0,o.mdx)("inlineCode",{parentName:"p"},"script-src"),",\nyou would have to create a ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.xml")," file inside your custom module and rewrite the default values.\nFor reference, see ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Csp\\etc\\config.xml"),"."),(0,o.mdx)("h3",{id:"report-uri-configuration"},"Report-Uri configuration"),(0,o.mdx)("p",null,"Regardless of ",(0,o.mdx)("inlineCode",{parentName:"p"},"restrict")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"report-only")," mode, CSP violations may be reported to an endpoint for collection.\nThe URL to use for reporting by browsers can be configured in your custom module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.xml")," file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">\n    <default>\n        <csp>\n            <mode>\n                <storefront>\n                    <report_uri>http://csp-reporting-service.com/my-project/endpoint</report_uri>\n                </storefront>\n                <admin>\n                    <report_uri>http://csp-reporting-service.com/my-project/endpoint</report_uri>\n                </admin>\n            </mode>\n        </csp>\n    </default>\n</config>\n')),(0,o.mdx)("h3",{id:"page-specific-content-security-policies"},"Page specific Content-Security-Policies"),(0,o.mdx)("p",null,"Adobe Commerce and Magento Open Source can send unique policies for a specific page. To do so, implement ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Csp\\Api\\CspAwareActionInterface"),"\nin a controller responsible for the page and define the ",(0,o.mdx)("inlineCode",{parentName:"p"},"modifyCsp")," method. It receives existing CSPs\nread from configs and allows you redefine them by returning a new list. See the example below:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"class Mypage extends \\Magento\\Framework\\App\\Action\\Action implements \\Magento\\Csp\\Api\\CspAwareActionInterface\n{\n    /**\n     * My custom page.\n     *\n     * @inheritDoc\n     */\n    public function execute()\n    {\n        return $this->resultPageFactory->create();\n    }\n\n    public function modifyCsp(array $appliedPolicies): array\n    {\n        $appliedPolicies[] = new \\Magento\\Csp\\Model\\Policy\\FetchPolicy(\n            'form-action',\n            false,\n            ['https://my-site.com'],\n            ['https']\n        );\n\n        return $appliedPolicies;\n    }\n}\n")),(0,o.mdx)("p",null,"You do not need to define other policy options in contexts like ",(0,o.mdx)("em",{parentName:"p"},"unsafe-inline"),". The same\npolicy options read from config will be merged later."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-security-content-security-policies-md-1c908226b3e37d711ef8.js.map