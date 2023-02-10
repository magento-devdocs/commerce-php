"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[40576],{34520:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n=a(87462),r=a(63366),l=(a(15007),a(64983)),d=a(91515),o=["components"],s={},i={_frontmatter:s},m=d.Z;function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.mdx)(m,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"bulk-operations"},"Bulk operations"),(0,l.mdx)("p",null,"Bulk operations are actions that are performed on a large scale. Example bulk operations tasks include importing or exporting items, changing prices on a mass scale, and assigning products to a warehouse."),(0,l.mdx)("p",null,"For each individual task of a bulk operation, the system creates a message that is published in a ",(0,l.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/message-queues/message-queue-framework.html"},"message queue"),". A consumer runs in the background and processes the messages that it receives. Because tasks are processed in the background through the message queue system, when a merchant launches a bulk operation from the ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"Admin")," panel, control is quickly returned to the merchant. In previous releases, the merchant could not use the Admin panel until all tasks were completed."),(0,l.mdx)("p",null,"The primary Bulk Operation interface is ",(0,l.mdx)("inlineCode",{parentName:"p"},"OperationInterface"),". It defines the getter and setter methods the bulk operation uses to create and process messages. The following interfaces are also used:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Interface"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"BulkManagementInterface"),(0,l.mdx)("td",{parentName:"tr",align:null},"Schedules and deletes bulk operation requests")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"BulkStatusInferface"),(0,l.mdx)("td",{parentName:"tr",align:null},"Returns the status of bulk operations")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"BulkSummaryInterface"),(0,l.mdx)("td",{parentName:"tr",align:null},"Provides details about a bulk operation")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"OperationManagementInterface"),(0,l.mdx)("td",{parentName:"tr",align:null},"Changes the status of an operation")))),(0,l.mdx)("p",null,"Three clients call bulk operation APIs:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"A publisher, which pushes messages to the message queue"),(0,l.mdx)("li",{parentName:"ul"},"A consumer, which handles each specific operation"),(0,l.mdx)("li",{parentName:"ul"},"A client that gets the status of the bulk operation and shows the list of failed operations")),(0,l.mdx)("h2",{id:"publish-bulk-operations"},"Publish bulk operations"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"BulkManagementInterface::scheduleBulk")," is responsible for publishing bulk operations. The following table describes its arguments."),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Parameter"),(0,l.mdx)("th",null,"Type"),(0,l.mdx)("th",null,"Description")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"$bulkUuid")),(0,l.mdx)("td",null,"string"),(0,l.mdx)("td",null,"Bulk identifier generated by ",(0,l.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"Magento\\Framework\\DataObject\\IdentityGeneratorInterface::generateId"))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"$operations")),(0,l.mdx)("td",null,"array"),(0,l.mdx)("td",null,(0,l.mdx)("ul",null,(0,l.mdx)("li",null,"topic_name - Must be defined in the ",(0,l.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"communication.xml")," and queue configuration files. It can also be used in one of the Asynchonous API pre-generated topics."),(0,l.mdx)("li",null,"bulk_uuid - A bulk identifier"),(0,l.mdx)("li",null,"status - The default operation status ",(0,l.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"OperationInterface::STATUS_TYPE_OPEN")),(0,l.mdx)("li",null,"serialized_data - An array of serialized data with the following required keys:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",null,"entity_id - Your ",(0,l.mdx)("a",{href:"https://glossary.magento.com/entity"},"entity")," ID"),(0,l.mdx)("li",null,"entity_link - Link to your entity"),(0,l.mdx)("li",null,'meta_info - String that describes your entity. For example, "SKU: Simple_Product"')),(0,l.mdx)("p",null,"This data is required to display the results of operations couldn't be executed for any non-recoverable reason. These results are displayed in the failed operations grid."),(0,l.mdx)("p",null,"You also can add any data needed to execute operations. For example, if you are conducting a mass price update, you can add price data.")))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"$bulkDescription")),(0,l.mdx)("td",null,"string"),(0,l.mdx)("td",null,"A description of the bulk operation. This value is displayed in the ",(0,l.mdx)("b",null,"Your Bulk Operations")," grid.")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"$userId")),(0,l.mdx)("td",null,"int"),(0,l.mdx)("td",null,"The Admin user ID that executes this bulk operation."))),(0,l.mdx)("p",null,"See ",(0,l.mdx)("a",{parentName:"p",href:"bulk-operations-example.md#create-a-publisher"},"Create a publisher")," for a detailed example of a ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/publisher-subscriber-pattern"},"publisher"),"."),(0,l.mdx)("h2",{id:"consume-messages"},"Consume messages"),(0,l.mdx)("p",null,"When a consumer processes a message, it must notify the system of its status. The status can be OPEN, COMPLETE, RETRIABLY_FAILED, and NOT_RETRIABLY_FAILED."),(0,l.mdx)("p",null,"To send this notification, use ",(0,l.mdx)("inlineCode",{parentName:"p"},"OperationManagementInterface::changeOperationStatus($operationId, $status, $errorCode = null, $message = null, $data = null)"),"."),(0,l.mdx)("h3",{id:"handling-recoverable-exceptions"},"Handling recoverable exceptions"),(0,l.mdx)("p",null,"Adobe Commerce and Magento Open Source provide database exception classes to simplify the process of identifying recoverable database errors in client code. In most cases, such errors happen due to some environment issues and can be fixed. The full path to these classes is ",(0,l.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\DB\\Adapter\\<class_name>"),". These exceptions extend generic ",(0,l.mdx)("inlineCode",{parentName:"p"},"\\Zend_Db_Adapter_Exception"),"."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Exception class"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description of database error(s)"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"ConnectionException"),(0,l.mdx)("td",{parentName:"tr",align:null},"SQLSTATE","[HY000]",": General error: 2006 MySQL server has gone away ",(0,l.mdx)("br",null),"SQLSTATE","[HY000]",": General error: 2013 Lost connection to MySQL server during query")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"LockWaitException"),(0,l.mdx)("td",{parentName:"tr",align:null},"SQLSTATE","[HY000]",": General error: 1205 Lock wait timeout exceeded")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"DeadlockException"),(0,l.mdx)("td",{parentName:"tr",align:null},"SQLSTATE","[40001]",": Serialization failure: 1213 Deadlock found when trying to get lock")))),(0,l.mdx)("p",null,"The following pseudocode illustrates how to recover from database-related errors."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nnamespace example;\nuse Magento\\Framework\\DB\\Adapter\\LockWaitException;\n\n// ...\ntry {\n    // do something\n} catch (LockWaitException $exception) {\n    // try to recover from exception\n}\n")),(0,l.mdx)("p",null,"See ",(0,l.mdx)("a",{parentName:"p",href:"bulk-operations-example.md#create-a-consumer"},"Create a consumer")," for a detailed example of a consumer."),(0,l.mdx)("h2",{id:"get-the-status-of-operations"},"Get the status of operations"),(0,l.mdx)("p",null,"Use ",(0,l.mdx)("inlineCode",{parentName:"p"},"getBulkStatus(UuidInterface $bulkId)")," to get the status of the overall bulk operation.  Possible values are"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Value"),(0,l.mdx)("th",{parentName:"tr",align:null},"Constant"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"0"),(0,l.mdx)("td",{parentName:"tr",align:null},"NOT_STARTED")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"1"),(0,l.mdx)("td",{parentName:"tr",align:null},"IN_PROGRESS")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"2"),(0,l.mdx)("td",{parentName:"tr",align:null},"FINISHED_SUCCESSFULLY")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"3"),(0,l.mdx)("td",{parentName:"tr",align:null},"FINISHED_WITH_FAILURE")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-message-queues-bulk-operations-md-12210e0191b16b5992db.js.map