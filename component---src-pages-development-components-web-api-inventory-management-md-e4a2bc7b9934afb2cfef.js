"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[3157],{3477:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return c}});var n=a(87462),r=a(45987),o=(a(35776),a(3905)),m=a(91515);const i=["components"],d={},l={_frontmatter:d},p=m.Z;function c(e){let{components:t}=e,a=(0,r.Z)(e,i);return(0,o.mdx)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"inventory-management-api-reference"},"Inventory Management API reference"),(0,o.mdx)("p",null,"Inventory Management provides new modules, interfaces, and classes to manage inventory quantities, sources, stocks, etc. This reference details deprecated modules and new services available for managing inventory for single and multi source merchants."),(0,o.mdx)("h2",{id:"deprecated-modules"},"Deprecated modules"),(0,o.mdx)("p",null,"Inventory Management deprecates ",(0,o.mdx)("inlineCode",{parentName:"p"},"ScalableInventory")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"CatalogInventory")," modules."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"ScalableInventory")," module is part of Adobe Commerce. Its original purpose was to perform inventory processing asynchronously, moving the computation of quantities to a worker that processed the calculations later. This functionality was limited in that the asynchronous processing could be performed on backordered products only."),(0,o.mdx)("p",null,"Inventory Management creates reservations for all orders, not just those on backorder. All quantities are calculated asynchronously."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"CatalogInventory")," module is part of Magento Open Source. Its original purpose was to retrieve and update stock attributes, including status, quantity, and backorders. Inventory Management architecture replaces and expands these capabilities to support multiple stocks and sources, salable quantities, stock quantities, etc."),(0,o.mdx)("p",null,"The following interfaces and classes have been deprecated. They cannot be mapped to new interfaces. The Inventory Management architecture eliminates the need for this functionality."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"ScalableInventory")," interfaces:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ItemInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ItemsInterface"))),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"CatalogInventory")," interfaces:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"QueryProcessorInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"RegisterProductSaleInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"RevertProductSaleInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockCollectionInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockConfigurationInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockCriteriaInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockIndexInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockInterface")," (indexer)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockItemCollectionInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockItemCriteriaInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockItemInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockItemRepositoryInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockManagementInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockRegistryInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockRepositoryInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockStateInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockStatusCollectionInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockStatusCriteriaInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockStatusInterface")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockStatusRepositoryInterface"))),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"CatalogInventory")," classes:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Backorders")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"DefaultStock")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"DefaultStockqty")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Item")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Minsaleqty")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Qtyincrements")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"QuantityValidator")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Status")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Stock")," (Helper)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Stock")," (model/source)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Stock")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"StockFactory"))),(0,o.mdx)("h2",{id:"inventory-management-api"},"Inventory Management API"),(0,o.mdx)("p",null,"The following services reside under the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryApi/Api"},(0,o.mdx)("inlineCode",{parentName:"a"},"Magento/InventoryApi/Api"))," namespace, replacing deprecated services and APIs."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Service"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Deprecated API"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryApi/Api/SourceRepositoryInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"SourceRepositoryInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Retrieves, saves or finds (",(0,o.mdx)("inlineCode",{parentName:"td"},"getList")," method) Source entities"),(0,o.mdx)("td",{parentName:"tr",align:null},"-")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryApi/Api/StockRepositoryInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockRepositoryInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Retrieves, saves, finds (",(0,o.mdx)("inlineCode",{parentName:"td"},"getList")," method) or deletes Stock entities)"),(0,o.mdx)("td",{parentName:"tr",align:null},"-")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryApi/Api/StockSourceLinksSaveInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockSourceLinksSaveInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Saves sources to stocks assignments"),(0,o.mdx)("td",{parentName:"tr",align:null},"-")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryApi/Api/StockSourceLinksDeleteInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockSourceLinksDeleteInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Removes sources to stocks assignments"),(0,o.mdx)("td",{parentName:"tr",align:null},"-")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryApi/Api/GetStockSourceLinksInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"GetStockSourceLinksInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Retrieves source to stock links according to provided ",(0,o.mdx)("inlineCode",{parentName:"td"},"SearchCriteria")),(0,o.mdx)("td",{parentName:"tr",align:null},"-")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryApi/Api/GetSourcesAssignedToStockOrderedByPriorityInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"GetSourcesAssignedToStockOrderedByPriorityInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Retrieves sources assigned to provided stock sorted by priority"),(0,o.mdx)("td",{parentName:"tr",align:null},"-")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryApi/Api/SourceItemRepositoryInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"SourceItemRepositoryInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Finds ",(0,o.mdx)("inlineCode",{parentName:"td"},"SourceItems")," (products assigned to sources with Quantity per Source) by provided ",(0,o.mdx)("inlineCode",{parentName:"td"},"SearchCriteria")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L41"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockItemRepositoryInterface::getList")))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryApi/Api/SourceItemsSaveInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"SourceItemsSaveInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Saves ",(0,o.mdx)("inlineCode",{parentName:"td"},"SourceItems")," (quantites and stock statuses of products on sources)"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L25"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockItemRepositoryInterface::save")))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryApi/Api/SourceItemsDeleteInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"SourceItemsDeleteInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Deletes ",(0,o.mdx)("inlineCode",{parentName:"td"},"SourceItems")," (quantites and stock statuses of products on sources)"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L49"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockItemRepositoryInterface::delete"))," or ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L55"},(0,o.mdx)("inlineCode",{parentName:"a"},"deleteById")))))),(0,o.mdx)("h2",{id:"inventory-catalog-api"},"Inventory Catalog API"),(0,o.mdx)("p",null,"The following services reside under the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryCatalogApi/Api"},(0,o.mdx)("inlineCode",{parentName:"a"},"Magento/InventoryCatalogApi/Api"))," namespace."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Service"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryCatalogApi/Api/DefaultSourceProviderInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"DefaultSourceProviderInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Retrieves Default Source code")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryCatalogApi/Api/DefaultStockProviderInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"DefaultStockProviderInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Retrieves Default Stock id")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryCatalogApi/Api/BulkInventoryTransferInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"BulkInventoryTransferInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/commerce/webapi/rest/modules/inventory/bulk-inventory.html"},"Bulk transfers")," the whole quantity of products from origin to destination source")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryCatalogApi/Api/BulkPartialInventoryTransferInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"BulkPartialInventoryTransferInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Runs ",(0,o.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/commerce/webapi/rest/modules/inventory/bulk-inventory.html#bulk-partial-transfer"},"bulk partial inventory transfer")," for specified items")))),(0,o.mdx)("h2",{id:"inventory-sales-api"},"Inventory Sales API"),(0,o.mdx)("p",null,"The following services reside under the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySalesApi/Api"},(0,o.mdx)("inlineCode",{parentName:"a"},"Magento/InventorySalesApi/Api"))," namespace, replacing deprecated services and APIs."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Service"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Deprecated API"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySalesApi/Api/StockResolverInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockResolverInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Resolves linked Stock by provided sales channel type and code"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L23"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockRegistryInterface::getStock")))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySalesApi/Api/GetStockBySalesChannelInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"GetStockBySalesChannelInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Resolves linked stock to provided sales channel object"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L23"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockRegistryInterface::getStock")))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySalesApi/Api/IsProductSalableInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"IsProductSalableInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Checks whether product salable"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L62"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockRegistryInterface::getProductStockStatus"))," ",(0,o.mdx)("br",null)," ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L70"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockRegistryInterface::getProductStockStatusBySku"))," ",(0,o.mdx)("br",null)," ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L53"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockRegistryInterface::getStockStatusBySku")))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySalesApi/Api/AreProductsSalableInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"AreProductsSalableInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Checks whether products in the list are salable"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L62"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockRegistryInterface::getProductStockStatus"))," ",(0,o.mdx)("br",null)," ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L70"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockRegistryInterface::getProductStockStatusBySku"))," ",(0,o.mdx)("br",null)," ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L53"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockRegistryInterface::getStockStatusBySku")))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySalesApi/Api/IsProductSalableForRequestedQtyInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"IsProductSalableForRequestedQtyInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Checks if the product is salable for the requested quantity (used for shopping cart and checkout)"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockStateInterface.php#L41"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockStateInterface::checkQuoteItemQty"))," ",(0,o.mdx)("br",null)," ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockStateInterface.php#L52"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockStateInterface::checkQty")))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySalesApi/Api/GetProductSalableQtyInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"GetProductSalableQtyInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Gets product salable quantity (aggregated stock quantity including reservations)"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockStateInterface.php#L72"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockStateInterface::getStockQty"))," or just retrieve ",(0,o.mdx)("inlineCode",{parentName:"td"},"Qty")," from ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/Data/StockStatusInterface.php#L65"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockStatus"))," entity")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySalesApi/Api/PlaceReservationsForSalesEventInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"PlaceReservationsForSalesEventInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Places reservation in the scope some sales event (such as order placement, shipment creation, credit memo creation, order cancelation, etc)"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/RegisterProductSaleInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"RegisterProductSaleInterface"))," ",(0,o.mdx)("br",null)," ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/RevertProductSaleInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"RevertProductSaleInterface")))))),(0,o.mdx)("h2",{id:"inventory-configuration-api"},"Inventory Configuration API"),(0,o.mdx)("p",null,"The following services reside under the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryConfigurationApi/Api"},(0,o.mdx)("inlineCode",{parentName:"a"},"Magento/InventoryConfigurationApi/Api"))," namespace, replacing deprecated services and APIs."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Service"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Deprecated API"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryConfigurationApi/Api/GetStockItemConfigurationInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"GetStockItemConfigurationInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Retrieves stock item configuration by SKU and stock id"),(0,o.mdx)("td",{parentName:"tr",align:null},"Catalog inventory configuration stored in ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/Data/StockItemInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockItem"))," entity")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryConfigurationApi/Api/SaveStockItemConfigurationInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"SaveStockItemConfigurationInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Saves stock item configuration"),(0,o.mdx)("td",{parentName:"tr",align:null},"Stock configuration saved using ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L25"},(0,o.mdx)("inlineCode",{parentName:"a"},"StockItemRepositoryInterface::save")))))),(0,o.mdx)("h2",{id:"inventory-source-selection-algorithm-ssa-api"},"Inventory Source Selection Algorithm (SSA) API"),(0,o.mdx)("p",null,"The following services reside under the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySourceSelectionApi/Api"},(0,o.mdx)("inlineCode",{parentName:"a"},"Magento/InventorySourceSelectionApi/Api"))," namespace."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Service"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySourceSelectionApi/Api/GetDefaultSourceSelectionAlgorithmCodeInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"GetDefaultSourceSelectionAlgorithmCodeInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Gets the default Source Selection Algorithm (SSA) code")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySourceSelectionApi/Api/GetSourceSelectionAlgorithmListInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"GetSourceSelectionAlgorithmListInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Gets the entire Source Selection Algorithm (SSA) list")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventorySourceSelectionApi/Api/SourceSelectionServiceInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"SourceSelectionServiceInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Runs a specified Source Selection Algorithm (SSA) based on provided Inventory Request object")))),(0,o.mdx)("h2",{id:"inventory-export-aggregated-stock-data-api"},"Inventory Export Aggregated Stock Data API"),(0,o.mdx)("p",null,"The following services reside under the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryExportStockApi/Api"},(0,o.mdx)("inlineCode",{parentName:"a"},"Magento/InventoryExportStockApi/Api"))," namespace."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Service"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryExportStockApi/Api/ExportStockIndexDataInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"ExportStockIndexDataInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Returns salable quantities for a provided sales channel not including placed reservations for completed orders. The quantity amount is less precise and runs with high performance and speed.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/magento/inventory/blob/1.2.4/InventoryExportStockApi/Api/ExportStockSalableQtyInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"ExportStockSalableQtyInterface"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Returns salable quantities for a provided sales channel including placed reservations (for completed orders). The quantity amount is precise and runs with reduced performance and slower speed.")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-web-api-inventory-management-md-e4a2bc7b9934afb2cfef.js.map