
import showSetupDescription from './setup';
import showVariablesExample from './variablesDefinition';
import showFunctionsExample from './functions';
import showCustomTypesExamples, {SuperHero} from './customTypes';
import showArraysExamples from './arrays';
import showLoopingExample from './looping';
import showClassesExample from './typeScriptClasses';
import showInheritanceExample from './inheritance';
import showInterfacesExample from './interfaces';
import showGenericFunctionsExamples from './genericFunctions';
import showGenericClassExample from './genericClasses';
import showDestructuringExample from './destructuring';
import showSpreadOperatorExample from './spreadOperator';
import showEnumerationExample from './enumerations';

console.log(`
 ------------------------------------------------------------------
    TypeScript Features Examples
 ------------------------------------------------------------------
`);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = [
    {option: '1', label: '   TypeScript Compiler Setup', exFunc: showSetupDescription},
    {option: '2.1', label: ' Variables', exFunc: showVariablesExample},
    {option: '2.2', label: ' Custom types', exFunc: showCustomTypesExamples},
    {option: '2.3', label: ' Arrays', exFunc: showArraysExamples},
    {option: '3', label: '   Functions', exFunc: showFunctionsExample},
    {option: '4', label: '   Looping', exFunc: showLoopingExample},
    {option: '5.1', label: ' Classes', exFunc: showClassesExample},
    {option: '5.2', label: ' Interfaces', exFunc: showInterfacesExample},
    {option: '5.3', label: ' Inheritance', exFunc: showInheritanceExample},
    {option: '6.1', label: ' Generic Functions', exFunc: showGenericFunctionsExamples},
    {option: '6.2', label: ' Generic Class', exFunc: showGenericClassExample},
    {option: '7', label: '   Enumeration', exFunc: showEnumerationExample},
    {option: '8.1', label: ' Destructuring', exFunc: showDestructuringExample},
    {option: '8.2', label: ' Spread Operator', exFunc: showSpreadOperatorExample},
    {option: '0', label: '   Exit', exFunc: () => rl.close() }
];

const showMenu = () => {
    rl.question(`
        Please choose an example:
        ${menu.reduce((accum, cur) => `${accum}        ${cur.option}.${cur.label}\n`,'\n')}
        `
    , (answer: string) => handleAnswer(answer));
}

const askConfirmToContinue = () => {
  rl.question('\n        Press enter to coninue...',
      (answer: string) => showMenu()
  );
}

const handleAnswer = (answer: string) => {
  answer = answer.trim();
  const option = menu.find((elem) => (
    elem.option === answer || `${elem.option}.` === answer));

  if (option) {
    option.exFunc();
  } else {
    console.log('\n        *** Wrong selection. Type 0 if you want to exit.');
  }

  if (!option || option.option !== '0') {
    askConfirmToContinue();
  }
}

showMenu();