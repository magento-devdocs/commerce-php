"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[5301],{58017:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return u}});var n=t(87462),i=t(63366),m=(t(15007),t(64983)),l=t(91515),d=["components"],o={},p={_frontmatter:o},r=l.Z;function u(e){var a=e.components,t=(0,i.Z)(e,d);return(0,m.mdx)(r,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"magento_quote-module"},"Magento_Quote module"),(0,m.mdx)("p",null,"This module provides customer cart management functionality."),(0,m.mdx)("h2",{id:"installation"},"Installation"),(0,m.mdx)("p",null,"The Magento_Quote module is one of the base Magento 2 modules. You cannot disable or uninstall this module."),(0,m.mdx)("p",null,"The Magento_Quote module creates the following table in the database:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_address")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_item")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_address_item")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_item_option")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_payment")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_shipping_rate")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_id_mask"))),(0,m.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html"},"Enable or disable modules"),"."),(0,m.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,m.mdx)("p",null,"Extension developers can interact with the Magento_Quote module. For more information about the Magento extension mechanism, see ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/plugins.html"},"Magento plug-ins"),"."),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/depend-inj.html"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_Quote module."),(0,m.mdx)("h3",{id:"events"},"Events"),(0,m.mdx)("p",null,"The module dispatches the following events:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_address_collection_load_after")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\ResourceModel\\Quote\\Address\\Collection::_afterLoad")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_address_collection")," is a ",(0,m.mdx)("inlineCode",{parentName:"li"},"$this")," object (",(0,m.mdx)("inlineCode",{parentName:"li"},"Magento\\Quote\\Model\\ResourceModel\\Quote\\Address\\Collection")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"items_additional_data")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Cart\\Totals\\ItemConverter::modelToDataObject")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"item")," is a quote_item object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote\\Item")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_remove_item")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote::removeItem")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_item")," is a quote_item object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote\\Item")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_add_item")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote::addItem")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_item")," is a quote_item object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote\\Item")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_product_add_after")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote::addProduct")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"items")," is an array with quot_item objects (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote\\Item")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_merge_before")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote::merge")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a ",(0,m.mdx)("inlineCode",{parentName:"li"},"$this")," object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"source")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_merge_after")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote::merge")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a ",(0,m.mdx)("inlineCode",{parentName:"li"},"$this")," object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"source")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_convert_quote_to_order")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote\\Address\\ToOrder::convert")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"order")," is an order object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Sales\\Model\\Order")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_item_qty_set_after")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote\\Item::setQty")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"item")," is a ",(0,m.mdx)("inlineCode",{parentName:"li"},"$this")," object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote\\Item")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_item_set_product")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote\\Item::setProduct")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"product")," is a product object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Catalog\\Model\\Product")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote_item")," is a ",(0,m.mdx)("inlineCode",{parentName:"li"},"$this")," object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote\\Item")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_payment_import_data_before")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote\\Payment::importData")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"payment")," is a ",(0,m.mdx)("inlineCode",{parentName:"li"},"$this")," object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote\\Payment")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"input")," is a data object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Framework\\DataObject")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_collect_totals_before")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote\\TotalsCollector::collect")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_collect_totals_after")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote\\TotalsCollector::collect")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_address_collect_totals_before")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote\\TotalsCollector::collectAddressTotals")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"shipping_assignment")," is a shipping_assignment object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\ShippingAssignment")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"total")," is a total object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote\\Address\\Total")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_address_collect_totals_after")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote\\TotalsCollector::collectAddressTotals")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"shipping_assignment")," is a shipping_assignment object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\ShippingAssignment")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"total")," is a total object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote\\Address\\Total")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"checkout_submit_before")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\QuoteManagement::placeOrder")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"checkout_submit_all_after")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\QuoteManagement::placeOrder")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"order")," is an order object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Sales\\Model\\Order")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_model_service_quote_submit_before")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\QuoteManagement::submitQuote")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"order")," is an order object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Sales\\Model\\Order")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_model_service_quote_submit_success")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\QuoteManagement::submitQuote")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"order")," is an order object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Sales\\Model\\Order")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_model_service_quote_submit_failure")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\QuoteManagement::rollbackAddresses")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"order")," is an order object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Sales\\Model\\Order")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\Quote")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"exception")," is an exception object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Exception")," class)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"prepare_catalog_product_collection_prices")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\ResourceModel\\Quote\\Item\\Collection::_assignProducts")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"collection")," is a product collection object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Model\\ResourceModel\\Quote\\Item\\Collection")," class)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"store_id")," is a store ID (",(0,m.mdx)("inlineCode",{parentName:"li"},"int")," type)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"sales_quote_item_collection_products_after_load")," event in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\QuoteManagement::_assignProducts")," method. Parameters:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"collection")," is a product collection object (",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Catalog\\Model\\ResourceModel\\Product\\Collection")," class)")))),(0,m.mdx)("p",null,"For information about an event in Magento 2, see ",(0,m.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.4/extension-dev-guide/events-and-observers.html#events"},"Events and observers"),"."),(0,m.mdx)("h3",{id:"public-apis"},"Public APIs"),(0,m.mdx)("h4",{id:"data"},"Data"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\AddressAdditionalDataInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"provides additional data with quote address information"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\AddressInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"quote address data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\CartInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"quote data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\CartItemInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"quote item data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\CartSearchResultsInterfac")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"quote search result data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\CurrencyInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"currency data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\EstimateAddressInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"estimate address data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\PaymentInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"payment data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\PaymentMethodInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"payment method data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\ProductOptionInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"product option data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\ShippingAssignmentInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"shipping assigment data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\ShippingInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"shipping data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\ShippingMethodInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"shipping method data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\TotalsAdditionalDataInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"provides additional data for totals collection"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\TotalSegmentInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"total segment data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\TotalsInterfacee")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"quote totals data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\Data\\TotalsItemInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"quote items totals data")))),(0,m.mdx)("h4",{id:"general"},"General"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Quote\\Api\\ChangeQuoteControlInterface"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"checks if user is allowed to change the quote")))),(0,m.mdx)("h4",{id:"guest"},"Guest"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\GuestBillingAddressManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"assigns a specified billing address to a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"gets the billing address for a specified quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\GuestCartItemRepositoryInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gets lists items that are assigned to a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"add/update the specified cart guest item"),(0,m.mdx)("li",{parentName:"ul"},"removes the specified item from the specified quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\GuestCouponManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gets coupon for a specified quote by quote ID"),(0,m.mdx)("li",{parentName:"ul"},"adds a coupon by code to a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"deletes a coupon from a specified quote by quote ID"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\GuestCartManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gets list items that are assigned to a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"add/update the specified quote item"),(0,m.mdx)("li",{parentName:"ul"},"deletes the specified item from the specified quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\GuestPaymentMethodManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"adds a specified payment method to a specified shopping quote"),(0,m.mdx)("li",{parentName:"ul"},"gets the payment method for a specified shopping quote"),(0,m.mdx)("li",{parentName:"ul"},"gets list available payment methods for a specified shopping quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\GuestShipmentEstimationInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"estimates shipping by address and return list of available shipping methods"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\GuestShippingMethodManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gets list applicable shipping methods for a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"estimates shipping"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\GuestCartRepositoryInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gets quote by quote ID for guest user"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\GuestCartTotalManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"sets shipping/billing methods and additional data for a quote and collect totals for guest"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\GuestCartTotalRepositoryInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gets quote totals by quote ID for guest user"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\GuestCart\\GuestShippingAddressManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"assign a specified shipping address to a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"gets the shipping address for a specified quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\GuestCart\\GuestShippingMethodManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"sets the carrier and shipping methods codes for a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"gets the selected shipping method for a specified quote")))),(0,m.mdx)("h4",{id:"registered-customer"},"Registered customer"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\BillingAddressManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"assigns a specified billing address to a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"gets the billing address for a specified quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\CartItemRepositoryInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gets lists items that are assigned to a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"add/update the specified quote item"),(0,m.mdx)("li",{parentName:"ul"},"removes the specified item from the specified quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\CartManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"creates an empty quote and quote for a guest"),(0,m.mdx)("li",{parentName:"ul"},"creates an empty quote and quote for a specified customer if customer does not have a quote yet"),(0,m.mdx)("li",{parentName:"ul"},"returns information for the quote for a specified customer"),(0,m.mdx)("li",{parentName:"ul"},"assigns a specified customer to a specified shopping quote"),(0,m.mdx)("li",{parentName:"ul"},"places an order for a specified quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\CartRepositoryInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gets quote by quote ID"),(0,m.mdx)("li",{parentName:"ul"},"gets list carts that match specified search criteria"),(0,m.mdx)("li",{parentName:"ul"},"gets quote by customer ID"),(0,m.mdx)("li",{parentName:"ul"},"gets active quote by quote ID"),(0,m.mdx)("li",{parentName:"ul"},"gets active quote by customer ID"),(0,m.mdx)("li",{parentName:"ul"},"saves quote"),(0,m.mdx)("li",{parentName:"ul"},"deletes quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\CartTotalManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"sets shipping/billing methods and additional data for quote and collect totals"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\CartTotalRepositoryInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gets quote totals by quote ID"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\CouponManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"gets coupon for a specified quote by quote ID"),(0,m.mdx)("li",{parentName:"ul"},"adds a coupon by code to a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"deletes a coupon from a specified quote by quote ID"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\PaymentMethodManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"adds a specified payment method to a specified shopping quote"),(0,m.mdx)("li",{parentName:"ul"},"gets the payment method for a specified shopping quote"),(0,m.mdx)("li",{parentName:"ul"},"gets list available payment methods for a specified shopping quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\ShipmentEstimationInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"estimates shipping by address and return list of available shipping methods"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Api\\ShippingMethodManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"estimates shipping by quote ID an Address"),(0,m.mdx)("li",{parentName:"ul"},"estimates shipping by quote ID an address ID"),(0,m.mdx)("li",{parentName:"ul"},"get lists applicable shipping methods for a specified quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\ShippingAddressManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"assigns a specified shipping address to a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"gets the shipping address for a specified quote"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\ShippingMethodManagementInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"sets the carrier and shipping methods codes for a specified quote"),(0,m.mdx)("li",{parentName:"ul"},"gets the selected shipping method for a specified quote")))),(0,m.mdx)("h4",{id:"model"},"Model"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote\\Address\\FreeShippingInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"checks if is a free shipping"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\Quote\\Address\\RateCollectorInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"retrieves all methods for supplied shipping data"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\MaskedQuoteIdToQuoteIdInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"converts masked quote ID to the quote ID (entity ID)"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Quote\\Model\\QuoteIdToMaskedQuoteIdInterface")),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"converts quote ID to the masked quote ID")))),(0,m.mdx)("p",null,"For information about a public API in Magento 2, see ",(0,m.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.4/extension-dev-guide/api-concepts.html"},"Public interfaces & APIs"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-quote-md-504093af5c13240d6dee.js.map