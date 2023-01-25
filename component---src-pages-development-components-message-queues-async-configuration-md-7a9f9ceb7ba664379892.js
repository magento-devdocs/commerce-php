"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[83089],{65867:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return u},default:function(){return c}});var a,i=o(87462),t=o(63366),m=(o(15007),o(64983)),r=o(91515),s=["components"],u={},l=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),d={_frontmatter:u},p=r.Z;function c(e){var n=e.components,o=(0,t.Z)(e,s);return(0,m.mdx)(p,(0,i.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"asynchronous-configuration"},"Asynchronous configuration"),(0,m.mdx)("p",null,"When using the message queue, four configuration files in your component must be updated:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"communication.xml"),(0,m.mdx)("li",{parentName:"ul"},"queue_consumer.xml"),(0,m.mdx)("li",{parentName:"ul"},"queue_topology.xml"),(0,m.mdx)("li",{parentName:"ul"},"queue_publisher.xml")),(0,m.mdx)("p",null,"More information can be found in ",(0,m.mdx)("a",{parentName:"p",href:"configuration.md"},"Configure message queues"),"."),(0,m.mdx)("p",null,"Asynchronous and Bulk APIs are built on top of the usual REST API and use the Message Queue Framework for processing messages. To ease development efforts, the Asynchronous API pre-generates the following configuration files:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"communication.xml"),(0,m.mdx)("li",{parentName:"ul"},"queue_publisher.xml")),(0,m.mdx)("p",null,"and provides the ",(0,m.mdx)("inlineCode",{parentName:"p"},"queue_topology.xml")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"queue_consumer.xml")," files within the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento/WebapiAsync")," module."),(0,m.mdx)("h2",{id:"communicationxml"},"communication.xml"),(0,m.mdx)("p",null,"Information about the auto-generation of ",(0,m.mdx)("inlineCode",{parentName:"p"},"communication.xml")," can be found in ",(0,m.mdx)("a",{parentName:"p",href:"async-topics.md"},"Topics in Asynchronous API")),(0,m.mdx)("h2",{id:"queue_publisherxml"},"queue_publisher.xml"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"queue_publisher.xml")," file is generated by the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\WebapiAsync\\Code\\Generator\\Config\\RemoteServiceReader\\Publisher")," class, which implements ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Config\\ReaderInterface")," and is injected into the ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\MessageQueue\\Publisher\\Config\\CompositeReader")," constructor argument in the main ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," file."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Framework\\MessageQueue\\Publisher\\Config\\CompositeReader">\n    <arguments>\n        <argument name="readers" xsi:type="array">\n            <item name="asyncServiceReader" xsi:type="object" sortOrder="0">Magento\\WebapiAsync\\Code\\Generator\\Config\\RemoteServiceReader\\Publisher</item>\n            ...\n        </argument>\n    </arguments>\n</type>\n')),(0,m.mdx)("p",null,"The sort order is set to 0 and allows developers to change some aspects of the generated configuration in configuration readers such as ",(0,m.mdx)("inlineCode",{parentName:"p"},"queue_publisher.xml")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"env.php"),"."),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\WebapiAsync\\Code\\Generator\\Config\\RemoteServiceReader\\Publisher::read()")," calls ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AsynchronousOperations\\Model\\ConfigInterface::getServices()")," to get an array of all REST API routes which can be executed asynchronously. Then it defines the connection name as ",(0,m.mdx)("inlineCode",{parentName:"p"},"amqp")," and the exchange as ",(0,m.mdx)("inlineCode",{parentName:"p"},"magento")," for each generated topic name."),(0,m.mdx)("h2",{id:"queue_consumerxml"},"queue_consumer.xml"),(0,m.mdx)("p",null,"The asynchronous/bulk API has one defined consumer which processes all asynchronous/bulk APIs messages."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<consumer name="async.operations.all" queue="async.operations.all" connection="amqp"\n              consumerInstance="Magento\\AsynchronousOperations\\Model\\MassConsumer"/>\n')),(0,m.mdx)("h3",{id:"queue_topologyxml"},"queue_topology.xml"),(0,m.mdx)("p",null,"The message queue topology configuration links all auto-generated topic names with prefix ",(0,m.mdx)("inlineCode",{parentName:"p"},"async.")," to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"magento")," exchange and defines the queue named ",(0,m.mdx)("inlineCode",{parentName:"p"},"async.operations.all")," as the destination for all messages."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<exchange name="magento" connection="amqp">\n    <binding id="async.operations.all" topic="async.#" destination="async.operations.all"/>\n</exchange>\n')),(0,m.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Message queues connection is defined dynamically based on deployment configuration in ",(0,m.mdx)("inlineCode",{parentName:"p"},"env.php"),". If AMQP is configured in deployment configuration of the queue, AMQP connection is used. Otherwise, db connection is used.\nAs a result, if AMQP is configured in deployment configuration of the queue, connection declaration can be omitted in ",(0,m.mdx)("a",{parentName:"p",href:"./configuration.md"},"message queue configuration files"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"queue_customer.xml"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"queue_publisher.xml"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"queue_topology.xml"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-message-queues-async-configuration-md-7a9f9ceb7ba664379892.js.map