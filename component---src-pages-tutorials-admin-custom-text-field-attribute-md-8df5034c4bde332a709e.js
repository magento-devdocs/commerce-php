"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[7818],{32930:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var n=a(58168),r=a(80045),i=(a(88763),a(15680)),d=a(83407);const m=["components"],o={},p={_frontmatter:o},s=d.A;function u(e){let{components:t}=e,a=(0,r.A)(e,m);return(0,i.mdx)(s,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"add-a-custom-text-field-attribute"},"Add a custom text field attribute"),(0,i.mdx)("p",null,"This tutorial describes how a developer can create a custom text field attribute for the Customer entity using code. This will reflect in both the ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/customers/customer-account-manage.html"},"Customer Grid")," and the ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/customers/customer-account-update.html"},"Customer Form")," in the Admin."),(0,i.mdx)("p",null,"This Customer attribute will be used to save and view the customer's ID in an external system, as an example. It will be created as an EAV attribute in a data patch. The EAV model allows a developer to add custom functionality to the entities without modifying the core databases and schemas. Data patches are run just once, so this code will create the custom attribute and will never run again, which could cause issues."),(0,i.mdx)("h2",{id:"code"},"Code"),(0,i.mdx)("h3",{id:"create-the-data-patch-class"},"Create the data patch class"),(0,i.mdx)("p",null,"Create a data patch class called ",(0,i.mdx)("inlineCode",{parentName:"p"},"ExternalId")," under the ",(0,i.mdx)("inlineCode",{parentName:"p"},"\\ExampleCorp\\Customer\\Setup\\Patch\\Data")," namespace. This makes the application execute the data patch automatically when ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento setup:upgrade")," is run. All data patches must implement the ",(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Setup\\Patch\\DataPatchInterface")," interface."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace ExampleCorp\\Customer\\Setup\\Patch\\Data;\n\nuse \\Magento\\Framework\\Setup\\Patch\\DataPatchInterface;\n\nclass ExternalId implements DataPatchInterface\n{\n    public function apply()\n    {\n        // will be implemented in the next steps.\n    }\n\n    public function getAliases()\n    {\n        // will be implemented in the next steps.\n    }\n\n    public function getDependencies()\n    {\n        // will be implemented in the next steps.\n    }\n}\n")),(0,i.mdx)("h3",{id:"inject-the-dependencies"},"Inject the dependencies"),(0,i.mdx)("p",null,"The dependencies to the data patch are injected using constructor DI and are listed below:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Setup\\ModuleDataSetupInterface")," for initializing and ending the setup.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Customer\\Setup\\CustomerSetupFactory")," for creating a model of ",(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Customer\\Setup\\CustomerSetup")," which is required to add the custom attribute.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Customer\\Model\\ResourceModel\\Attribute")," aliased as ",(0,i.mdx)("inlineCode",{parentName:"p"},"AttributeResource")," for saving the attribute after adding custom data to it.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"\\Psr\\Log\\LoggerInterface")," for logging exceptions thrown during the execution."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * Constructor\n *\n * @param ModuleDataSetupInterface $moduleDataSetup\n * @param CustomerSetupFactory $customerSetupFactory\n * @param AttributeResource $attributeResource\n * @param LoggerInterface $logger\n */\npublic function __construct(\n    ModuleDataSetupInterface $moduleDataSetup,\n    CustomerSetupFactory $customerSetupFactory,\n    AttributeResource $attributeResource,\n    LoggerInterface $logger\n) {\n    $this->moduleDataSetup = $moduleDataSetup;\n    $this->customerSetup = $customerSetupFactory->create(['setup' => $moduleDataSetup]);\n    $this->attributeResource = $attributeResource;\n    $this->logger = $logger;\n}\n")))),(0,i.mdx)("h3",{id:"implement-the-apply-method"},"Implement the apply method"),(0,i.mdx)("p",null,"There are five steps in developing a data patch. All the steps below are written inside the ",(0,i.mdx)("inlineCode",{parentName:"p"},"apply")," method."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Starting and ending the setup execution. This turns off foreign key checks and sets the SQL mode."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"$this->moduleDataSetup->getConnection()->startSetup();\n\n/*\n  Attribute creation code must be run between these two lines\n  to ensure that the attribute is created smoothly.\n */\n\n$this->moduleDataSetup->getConnection()->endSetup();\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Add the text field customer attribute with the required settings."),(0,i.mdx)("p",{parentName:"li"},"The third parameter for ",(0,i.mdx)("inlineCode",{parentName:"p"},"addAttribute")," is an array of settings required to configure the attribute. Passing an empty array uses all the default values for each possible setting. To keep the code to a minimum, just declare the settings needing to be overridden and the rest of the settings will be used from the defaults. The settings overrides can be done as described below."),(0,i.mdx)("p",{parentName:"li"},"For creating a simple text field, it is not necessary to override the settings for ",(0,i.mdx)("inlineCode",{parentName:"p"},"backend")," (database field type) and ",(0,i.mdx)("inlineCode",{parentName:"p"},"input")," (frontend HTML input type), as they default to ",(0,i.mdx)("inlineCode",{parentName:"p"},"varchar")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"text")," respectively."),(0,i.mdx)("p",{parentName:"li"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Customer\\Api\\CustomerMetadataInterface")," interface contains constants like the customer entity's code and the default attribute set code, which can be referenced."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"$this->customerSetup->addAttribute(\n    CustomerMetadataInterface::ENTITY_TYPE_CUSTOMER, // entity type code\n    'externalcorp_external_id', // unique attribute code\n    [\n        'label' => 'External ID',\n        'required' => 0,\n        'position' => 200,\n        'system' => 0,\n        'user_defined' => 1,\n        'is_used_in_grid' => 1,\n        'is_visible_in_grid' => 1,\n        'is_filterable_in_grid' => 1,\n        'is_searchable_in_grid' => 1,\n    ]\n);\n")),(0,i.mdx)("table",{parentName:"li"},(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Setting Key"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"label")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"External ID")," - Label for displaying the attribute value")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"required")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"0")," - Attribute will be an optional field in the customer form")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"position")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"200")," - Sort order in the customer form")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"system")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"0")," - Not a system-defined attribute")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"user_defined")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"1")," - A user-defined attribute")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"is_used_in_grid")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"1")," - Ready for use in the customer grid")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"is_visible_in_grid")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"1")," - Visible in the customer grid")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"is_filterable_in_grid")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"1")," - Filterable in the customer grid")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"is_searchable_in_grid")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"1")," - Searchable in the customer grid"))))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Add attribute to an attribute set and group."),(0,i.mdx)("p",{parentName:"li"},"There is only one attribute set and group for the customer entity. The default attribute set ID is a constant defined the ",(0,i.mdx)("inlineCode",{parentName:"p"},"CustomerMetadataInterface")," interface and setting the attribute group ID to null makes the application use the default attribute group ID for the customer entity."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"$this->customerSetup->addAttributeToSet(\n    CustomerMetadataInterface::ENTITY_TYPE_CUSTOMER, // entity type code\n    CustomerMetadataInterface::ATTRIBUTE_SET_ID_CUSTOMER, // attribute set ID\n    null, // attribute group ID\n    'externalcorp_external_id' // unique attribute code\n);\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Make the attribute visible in the customer form."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"// Get the newly created attribute's model\n$attribute = $this->customerSetup->getEavConfig()\n    ->getAttribute(CustomerMetadataInterface::ENTITY_TYPE_CUSTOMER, 'externalcorp_external_id');\n\n// Make attribute visible in Admin customer form\n$attribute->setData('used_in_forms', [\n    'adminhtml_customer'\n]);\n\n// Save modified attribute model using its resource model\n$this->attributeResource->save($attribute);\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Gracefully handle exceptions."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"try {\n    // All the code inside the apply method goes into the try block.\n} catch (Exception $exception) {\n    $this->logger->err($exception->getMessage());\n}\n")))),(0,i.mdx)("h3",{id:"implement-rest-of-the-interface"},"Implement rest of the interface"),(0,i.mdx)("p",null,"This data patch does not have any other patch as a dependency, and this data patch was not renamed earlier, so both ",(0,i.mdx)("inlineCode",{parentName:"p"},"getDependencies")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"getAliases")," can return an empty array."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"public static function getDependencies(): array\n{\n    return [];\n}\n\npublic function getAliases(): array\n{\n    return [];\n}\n")),(0,i.mdx)("h3",{id:"execute-the-data-patch"},"Execute the data patch"),(0,i.mdx)("p",null,"Run ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento setup:upgrade")," from the project root to execute the newly added data patch."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The attribute is created in the customer form under the ",(0,i.mdx)("em",{parentName:"p"},"Account Information")," section."),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"880px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"14.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/dd83348fd135fecb133a991b7ca3033e/5530d/customer-text-form.webp 320w","/commerce-php/static/dd83348fd135fecb133a991b7ca3033e/0c8fb/customer-text-form.webp 640w","/commerce-php/static/dd83348fd135fecb133a991b7ca3033e/f3abd/customer-text-form.webp 880w"],sizes:"(max-width: 880px) 100vw, 880px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/dd83348fd135fecb133a991b7ca3033e/dd4a7/customer-text-form.png 320w","/commerce-php/static/dd83348fd135fecb133a991b7ca3033e/0f09e/customer-text-form.png 640w","/commerce-php/static/dd83348fd135fecb133a991b7ca3033e/665fb/customer-text-form.png 880w"],sizes:"(max-width: 880px) 100vw, 880px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/dd83348fd135fecb133a991b7ca3033e/665fb/customer-text-form.png",alt:"Custom attribute in the customer form",title:"Custom attribute in the customer form",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The attribute is displayed in the customer grid."),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"880px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"12.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/a868b7943757992c9d5af2ba3eced04e/5530d/customer-text-grid.webp 320w","/commerce-php/static/a868b7943757992c9d5af2ba3eced04e/0c8fb/customer-text-grid.webp 640w","/commerce-php/static/a868b7943757992c9d5af2ba3eced04e/f3abd/customer-text-grid.webp 880w"],sizes:"(max-width: 880px) 100vw, 880px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/a868b7943757992c9d5af2ba3eced04e/dd4a7/customer-text-grid.png 320w","/commerce-php/static/a868b7943757992c9d5af2ba3eced04e/0f09e/customer-text-grid.png 640w","/commerce-php/static/a868b7943757992c9d5af2ba3eced04e/665fb/customer-text-grid.png 880w"],sizes:"(max-width: 880px) 100vw, 880px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/a868b7943757992c9d5af2ba3eced04e/665fb/customer-text-grid.png",alt:"Custom attribute in the customer grid",title:"Custom attribute in the customer grid",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,i.mdx)("h3",{id:"code-reference"},"Code reference"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php declare(strict_types=1);\n\nnamespace ExampleCorp\\Customer\\Setup\\Patch\\Data;\n\nuse Exception;\nuse Psr\\Log\\LoggerInterface;\nuse Magento\\Customer\\Api\\CustomerMetadataInterface;\nuse Magento\\Customer\\Model\\ResourceModel\\Attribute as AttributeResource;\nuse Magento\\Customer\\Setup\\CustomerSetup;\nuse Magento\\Customer\\Setup\\CustomerSetupFactory;\nuse Magento\\Framework\\Setup\\ModuleDataSetupInterface;\nuse Magento\\Framework\\Setup\\Patch\\DataPatchInterface;\n\n/**\n * Creates a customer attribute for managing a customer's external system ID\n */\nclass ExternalId implements DataPatchInterface\n{\n    /**\n     * @var ModuleDataSetupInterface\n     */\n    private $moduleDataSetup;\n\n    /**\n     * @var CustomerSetup\n     */\n    private $customerSetup;\n\n    /**\n     * @var AttributeResource\n     */\n    private $attributeResource;\n\n    /**\n     * @var LoggerInterface\n     */\n    private $logger;\n\n    /**\n     * Constructor\n     *\n     * @param ModuleDataSetupInterface $moduleDataSetup\n     * @param CustomerSetupFactory $customerSetupFactory\n     * @param AttributeResource $attributeResource\n     * @param LoggerInterface $logger\n     */\n    public function __construct(\n        ModuleDataSetupInterface $moduleDataSetup,\n        CustomerSetupFactory $customerSetupFactory,\n        AttributeResource $attributeResource,\n        LoggerInterface $logger\n    ) {\n        $this->moduleDataSetup = $moduleDataSetup;\n        $this->customerSetup = $customerSetupFactory->create(['setup' => $moduleDataSetup]);\n        $this->attributeResource = $attributeResource;\n        $this->logger = $logger;\n    }\n\n    /**\n     * Get array of patches that have to be executed prior to this.\n     *\n     * Example of implementation:\n     *\n     * [\n     *      \\Vendor_Name\\Module_Name\\Setup\\Patch\\Patch1::class,\n     *      \\Vendor_Name\\Module_Name\\Setup\\Patch\\Patch2::class\n     * ]\n     *\n     * @return string[]\n     */\n    public static function getDependencies(): array\n    {\n        return [];\n    }\n\n    /**\n     * Get aliases (previous names) for the patch.\n     *\n     * @return string[]\n     */\n    public function getAliases(): array\n    {\n        return [];\n    }\n\n    /**\n     * Run code inside patch\n     */\n    public function apply()\n    {\n        // Start setup\n        $this->moduleDataSetup->getConnection()->startSetup();\n\n        try {\n            // Add customer attribute with settings\n            $this->customerSetup->addAttribute(\n                CustomerMetadataInterface::ENTITY_TYPE_CUSTOMER,\n                'externalcorp_external_id',\n                [\n                    'label' => 'External ID',\n                    'required' => 0,\n                    'position' => 100,\n                    'system' => 0,\n                    'user_defined' => 1,\n                    'is_used_in_grid' => 1,\n                    'is_visible_in_grid' => 1,\n                    'is_filterable_in_grid' => 1,\n                    'is_searchable_in_grid' => 1,\n                ]\n            );\n\n            // Add attribute to default attribute set and group\n            $this->customerSetup->addAttributeToSet(\n                CustomerMetadataInterface::ENTITY_TYPE_CUSTOMER,\n                CustomerMetadataInterface::ATTRIBUTE_SET_ID_CUSTOMER,\n                null,\n                'externalcorp_external_id'\n            );\n\n            // Get the newly created attribute's model\n            $attribute = $this->customerSetup->getEavConfig()\n                ->getAttribute(CustomerMetadataInterface::ENTITY_TYPE_CUSTOMER, 'externalcorp_external_id');\n\n            // Make attribute visible in Admin customer form\n            $attribute->setData('used_in_forms', [\n                'adminhtml_customer'\n            ]);\n\n            // Save attribute using its resource model\n            $this->attributeResource->save($attribute);\n        } catch (Exception $e) {\n            $this->logger->err($e->getMessage());\n        }\n\n        // End setup\n        $this->moduleDataSetup->getConnection()->endSetup();\n    }\n}\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-admin-custom-text-field-attribute-md-8df5034c4bde332a709e.js.map