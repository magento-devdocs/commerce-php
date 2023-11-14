"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[37640],{99970:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return c}});var n=t(87462),o=t(45987),r=(t(35776),t(3905)),i=t(91515),s=t(89290);const m=["components"],l={},d={_frontmatter:l},p=i.Z;function c(e){let{components:a}=e,t=(0,o.Z)(e,m);return(0,r.mdx)(p,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(s.Z,{mdxType:"Docs"}),(0,r.mdx)("h1",{id:"response-validator"},"Response Validator"),(0,r.mdx)("p",null,"Response Validator is a component of the Adobe Commerce payment provider gateway that performs gateway response verification. This may include low level data formatting, security verification, and even execution of some business logic required by the store configuration."),(0,r.mdx)("p",null,"Response Validator returns a Result object, containing validation result as Boolean value and errors description as a list of ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/lib/internal/Magento/Framework/Phrase.php"},"Phrase"),"."),(0,r.mdx)("h2",{id:"interfaces"},"Interfaces"),(0,r.mdx)("p",null,"Response Validator must implement ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Gateway/Validator/ValidatorInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"Magento\\Payment\\Gateway\\Validator\\ValidatorInterface"))),(0,r.mdx)("p",null,"Result class must implement ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Gateway/Validator/ResultInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"Magento\\Payment\\Gateway\\Validator\\ResultInterface"))),(0,r.mdx)("p",null,"A payment provider integration can have multiple response validators, that should be added to the provider's validator's pool using ",(0,r.mdx)("a",{parentName:"p",href:"../../components/dependency-injection.md"},"dependency injection"),"."),(0,r.mdx)("h2",{id:"useful-implementations"},"Useful implementations"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Gateway/Validator/AbstractValidator.php"},"\\Magento\\Payment\\Gateway\\Validator\\AbstractValidator"),": an abstract class with ability to create a Result object. Can be inherited from by particular response validator implementations.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Gateway/Validator/ValidatorComposite.php"},"\\Magento\\Payment\\Gateway\\Validator\\ValidatorComposite"),": a chain of Validator objects, which are executed one by one and the result gets aggregated into one Result object. This chain can be configured to stop when certain validators fail.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Gateway/Validator/Result.php"},"\\Magento\\Payment\\Gateway\\Validator\\Result"),": base class for Result object. You still have an ability to create a Result of your own, but the default one covers the most amount of cases."))),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)("p",null,"In the following example a response validator is implemented and added to the pool of the Braintree payment provider request validators."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"class AcceptValidator extends AbstractValidator\n{\n    /**\n     * Performs domain-related validation for business object\n     *\n     * @param array $validationSubject\n     * @return ResultInterface\n     */\n    public function validate(array $validationSubject)\n    {\n        $response = SubjectReader::readResponse($validationSubject);\n        $paymentDO = SubjectReader::readPayment($validationSubject);\n\n        $isValid = true;\n        $fails = [];\n\n        $statements = [\n            [\n                $paymentDO->getOrder()->getCurrencyCode() === $response['authCurrency'],\n                __('Currency doesn\\'t match.')\n            ],\n            [\n                sprintf(\n                    '%.2F',\n                    $paymentDO->getOrder()->getGrandTotalAmount()) === $response['authCost'],\n                    __('Amount doesn\\'t match.'\n                )\n            ],\n            [\n                in_array($response['authMode'], ['A', 'E']),\n                __('Not supported response.')\n            ]\n        ];\n\n        foreach ($statements as $statementResult) {\n            if (!$statementResult[0]) {\n                $isValid = false;\n                $fails[] = $statementResult[1];\n            }\n        }\n\n        return $this->createResult($isValid, $fails);\n    }\n}\n")),(0,r.mdx)("p",null,"Now, the newly added validator should be specified for a specific command. Below is an example of specifying a validator for an authorization command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'...\n<virtualType name="BraintreeAuthorizeCommand" type="Magento\\Payment\\Gateway\\Command\\GatewayCommand">\n    <arguments>\n        ...\n        <argument name="validator" xsi:type="object">Magento\\Braintree\\Gateway\\Validator\\AcceptValidator</argument>\n    </arguments>\n</virtualType>\n...\n')),(0,r.mdx)("p",null,"(This code sample was created for demonstration purposes only, it differs from the actual Braintree configuration)."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-payment-gateway-response-validator-md-5ddd3605c10ef48d3c6f.js.map