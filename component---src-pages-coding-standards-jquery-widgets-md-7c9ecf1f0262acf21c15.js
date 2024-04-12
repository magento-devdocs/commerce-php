"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[76742],{12439:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return r},default:function(){return s}});var a=t(87462),i=t(45987),d=(t(35776),t(3905)),m=t(91515);const o=["components"],r={},l={_frontmatter:r},p=m.Z;function s(e){let{components:n}=e,t=(0,i.Z)(e,o);return(0,d.mdx)(p,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"jquery-widget-coding-standard"},"jQuery widget coding standard"),(0,d.mdx)("p",null,"All Adobe Commerce and Magento Open Source jQuery UI widgets and interactions are built on a simple, reusable base---the ",(0,d.mdx)("a",{parentName:"p",href:"http://jqueryui.com/widget/"},"jQuery UI Widget Factory"),"."),(0,d.mdx)("p",null,"The factory provides a flexible base for building complex, stateful plug-ins with a consistent API.\nIt is designed not only for plug-ins that are part of jQuery UI, but for general usage by developers who want to create object-oriented components without reinventing common infrastructure."),(0,d.mdx)("p",null,"For more information, see the ",(0,d.mdx)("a",{parentName:"p",href:"http://api.jqueryui.com/jQuery.widget/"},"jQuery Widget API documentation"),"."),(0,d.mdx)("p",null,"This standard is mandatory for core developers and recommended for third-party extension developers.\nSome parts of the code might not comply with the standard, but we are working to gradually improve this."),(0,d.mdx)("p",null,"Use ",(0,d.mdx)("a",{parentName:"p",href:"http://www.ietf.org/rfc/rfc2119.txt"},"RFC 2119"),' to interpret the "must," "must not," "required," "shall," "shall not," "should," "should not," "recommended," "may," and "optional" keywords.'),(0,d.mdx)("h2",{id:"naming-conventions"},"Naming conventions"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Widget names must consist of one or more non-abbreviated English word and in camel case format."),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"(function($) {\n    $.widget('mage.accordion', $.ui.accordion, {\n        // ... My custom code ...\n    });\n"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Widget names should be verbose enough to fully describe their purpose and behavior."),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Declaration of the frontend.advancedEventTrigger widget\n(function($) {\n    \"use strict\";\n\n    $.widget('mage.advancedEventTrigger', $.ui.button, {\n        // ... My custom code ...\n    });\n}) (jQuery);\n")))),(0,d.mdx)("h2",{id:"instantiation-and-resources"},"Instantiation and resources"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Additional JavaScript files used as a resources must be dynamically loaded using the ",(0,d.mdx)("inlineCode",{parentName:"p"},"$.mage.components()")," method and must not be included in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"<head>")," block.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"$.mage.components()")," method to load additional JavaScript resource files not included in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"<head>")," block.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"You must use ",(0,d.mdx)("inlineCode",{parentName:"p"},"$.mage.extend()")," to extend an existing set of widget resources.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"You must instantiate widgets using the ",(0,d.mdx)("inlineCode",{parentName:"p"},"data-mage-init")," attribute.\nYou can use the ",(0,d.mdx)("inlineCode",{parentName:"p"},".mage()")," plug-in to instantiate widgets that use callback methods."),(0,d.mdx)("p",{parentName:"li"}," Benefits:"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"You leverage the benefits of ",(0,d.mdx)("inlineCode",{parentName:"p"},"$.mage.extend()")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"$.mage.components()"),".")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Using ",(0,d.mdx)("inlineCode",{parentName:"p"},"data-mage-init")," minimizes the inline JavaScript code footprint.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"You can modify widget initialization parameters."),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Widget initialization using the data-mage-init attribute\n<form data-mage-init=\"{form:[], validation:{ignore:':hidden'}}\"></form>\n\n// Widget initialization using the mage plug-in\n(function($) {\n    $('selector').mage('dialog', {\n        close: function(e) {\n            $(this).dialog('destroy');\n        }\n    });\n})(jQuery);\n"))))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"You can declare callback methods inline JavaScript but not methods and widgets."),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Widget initialization and configuration\n$('selector').mage('dialog', {\n    close: function(e) {\n        $(this).dialog('destroy');\n    }\n});\n\n// Widget initialization and binding event handlers\n$('selector').mage('dialog').on('dialogclose', {\n    $(this).dialog('destroy');\n});\n\n// Extension for widget in a JavaScript file\n$.widget('mage.dialog', $.ui.dialog, {\n    close: function() {\n        this.destroy();\n    }\n});\n\n// Extension of widget resources\n(function($) {\n    $.mage\n        .extend('dialog', 'dialog',\n            '<?php echo $this->getViewFileUrl('Enterprise_\\*Module\\*::page/js/dialog.js') ?>')\n})(jQuery);\n")))),(0,d.mdx)("h3",{id:"initializing-a-component-on-a-selector"},"Initializing a component on a selector"),(0,d.mdx)("p",null,"There are two ways to initialize a component on a selector:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Initialize the component in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"data-mage-init")," attribute:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-html"},'<div id="element-id" data-mage-init=\'{"Vendor_Module/js/myfile":{}}\'></div>\n'))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Use a script type ",(0,d.mdx)("inlineCode",{parentName:"p"},"text/x-magento-init")," attribute:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-html"},'<script type="text/x-magento-init">\n{\n   "#element-id": {\n       "Vendor_Module/js/myfile": {}\n   }\n}\n<\/script>\n')))),(0,d.mdx)("p",null,"In these cases the path to the file is:"),(0,d.mdx)("p",null,"  ",(0,d.mdx)("inlineCode",{parentName:"p"},"Vendor/Module/view/frontend/web/js/jsfilename.js")),(0,d.mdx)("p",null,"  which contains your code:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"define(['uiComponent'],\n  function (Component) {\n    'use strict';\n    return Component.extend({\n      initialize: function (config, node) {\n        // some code\n      }\n    });\n  });\n")),(0,d.mdx)("h3",{id:"initializing-a-component-on-a-selector-with-parameters"},"Initializing a component on a selector with parameters"),(0,d.mdx)("p",null,"When a component is initialized, it is also important to send parameters to it, which are normally determined dynamically in PHP."),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"p"},"data-mage-init")),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-html"},'<div id="element-id" data-mage-init=\'{"Vendor_Module/js/myfile":{"parameter":"value","status":<?php echo $block->getStatus(); ?>\n}}\'></div>\n'))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Using a script type ",(0,d.mdx)("inlineCode",{parentName:"p"},"text/x-magento-init")," attribute. For example:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-html"},'<script type="text/x-magento-init">\n{\n   "#element-id": {\n       "Vendor_Module/js/myfile1": {\n           "parameter":"value",\n           "status":<?php echo $block->getStatus(); ?>\n       }\n   }\n}\n<\/script>\n')))),(0,d.mdx)("h2",{id:"development-standards"},"Development standards"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Widgets should comply with the ",(0,d.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single_responsibility_principle"},"single responsibility principle"),"."),(0,d.mdx)("p",{parentName:"li"},"Widgets should not have responsibilities not related to the entity described by the widget."),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Widget \"dialog\" that is responsible\n// only for opening content in an interactive overlay.\n$.widget('mage.dialog', {\n    // Code logic\n});\n\n// Widget \"validation\" that is responsible\n// only for validating the form fields.\n$.widget('mage.validation', $.ui.sortable, {\n    // Code logic\n});\n\n$('selector')\n    .mage('dialog')\n        .find('form')\n            .mage('validation');\n"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Widget properties that modify the widget's behavior must be located in the widget's options to make them configurable and reusable."),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"//Declaration of the backend.dialog widget\n$.widget('mage.dialog', {\n    options: {\n        modal: false,\n        autoOpen: true,\n        // Additional widget options\n    },\n    // Additional widget properties\n});\n\n// Initializing\n$('selector').mage('dialog', {\n    modal: true,\n    autoOpen: false\n});\n"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Widget communications must be handled by jQuery events"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-html"},"<body>\n  ...\n  <button data-mage-init=\"{button: {event: 'save', target:'[data-role=edit-form]'}}\" />\n  ...\n  <form data-role=\"edit-form\">\n  ...\n  </form>\n  ...\n</body>\n")),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Declaration of the mage.form widget\n$.widget(\"mage.form,\" {\n    _create: function() {\n        this._bind();\n    },\n    _bind: function() {\n        this._on({\n            save: this._submit\n        })\n    },\n    _submit: function(e, data) {\n        this._rollback();\n        if (false !== this._beforeSubmit(e.type, data)) {\n            this.element.trigger('submit', e);\n        }\n    }\n});\n"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"You must use ",(0,d.mdx)("a",{parentName:"p",href:"https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing"},"DOM event bubbling")," to perform one-way communication between a child widget and its parent widget.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Widgets must comply with the ",(0,d.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Law_of_Demeter"},"Law of Demeter")," principle."),(0,d.mdx)("p",{parentName:"li"},"Do not instantiate a widget or call a widget's methods inside another widget.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Make widgets abstract enough so that they can be used anywhere in the code."),(0,d.mdx)("p",{parentName:"li"},"For example, the ",(0,d.mdx)("inlineCode",{parentName:"p"},"mage.dropdown")," widget is applicable in many other scenarios, unlike ",(0,d.mdx)("inlineCode",{parentName:"p"},"mage.topShoppingCart"),".")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Place abstract, share-able widgets under the ",(0,d.mdx)("inlineCode",{parentName:"p"},"<install dir>/pub/lib/<your company>")," directory so that other applications can access them."),(0,d.mdx)("p",{parentName:"li"},"For example:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-text"},"/pub\n  /lib\n  /magento\n    dropdown.js\n    validation.js\n    dialog.js\n"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Place Adobe Commerce and Magento Open Source-specific widgets under the ",(0,d.mdx)("inlineCode",{parentName:"p"},"<install dir>/app/code/<namespace>/<module-name>/view/<area-name>/js")," directory."),(0,d.mdx)("p",{parentName:"li"},"For example:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-text"},"/app\n  /code\n    /Mage\n      /DesignEditor\n        /view\n          /frontend\n            /js\n              vde-block.js\n              vde-container.js\n")))),(0,d.mdx)("h2",{id:"architecture"},"Architecture"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Use an underscore prefix to declare private widget methods."),(0,d.mdx)("p",{parentName:"li"},"Properties without an underscore prefix are accessible using the jQuery Widget factory public API."),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Declaration of the backend.accordion widget\n$.widget('mage.accordion', {\n    _create: function() {\n        this.header = this.element.find(this.options.header);\n        this.icon = $(this.options.icon).prependTo(this.header);\n      }\n});\n"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Start a widget's element selection with ",(0,d.mdx)("inlineCode",{parentName:"p"},"this.element"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Widgets must not interact with DOM elements selected using ",(0,d.mdx)("inlineCode",{parentName:"p"},"this.element.parent()"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"this.element('selector')"),", or ",(0,d.mdx)("inlineCode",{parentName:"p"},"this.element.closest('selector')"),"."),(0,d.mdx)("p",{parentName:"li"},"This reduces the number of widget conflicts because widgets interact only with their child elements.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Widget options should have default values."),(0,d.mdx)("p",{parentName:"li"},"Use a ",(0,d.mdx)("inlineCode",{parentName:"p"},"null")," value if there is no default value for an option.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Pass as widget options all DOM selectors used by that widget.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"_setOption")," method to process required, immediate state changes.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Use the public widget API to call widget methods to allow chaining widget methods."),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Call the 'open' method on the menu widget using the public widgets API\n$('selector')\n.menu('open')\n.addClass('ui-state-active');\n"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Handle widget initialization if there is a logical action to perform on successive calls to the widget with no arguments."),(0,d.mdx)("p",{parentName:"li"},"The widget factory automatically fires the ",(0,d.mdx)("inlineCode",{parentName:"p"},"_create()")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"_init()")," methods during initialization, in that order and prevents multiple instantiations of the same element."),(0,d.mdx)("p",{parentName:"li"},"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"_create()")," method is called only once for each widget instance and ",(0,d.mdx)("inlineCode",{parentName:"p"},"_init()")," is called each time the widget is called without arguments.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"When a widget is destroyed, the attached element should be left exactly like it was before attachment."),(0,d.mdx)("p",{parentName:"li"},"Common tasks for this include:"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removing or adding any CSS classes the widget added/removed to the element."),(0,d.mdx)("li",{parentName:"ul"},"Detaching any elements the widget added to the DOM."),(0,d.mdx)("li",{parentName:"ul"},"Destroying any widgets that the widget applied to other elements."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Bind event handlers using the ",(0,d.mdx)("inlineCode",{parentName:"p"},"_bind()")," method to make it easy to find what events the widget reacts on.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Bind events using the ",(0,d.mdx)("inlineCode",{parentName:"p"},"on()")," method."),(0,d.mdx)("p",{parentName:"li"},"Benefits:"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Delegation is supported using selectors in the event names.\nFor example: ",(0,d.mdx)("inlineCode",{parentName:"li"},"click.foo"),"."),(0,d.mdx)("li",{parentName:"ul"},"Maintains proper ",(0,d.mdx)("inlineCode",{parentName:"li"},"this")," context inside the handlers, so it is not necessary to use the ",(0,d.mdx)("inlineCode",{parentName:"li"},"$.proxy()")," method."),(0,d.mdx)("li",{parentName:"ul"},"Event handlers are automatically namespaced and cleaned up on destruction.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-coding-standards-jquery-widgets-md-7c9ecf1f0262acf21c15.js.map