"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[96183],{92574:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return d}});var a,o=t(87462),r=t(63366),i=(t(15007),t(64983)),s=t(91515),l=["components"],m={},u=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),c={_frontmatter:m},p=s.Z;function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"example-bulk-operations-implementation"},"Example bulk operations implementation"),(0,i.mdx)("p",null,"This document describes how bulk operations can be implemented. There are three primary tasks to accomplish this:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create a ",(0,i.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/publisher-subscriber-pattern"},"publisher")," that sends messages to the message queue"),(0,i.mdx)("li",{parentName:"ul"},"Create a consumer that receives and processes messages"),(0,i.mdx)("li",{parentName:"ul"},"Configure the message queues")),(0,i.mdx)("h2",{id:"create-a-publisher"},"Create a publisher"),(0,i.mdx)("p",null,"A publisher's duties include scheduling a bulk operation. It must generate a ",(0,i.mdx)("inlineCode",{parentName:"p"},"bulkUuid")," for each operation, send each operation to the message queue, and report on the status of each operations."),(0,i.mdx)("p",null,"The following code sample shows how these duties can be completed."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\AsynchronousOperations\\Api\\Data\\OperationInterface;\nuse Magento\\AsynchronousOperations\\Api\\Data\\OperationInterfaceFactory;\nuse Magento\\Authorization\\Model\\UserContextInterface;\nuse Magento\\Framework\\Bulk\\BulkManagementInterface;\nuse Magento\\Framework\\DataObject\\IdentityGeneratorInterface;\nuse Magento\\Framework\\Exception\\LocalizedException;\nuse Magento\\Framework\\Json\\Helper\\Data as JsonHelper;\nuse Magento\\Framework\\UrlInterface;\n\n/**\n * Class ScheduleBulk\n */\nclass ScheduleBulk\n{\n    /**\n     * @var BulkManagementInterface\n     */\n    private $bulkManagement;\n\n    /**\n     * @var OperationInterfaceFactory\n     */\n    private $operationFactory;\n\n    /**\n     * @var IdentityGeneratorInterface\n     */\n    private $identityService;\n\n    /**\n     * @var UrlInterface\n     */\n    private $urlBuilder;\n\n    /**\n     * @var UserContextInterface\n     */\n    private $userContext;\n\n    /**\n     * @var JsonHelper\n     */\n    private $jsonHelper;\n\n    /**\n     * ScheduleBulk constructor.\n     *\n     * @param BulkManagementInterface $bulkManagement\n     * @param OperationInterfaceFactory $operationFactory\n     * @param IdentityGeneratorInterface $identityService\n     * @param UserContextInterface $userContextInterface\n     * @param UrlInterface $urlBuilder\n     */\n    public function __construct(\n        BulkManagementInterface $bulkManagement,\n        OperationInterfaceFactory $operationFactory,\n        IdentityGeneratorInterface $identityService,\n        UserContextInterface $userContextInterface,\n        UrlInterface $urlBuilder,\n        JsonHelper $jsonHelper\n    ) {\n        $this->userContext = $userContextInterface;\n        $this->bulkManagement = $bulkManagement;\n        $this->operationFactory = $operationFactory;\n        $this->identityService = $identityService;\n        $this->urlBuilder = $urlBuilder;\n        $this->jsonHelper = $jsonHelper;\n\n    }\n\n    /**\n     * Schedule new bulk operation\n     *\n     * @param array $operationData\n     * @throws LocalizedException\n     * @return void\n     */\n    public function execute($operationData)\n    {\n        $operationCount = count($operationData);\n        if ($operationCount > 0) {\n            $bulkUuid = $this->identityService->generateId();\n            $bulkDescription = 'Specify here your bulk description';\n\n            $operations = [];\n            foreach ($operationData as $operation) {\n\n                $serializedData = [\n                    //this data will be displayed in Failed item grid in ID column\n                    'entity_id' => $operation['entity_id'],\n                    //add here logic to add url for your entity(this link will be displayed in the Failed item grid)\n                    'entity_link' => $this->urlBuilder->getUrl('your_url'),\n                    //this data will be displayed in Failed item grid in the column \"Meta Info\"\n                    'meta_information' => 'Specify here meta information for your entity',//this data will be displayed in Failed item grid in the column \"Meta Info\"\n                ];\n                $data = [\n                    'data' => [\n                        'bulk_uuid' => $bulkUuid,\n                        //topic name must be equal to data specified in the queue configuration files\n                        'topic_name' => '%your_topic name%',\n                        'serialized_data' => $this->jsonHelper->jsonEncode($serializedData),\n                        'status' => OperationInterface::STATUS_TYPE_OPEN,\n                    ]\n                ];\n\n                /** @var OperationInterface $operation */\n                $operation = $this->operationFactory->create($data);\n                $operations[] = $operation;\n\n            }\n            $userId = $this->userContext->getUserId();\n            $result = $this->bulkManagement->scheduleBulk($bulkUuid, $operations, $bulkDescription, $userId);\n            if (!$result) {\n                throw new LocalizedException(\n                    __('Something went wrong while processing the request.')\n                );\n            }\n        }\n    }\n}\n")),(0,i.mdx)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,i.mdx)("p",null,"A consumer class receives messages from the message queue and changes the status after it is processed. The following example defines a consumer that handles price update bulk operations."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\SharedCatalog\\Model\\ResourceModel\\ProductItem\\Price;\n\nuse Magento\\AsynchronousOperations\\Api\\Data\\OperationInterface;\nuse Magento\\AsynchronousOperations\\Api\\Data\\OperationInterfaceFactory;\nuse Magento\\Framework\\Bulk\\BulkManagementInterface;\nuse Magento\\Framework\\Bulk\\OperationManagementInterface;\nuse Magento\\Framework\\DB\\Adapter\\ConnectionException;\nuse Magento\\Framework\\DB\\Adapter\\DeadlockException;\nuse Magento\\Framework\\DB\\Adapter\\LockWaitException;\nuse Magento\\Framework\\Exception\\LocalizedException;\nuse Magento\\Framework\\Exception\\NoSuchEntityException;\nuse Magento\\Framework\\Exception\\TemporaryStateExceptionInterface;\nuse Magento\\Framework\\Json\\Helper\\Data as JsonHelper;\nuse Psr\\Log\\LoggerInterface;\n\n/**\n * Class Consumer\n */\nclass Consumer\n{\n    /**\n     * @var LoggerInterface\n     */\n    private $logger;\n\n    /**\n     * @var JsonHelper\n     */\n    private $jsonHelper;\n\n    /**\n     * @var OperationManagementInterface\n     */\n    private $operationManagement;\n\n    /**\n     * Consumer constructor.\n     *\n     * @param LoggerInterface $logger\n     * @param JsonHelper $jsonHelper\n     */\n    public function __construct(\n        LoggerInterface $logger,\n        JsonHelper $jsonHelper,\n        OperationManagementInterface $operationManagement\n    ) {\n        $this->logger = $logger;\n        $this->jsonHelper = $jsonHelper;\n        $this->operationManagement = $operationManagement;\n    }\n\n    /**\n     * Processing operation for update price\n     *\n     * @param OperationInterface $operation\n     * @return void\n     */\n    public function processOperation(OperationInterface $operation)\n    {\n        $status = OperationInterface::STATUS_TYPE_COMPLETE;\n        $errorCode = null;\n        $message = null;\n        $serializedData = $operation->getSerializedData();\n        $unserializedData = $this->jsonHelper->jsonDecode($serializedData);\n        try {\n            //add here your own logic for async operations\n        } catch (\\Zend_Db_Adapter_Exception  $e) {\n            //here sample how to process exceptions if they occurred\n            $this->logger->critical($e->getMessage());\n            //you can add here your own type of exception when operation can be retried\n            if (\n                $e instanceof LockWaitException\n                || $e instanceof DeadlockException\n                || $e instanceof ConnectionException\n            ) {\n                $status = OperationInterface::STATUS_TYPE_RETRIABLY_FAILED;\n                $errorCode = $e->getCode();\n                $message = __($e->getMessage());\n            } else {\n                $status = OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;\n                $errorCode = $e->getCode();\n                $message = __('Sorry, something went wrong during product prices update. Please see log for details.');\n            }\n\n        } catch (NoSuchEntityException $e) {\n            $this->logger->critical($e->getMessage());\n            $status = ($e instanceof TemporaryStateExceptionInterface) ? OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED : OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;\n            $errorCode = $e->getCode();\n\n            $message = $e->getMessage();\n            unset($unserializedData['entity_link']);\n            $serializedData = $this->jsonHelper->jsonEncode($unserializedData);\n        } catch (LocalizedException $e) {\n            $this->logger->critical($e->getMessage());\n            $status = OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;\n            $errorCode = $e->getCode();\n            $message = $e->getMessage();\n        } catch (\\Exception $e) {\n            $this->logger->critical($e->getMessage());\n            $status = OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;\n            $errorCode = $e->getCode();\n            $message = __('Sorry, something went wrong during product prices update. Please see log for details.');\n        }\n\n        //update operation status based on result performing operation(it was successfully executed or exception occurs\n        $this->operationManagement->changeOperationStatus(\n            $operation->getId(),\n            $status,\n            $errorCode,\n            $message,\n            $serializedData\n        );\n    }\n}\n")),(0,i.mdx)("h2",{id:"configure-message-queues"},"Configure message queues"),(0,i.mdx)("p",null,"The message queue topology must be configured to implement bulk operations. Create or edit the following files in the module's ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/<vendor>/<module_name>/etc")," directory."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"communication.xml")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"di.xml")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"queue_consumer.xml")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"queue_publisher.xml")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"queue_topology.xml"))),(0,i.mdx)("p",null,"For more information about the ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file, see ",(0,i.mdx)("a",{parentName:"p",href:"../dependency-injection.md"},"Dependency Injection"),". For information the other files, see ",(0,i.mdx)("a",{parentName:"p",href:"configuration.md"},"Configure message queues"),"."),(0,i.mdx)("h3",{id:"create-communicationxml"},"Create ",(0,i.mdx)("inlineCode",{parentName:"h3"},"communication.xml")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"communication.xml")," file defines aspects of the message queue system that apply to all topics for the ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module"),". Create this file with the following contents:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Communication/etc/communication.xsd">\n    <topic name="<your_topic_name>" request="Magento\\AsynchronousOperations\\Api\\Data\\OperationInterface">\n        <handler name="<your_handler_name>" type="<Consumer_Class>" method="<consumer_method>" />\n    </topic>\n</config>\n')),(0,i.mdx)("h3",{id:"create-dixml"},"Create ",(0,i.mdx)("inlineCode",{parentName:"h3"},"di.xml")),(0,i.mdx)("p",null,"Add the following type to the module's ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Framework\\MessageQueue\\MergerFactory">\n    <arguments>\n        <argument name="mergers" xsi:type="array">\n            <item name="<your_consumer_name>" xsi:type="string"><Merger_Class></item>\n        </argument>\n    </arguments>\n</type>\n')),(0,i.mdx)("h3",{id:"create-queue_consumerxml"},"Create ",(0,i.mdx)("inlineCode",{parentName:"h3"},"queue_consumer.xml")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"queue_consumer.xml")," file defines the relationship between a queue and its consumer. Create this file with the following contents:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/consumer.xsd">\n    <consumer name="<consumer_name>" queue="<queue_name>" connection="amqp" consumerInstance="Magento\\Framework\\MessageQueue\\Consumer" handler="<Consumer_Class>::<Consumer_method>"/>\n</config>\n')),(0,i.mdx)("h3",{id:"create-queue_publisherxml"},"Create ",(0,i.mdx)("inlineCode",{parentName:"h3"},"queue_publisher.xml")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"queue_publisher.xml")," file defines the exchange where a topic is published. Create this file with the following contents:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/publisher.xsd">\n    <publisher topic="<topic_name>">\n        <connection name="amqp" exchange="<exchange>" />\n    </publisher>\n</config>\n')),(0,i.mdx)("h3",{id:"create-queue_topologyxml"},"Create ",(0,i.mdx)("inlineCode",{parentName:"h3"},"queue_topology.xml")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"queue_topology.xml")," file defines the message routing rules and declares queues and exchanges. Create this file with the following contents:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/topology.xsd">\n    <exchange name="magento" type="topic" connection="amqp">\n        <binding id="defaultBinding" topic="" destinationType="queue" destination="<queue_name>"/>\n    </exchange>\n</config>\n')),(0,i.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Message queue connections are defined dynamically, based on the deployment configuration in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"env.php")," file. If AMQP is configured in the deployment configuration of the queue, AMQP connections are used. Otherwise, database connections are used.\nAs a result, if AMQP is configured in the deployment configuration of the queue, you can omit connection declarations in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"queue_consumer.xml"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"queue_publisher.xml"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"queue_topology.xml")," ",(0,i.mdx)("a",{parentName:"p",href:"./configuration.md"},"message queue configuration files"),"."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-message-queues-bulk-operations-example-md-6944537ad0ac2a8bf700.js.map