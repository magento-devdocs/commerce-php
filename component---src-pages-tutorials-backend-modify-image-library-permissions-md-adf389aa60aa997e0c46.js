"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[83702],{17018:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return s}});var i=a(87462),m=a(45987),t=(a(35776),a(3905)),r=a(91515);const l=["components"],o={},d={_frontmatter:o},p=r.Z;function s(e){let{components:n}=e,a=(0,m.Z)(e,l);return(0,t.mdx)(p,(0,i.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"modify-media-library-folder-permissions"},"Modify media library folder permissions"),(0,t.mdx)("p",null,"The media gallery gives admins the ability to upload image files in specific folders. The Storage class for images in the CMS module manages image file uploads, file retrievals, and directory creation."),(0,t.mdx)("p",null,"Due to code changes, how you extend your media gallery depends on your version of Adobe Commerce or Magento Open Source:"),(0,t.mdx)("p",null,"Once you've listed both product names, you can call the product ",(0,t.mdx)("inlineCode",{parentName:"p"},"Commerce"),"."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Commerce versions ",(0,t.mdx)("inlineCode",{parentName:"li"},"2.4.3-p1")," and later"),(0,t.mdx)("li",{parentName:"ul"},"Commerce versions ",(0,t.mdx)("inlineCode",{parentName:"li"},"2.4.0-2.4.3"))),(0,t.mdx)("h2",{id:"commerce-versions-243-p1-and-higher"},"Commerce versions 2.4.3-p1 and higher"),(0,t.mdx)("p",null,"In versions 2.4.3-p1 and higher, you must modify media library folder permissions in a 'config.xml' file."),(0,t.mdx)("p",null,"For security purposes, Commerce provides media gallery access to contents in specific folders. The configuration path ",(0,t.mdx)("inlineCode",{parentName:"p"},"system/media_storage_configuration/allowed_resources/media_gallery_image_folders")," in ",(0,t.mdx)("inlineCode",{parentName:"p"},"config.xml"),' defines the "Media Gallery Allowed" folders.'),(0,t.mdx)("p",null,"By default, Commerce allows the media gallery access to the following two directories under ",(0,t.mdx)("inlineCode",{parentName:"p"},"/pub/media"),":"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"catalog/category")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"wysiwyg"))),(0,t.mdx)("p",null,'In this tutorial, you will learn how to extend "Media Gallery Allowed" folders using the ',(0,t.mdx)("inlineCode",{parentName:"p"},"config.xml")," file."),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Create a ",(0,t.mdx)("inlineCode",{parentName:"p"},"config.xml")," file."),(0,t.mdx)("p",{parentName:"li"},"If your module does not have one, create a ",(0,t.mdx)("inlineCode",{parentName:"p"},"config.xml")," file under the ",(0,t.mdx)("inlineCode",{parentName:"p"},"etc")," directory.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},'Add a new "Media Gallery Allowed" folder:'),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">\n   <default>   \n      <system>\n         <media_storage_configuration>\n            <allowed_resources>\n               <media_gallery_image_folders>\n                  \x3c!-- new "Media Gallery Allowed" folders --\x3e\n                  <my_image_folder>custom_folder_name</my_image_folder>\n                  <my_catalog_image_folder>catalog/custom_folder_name</my_catalog_image_folder>\n               </media_gallery_image_folders>\n            </allowed_resources>\n         </media_storage_configuration>\n      </system>\n   </default>\n</config>\n')))),(0,t.mdx)("h2",{id:"commerce-versions-240---243"},"Commerce versions 2.4.0 - 2.4.3"),(0,t.mdx)("p",null,"In versions 2.4.0 - 2.4.3, you must modify media library folder permissions in a ",(0,t.mdx)("inlineCode",{parentName:"p"},"di.xml")," file. If you subsequently upgrade to version 2.4.3-p1 or higher, you must implement the ",(0,t.mdx)("inlineCode",{parentName:"p"},"config.xml")," method."),(0,t.mdx)("p",null,"For security purposes, Commerce does not provide Media Library access to contents in specific folders. This configuration is set in the CMS module's ",(0,t.mdx)("inlineCode",{parentName:"p"},"di.xml")," file and injected into the ",(0,t.mdx)("inlineCode",{parentName:"p"},"Storage")," class constructor."),(0,t.mdx)("p",null,"By default, Commerce allows Media Library access to all directories under ",(0,t.mdx)("inlineCode",{parentName:"p"},"/pub/media")," except the following:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"captcha")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"catalog/product")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"customer")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"downloadable")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"import")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"theme")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"theme_customization")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"tmp"))),(0,t.mdx)("p",null,"In this tutorial, you will learn how to specify Media Library view permissions for folders using the ",(0,t.mdx)("inlineCode",{parentName:"p"},"di.xml")," file."),(0,t.mdx)("h3",{id:"step-1-create-a-dixml-file"},"Step 1: Create a ",(0,t.mdx)("inlineCode",{parentName:"h3"},"di.xml")," file"),(0,t.mdx)("p",null,"If your module does not have one, create a ",(0,t.mdx)("a",{parentName:"p",href:"../../development/build/dependency-injection-file.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"di.xml"))," file under the ",(0,t.mdx)("inlineCode",{parentName:"p"},"etc")," directory."),(0,t.mdx)("h3",{id:"step-2-specify-the-class-type-configuration"},"Step 2: Specify the class type configuration"),(0,t.mdx)("p",null,"To work with the constructor arguments for the ",(0,t.mdx)("inlineCode",{parentName:"p"},"Storage")," class, create a new ",(0,t.mdx)("inlineCode",{parentName:"p"},"type")," element with the ",(0,t.mdx)("inlineCode",{parentName:"p"},"name")," property set to ",(0,t.mdx)("inlineCode",{parentName:"p"},"Magento\\Cms\\Model\\Wysiwyg\\Images\\Storage")," in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"di.xml")," file."),(0,t.mdx)("p",null,"Under the ",(0,t.mdx)("inlineCode",{parentName:"p"},"type")," element, create an ",(0,t.mdx)("inlineCode",{parentName:"p"},"arguments")," element."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Cms\\Model\\Wysiwyg\\Images\\Storage">\n    <arguments>\n    </arguments>\n</type>\n')),(0,t.mdx)("h2",{id:"step-3-specify-an-argument-name"},"Step 3: Specify an argument name"),(0,t.mdx)("p",null,"To change the content of the ",(0,t.mdx)("inlineCode",{parentName:"p"},"dirs")," argument provided to the constructor, create a new ",(0,t.mdx)("inlineCode",{parentName:"p"},"argument")," array element with the name ",(0,t.mdx)("inlineCode",{parentName:"p"},"dirs")," under ",(0,t.mdx)("inlineCode",{parentName:"p"},"arguments"),"."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Cms\\Model\\Wysiwyg\\Images\\Storage">\n    <arguments>\n        <argument name="dirs" xsi:type="array">\n        </argument>\n    </arguments>\n</type>\n')),(0,t.mdx)("h3",{id:"step-4-specify-the-directory-to-exclude-or-include"},"Step 4: Specify the directory to exclude or include"),(0,t.mdx)("p",null,"Add entries to the ",(0,t.mdx)("inlineCode",{parentName:"p"},"exclude")," array to extend the list of view-restricted directories."),(0,t.mdx)("p",null,"The following configuration restricts Media Library access to content under ",(0,t.mdx)("inlineCode",{parentName:"p"},"pub/media/private-directory/"),":"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Cms\\Model\\Wysiwyg\\Images\\Storage">\n    <arguments>\n        <argument name="dirs" xsi:type="array">\n            <item name="exclude" xsi:type="array">\n                <item name="private-directory" xsi:type="array">\n                    <item name="regexp" xsi:type="boolean">true</item>\n                    <item name="name" xsi:type="string">pub[/\\\\]+media[/\\\\]+private-directory[/\\\\]*$</item>\n                </item>\n            </item>\n        </argument>\n    </arguments>\n</type>\n')),(0,t.mdx)("p",null,"Add entries to the ",(0,t.mdx)("inlineCode",{parentName:"p"},"include")," array to override directory restrictions."),(0,t.mdx)("p",null,"The following configuration overrides the default directory restriction for the ",(0,t.mdx)("inlineCode",{parentName:"p"},"pub/media/downloadable/")," directory:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Cms\\Model\\Wysiwyg\\Images\\Storage">\n    <arguments>\n        <argument name="dirs" xsi:type="array">\n            <item name="include" xsi:type="array">\n                <item name="downloadable" xsi:type="array">\n                    <item name="regexp" xsi:type="boolean">true</item>\n                    <item name="name" xsi:type="string">pub[/\\\\]+media[/\\\\]+downloadable[/\\\\]*$</item>\n                </item>\n            </item>\n        </argument>\n    </arguments>\n</type>\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-backend-modify-image-library-permissions-md-adf389aa60aa997e0c46.js.map