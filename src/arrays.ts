
import {SuperHero} from './customTypes';

var superheroes: SuperHero[] = [];

superheroes.push({
    realName: "Clark Kent",
    superName: "Superman"
});

export default () => {
    console.log(`

        * Arrays (compiler validates the type of elements in, say, push method)

            var superheroes: SuperHero[] = [];

            // SUCCESS CASE: Adding a superhero-compliant object:
            superheroes.push({
                realName: 'Clark Kent',");
                superName: 'Superman'");
            });
            
            // ERROR CASE: Adding a superhero non-compliant object will throw error on compile-time:

            superheroes.push({
                fakeName: 'Superheroes do not have a fake name'
            });
            
            ERROR: Object literal may only specify known properties, and 'fakeName' does not exist in type 'SuperHero'.
    `);  
}
