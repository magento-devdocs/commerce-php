"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[19402],{28852:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return _}});var n=t(58168),i=t(80045),r=(t(88763),t(15680)),l=t(83407);const o=["components"],m={},d=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var p;const g={_frontmatter:m},c=l.A;function _(e){let{components:a}=e,t=(0,i.A)(e,o);return(0,r.mdx)(c,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"magento_catalog"},"Magento_Catalog"),(0,r.mdx)("p",null,"Magento_Catalog module functionality is represented by the following sub-systems:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Products Management. It includes CRUD operation of product, product media, product attributes, etc..."),(0,r.mdx)("li",{parentName:"ul"},"Category Management. It includes CRUD operation of category, category attributes")),(0,r.mdx)("p",null,"Catalog module provides mechanism for creating new product type in the system.\nCatalog module provides API filtering that allows to limit product selection with advanced filters."),(0,r.mdx)("h2",{id:"structure"},"Structure"),(0,r.mdx)("p",null,"  ","[Learn about a typical file structure for a Magento 2 module]","\n(",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/component-file-structure/"},"https://developer.adobe.com/commerce/php/development/build/component-file-structure/"),")."),(0,r.mdx)("h2",{id:"observer"},"Observer"),(0,r.mdx)("p",null,"This module observes the following events:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"etc/events.xml"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_productinterface_save_before")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\BeforeEntitySave")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_productinterface_save_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\AfterEntitySave")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_productinterface_delete_before")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\BeforeEntityDelete")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_productinterface_delete_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\AfterEntityDelete")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_productinterface_load_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\AfterEntityLoad")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categoryinterface_save_before")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\BeforeEntitySave")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categoryinterface_save_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\AfterEntitySave")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categoryinterface_save_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\InvalidateCacheOnCategoryDesignChange")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categoryinterface_delete_before")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\BeforeEntityDelete")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categoryinterface_delete_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\AfterEntityDelete")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categoryinterface_load_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\AfterEntityLoad")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categorytreeinterface_save_before")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\BeforeEntitySave")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categorytreeinterface_save_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\AfterEntitySave")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categorytreeinterface_delete_before")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\BeforeEntityDelete")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categorytreeinterface_delete_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\AfterEntityDelete")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"magento_catalog_api_data_categorytreeinterface_load_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\EntityManager\\Observer\\AfterEntityLoad")," file.\n",(0,r.mdx)("inlineCode",{parentName:"li"},"admin_system_config_changed_section_catalog")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\SwitchPriceAttributeScopeOnConfigChange")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"catalog_product_save_before")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\SetSpecialPriceStartDate")," file.\n",(0,r.mdx)("inlineCode",{parentName:"li"},"store_save_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\SynchronizeWebsiteAttributesOnStoreChange")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"catalog_product_save_commit_after")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\ImageResizeAfterProductSave")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"catalog_category_prepare_save")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\CategoryDesignAuthorization")," file."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"/etc/frontend/events.xml"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"customer_login")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\Compare\\BindCustomerLoginObserver")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"customer_logout")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\Compare\\BindCustomerLogoutObserver")," file."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"/etc/adminhtml/events.xml"),(0,r.mdx)("inlineCode",{parentName:"li"},"cms_wysiwyg_images_static_urls_allowed")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\CatalogCheckIsUsingStaticUrlsAllowedObserver")," file.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"catalog_category_change_products")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\CategoryProductIndexer")," file."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"category_move")," event in\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Observer\\FlushCategoryPagesCache"))))),(0,r.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),"The version of this module is 104.0.7.")}_.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-catalog-md-51c3a9441b98a23d6b9b.js.map