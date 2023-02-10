"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[27376],{64181:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return c}});var t=a(87462),o=a(63366),i=(a(15007),a(64983)),r=a(91515),s=["components"],d={},l={_frontmatter:d},p=r.Z;function c(e){var n=e.components,a=(0,o.Z)(e,s);return(0,i.mdx)(p,(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"proxies"},"Proxies"),(0,i.mdx)("p",null,"The Adobe Commerce and Magento Open Source ",(0,i.mdx)("a",{parentName:"p",href:"dependency-injection.md#constructor-injection"},"constructor injection pattern")," enables you to flexibly manage your class dependencies. However, constructor injection also means that a chain reaction of object instantiation is often the result when you create an object. (The original object has dependencies that have dependencies, and those objects have dependencies, and so on.)"),(0,i.mdx)("p",null,"If a class's constructor is particularly resource-intensive, this can lead to unnecessary performance impact when another class depends on it, if the expensive object does not end up being needed during a particular request. (You can display a ",(0,i.mdx)("em",{parentName:"p"},"dependency graph")," of such objects by enabling ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/setup/mage-profiler.html"},"profiling"),".)"),(0,i.mdx)("p",null,"As an example, consider the following two classes:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"class SlowLoading\n{\n    public function __construct()\n    {\n        // ... Do something resource intensive\n    }\n\n    public function getValue()\n    {\n        return 'SlowLoading value';\n    }\n}\n\nclass FastLoading\n{\n    protected $slowLoading;\n\n    public function __construct(\n        SlowLoading $slowLoading\n    ){\n        $this->slowLoading = $slowLoading;\n    }\n\n    public function getFastValue()\n    {\n        return 'FastLoading value';\n    }\n\n    public function getSlowValue()\n    {\n        return $this->slowLoading->getValue();\n    }\n}\n")),(0,i.mdx)("p",null,"Assume that class ",(0,i.mdx)("inlineCode",{parentName:"p"},"SlowLoading")," has a non-trivial performance impact when instantiated (perhaps due to a complex database query or a call to a third-party web API). Because of the dependency injection in the constructor of ",(0,i.mdx)("inlineCode",{parentName:"p"},"FastLoading"),", this impact is incurred if ",(0,i.mdx)("inlineCode",{parentName:"p"},"FastLoading")," is instantiated.  Note, however, that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"SlowLoading")," instance is used only in the method ",(0,i.mdx)("inlineCode",{parentName:"p"},"getSlowValue"),", meaning that the resource cost is unnecessary if this method is never called on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"FastLoading")," object."),(0,i.mdx)("h2",{id:"proxies-are-generated-code"},"Proxies are generated code"),(0,i.mdx)("p",null,"The application has a solution for this situation: proxies. ",(0,i.mdx)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Proxy_pattern"},"Proxies")," extend other classes to become lazy-loaded versions of them. That is, a real instance of the class a proxy extends is created only after one of the class's methods is actually called. A proxy implements the same interface as the original class and so can be used as a dependency anywhere the original class can.  Unlike its parent, a proxy has only one dependency: the object manager."),(0,i.mdx)("p",null,"Proxies are generated code and therefore do not need to be manually written.  (See ",(0,i.mdx)("a",{parentName:"p",href:"code-generation.md"},"Code generation")," for more information.) Simply reference a class in the form ",(0,i.mdx)("inlineCode",{parentName:"p"},"\\Original\\Class\\Name\\Proxy"),", and the class is generated if it does not exist."),(0,i.mdx)("p",null,"Using the preceding example, a proxy can be passed into the constructor arguments instead of the original class, using DI configuration as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="FastLoading">\n    <arguments>\n        <argument name="slowLoading" xsi:type="object">SlowLoading\\Proxy</argument>\n    </arguments>\n</type>\n')),(0,i.mdx)("p",null,"With the proxy used in place of ",(0,i.mdx)("inlineCode",{parentName:"p"},"SlowLoading"),", the ",(0,i.mdx)("inlineCode",{parentName:"p"},"SlowLoading")," class will not be instantiated---and therefore, the resource intensive constructor operations not performed---until the ",(0,i.mdx)("inlineCode",{parentName:"p"},"SlowLoading")," object is used (that is, if the ",(0,i.mdx)("inlineCode",{parentName:"p"},"getSlowValue")," method is called)."),(0,i.mdx)("p",null,"Because DI configuration is used to inject a proxy, proxies can be dropped in to replace their corresponding classes - or proxy replacements ",(0,i.mdx)("em",{parentName:"p"},"removed")," - without touching application code."),(0,i.mdx)("p",null,"As a practical example of a proxy, you can see the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Store/Model/StoreManager.php"},"StoreManager")," class and then see the generated ",(0,i.mdx)("inlineCode",{parentName:"p"},"StoreManager")," proxy class."),(0,i.mdx)("p",null,"The following excerpt from the application code passes the ",(0,i.mdx)("inlineCode",{parentName:"p"},"storeManager")," argument as a proxy to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Store\\Model\\Resolver\\Store")," class. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"StoreManagerInterface")," model is defined as a proxy class by the added ",(0,i.mdx)("inlineCode",{parentName:"p"},"Proxy")," at the end of the original class in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Store\\Model\\Resolver\\Store">\n    <arguments>\n        <argument name="storeManager" xsi:type="object">Magento\\Store\\Model\\StoreManagerInterface\\Proxy</argument>\n    </arguments>\n</type>\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-proxies-md-ebbda26f089910fa70a6.js.map