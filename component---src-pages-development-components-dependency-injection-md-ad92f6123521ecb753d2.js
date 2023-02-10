"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[98281],{68966:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return l}});var o=t(87462),a=t(63366),i=(t(15007),t(64983)),c=t(91515),s=["components"],d={},r={_frontmatter:d},p=c.Z;function l(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.mdx)(p,(0,o.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"dependency-injection"},"Dependency injection"),(0,i.mdx)("p",null,"Adobe Commerce and Magento Open Source use ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dependency_injection"},"Dependency Injection")," to replace functionality provided by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Mage")," class in Magento 1.x."),(0,i.mdx)("p",null,"Dependency injection is a design pattern that allows an object A to declare its dependencies to an external object B that supplies those dependencies.\nThe dependencies declared by A are usually class interfaces and the dependencies B provides are concrete implementations for those interfaces."),(0,i.mdx)("p",null,"This allows for loose coupling of code because object A no longer needs to be concerned with initializing its own dependencies.\nObject B decides which implementations to provide to object A based on a configuration or desired behavior."),(0,i.mdx)("p",null,"This is an important concept to understand for extension developers because it forms the basis of how Adobe Commerce and Magento Open Source compose classes."),(0,i.mdx)("h2",{id:"dependency-inversion-principle"},"Dependency inversion principle"),(0,i.mdx)("p",null,"Follow the ",(0,i.mdx)("a",{parentName:"p",href:"http://www.oodesign.com/dependency-inversion-principle.html"},"dependency inversion principle")," and use abstractions in your code to reduce code dependencies.\nThis means that your high level classes should use the interfaces of low level classes instead of working with them directly."),(0,i.mdx)("p",null,"Using interfaces in your code reduces the risk of incompatibility bugs when Adobe changes the underlying implementation of those interfaces.\nIt also lets you focus on what a class does instead of how its implemented."),(0,i.mdx)("p",null,"Since the codebase follows this principle, you can map your own implementation of an interface to a dependent class or service using the ",(0,i.mdx)("a",{parentName:"p",href:"../build/dependency-injection-file.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"di.xml"))," file."),(0,i.mdx)("h2",{id:"object-manager"},"Object manager"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"object-manager/index.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"ObjectManager"))," is an Adobe Commerce and Magento Open Source service class that instantiates objects at the beginning of the bootstrapping process."),(0,i.mdx)("p",null,"The application uses class constructor signatures to retrieve information about an object's constructor dependencies.\nWhen a class is constructed, the object manager injects the class's dependencies, defined in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file, into the class constructor."),(0,i.mdx)("p",null,"Since the object manager provides its service indirectly, your class should not depend on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ObjectManager")," object itself.\nThe only exceptions are custom factories with complex logic and integration tests that need environment setup."),(0,i.mdx)("h2",{id:"compiling-dependencies"},"Compiling dependencies"),(0,i.mdx)("p",null,"The application uses its ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/code-compiler.html"},"code compiler tool")," to collect all class dependency information and stores it in files.\nDuring the class creation process, the object manager uses this information to create concrete objects in the application."),(0,i.mdx)("p",null,"Service classes that do not exist in the codebase, such as ",(0,i.mdx)("a",{parentName:"p",href:"proxies.md"},"proxies"),", ",(0,i.mdx)("a",{parentName:"p",href:"factories.md"},"factories"),", and ",(0,i.mdx)("a",{parentName:"p",href:"plugins.md"},"interceptors")," that are declared in code or in a configuration, are generated with the help of the compiler."),(0,i.mdx)("h2",{id:"injection-types"},"Injection types"),(0,i.mdx)("p",null,"The following code sample highlights the two types of dependency injections used in Adobe Commerce and Magento Open Source:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\Backend\\Model\\Menu;\n\nuse Magento\\Backend\\Model\\Menu\\Builder\\AbstractCommand;\nuse Magento\\Backend\\Model\\Menu\\Item\\Factory;\n\nclass Builder\n{\n    /**\n     * @var Factory\n     */\n    private $_itemFactory;\n\n    /**\n     * @param Factory $menuItemFactory\n     */\n    public function __construct(\n        Factory $menuItemFactory,  // Service dependency\n    ) {\n        $this->_itemFactory = $menuItemFactory;\n    }\n\n    /**\n     * @param AbstractCommand\n     */\n    public function processCommand(AbstractCommand $command) // API param\n    {\n        // processCommand Code\n    }\n}\n\n")),(0,i.mdx)("h3",{id:"constructor-injection"},"Constructor injection"),(0,i.mdx)("p",null,"In the code sample, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Builder")," class declares its dependency on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Factory")," class in its constructor.\nThe application uses the ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file to determine which implementations to inject into the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Builder")," class."),(0,i.mdx)("h4",{id:"optional-dependencies"},"Optional dependencies"),(0,i.mdx)("p",null,"Optional dependencies are objects that your class uses for specific methods and scenarios.\nIf a class is expensive to instantiate and your class does not always use it, consider using a ",(0,i.mdx)("a",{parentName:"p",href:"proxies.md"},"proxy"),"."),(0,i.mdx)("p",null,"You must use constructor dependency injection for all optional and required dependencies of an object."),(0,i.mdx)("h3",{id:"method-injection"},"Method injection"),(0,i.mdx)("p",null,"In the code sample, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Builder")," class is also dependent on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"AbstractCommand")," class for its ",(0,i.mdx)("inlineCode",{parentName:"p"},"processCommand()")," method."),(0,i.mdx)("p",null,"Method injection involves passing in a dependency as a method parameter to use it in the class logic.\nWhen an object needs to perform actions on a dependency that cannot be injected, use method injection."),(0,i.mdx)("h2",{id:"dependency-types"},"Dependency types"),(0,i.mdx)("h3",{id:"injectable"},"Injectable"),(0,i.mdx)("p",null,"Injectable objects are singleton service objects obtained through dependency injection.\nThe object manager uses the configuration in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file to create these objects and inject them into constructors."),(0,i.mdx)("p",null,"Injectable objects can depend on other injectable objects in their constructor as long as the dependency chain does not circle back to the original injectable object."),(0,i.mdx)("h3",{id:"newablenon-injectable"},"Newable/non-injectable"),(0,i.mdx)("p",null,"Newable, or non-injectable, objects are objects that cannot be injected.\nThey are obtained by creating a new class instance every time they are needed."),(0,i.mdx)("p",null,"Transient objects, such as those that require external input from the user or database, fall into this category.\nIf you attempt to inject these objects, you will either receive an incomplete, incorrect object or an error that the object could not be created."),(0,i.mdx)("p",null,"For example, you cannot depend on a model object, such as ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Model/Product.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"Product")),", because you need to provide a product id or explicitly request a new, empty instance to get a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Product")," object.\nSince you cannot specify this data in the constructor signature, the application cannot inject this object."),(0,i.mdx)("p",null,"To get around this limitation, injectable objects can depend on ",(0,i.mdx)("a",{parentName:"p",href:"factories.md"},"factories")," that produce newable objects."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-dependency-injection-md-ad92f6123521ecb753d2.js.map