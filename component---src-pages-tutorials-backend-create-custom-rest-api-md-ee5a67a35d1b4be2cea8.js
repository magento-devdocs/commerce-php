"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[60205],{1506:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return m}});var r=t(87462),o=t(63366),i=(t(15007),t(64983)),a=t(91515),s=["components"],p={},c={_frontmatter:p},d=a.Z;function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.mdx)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"create-a-custom-rest-api"},"Create a custom REST API"),(0,i.mdx)("p",null,"Although {{site.data.var.ee}} and {{site.data.var.ce}} provide numerous REST endpoints, you might need to create your own to manage custom data within your extension. This tutorial describes how you can create such a custom REST ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API"),"."),(0,i.mdx)("p",null,"In this tutorial, we will create two custom endpoints to read or modify the product information. ",(0,i.mdx)("inlineCode",{parentName:"p"},"GET /V1/rest_dev/getProduct/{productId}")," returns details about a specified product, and ",(0,i.mdx)("inlineCode",{parentName:"p"},"PUT /V1/rest_dev/setDescription")," modifies product description data."),(0,i.mdx)("h2",{id:"step-1-create-a-custom-module"},"Step 1. Create a custom module"),(0,i.mdx)("p",null,"We will use ",(0,i.mdx)("inlineCode",{parentName:"p"},"Dev_RestApi")," as the namespace for this tutorial."),(0,i.mdx)("p",null,"Create the ",(0,i.mdx)("inlineCode",{parentName:"p"},"module.xml")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"registration.php")," files to get started. ",(0,i.mdx)("a",{parentName:"p",href:"../../development/prepare/component-file-structure.md"},"About component file structure")," provides additional information."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"strong"},"app/code/Dev/RestApi/etc/module.xml")),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">\n    <module name="Dev_RestApi">\n        <sequence>\n            <module name="Magento_Webapi" />\n            <module name="Magento_Catalog" />\n        </sequence>\n    </module>\n</config>\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"strong"},"app/code/Dev/RestApi/registration.php")),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\\Magento\\Framework\\Component\\ComponentRegistrar::register(\n    \\Magento\\Framework\\Component\\ComponentRegistrar::MODULE,\n    'Dev_RestApi',\n    __DIR__\n);\n")),(0,i.mdx)("h2",{id:"step-2-create-custom-acl-entries"},"Step 2. Create custom ACL entries"),(0,i.mdx)("p",null,"We must create ",(0,i.mdx)("a",{parentName:"p",href:"create-access-control-list-rule.md"},"Access Control List (ACL) rules")," for each endpoint. These rules give full control over who can access them."),(0,i.mdx)("p",null,"Create the required ACL entries in ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/RestApi/etc/acl.xml"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:framework:Acl/etc/acl.xsd">\n    <acl>\n        <resources>\n            <resource id="Magento_Backend::admin">\n                <resource id="Dev_RestApi::products" title="Dev API - Products"\n                          translate="title" sortOrder="110">\n                    <resource id="Dev_RestApi::products_get" title="Get product"\n                              translate="title" sortOrder="10" />\n                    <resource id="Dev_RestApi::products_set_description" title="Set description"\n                              translate="title" sortOrder="20" />\n                </resource>\n            </resource>\n        </resources>\n    </acl>\n</config>\n')),(0,i.mdx)("h2",{id:"step-3-define-custom-endpoints"},"Step 3. Define custom endpoints"),(0,i.mdx)("p",null,"To define endpoints, we need to ",(0,i.mdx)("a",{parentName:"p",href:"../../development/components/web-api/services.md"},"configure a web API")," service as described in ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/RestApi/etc/webapi.xml"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">\n    <route url="/V1/rest_dev/getProduct/:id" method="GET">\n        <service class="Dev\\RestApi\\Api\\ProductRepositoryInterface" method="getItem" />\n        <resources>\n            <resource ref="Dev_RestApi::products_get" />\n        </resources>\n    </route>\n    <route url="/V1/rest_dev/setDescription" method="PUT">\n        <service class="Dev\\RestApi\\Api\\ProductRepositoryInterface" method="setDescription" />\n        <resources>\n            <resource ref="Dev_RestApi::products_set_description" />\n        </resources>\n    </route>\n</routes>\n')),(0,i.mdx)("p",null,"Where:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"url")," is the URL of the endpoint. The full address would be ",(0,i.mdx)("inlineCode",{parentName:"li"},"<domain>/rest/<store_code>/<url>"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"method")," defines the request method (GET, POST, PUT, DELETE)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"service")," describes the interface and the method to be called when the endpoint is reached."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"resource")," sets the ACL resource that is required to access the endpoint. If you want to make it public (no authentication), use: ",(0,i.mdx)("inlineCode",{parentName:"li"},'<resource ref="anonymous" />'))),(0,i.mdx)("h2",{id:"step-4-create-dixml"},"Step 4. Create di.xml"),(0,i.mdx)("p",null,"Create a ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file in ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/RestApi/etc/di.xml")," to configure interfaces."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" ?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    <preference for="Dev\\RestApi\\Api\\ProductRepositoryInterface" type="Dev\\RestApi\\Model\\Api\\ProductRepository"/>\n    <preference for="Dev\\RestApi\\Api\\RequestItemInterface" type="Dev\\RestApi\\Model\\Api\\RequestItem"/>\n    <preference for="Dev\\RestApi\\Api\\ResponseItemInterface" type="Dev\\RestApi\\Model\\Api\\ResponseItem"/>\n</config>\n')),(0,i.mdx)("h2",{id:"step-5-create-interfaces"},"Step 5. Create interfaces"),(0,i.mdx)("p",null,"In this example, we created the interfaces for the request in ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/RestApi/Api/RequestItemInterface.php"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nnamespace Dev\\RestApi\\Api;\ninterface RequestItemInterface\n{\n    const DATA_ID = 'id';\n    const DATA_DESCRIPTION = 'description';\n    /**\n     * @return int\n     */\n    public function getId();\n    /**\n     * @return string\n     */\n    public function getDescription();\n    /**\n     * @param int $id\n     * @return $this\n     */\n    public function setId(int $id);\n    /**\n     * @param string $description\n     * @return $this\n     */\n    public function setDescription(string $description);\n}\n")),(0,i.mdx)("p",null,"The interfaces for the response is in ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/RestApi/Api/ResponseItemInterface.php"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nnamespace Dev\\RestApi\\Api;\ninterface ResponseItemInterface\n{\n    const DATA_ID = 'id';\n    const DATA_SKU = 'sku';\n    const DATA_NAME = 'name';\n    const DATA_DESCRIPTION = 'description';\n    /**\n     * @return int\n     */\n    public function getId();\n    /**\n     * @return string\n     */\n    public function getSku();\n    /**\n     * @return string\n     */\n    public function getName();\n    /**\n     * @return string|null\n     */\n    public function getDescription();\n    /**\n     * @param int $id\n     * @return $this\n     */\n    public function setId(int $id);\n    /**\n     * @param string $sku\n     * @return $this\n     */\n    public function setSku(string $sku);\n    /**\n     * @param string $name\n     * @return $this\n     */\n    public function setName(string $name);\n    /**\n     * @param string $description\n     * @return $this\n     */\n    public function setDescription(string $description);\n}\n")),(0,i.mdx)("p",null,"We define the 'ProductRepositoryInterface' in ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/RestApi/Api/ProductRepositoryInterface.php"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nnamespace Dev\\RestApi\\Api;\ninterface ProductRepositoryInterface\n{\n    /**\n     * Return a filtered product.\n     *\n     * @param int $id\n     * @return \\Dev\\RestApi\\Api\\ResponseItemInterface\n     * @throws \\Magento\\Framework\\Exception\\NoSuchEntityException\n     */\n    public function getItem(int $id);\n    /**\n     * Set descriptions for the products.\n     *\n     * @param \\Dev\\RestApi\\Api\\RequestItemInterface[] $products\n     * @return void\n     */\n    public function setDescription(array $products);\n}\n")),(0,i.mdx)("h2",{id:"step-6-create-models"},"Step 6. Create models"),(0,i.mdx)("p",null,"Models create classes that implement interfaces and process data."),(0,i.mdx)("p",null,"In this example, we have created models to request, respond to, and process data. In each model, we have defined two methods: ",(0,i.mdx)("inlineCode",{parentName:"p"},"getItem"),", which provides product details of the given product ID, and ",(0,i.mdx)("inlineCode",{parentName:"p"},"setDescription")," which updates the description of the given product."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"strong"},"app/code/Dev/RestApi/Model/Api/RequestItem.php")),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nnamespace Dev\\RestApi\\Model\\Api;\nuse Dev\\RestApi\\Api\\RequestItemInterface;\nuse Magento\\Framework\\DataObject;\n/**\n * Class RequestItem\n */\nclass RequestItem extends DataObject implements RequestItemInterface\n{\n    public function getId() : int\n    {\n        return $this->_getData(self::DATA_ID);\n    }\n    public function getDescription() : string\n    {\n        return $this->_getData(self::DATA_DESCRIPTION);\n    }\n    /**\n     * @param int $id\n     * @return $this\n     */\n    public function setId(int $id) : mixed\n    {\n        return $this->setData(self::DATA_ID, $id);\n    }\n    /**\n     * @param string $description\n     * @return $this\n     */\n    public function setDescription(string $description) : mixed\n    {\n        return $this->setData(self::DATA_DESCRIPTION, $description);\n    }\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"strong"},"app/code/Dev/RestApi/Model/Api/ResponseItem.php")),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nnamespace Dev\\RestApi\\Model\\Api;\nuse Dev\\RestApi\\Api\\ResponseItemInterface;\nuse Magento\\Framework\\DataObject;\n/**\n * Class ResponseItem\n */\nclass ResponseItem extends DataObject implements ResponseItemInterface\n{\n    public function getId() : int\n    {\n        return $this->_getData(self::DATA_ID);\n    }\n    public function getSku() : string\n    {\n        return $this->_getData(self::DATA_SKU);\n    }\n    public function getName() : string\n    {\n        return $this->_getData(self::DATA_NAME);\n    }\n    public function getDescription() : string\n    {\n        return $this->_getData(self::DATA_DESCRIPTION);\n    }\n    /**\n     * @param int $id\n     * @return $this\n     */\n    public function setId(int $id) : mixed\n    {\n        return $this->setData(self::DATA_ID, $id);\n    }\n    /**\n     * @param string $sku\n     * @return $this\n     */\n    public function setSku(string $sku) : mixed\n    {\n        return $this->setData(self::DATA_SKU, $sku);\n    }\n    /**\n     * @param string $name\n     * @return $this\n     */\n    public function setName(string $name) : mixed\n    {\n        return $this->setData(self::DATA_NAME, $name);\n    }\n    /**\n     * @param string $description\n     * @return $this\n     */\n    public function setDescription(string $description) : mixed\n    {\n        return $this->setData(self::DATA_DESCRIPTION, $description);\n    }\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"strong"},"app/code/Dev/RestApi/Model/Api/ProductRepository.php")),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nnamespace Dev\\RestApi\\Model\\Api;\nuse Dev\\RestApi\\Api\\ProductRepositoryInterface;\nuse Dev\\RestApi\\Api\\RequestItemInterfaceFactory;\nuse Dev\\RestApi\\Api\\ResponseItemInterfaceFactory;\nuse Magento\\Catalog\\Api\\Data\\ProductInterface;\nuse Magento\\Catalog\\Model\\ResourceModel\\Product\\Action;\nuse Magento\\Catalog\\Model\\ResourceModel\\Product\\CollectionFactory;\nuse Magento\\Framework\\Exception\\NoSuchEntityException;\nuse Magento\\Store\\Model\\StoreManagerInterface;\n/**\n * Class ProductRepository\n */\nclass ProductRepository implements ProductRepositoryInterface\n{\n    /**\n     * @var Action\n     */\n    private $productAction;\n    /**\n     * @var CollectionFactory\n     */\n    private $productCollectionFactory;\n    /**\n     * @var RequestItemInterfaceFactory\n     */\n    private $requestItemFactory;\n    /**\n     * @var ResponseItemInterfaceFactory\n     */\n    private $responseItemFactory;\n    /**\n     * @var StoreManagerInterface\n     */\n    private $storeManager;\n    /**\n     * @param Action $productAction\n     * @param CollectionFactory $productCollectionFactory\n     * @param RequestItemInterfaceFactory $requestItemFactory\n     * @param ResponseItemInterfaceFactory $responseItemFactory\n     * @param StoreManagerInterface $storeManager\n     */\n    public function __construct(\n        Action $productAction,\n        CollectionFactory $productCollectionFactory,\n        RequestItemInterfaceFactory $requestItemFactory,\n        ResponseItemInterfaceFactory $responseItemFactory,\n        StoreManagerInterface $storeManager\n    ) {\n        $this->productAction = $productAction;\n        $this->productCollectionFactory = $productCollectionFactory;\n        $this->requestItemFactory = $requestItemFactory;\n        $this->responseItemFactory = $responseItemFactory;\n        $this->storeManager = $storeManager;\n    }\n    /**\n     * {@inheritDoc}\n     *\n     * @param int $id\n     * @return ResponseItemInterface\n     * @throws NoSuchEntityException\n     */\n    public function getItem(int $id) : mixed\n    {\n        $collection = $this->getProductCollection()\n            ->addAttributeToFilter('entity_id', ['eq' => $id]);\n        /** @var ProductInterface $product */\n        $product = $collection->getFirstItem();\n        if (!$product->getId()) {\n            throw new NoSuchEntityException(__('Product not found'));\n        }\n        return $this->getResponseItemFromProduct($product);\n    }\n    /**\n     * {@inheritDoc}\n     *\n     * @param RequestItemInterface[] $products\n     * @return void\n     */\n    public function setDescription(array $products) : void\n    {\n        foreach ($products as $product) {\n            $this->setDescriptionForProduct(\n                $product->getId(),\n                $product->getDescription()\n            );\n        }\n    }\n    /**\n     * @return Collection\n     */\n    private function getProductCollection() : mixed\n    {\n        /** @var Collection $collection */\n        $collection = $this->productCollectionFactory->create();\n        $collection\n            ->addAttributeToSelect(\n                [\n                    'entity_id',\n                    ProductInterface::SKU,\n                    ProductInterface::NAME,\n                    'description'\n                ],\n                'left'\n            );\n        return $collection;\n    }\n    /**\n     * @param ProductInterface $product\n     * @return ResponseItemInterface\n     */\n    private function getResponseItemFromProduct(ProductInterface $product) : mixed\n    {\n        /** @var ResponseItemInterface $responseItem */\n        $responseItem = $this->responseItemFactory->create();\n        $responseItem->setId($product->getId())\n            ->setSku($product->getSku())\n            ->setName($product->getName())\n            ->setDescription($product->getDescription());\n        return $responseItem;\n    }\n    /**\n     * Set the description for the product.\n     *\n     * @param int $id\n     * @param string $description\n     * @return void\n     */\n    private function setDescriptionForProduct(int $id, string $description) : void\n    {\n        $this->productAction->updateAttributes(\n            [$id],\n            ['description' => $description],\n            $this->storeManager->getStore()->getId()\n        );\n    }\n}\n")),(0,i.mdx)("p",null,"After manipulating .xml files mentioned in this topic, updating constructors, or introducing new classes, you must run ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/database-upgrade.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"bin/magento setup:upgrade"))," or ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/code-compiler.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"bin/magento setup:di:compile"))," from the directory where Adobe Commerce or Magento Open Source is installed to generate the code for the introduced changes."),(0,i.mdx)("h2",{id:"step-7-test-your-custom-endpoint"},"Step 7. Test your custom endpoint"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"You can use any REST client to send calls. ",(0,i.mdx)("a",{parentName:"li",href:"https://www.getpostman.com/"},"Postman")," is recommended."),(0,i.mdx)("li",{parentName:"ul"},"Obtain an admin authorization token. All calls in this tutorial require administrator privileges. See ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/rest/tutorials/prerequisite-tasks/"},"Generate the admin token")," for more information.")),(0,i.mdx)("h3",{id:"test-the-get-endpoint"},"Test the GET endpoint"),(0,i.mdx)("p",null,"The example uses sample data for ",(0,i.mdx)("inlineCode",{parentName:"p"},"product_id: 1")," and the endpoint ",(0,i.mdx)("inlineCode",{parentName:"p"},"http://local.magentoee.com/rest/V1/rest_dev/getProduct/1"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET <domain>/rest/V1/<store_code>/rest_dev/getProduct/<product_id>")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "sku": "24-MB01",\n    "name": "Joust Duffle Bag",\n    "description": "<p>The sporty Joust Duffle Bag can\'t be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare, it\'s ideal for athletes with places to go.<p>\\n<ul>\\n<li>Dual top handles.</li>\\n<li>Adjustable shoulder strap.</li>\\n<li>Full-length zipper.</li>\\n<li>L 29\\" x W 13\\" x H 11\\".</li>\\n</ul>"\n}\n')),(0,i.mdx)("h3",{id:"test-the-put-endpoint"},"Test the PUT endpoint"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"PUT <domain>/rest/V1/<store_code>/rest_dev/setDescription")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Payload:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "products":[\n      {\n         "id":2,\n         "description":"Test description"\n      }\n   ]\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"[]")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-backend-create-custom-rest-api-md-ee5a67a35d1b4be2cea8.js.map