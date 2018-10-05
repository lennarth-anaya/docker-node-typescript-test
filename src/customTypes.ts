export interface SuperHero {
  realName: String;
  superName: String;
};

const superman: SuperHero = {
  realName: "Clark Kent",
  superName: "Superman"
}

export default () => {
    console.log(`
        * Custom Types (note semi-colons on definition and commas during instantiation)

            var superman: SuperHero = {
                realName: "Clark Kent",
                superName: "Superman"
            }

            superman.superName         ---> ${superman.superName}
    `);
};
