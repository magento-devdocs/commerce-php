"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[90693],{12092:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return c}});var t=n(87462),r=n(63366),s=(n(15007),n(64983)),o=n(91515),p=n(81581),m=["components"],d={},i={_frontmatter:d},l=o.Z;function c(e){var a=e.components,n=(0,r.Z)(e,m);return(0,s.mdx)(l,(0,t.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)(p.default,{mdxType:"Docs"}),(0,s.mdx)("h1",{id:"response-handler"},"Response Handler"),(0,s.mdx)("p",null,"Response Handler is a component of the Adobe Commerce payment provider gateway, that processes payment provider responses."),(0,s.mdx)("p",null,"Typically, the response requires one of the following actions:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Modify the ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/order-status"},"order status"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Save information that was provided in a transaction response")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Send an email"))),(0,s.mdx)("p",null,"The response handler only modifies the order state, based on the ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/payment-gateway"},"payment gateway")," response. It does not perform any other required actions."),(0,s.mdx)("h2",{id:"interface"},"Interface"),(0,s.mdx)("p",null,"Basic interface for a response handler is ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Gateway/Response/HandlerInterface.php"},(0,s.mdx)("inlineCode",{parentName:"a"},"Magento\\Payment\\Gateway\\Response\\HandlerInterface"))),(0,s.mdx)("h3",{id:"useful-implementations"},"Useful implementations"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Payment\\Gateway\\Response\\HandlerChain")," might be used as a basic container of response handlers, handling different parts."),(0,s.mdx)("h3",{id:"example"},"Example"),(0,s.mdx)("p",null,"Example of a simple response handler (",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/app/code/Magento/Braintree/Gateway/Response/PayPalDetailsHandler.php"},(0,s.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Braintree/Gateway/Response/PayPalDetailsHandler.php")),"):"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"class PayPalDetailsHandler implements HandlerInterface\n{\n    const PAYMENT_ID = 'paymentId';\n\n    const PAYER_EMAIL = 'payerEmail';\n\n    /**\n     * @var SubjectReader\n     */\n    private $subjectReader;\n\n    /**\n     * Constructor\n     *\n     * @param SubjectReader $subjectReader\n     */\n    public function __construct(SubjectReader $subjectReader)\n    {\n        $this->subjectReader = $subjectReader;\n    }\n\n    /**\n     * @inheritdoc\n     */\n    public function handle(array $handlingSubject, array $response)\n    {\n        $paymentDO = $this->subjectReader->readPayment($handlingSubject);\n\n        /** @var \\Braintree\\Transaction $transaction */\n        $transaction = $this->subjectReader->readTransaction($response);\n\n        /** @var OrderPaymentInterface $payment */\n        $payment = $paymentDO->getPayment();\n\n        $payPal = $this->subjectReader->readPayPal($transaction);\n        $payment->setAdditionalInformation(self::PAYMENT_ID, $payPal[self::PAYMENT_ID]);\n        $payment->setAdditionalInformation(self::PAYER_EMAIL, $payPal[self::PAYER_EMAIL]);\n    }\n}\n")),(0,s.mdx)("p",null,"(The code sample is from Magento Open Source v2.1. Although the payment provider gateway was added in v2.0, the particular default implementation using the gateway were added in v2.1)."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-payment-gateway-response-handler-md-17d81d978197e7951eaa.js.map