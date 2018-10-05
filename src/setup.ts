
export default function show() {
    console.log(`
        * Install the compiler (requires nodejs for npm):
            $ npm install -g typescript

        * Compile sources to .js files:
            # Setup tsconfig.json
            #  Notes:
            #    set "module": "CommonJS" if you'll use NodeJS modules
            #    set include to include all TS source files
            #    set target to ES version to compile to
            #    Run compiler with config file:
            $ tsc --build tsconfig.json

        * Template String
           This file itself was compiled with TypeScript and extensively uses Template Strings.
    `);
}
