"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[21702],{45252:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return c}});var a=t(58168),r=t(80045),o=(t(88763),t(15680)),s=t(83407);const i=["components"],l={},p=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var m;const d={_frontmatter:l},u=s.A;function c(e){let{components:n}=e,t=(0,r.A)(e,i);return(0,o.mdx)(u,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"create-an-integration-with-an-external-api"},"Create an integration with an external API"),(0,o.mdx)("p",null,"This tutorial shows you how to create an integration with an external API using ",(0,o.mdx)("a",{parentName:"p",href:"http://docs.guzzlephp.org/en/stable/quickstart.html"},"GuzzleHttp")," library, that is included in the package."),(0,o.mdx)("p",null,"Guzzle is a PHP HTTP client that makes it easy to create some integrations with some web services.\nIts implementation code is more simpler, cleaner and readable, in comparision with cURL."),(0,o.mdx)("p",null,"GuzzleHttp uses cURL by default, but it can use any HTTP client that you want other than cURL like PHP's stream wrapper or sockets, in case ",(0,o.mdx)("inlineCode",{parentName:"p"},"curl")," isn't installed on your Web Server."),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"It's much easier to cover a GuzzleHttp implementation by ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/testing/guide/unit/writing-testable-code/"},"Unit Tests"),", as you're able to mock the HTTP requests."),(0,o.mdx)("h2",{id:"request-options"},"Request options"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Option"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"method")),(0,o.mdx)("td",{parentName:"tr",align:null},"HTTP method, any of ",(0,o.mdx)("inlineCode",{parentName:"td"},"GET"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"POST"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"PUT"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"DELETE")),(0,o.mdx)("td",{parentName:"tr",align:null},"String")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"uri")),(0,o.mdx)("td",{parentName:"tr",align:null},"The API endpoint that needs to be called"),(0,o.mdx)("td",{parentName:"tr",align:null},"String")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"params")),(0,o.mdx)("td",{parentName:"tr",align:null},"A list of parameters that needs to be passed to the API"),(0,o.mdx)("td",{parentName:"tr",align:null},"Array")))),(0,o.mdx)("h2",{id:"create-a-github-api-integration"},"Create a GitHub API integration"),(0,o.mdx)("p",null,"In the following example, we're using the ",(0,o.mdx)("a",{parentName:"p",href:"https://api.github.com/"},"Github API")," as a web service and will fetch some data from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"magento/magento2")," repository."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\ndeclare(strict_types=1);\n\nnamespace Vendor\\Module\\Service;\n\nuse GuzzleHttp\\Client;\nuse GuzzleHttp\\ClientFactory;\nuse GuzzleHttp\\Exception\\GuzzleException;\nuse GuzzleHttp\\Psr7\\Response;\nuse GuzzleHttp\\Psr7\\ResponseFactory;\nuse Magento\\Framework\\Webapi\\Rest\\Request;\n\n/**\n * Class GitApiService\n */\nclass GitApiService\n{\n    /**\n     * API request URL\n     */\n    const API_REQUEST_URI = 'https://api.github.com/';\n\n    /**\n     * API request endpoint\n     */\n    const API_REQUEST_ENDPOINT = 'repos/';\n\n    /**\n     * @var ResponseFactory\n     */\n    private $responseFactory;\n\n    /**\n     * @var ClientFactory\n     */\n    private $clientFactory;\n\n    /**\n     * GitApiService constructor\n     *\n     * @param ClientFactory $clientFactory\n     * @param ResponseFactory $responseFactory\n     */\n    public function __construct(\n        ClientFactory $clientFactory,\n        ResponseFactory $responseFactory\n    ) {\n        $this->clientFactory = $clientFactory;\n        $this->responseFactory = $responseFactory;\n    }\n\n    /**\n     * Fetch some data from API\n     */\n    public function execute(): void\n    {\n        $repositoryName = 'magento/magento2';\n        $response = $this->doRequest(static::API_REQUEST_ENDPOINT . $repositoryName);\n        $status = $response->getStatusCode(); // 200 status code\n        $responseBody = $response->getBody();\n        $responseContent = $responseBody->getContents(); // here you will have the API response in JSON format\n        // Add your logic using $responseContent\n    }\n\n    /**\n     * Do API request with provided params\n     *\n     * @param string $uriEndpoint\n     * @param array $params\n     * @param string $requestMethod\n     *\n     * @return Response\n     */\n    private function doRequest(\n        string $uriEndpoint,\n        array $params = [],\n        string $requestMethod = Request::HTTP_METHOD_GET\n    ): Response {\n        /** @var Client $client */\n        $client = $this->clientFactory->create(['config' => [\n            'base_uri' => self::API_REQUEST_URI\n        ]]);\n\n        try {\n            $response = $client->request(\n                $requestMethod,\n                $uriEndpoint,\n                $params\n            );\n        } catch (GuzzleException $exception) {\n            /** @var Response $response */\n            $response = $this->responseFactory->create([\n                'status' => $exception->getCode(),\n                'reason' => $exception->getMessage()\n            ]);\n        }\n\n        return $response;\n    }\n}\n")),(0,o.mdx)("h2",{id:"result"},"Result"),(0,o.mdx)("p",null,"As a result, you get all the available information about the ",(0,o.mdx)("inlineCode",{parentName:"p"},"magento/magento2")," repository."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "name": "magento2",\n  "full_name": "magento/magento2",\n  "private": false,\n  "html_url": "https://github.com/magento/magento2",\n  "description": "All Submissions you make to Magento Inc. (\\"Magento\\") through GitHub are subject to the following terms and conditions: (1) You grant Magento a perpetual, worldwide, non-exclusive, no charge, royalty free, irrevocable license under your applicable copyrights and patents to reproduce, prepare derivative works of, display, publically perform, sublicense and distribute any feedback, ideas, code, or other information ("Submission\\") you submit through GitHub. (2) Your Submission is an original work of authorship and you are the owner or are legally entitled to grant the license stated above. (3) You agree to the Contributor License Agreement found here:  https://github.com/magento/magento2/blob/master/CONTRIBUTOR_LICENSE_AGREEMENT.html",\n  "fork": false,\n  "url": "https://api.github.com/repos/magento/magento2",\n  "homepage": "http://www.magento.com",\n  "size": 559209,\n  "stargazers_count": 8379,\n  "watchers_count": 8379,\n  "language": "PHP",\n  "has_issues": true,\n  "has_projects": false,\n  "has_downloads": true,\n  "has_wiki": true,\n  "has_pages": false,\n  "forks_count": 7405,\n  "archived": false,\n  "disabled": false,\n  "open_issues_count": 1535,\n  "forks": 7405,\n  "open_issues": 1535,\n  "watchers": 8379,\n  "default_branch": "2.4-develop",\n  "subscribers_count": 1421,\n  ...\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-backend-create-api-integration-md-f6017f5241d61ae749e0.js.map