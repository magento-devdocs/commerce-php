"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[50929],{77122:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return r},default:function(){return l}});var s=n(87462),t=n(45987),o=(n(35776),n(3905)),m=n(91515);const i=["components"],r={},u={_frontmatter:r},d=m.Z;function l(e){let{components:a}=e,n=(0,t.Z)(e,i);return(0,o.mdx)(d,(0,s.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"message-queues"},"Message queues"),(0,o.mdx)("p",null,"Message queues provide an asynchronous communications mechanism in which the sender and the receiver of a message do not contact each other, nor do they need to communicate with the message queue at the same time. When a sender places a message onto a queue, it is stored until the recipient receives them."),(0,o.mdx)("p",null,"In Adobe Commerce and Magento Open Source, the Message Queue Framework (MQF) is a fully-functional system that allows a module to publish messages to queues. It also creates consumers to receive them asynchronously. The MQF primarily uses ",(0,o.mdx)("a",{parentName:"p",href:"http://www.rabbitmq.com"},"RabbitMQ")," as the messaging broker, which provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification."),(0,o.mdx)("p",null,"A basic message queue system can also be set up without using RabbitMQ. In this system, a MySQL adapter stores messages in the database. Three database tables (",(0,o.mdx)("inlineCode",{parentName:"p"},"queue"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"queue_message"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"queue_message_status"),") manage the message queue workload. Cron jobs ensure the consumers are able to receive messages. This solution is not very scalable. RabbitMQ should be used whenever possible."),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"configuration.md"},"Configure message queues")," for information about setting up the message queue system."),(0,o.mdx)("h2",{id:"send-a-message-from-the-publisher-to-a-queue"},"Send a message from the publisher to a queue"),(0,o.mdx)("p",null,"The following code sends a message to the queue. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"publish")," method is defined in ",(0,o.mdx)("inlineCode",{parentName:"p"},"PublisherInterface")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"$publisher->publish($topic, $message)\n")),(0,o.mdx)("p",null,"In a MySQL adapter environment, a message that is published to multiple queues creates a single record in ",(0,o.mdx)("inlineCode",{parentName:"p"},"queue_message")," and multiple records in ",(0,o.mdx)("inlineCode",{parentName:"p"},"queue_message_status"),": one for each queue. (A join on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"queue"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"queue_message"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"queue_message_status")," tables is required)."),(0,o.mdx)("h2",{id:"instantiate-a-consumer"},"Instantiate a consumer"),(0,o.mdx)("p",null,"The procedure for instantiating a consumer differs, depending on which message queue system is being used."),(0,o.mdx)("h3",{id:"rabbitmq"},"RabbitMQ"),(0,o.mdx)("p",null,"This instantiates a consumer that is defined in a ",(0,o.mdx)("a",{parentName:"p",href:"configuration.md#queue_consumerxml"},(0,o.mdx)("inlineCode",{parentName:"a"},"queue_consumer.xml"))," file. The consumer (",(0,o.mdx)("inlineCode",{parentName:"p"},"customer_created_listener"),") listens to the queue and receives all new messages. For every message, it invokes ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Some\\Class::processMessage($message)")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"$this->consumerFactory->get('customer_created_listener')\n    ->process();\n")),(0,o.mdx)("h3",{id:"mysql-adapter"},"MySQL adapter"),(0,o.mdx)("p",null,"Implement ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\MessageQueue\\ConsumerInterface::process($maxNumberOfMessages)")," to instantiate a consumer."),(0,o.mdx)("p",null,"Perform the following actions:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Define the queue name associated with current consumer using ",(0,o.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Framework\\MessageQueue\\ConsumerConfigurationInterface::getQueueName"),"."),(0,o.mdx)("li",{parentName:"ol"},"Select ",(0,o.mdx)("inlineCode",{parentName:"li"},"$maxNumberOfMessages")," message records, filtering on the ",(0,o.mdx)("inlineCode",{parentName:"li"},"queue_name")," field. You must join on all 3 tables. To accomplish this, you may want to extract fewer records at a time to improve load distribution between multiple consumers."),(0,o.mdx)("li",{parentName:"ol"},"Decode the message using topic name taken from the ",(0,o.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Framework\\MessageQueue\\ConsumerConfigurationInterface"),"."),(0,o.mdx)("li",{parentName:"ol"},"Invoke callback ",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\MessageQueue\\ConsumerConfigurationInterface::getCallback")," and pass the decoded data as an argument.")),(0,o.mdx)("h2",{id:"change-message-queue-from-mysql-to-amqp"},"Change message queue from MySQL to AMQP"),(0,o.mdx)("p",null,"The following sample introduces a runtime configuration that allows you to redefine the adapter for a topic."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"'queue' => [\n    'topics' => [\n        'product_action_attribute.update' => [\n            'publisher' => 'amqp-magento'\n        ]\n    ],\n    'config' => [\n        'publishers' => [\n            'product_action_attribute.update' => [\n                'connections' => [\n                    'amqp' => [\n                        'name' => 'amqp',\n                        'exchange' => 'magento',\n                        'disabled' => false\n                    ],\n                    'db' => [\n                        'name' => 'db',\n                        'exchange' => 'magento',\n                        'disabled' => true\n                    ]\n                ]\n            ]\n        ]\n    ],\n    'consumers' => [\n        'product_action_attribute.update' => [\n            'connection' => 'amqp',\n        ],\n    ],\n],\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-message-queues-index-md-710cb965bd9adaa95265.js.map