"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[30421],{53823:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return u}});var n=a(87462),r=a(45987),o=(a(35776),a(3905)),i=a(91515);const l=["components"],d={},m=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var p;const s={_frontmatter:d},c=i.Z;function u(e){let{components:t}=e,a=(0,r.Z)(e,l);return(0,o.mdx)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"indexer-optimization"},"Indexer optimization"),(0,o.mdx)("p",null,"Use batching and table switching to optimize the performance of indexers."),(0,o.mdx)("h2",{id:"indexer-batching"},"Indexer batching"),(0,o.mdx)("p",null,"Adobe Commerce and Magento Open Source can increase the memory for processing a large amount of data by using memory engines instead of InnoDB. The algorithm increases the memory value for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"max_heap_table_size")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"tmp_table_size")," MySQL parameters."),(0,o.mdx)("p",null,"The interface ",(0,o.mdx)("inlineCode",{parentName:"p"},"BatchSizeManagementInterface")," provides the ability to set the MEMORY table size for indexer processes according to batch size and index row size."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"namespace Magento\\Framework\\Indexer;\n\nuse Magento\\Framework\\DB\\Adapter\\AdapterInterface;\n\n/**\n * Batch size manager can be used to ensure that MEMORY table has enough memory for data in batch.\n * @api\n */\ninterface BatchSizeManagementInterface\n{\n    /**\n     * Ensure memory size for data in batch.\n     *\n     * @param AdapterInterface $adapter database adapter.\n     * @param int $batchSize\n     * @return void\n     */\n    public function ensureBatchSize(\\Magento\\Framework\\DB\\Adapter\\AdapterInterface $adapter, $batchSize);\n}\n")),(0,o.mdx)("p",null,"The interface ",(0,o.mdx)("inlineCode",{parentName:"p"},"IndexTableRowSizeEstimatorInterface")," calculates the memory size for all rows per entity in the index table. The entity can store several rows in an index table generated by different store dimensions, such as count of websites and customer groups."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"namespace Magento\\Framework\\Indexer;\n\n/**\n * Calculate memory size for entity according different dimensions.\n * @api\n */\ninterface IndexTableRowSizeEstimatorInterface\n{\n    /**\n     * Calculate memory size for entity row.\n     *\n     * @return float\n     */\n    public function estimateRowSize();\n}\n")),(0,o.mdx)("h3",{id:"exceeding-allocated-memory-size"},"Exceeding allocated memory size"),(0,o.mdx)("p",null,"When the allocated memory size for a temporary table will be greater than 20% of ",(0,o.mdx)("inlineCode",{parentName:"p"},"innodb_buffer_pool_size"),", the following message is written to the log."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Memory size allocated for the temporary table is more than 20% of innodb_buffer_pool_size.")),(0,o.mdx)("p",null,"To prevent this error message, update ",(0,o.mdx)("inlineCode",{parentName:"p"},"innodb_buffer_pool_size")," or decrease the batch size value (which decreases memory usage for the temporary table)."),(0,o.mdx)("h2",{id:"batching-configuration"},"Batching configuration"),(0,o.mdx)("p",null,"Batching is available for the following indexers:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Index name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Configured object"),(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Default value"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"catalog_product_price (Product Price)"),(0,o.mdx)("td",{parentName:"tr",align:null},"Magento\\Catalog\\Model\\",(0,o.mdx)("br",null),"ResourceModel\\Product\\Indexer\\Price\\BatchSizeCalculator"),(0,o.mdx)("td",{parentName:"tr",align:null},"batchRowsCount","['default']"),(0,o.mdx)("td",{parentName:"tr",align:null},"5000")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"cataloginventory_stock (Stock)"),(0,o.mdx)("td",{parentName:"tr",align:null},"Magento\\CatalogInventory\\Model\\",(0,o.mdx)("br",null),"Indexer\\Stock\\Action\\Full"),(0,o.mdx)("td",{parentName:"tr",align:null},"batchRowsCount","['default']"),(0,o.mdx)("td",{parentName:"tr",align:null},"200")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"catalog_category_product (Category Products)"),(0,o.mdx)("td",{parentName:"tr",align:null},"Magento\\Catalog\\Model\\",(0,o.mdx)("br",null),"Indexer\\Category\\Product\\Action\\Full"),(0,o.mdx)("td",{parentName:"tr",align:null},"batchRowsCount"),(0,o.mdx)("td",{parentName:"tr",align:null},"100000")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"catalog_product_attribute (Product Attribute)"),(0,o.mdx)("td",{parentName:"tr",align:null},"Magento\\Catalog\\Model\\",(0,o.mdx)("br",null),"ResourceModel\\Product\\Indexer\\Eav\\BatchSizeCalculator"),(0,o.mdx)("td",{parentName:"tr",align:null},"batchSizes","['decimal']",", batchSizes","['source']"),(0,o.mdx)("td",{parentName:"tr",align:null},"1000, 1000")))),(0,o.mdx)("p",null,"Changing the batch size can help you optimize indexer running time. For example, for a store with the following characteristics:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"10 websites"),(0,o.mdx)("li",{parentName:"ul"},"10 store groups"),(0,o.mdx)("li",{parentName:"ul"},"20 store views"),(0,o.mdx)("li",{parentName:"ul"},"300 tier prices"),(0,o.mdx)("li",{parentName:"ul"},"About 40,000 products (of which 254 are configurable)")),(0,o.mdx)("p",null,"Reducing the batch size for ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalog_product_price")," indexer from 5000 to 1000 decreases the execution time from about 4 hours to less than 2 hours. You can experiment to determine the ideal batch size. In general, halving the batch size can decrease the indexer execution time."),(0,o.mdx)("p",null,"The following examples illustrate how to define a custom batch size for configurable products. Add these samples to your  ",(0,o.mdx)("inlineCode",{parentName:"p"},"{Your_Module_Name}/etc/di.xml"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'....\n<type name="Magento\\Catalog\\Model\\ResourceModel\\Product\\Indexer\\Price\\BatchSizeCalculator">\n    <arguments>\n        <argument name="batchRowsCount" xsi:type="array">\n            <item name="configurable" xsi:type="number">5000</item>\n        </argument>\n    </arguments>\n</type>\n...\n')),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\CatalogInventory\\Model\\Indexer\\Stock\\Action\\Full">\n    <arguments>\n        <argument name="batchRowsCount" xsi:type="array">\n            <item name="configurable" xsi:type="number">200</item>\n        </argument>\n    </arguments>\n</type>\n')),(0,o.mdx)("h3",{id:"setting-batch-size-with-environment-variables"},"Setting batch size with environment variables"),(0,o.mdx)("p",null,"As of Adobe Commerce and Magento Open Source 2.4.3, it is possible to configure the batch size with environment variables, or in ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/etc/env.php"),", for the following indexers:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"cataloginventory_stock")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"catalog_category_product")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"catalogsearch_fulltext")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"catalog_product_price")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"catalogpermissions_category")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"inventory"))),(0,o.mdx)("p",null,"Here is an example of the configuration in ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/etc/env.php")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nreturn [\n    'indexer' => [\n        'batch_size' => [\n            'cataloginventory_stock' => [\n                'simple' => 200\n            ],\n            'catalog_category_product' => 666,\n            'catalogsearch_fulltext' => [\n                'partial_reindex' => 100,\n                'mysql_get' => 500,\n                'elastic_save' => 500\n            ],\n            'catalog_product_price' => [\n                'simple' => 200,\n                'default' => 500,\n                'configurable' => 666\n            ],\n            'catalogpermissions_category' => 999,\n            'inventory' => [\n                'simple' => 210,\n                'default' => 510,\n                'configurable' => 616\n            ]\n        ]\n    ]\n];\n")),(0,o.mdx)("p",null,"The batches size for ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalog_category_product"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalogpermissions_category"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalogpermissions_category")," will be set for all product types."),(0,o.mdx)("p",null,"Batch size for ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalogsearch_fulltext")," can be set using different parameters."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"partial_reindex")," - represents how many products will be processed in a partial reindex."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"elastic_save")," - represents how many products will be saved as a batch into Elasticsearch."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"mysql_get")," - represents how many searchable products will be retrieved from Mysql.")),(0,o.mdx)("p",null,"Batch size for ",(0,o.mdx)("inlineCode",{parentName:"p"},"cataloginventory_stock"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalog_product_price"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"inventory")," can be set up for each product type. If no batch size is set for a specific product type, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"default")," value is used. We recommend setting the ",(0,o.mdx)("inlineCode",{parentName:"p"},"default")," value for each indexer to allow for different batch sizes per product type."),(0,o.mdx)("h2",{id:"indexer-table-switching"},"Indexer table switching"),(0,o.mdx)("p",null,"Adobe Commerce and Magento Open Source optimize certain indexer processes to prevent deadlocks and wait locks caused by read/write collisions on the same table. In these cases, the application uses separate tables for performing read operations and reindexing. As a result of this table switching process, customers are not impacted when you run a full reindex. For example, when ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalog_product_price")," is reindexing, customers won't be slowed down as they navigate on Categories pages, search products, or user layer navigation filters with price filters."),(0,o.mdx)("p",null,"The application uses the following tables to support table switching."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Indexer name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Tables used"),(0,o.mdx)("th",{parentName:"tr",align:null}))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_product_price")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_product_index_price"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_product_index_price_replica")),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"cataloginventory_stock")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"cataloginventory_stock_status"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"cataloginventory_stock_status_replica")),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_category_product")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_category_product_index"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_category_product_index_replica")),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_product_attribute")," (select, multiselect attributes)"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_product_index_eav"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_product_index_eav_replica")),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_product_attribute")," (decimal values)"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_product_index_eav_decimal"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"catalog_product_index_eav_decimal_replica")),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"catalogrule_rule")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"catalogrule_product"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"catalogrule_product_replica"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"catalogrule_product_price"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"catalogrule_product_price_replica"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"catalogrule_group_website"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"catalogrule_group_website_replica")),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("p",null,'Make sure that these indexers are in "Update By Schedule" mode. If "Update On Save" mode is selected, some data can be lost if you make changes during full reindex.'),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The indexer table switching mechanism requires additional database storage."),(0,o.mdx)("h3",{id:"eav-indexer-optimization"},"EAV indexer optimization"),(0,o.mdx)("p",null,"The Product EAV indexer reorganizes the EAV product structure to a flat structure.\nAs of Adobe Commerce and Magento Open Source 2.3, under certain circumstances, you can disable this indexer to improve performance. (Its indexation takes about 5 minutes on a large Commerce performance profile.)"),(0,o.mdx)("p",null,"You cannot disable the Product EAV indexer if you have installed any 3rd-party extensions that rely on the Product EAV indexer."),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"To determine whether any 3rd-party extensions are using the Product EAV indexer, check the ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalog_product_index_eav")," table for reading/writing activity."),(0,o.mdx)("p",null,"To disable the Product EAV indexer in the Admin, go to ",(0,o.mdx)("strong",{parentName:"p"},"Stores")," > Settings > ",(0,o.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,o.mdx)("strong",{parentName:"p"},"Catalog")," > ",(0,o.mdx)("strong",{parentName:"p"},"Catalog")," > ",(0,o.mdx)("strong",{parentName:"p"},"Catalog Search")," and set the value of ",(0,o.mdx)("strong",{parentName:"p"},"Enable EAV Indexer")," to No."),(0,o.mdx)("h2",{id:"customer-group-limitations-by-websites"},"Customer group limitations by websites"),(0,o.mdx)("p",null,"By default, all websites are assigned to a customer group. If there are a large number of products, websites, customer groups, and B2B shared catalogs, the execution time of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Product Price")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Catalog Rule")," indexers may be quite long. This is because each website, customer group, shared catalog, and product SKU must all be indexed against each other in the product price and catalog rule indexer-related tables."),(0,o.mdx)("p",null,"You can exclude websites from a customer group or shared catalog on the ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/customers/customer-groups.html#create-a-customer-group"},"Customer Groups page"),". Excluding websites can decrease ",(0,o.mdx)("inlineCode",{parentName:"p"},"Product Price")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Catalog Rule")," indexing time, because excluded websites are not indexed."),(0,o.mdx)("p",null,"When a customer group with a new, excluded website is saved, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Product Price"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"Catalog Rule")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Catalog Search")," indexes are invalidated. If you have a large number of products, websites, and customer groups, we recommended you pause the reindex process until you have excluded websites from the customer groups."),(0,o.mdx)("p",null,"You cannot exclude websites from a shared catalog on a shared catalog create/edit page. However, you can exclude websites from a customer group that is created from a shared catalog."),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"By default, no websites are excluded from a customer group or shared catalog.\nYou cannot exclude websites from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"NOT LOGGED IN")," customer group."),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"When a website is added to the excluded customer group and a customer who belongs to this group is trying to login to their account on the excluded website, the customer gets the ",(0,o.mdx)("inlineCode",{parentName:"p"},'"This website is excluded from customer\'s group."')," warning.\nCustomers are not allowed to login to the website even if ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/customers/account-scope.html"},"the scope of customer accounts is shared with all websites"),", because there are no prices in the index table for this user."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-indexing-optimization-md-0952fac02292f966b5cc.js.map