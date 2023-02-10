"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[80383],{43257:function(n,e,a){a.r(e),a.d(e,{_frontmatter:function(){return i},default:function(){return u}});var o=a(87462),t=a(63366),c=(a(15007),a(64983)),r=a(91515),s=["components"],i={},d={_frontmatter:i},m=r.Z;function u(n){var e=n.components,a=(0,t.Z)(n,s);return(0,c.mdx)(m,(0,o.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,c.mdx)("p",null,"Magento\\ResourceConnections module adds a mechanism to segregate database connections between master and slave\ndatabase servers based on the request type."),(0,c.mdx)("p",null,"For each master database connection (except the indexer connection) that are configured in db/connection section\nof app/etc/env.php you can add one slave connection that can be configured in db/slave_connection.\nConfiguration format is the same as db/connection. Slave connection name must be the same as associated master\nconnection name. To enable slave connections for specific resources create a slave connection configuration\nby adding slave_connection node as below:"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nreturn array (\n    //...\n    'db' =>\n        array (\n            'connection' =>\n                array (\n                    'default' =>\n                        array (\n                            'host' => 'default-master-host',\n                            'dbname' => 'magento',\n                            'username' => 'magento',\n                            'password' => 'magento',\n                            'active' => '1',\n                        ),\n                ),\n            'slave_connection' =>\n                array (\n                    'default' =>\n                        array (\n                            'host' => 'default-slave-host',\n                            'dbname' => 'magento',\n                            'username' => 'read_only',\n                            'password' => 'password',\n                            'active' => '1',\n                ),\n        ),\n        'table_prefix' => '',\n    ),\n    //.......\n")),(0,c.mdx)("p",null,"To add slave connection for resources other than 'default' repeat the step and add to db/slave_connection\nnew element with same name and slave configuration for specified resource.\nConfig structure retains backward compatibility if module is turned off."),(0,c.mdx)("p",null,"WARNING: 'indexer' connection is not designed to have slave configuration."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-resource-connections-md-845e150cf26123df6b78.js.map