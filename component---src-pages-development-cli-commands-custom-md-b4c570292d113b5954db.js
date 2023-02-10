"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[34316],{72856:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return l}});var m=a(87462),t=a(63366),o=(a(15007),a(64983)),i=a(91515),r=["components"],d={},p={_frontmatter:d},s=i.Z;function l(e){var n=e.components,a=(0,t.Z)(e,r);return(0,o.mdx)(s,(0,m.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"create-a-custom-command"},"Create a custom command"),(0,o.mdx)("p",null,"Adobe Commerce and Magento Open Source enables your component to add commands to our ",(0,o.mdx)("a",{parentName:"p",href:"https://symfony.com/doc/current/components/console.html"},"Symfony-like command-line interface (CLI)"),"."),(0,o.mdx)("p",null,"Commerce has one command-line interface that performs both installation and configuration tasks: ",(0,o.mdx)("inlineCode",{parentName:"p"},"<magento_root>/bin/magento"),". The new interface performs multiple tasks, including:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Installing Commerce (and related tasks such as creating or updating the database schema, creating the deployment configuration, and so on)."),(0,o.mdx)("li",{parentName:"ul"},"Clearing the cache."),(0,o.mdx)("li",{parentName:"ul"},"Managing indexes, including reindexing."),(0,o.mdx)("li",{parentName:"ul"},"Creating translation dictionaries and translation packages."),(0,o.mdx)("li",{parentName:"ul"},"Generating non-existent classes such as factories and interceptors for plug-ins, generating the dependency injection configuration for the object manager."),(0,o.mdx)("li",{parentName:"ul"},"Deploying static view files."),(0,o.mdx)("li",{parentName:"ul"},"Creating CSS from Less.")),(0,o.mdx)("p",null,"Other benefits:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"A single command (",(0,o.mdx)("inlineCode",{parentName:"li"},"<magento_root>/bin/magento list"),") lists all available installation and configuration commands."),(0,o.mdx)("li",{parentName:"ul"},"Consistent user interface based on Symfony."),(0,o.mdx)("li",{parentName:"ul"},'The CLI is extensible so third party developers can "plug in" to it. This has the additional benefit of eliminating users\' learning curve.'),(0,o.mdx)("li",{parentName:"ul"},"Commands for disabled modules do not display.")),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,"Before you begin, make sure you understand the following:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"All Magento command-line interface (CLI) commands rely on the application and must have access to its context, dependency injections, plug-ins, and so on.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"All CLI commands should be implemented in the scope of your ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," and should depend on the module's status.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Your command can use the Object Manager and dependency injection features; for example, it can use ",(0,o.mdx)("a",{parentName:"p",href:"../components/dependency-injection.md#constructor-injection"},"constructor dependency injection"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Your command should have an unique ",(0,o.mdx)("inlineCode",{parentName:"p"},"name"),", defined in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"configure()")," method of the Command class:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"protected function configure(): void\n{\n    $this->setName('my:first:command');\n    $this->setDescription('This is my first console command.');\n\n    parent::configure();\n}\n...\n")),(0,o.mdx)("p",{parentName:"li"},"or in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"di.xml")," file:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    ...\n    <type name="Magento\\CommandExample\\Console\\Command\\SomeCommand">\n        <arguments>\n            \x3c!-- configure the command name via constructor $name argument --\x3e\n            <argument name="name" xsi:type="string">my:first:command</argument>\n        </arguments>\n    </type>\n    ...\n</config>\n')),(0,o.mdx)("p",{parentName:"li"}," or in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"__construct")," method (declaration is similar to ",(0,o.mdx)("inlineCode",{parentName:"p"},"di.xml"),"):"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"public function __construct()\n{\n    parent::__construct('my:first:command');\n}\n")),(0,o.mdx)("p",{parentName:"li"},"Otherwise the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/symfony/console/blob/master/Application.php#L470"},"Symfony")," framework will return an ",(0,o.mdx)("inlineCode",{parentName:"p"},'The command defined in "<Command class>" cannot have an empty name.')," error."))),(0,o.mdx)("h2",{id:"add-cli-commands-using-dependency-injection"},"Add CLI commands using dependency injection"),(0,o.mdx)("p",null,"The sample modules provide a demonstration of many programming techniques, including adding a CLI command using ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/dependency-injection"},"dependency injection"),". Look at the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2-samples/tree/master/sample-module-command"},(0,o.mdx)("inlineCode",{parentName:"a"},"sample-module-command"))," for an example. The module's ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2-samples/blob/master/sample-module-command/README.md"},"README.md")," discusses how to install it."),(0,o.mdx)("p",null,"Following is a summary of the process:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Create a Command class (the recommended location is ",(0,o.mdx)("inlineCode",{parentName:"p"},"<your component root dir>/Console/Command"),")."),(0,o.mdx)("p",{parentName:"li"},"See ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Store/Console/Command/StoreListCommand.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"<Magento_Store_module_dir>/Console/Command/StoreListCommand.php"))," for example."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\ndeclare(strict_types=1);\n\nnamespace Magento\\CommandExample\\Console\\Command;\n\nuse Magento\\Framework\\Exception\\LocalizedException;\nuse Symfony\\Component\\Console\\Command\\Command;\nuse Symfony\\Component\\Console\\Input\\InputInterface;\nuse Symfony\\Component\\Console\\Input\\InputOption;\nuse Symfony\\Component\\Console\\Output\\OutputInterface;\n\nclass SomeCommand extends Command\n{\n    private const NAME = 'name';\n\n    protected function configure(): void\n    {\n        $this->setName('my:first:command');\n        $this->setDescription('This is my first console command.');\n        $this->addOption(\n            self::NAME,\n            null,\n            InputOption::VALUE_REQUIRED,\n            'Name'\n        );\n\n        parent::configure();\n    }\n\n    /**\n     * Execute the command\n     *\n     * @param InputInterface $input\n     * @param OutputInterface $output\n     *\n     * @return int\n     */\n     protected function execute(InputInterface $input, OutputInterface $output): int\n     {\n         $exitCode = 0;\n         \n         if ($name = $input->getOption(self::NAME)) {\n             $output->writeln('<info>Provided name is `' . $name . '`</info>');\n         }\n\n         $output->writeln('<info>Success message.</info>');\n         $output->writeln('<comment>Some comment.</comment>');\n\n         try {\n             if (rand(0, 1)) {\n                throw new LocalizedException(__('An error occurred.'));\n             }\n         } catch (LocalizedException $e) {\n             $output->writeln(sprintf(\n                 '<error>%s</error>',\n                 $e->getMessage()\n             ));\n             $exitCode = 1;\n         }\n         \n         return $exitCode;\n     }\n}\n")),(0,o.mdx)("p",{parentName:"li"}," Style the output text by using ",(0,o.mdx)("inlineCode",{parentName:"p"},"<error>"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"<info>"),", or ",(0,o.mdx)("inlineCode",{parentName:"p"},"<comment>")," tags. See ",(0,o.mdx)("a",{parentName:"p",href:"https://symfony.com/doc/current/console/coloring.html"},"Symfony")," documentation for more information about styling.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Declare your Command class in ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\Console\\CommandListInterface")," and configure the command name using dependency injection (",(0,o.mdx)("inlineCode",{parentName:"p"},"<your component root dir>/etc/di.xml"),"):"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    ...\n    <type name="Magento\\Framework\\Console\\CommandListInterface">\n        <arguments>\n            <argument name="commands" xsi:type="array">\n                <item name="commandexample_somecommand" xsi:type="object">Magento\\CommandExample\\Console\\Command\\SomeCommand</item>\n            </argument>\n        </arguments>\n    </type>\n    ...\n</config>\n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Clean the ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/cache"},"cache"),":"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento cache:clean\n"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Regenerate the code:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:di:compile\n")))),(0,o.mdx)("h3",{id:"result"},"Result"),(0,o.mdx)("p",null,"As a result, the new command ",(0,o.mdx)("inlineCode",{parentName:"p"},"my:first:command")," that accepts a ",(0,o.mdx)("inlineCode",{parentName:"p"},"--name")," parameter is ready to use."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento my:first:command --name 'John'\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-cli-commands-custom-md-b4c570292d113b5954db.js.map