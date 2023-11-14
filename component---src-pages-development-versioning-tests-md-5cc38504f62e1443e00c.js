"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[63123],{18642:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return x}});var a=n(87462),d=n(45987),m=(n(35776),n(3905)),r=n(91515);const l=["components"],i={},p={_frontmatter:i},o=r.Z;function x(e){let{components:t}=e,n=(0,d.Z)(e,l);return(0,m.mdx)(o,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"mftf-test-versioning-and-backward-compatibility"},"MFTF test versioning and backward compatibility"),(0,m.mdx)("h2",{id:"goals-and-requirements"},"Goals and requirements"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},"Release MFTF tests as a separate package on repo.magento.com."),(0,m.mdx)("li",{parentName:"ol"},"Define the versioning strategy for MFTF test packages."),(0,m.mdx)("li",{parentName:"ol"},"Outline what is considered a backward incompatible change to MFTF tests."),(0,m.mdx)("li",{parentName:"ol"},"List of what should be implemented.")),(0,m.mdx)("h2",{id:"backward-compatibility-for-mftf-tests"},"Backward compatibility for MFTF tests"),(0,m.mdx)("p",null,"When a test undergoes changes, but achieves the same testing results as before and remains compatible with potential test customizations, this is defined as a 'backwards compatible' change."),(0,m.mdx)("p",null,"Types of changes:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("strong",{parentName:"li"},"Test Flow change (Test/ActionGroup)")," - A backwards compatible modification of a test flow would not diminish the original set of actions in the test. Some changes may change an action's sequence (behavior), but they allow any extension to achieve the same test results without changing the test extension (e.g a 'merge file')."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("strong",{parentName:"li"},"Test Entity change (Data/Section/Page/Metadata)")," - Compatible modifications of entities are 1) adding new entities or 2) updating a ",(0,m.mdx)("inlineCode",{parentName:"li"},"value")," of an existing entity in a way where the test will ",(0,m.mdx)("strong",{parentName:"li"},"NOT")," require updates."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("strong",{parentName:"li"},"Test Annotation change")," - Annotations can be changed without limitation and will always be considered a backward compatible change, but removing or changing a ",(0,m.mdx)("inlineCode",{parentName:"li"},"<group />")," annotation will be considered a backward incompatible change."),(0,m.mdx)("li",{parentName:"ul"},"Changes which delete and/or rename a (Test/Action Group/Data/Metadata/Page/Section/Action)'s ",(0,m.mdx)("inlineCode",{parentName:"li"},"id")," attribute will be considered a backward incompatible change. Changing a reference to a data entity will also be considered a backward incompatible change.")),(0,m.mdx)("h2",{id:"versioning-policy"},"Versioning policy"),(0,m.mdx)("p",null,"The approach of defining what each release should include was taken from ",(0,m.mdx)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),"."),(0,m.mdx)("p",null,"3-component version numbers:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-text"},"   X.Y.Z\n   | | |\n   | | +-- Backward Compatible changes (bug fixes)\n   | +---- Backward Compatible changes (new features)\n   +------ Backward Incompatible changes\n")),(0,m.mdx)("h3",{id:"z-release"},"Z release"),(0,m.mdx)("p",null,"Patch version ",(0,m.mdx)("strong",{parentName:"p"},"Z")," MUST be incremented if only backward compatible changes to tests are introduced.\nFor instance: a fix which aims to resolve test flakiness. This can be done by updating an unreliable selector, adding a ",(0,m.mdx)("inlineCode",{parentName:"p"},"wait")," to an element, or updating a data entity value."),(0,m.mdx)("h3",{id:"y-release"},"Y release"),(0,m.mdx)("p",null,"Minor version ",(0,m.mdx)("strong",{parentName:"p"},"Y")," MUST be incremented if a new, backwards compatible test or test entity is introduced.\nIt MUST be incremented if any test or test entity is marked as ",(0,m.mdx)("inlineCode",{parentName:"p"},"deprecated"),".\nIt MAY include patch level changes. Patch version MUST be reset to 0 when the minor version is incremented."),(0,m.mdx)("h3",{id:"x-release"},"X release"),(0,m.mdx)("p",null,"Major version ",(0,m.mdx)("strong",{parentName:"p"},"X")," MUST be incremented if any backwards incompatible changes are introduced to a test or test entity.\nIt MAY include minor and patch level changes. Patch and minor version MUST be reset to 0 when the major version is incremented."),(0,m.mdx)("h2",{id:"implementation-tasks"},"Implementation tasks"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},"Add Semantic Version analyzer to be able automatically define the release type of the MFTF tests package."),(0,m.mdx)("li",{parentName:"ol"},"Update publication infrastructure to exclude tests from ",(0,m.mdx)("inlineCode",{parentName:"li"},"magento2-module")," package type."),(0,m.mdx)("li",{parentName:"ol"},"Introduce publication functionality for publishing ",(0,m.mdx)("inlineCode",{parentName:"li"},"magento2-test-module")," package type."),(0,m.mdx)("li",{parentName:"ol"},"Create a metapackage with test packages specifically for Adobe Commerce and Magento Open Source.")),(0,m.mdx)("h2",{id:"version-increase-matrix"},"Version increase matrix"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Entity Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Change"),(0,m.mdx)("th",{parentName:"tr",align:null},"Version Increase"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"ActionGroup"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," type changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," attribute changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<argument>")," with ",(0,m.mdx)("inlineCode",{parentName:"td"},"defaultValue"),"added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<argument>")," without ",(0,m.mdx)("inlineCode",{parentName:"td"},"defaultValue")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<argument>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<argument>")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<remove>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<remove>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Data"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<array>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<array>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<array>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<item>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<data>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<data>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<required-entity>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<required-entity>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<var>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<var>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," type added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," type removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<entity>")," type changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Metadata"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<operation>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<operation>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<operation>")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<operation>")," child element added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<operation>")," child element removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Page"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<page>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<page>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<page>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<section>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<page>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<section>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Section"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<section>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<section>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<section>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<element>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<section>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<element>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<section>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<element>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"selector")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<section>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<element>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"type")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<section>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<element>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"parameterized")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Test"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," sequence changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," type (",(0,m.mdx)("inlineCode",{parentName:"td"},"click"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"fillField"),", etc) changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"ref")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," sequence changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," type (",(0,m.mdx)("inlineCode",{parentName:"td"},"click"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"fillField"),", etc) changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"ref")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<annotations>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<annotation>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<annotations>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<annotation>")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<annotations>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<annotation>")," GROUP removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<remove>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<test>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<remove>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Suite"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<include/exclude>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<group/test/module>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<include/exclude>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<group/test/module>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<remove>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<remove>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," sequence changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<action>")," type (",(0,m.mdx)("inlineCode",{parentName:"td"},"click"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"fillField"),", etc) changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"PATCH")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<suite>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<before/after>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"<actionGroup>")," ",(0,m.mdx)("inlineCode",{parentName:"td"},"ref")," changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")))),(0,m.mdx)("hr",null),(0,m.mdx)("p",null," ⃰ - ",(0,m.mdx)("inlineCode",{parentName:"p"},"<action>")," refers to any of the available ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2-functional-testing-framework/blob/develop/docs/test/actions.md"},"MFTF Actions"),"."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-versioning-tests-md-5cc38504f62e1443e00c.js.map