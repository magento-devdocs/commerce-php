"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[5369],{47779:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return x}});var a=n(87462),d=n(63366),r=(n(15007),n(64983)),l=n(91515),m=["components"],i={},o={_frontmatter:i},p=l.Z;function x(e){var t=e.components,n=(0,d.Z)(e,m);return(0,r.mdx)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"report-xml-for-advanced-reporting"},"Report XML for advanced reporting"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Report XML")," is a markup language created to build advanced reports. The language declares SQL queries using declarations in XML."),(0,r.mdx)("p",null,"You can retrieve data for integration with advanced reporting service using a report name. A report name is the same as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," attribute in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<report>")," node as described below."),(0,r.mdx)("h2",{id:"report-columns"},"Report columns"),(0,r.mdx)("p",null,"Report XML does not support the asterisk statement. All columns must be declared:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"For the main table — inside the ",(0,r.mdx)("inlineCode",{parentName:"li"},"<source>")," node"),(0,r.mdx)("li",{parentName:"ul"},"For join tables — inside the ",(0,r.mdx)("inlineCode",{parentName:"li"},"<link-source>")," node")),(0,r.mdx)("p",null,"Columns are added using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<attribute>")," node."),(0,r.mdx)("h2",{id:"syntax-and-structure"},"Syntax and structure"),(0,r.mdx)("p",null,"All report files are located in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"etc")," directory of a module:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},"<module_dir>/etc/reports.xml\n")),(0,r.mdx)("p",null,"The following is a visualized XML Schema for ",(0,r.mdx)("inlineCode",{parentName:"p"},"reports.xml"),":"),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"/commerce-php/assets/c54cb9d2492f9bde6a5fc40f46be39e8/reports_xsd.svg",alt:"Reports schema"})),(0,r.mdx)("p",null,"Report files can be located in any module that depends on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Analytics")," module (for example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"SalesAnalytics")," module created for the reports related to ",(0,r.mdx)("em",{parentName:"p"},"Sales"),"). Each report is declared in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<report>")," node. A ",(0,r.mdx)("inlineCode",{parentName:"p"},"report")," node is rendered into an SQL query."),(0,r.mdx)("h3",{id:"config"},(0,r.mdx)("inlineCode",{parentName:"h3"},"<config>")),(0,r.mdx)("p",null,"Configuration of an XML."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Constant value"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"xmlns:xsi")),(0,r.mdx)("td",{parentName:"tr",align:null},"Default namespace declaration."),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"http://www.w3.org/2001/XMLSchema-instance"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"xsi:noNamespaceSchemaLocation")),(0,r.mdx)("td",{parentName:"tr",align:null},"An XML Schema document that does not have a target namespace."),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"urn:magento:module:Magento_Analytics:etc/reports.xsd"))))),(0,r.mdx)("h3",{id:"report"},(0,r.mdx)("inlineCode",{parentName:"h3"},"<report>")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of report configuration. You can use it for merging purposes or as a reference."),(0,r.mdx)("td",{parentName:"tr",align:null},"Required")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"connection")),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of connection to the database, when a store has more than one database."),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"iterator")),(0,r.mdx)("td",{parentName:"tr",align:null},"Full class name or an interface name of a statement iterator. To use a custom iterator, add an ",(0,r.mdx)("inlineCode",{parentName:"td"},"iterator")," attribute which contains an iterator class or an interface name. This iterator can get statement iterator in the constructor method and wrap or change the current values with the custom data."),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional")))),(0,r.mdx)("p",null,"All data of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"reports.xml")," file from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<report>")," node that has the same attribute ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," will be merged."),(0,r.mdx)("h3",{id:"source"},(0,r.mdx)("inlineCode",{parentName:"h3"},"<source>")),(0,r.mdx)("p",null,"The data sources that correspond to table names in a database."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"Table name"),(0,r.mdx)("td",{parentName:"tr",align:null},"Required")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"alias")),(0,r.mdx)("td",{parentName:"tr",align:null},"Table alias"),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional")))),(0,r.mdx)("p",null,"The main table is specified with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<source>")," tag. After rendering, it is represented in an SQL query as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"FROM")," statement."),(0,r.mdx)("p",null,"A report can be filtered using ",(0,r.mdx)("inlineCode",{parentName:"p"},"<filter>")," declared inside the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<source>")," node."),(0,r.mdx)("h3",{id:"link-source"},(0,r.mdx)("inlineCode",{parentName:"h3"},"<link-source>")),(0,r.mdx)("p",null,"In the ",(0,r.mdx)("inlineCode",{parentName:"p"},"source")," node, you can also add a data source with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<link-source>")," tag. After rendering it is represented as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"JOIN")," statement in an SQL query."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"<link-source>")," node contains the following attributes:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"Table name"),(0,r.mdx)("td",{parentName:"tr",align:null},"Required")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"alias")),(0,r.mdx)("td",{parentName:"tr",align:null},"Table alias"),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"link-type")),(0,r.mdx)("td",{parentName:"tr",align:null},"Join type"),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional")))),(0,r.mdx)("p",null,"The name must be the same as the table name in database. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"alias")," attribute can be used in the same way as an alias in the SQL. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"link-type")," attribute specifies the type of join in SQL query and can be either ",(0,r.mdx)("inlineCode",{parentName:"p"},"INNER")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"LEFT"),"."),(0,r.mdx)("p",null,"Join conditions are described in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<link-source>")," node using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<using>")," tag. After rendering it is represented as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ON")," statement in an SQL query. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"<using>")," node works in the same way as the filter, described below in this document."),(0,r.mdx)("h3",{id:"attribute"},(0,r.mdx)("inlineCode",{parentName:"h3"},"<attribute>")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"Column name in database"),(0,r.mdx)("td",{parentName:"tr",align:null},"Required")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"alias")),(0,r.mdx)("td",{parentName:"tr",align:null},"Column alias. It can be used in the same way as the column alias in SQL."),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"function")),(0,r.mdx)("td",{parentName:"tr",align:null},"Available values: ",(0,r.mdx)("inlineCode",{parentName:"td"},"count"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"lower"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"date"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"sum"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"max"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"avg"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"min"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"sha1")),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"group")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"distinct")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional")))),(0,r.mdx)("h3",{id:"filter"},(0,r.mdx)("inlineCode",{parentName:"h3"},"<filter>")),(0,r.mdx)("p",null,"A report can be filtered using ",(0,r.mdx)("inlineCode",{parentName:"p"},"<filter>")," declared inside the parent node. The node can have nested filters and ",(0,r.mdx)("inlineCode",{parentName:"p"},"<conditions>"),". Filters use an attribute ",(0,r.mdx)("inlineCode",{parentName:"p"},"glue")," that helps to filter records that are based on more than one condition."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"glue")),(0,r.mdx)("td",{parentName:"tr",align:null},"Logical operator"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"or"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"and"))))),(0,r.mdx)("h4",{id:"example"},"Example"),(0,r.mdx)("p",null,"Example of a nested condition in SQL:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"WHERE ((billing.entity_id IS NULL AND ((billing.entity_id < '200' AND billing.entity_id != '42') AND (billing.entity_id > '200' OR billing.entity_id != '201'))))\n")),(0,r.mdx)("p",null,"Example of a nested condition in Report XML:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<filter glue="and">\n    <condition attribute="entity_id" operator="null" />\n    <filter glue="and">\n        <condition attribute="entity_id" operator="lt">200</condition>\n        <condition attribute="entity_id" operator="neq">42</condition>\n    </filter>\n    <filter glue="or">\n        <condition attribute="entity_id" operator="gt">200</condition>\n        <condition attribute="entity_id" operator="neq">201</condition>\n    </filter>\n</filter>\n')),(0,r.mdx)("h3",{id:"conditions"},(0,r.mdx)("inlineCode",{parentName:"h3"},"<conditions>")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"<conditions>")," node contains the following attributes:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"attribute")),(0,r.mdx)("td",{parentName:"tr",align:null},"Column name in the database."),(0,r.mdx)("td",{parentName:"tr",align:null},"string")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"type")),(0,r.mdx)("td",{parentName:"tr",align:null},"Type of comparison value."),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"value")," for a scalar value (default)",(0,r.mdx)("br",null)," ",(0,r.mdx)("inlineCode",{parentName:"td"},"identifier")," for a column")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"operator")),(0,r.mdx)("td",{parentName:"tr",align:null},"Comparison operator"),(0,r.mdx)("td",{parentName:"tr",align:null},"Required")))),(0,r.mdx)("p",null,"Comparison operator is used to compare columns with the value or columns that can be specified inside the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<conditions>")," XML node."),(0,r.mdx)("p",null,"You can find all the supported comparison operators in ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Analytics\\ReportXml\\DB\\ConditionResolver::$conditionMap"),"."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-advanced-reporting-report-xml-md-4d2970318a0db3c27044.js.map