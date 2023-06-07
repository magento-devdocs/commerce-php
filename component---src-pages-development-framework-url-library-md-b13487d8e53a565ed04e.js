"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[7042],{83180:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return p}});var a=t(87462),r=t(63366),d=(t(15007),t(64983)),m=t(91515),o=["components"],l={},i={_frontmatter:l},c=m.Z;function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,d.mdx)(c,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"url-library"},"URL library"),(0,d.mdx)("p",null,"This URL library provides numerous utilities to work with URLs. Some of the most useful URL utilities are described below."),(0,d.mdx)("h2",{id:"url-utilities"},"URL Utilities"),(0,d.mdx)("h3",{id:"encoder"},"Encoder"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Url/EncoderInterface.php"},(0,d.mdx)("inlineCode",{parentName:"a"},"Magento\\Framework\\Url\\EncoderInterface"))," provides a method to ",(0,d.mdx)("inlineCode",{parentName:"p"},"encode")," the URL provided to it into a base64 format and also escapes the special charaters described in the table below."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Special Character"),(0,d.mdx)("th",{parentName:"tr",align:null},"Encoded Value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"+")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"-"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"_"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"=")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},","))))),(0,d.mdx)("h3",{id:"decoder"},"Decoder"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Url/DecoderInterface.php"},(0,d.mdx)("inlineCode",{parentName:"a"},"Magento\\Framework\\Url\\DecoderInterface"))," provides a method to ",(0,d.mdx)("inlineCode",{parentName:"p"},"decode")," the base64 encoded URL provided to it and also decodes the special characters described in the table below."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Special Character"),(0,d.mdx)("th",{parentName:"tr",align:null},"Decoded Value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"-")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"+"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"_")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},",")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"="))))),(0,d.mdx)("h2",{id:"usage"},"Usage"),(0,d.mdx)("p",null,"Declare ",(0,d.mdx)("inlineCode",{parentName:"p"},"DecoderInterface")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"EncoderInterface")," as a ",(0,d.mdx)("a",{parentName:"p",href:"../components/dependency-injection.md"},"constructor dependency")," to get an instance of these classes."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-php"},"use Magento\\Framework\\Url\\DecoderInterface;\nuse Magento\\Framework\\Url\\EncoderInterface;\n\n/**\n * @var EncoderInterface\n */\nprivate $encoder;\n\n/**\n * @var DecoderInterface\n */\nprivate $decoder;\n\n/**\n  * QuickCartTaxInput constructor.\n  *\n  * @param EncoderInterface $encoder\n  * @param DecoderInterface $decoder\n  */\npublic function __construct(\n    EncoderInterface $encoder,\n    DecoderInterface $decoder\n) {\n  $this->encoder = $encoder;\n  $this->decoder = $decoder;\n}\n\n/**\n * Encodes URL to base64 format and escapes special characters.\n *\n * @param string $url\n *\n * @return string\n */\npublic function encodeURL($url): string\n{\n  return $this->encoder->encode($url);\n}\n\n/**\n * Decodes URL from base64 format and special characters.\n *\n * @param string $encodedUrl\n *\n * @return string\n */\npublic function decodeURL($encodedUrl): string\n{\n  return $this->decoder->decode($encodedUrl);\n}\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-framework-url-library-md-b13487d8e53a565ed04e.js.map