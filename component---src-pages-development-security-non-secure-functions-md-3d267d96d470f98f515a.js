"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[76472],{18250:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return d}});var a=t(87462),i=t(45987),r=(t(35776),t(3905)),o=t(91515);const s=["components"],p={},h={_frontmatter:p},m=o.Z;function d(e){let{components:n}=e,t=(0,i.Z)(e,s);return(0,r.mdx)(m,(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"non-secure-functions"},"Non-secure functions"),(0,r.mdx)("p",null,"Using functions that are known to be exploitable or non-secure can lead to remote code execution or weak cryptography. As a developer, you should avoid using functions that introduce vulnerabilities in your code."),(0,r.mdx)("h2",{id:"php-functions-to-avoid"},"PHP functions to avoid"),(0,r.mdx)("p",null,"The following is a list of PHP functions that are known to be vulnerable and exploitable.\nAvoid using these functions in your code."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.eval.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"eval"))," - Using ",(0,r.mdx)("inlineCode",{parentName:"li"},"eval")," is considered bad practice because of its ability to ",(0,r.mdx)("a",{parentName:"li",href:"https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html"},"execute arbitrary PHP code"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.serialize.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"serialize")),"/",(0,r.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.unserialize.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"unserialize"))," - Attackers can create an exploit for these functions by passing a string with a serialized arbitrary object to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"unserialize")," function to ",(0,r.mdx)("a",{parentName:"li",href:"https://www.owasp.org/index.php/PHP_Object_Injection"},"run arbitrary code"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.md5.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"md5"))," - The algorithm for this function is known to have ",(0,r.mdx)("a",{parentName:"li",href:"https://www.owasp.org/index.php/Guide_to_Cryptography#Hashes"},"cryptographic weaknesses"),".\nYou should never use this function for hashing passwords or any other sensitive data."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.sha1.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"sha1"))," - It is not recommended to use this function to secure passwords. This hashing algorithm has been compromised.\nSee the ",(0,r.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/faq.passwords.php#faq.passwords.fasthash"},"Password Hashing FAQ")," for details and best practices."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.srand.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"srand"))," - Using a predetermined number to seed the random number generator results in a ",(0,r.mdx)("a",{parentName:"li",href:"https://programmers.stackexchange.com/questions/76229/predicting-the-output-of-phps-rand"},"predictable sequence of numbers"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.mt-rand.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"mt_srand"))," - This function is a pseudo-random number generator (PRNG) and is ",(0,r.mdx)("a",{parentName:"li",href:"https://phpsecurity.readthedocs.io/en/latest/Insufficient-Entropy-For-Random-Values.html"},"not cryptographically secure"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.include.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"include"))," - Depends on implementation. If you specifically set the path, then it is secure. An attack could happen if you allow user input to determine the file path without sanitization or checks. For example ",(0,r.mdx)("inlineCode",{parentName:"li"},"include($_GET['file']);"),". The remote file may be processed at the remote server, but also on the local server. If the file from the remote server is processed there and outputted only, ",(0,r.mdx)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.readfile.php"},"readfile()")," is much better function to use. Otherwise, special care should be taken to secure the remote script to produce a valid and desired code.")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-security-non-secure-functions-md-3d267d96d470f98f515a.js.map