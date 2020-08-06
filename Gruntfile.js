module.exports = function (grunt) {


    /*
    * What to Install:
    *   npm install grunt --save-dev
    *   npm install grunt-contrib-clean --save-dev
    *   npm install grunt-contrib-concat --save-dev
    *   npm install grunt-contrib-copy --save-dev
    *   npm install grunt-contrib-cssmin --save-dev
    *   npm install grunt-contrib-jshint --save-dev
    *   npm install grunt-contrib-watch --save-dev
    *   npm install grunt-terser --save-dev
    */


    let core = {
        node: 'node_modules/',
        root: "public",
        js: "public/js/",
        css: "public/css/",
        img: "public/images/",
        lib: "public/lib/"
    };

    grunt.initConfig({

        clean: {
            js_lib: [`${core.lib}*`],
            js_app: [`${core.js}**/*.min.js`, `${core.js}**/*.map` ],
            css_app: [`${core.css}*.min.css`, `${core.css}*.map` ]
        },

        copy: {
            js_lib: {
                files: [
                    {expand: true, flatten: true, src: [`${core.node}jquery/dist/jquery.*` ], dest: `${core.lib}jquery/`, filter: 'isFile'},

                    {expand: true, flatten: true, src: [`${core.node}bootstrap/dist/css/bootstrap*` ], dest: `${core.lib}bootstrap/css/`, filter: 'isFile'},
                    {expand: true, flatten: true, src: [`${core.node}bootstrap/dist/fonts/*.*` ], dest: `${core.lib}bootstrap/fonts/`, filter: 'isFile'},
                    {expand: true, flatten: true, src: [`${core.node}bootstrap/dist/js/*.*` ], dest: `${core.lib}bootstrap/js/`, filter: 'isFile'},

                    {expand: true, flatten: true, src: [`${core.node}propellerkit/dist/css/*.*` ], dest: `${core.lib}propellerkit/css/`, filter: 'isFile'},
                    {expand: true, flatten: true, src: [`${core.node}propellerkit/dist/fonts/roboto/*.*` ], dest: `${core.lib}propellerkit/fonts/roboto/`, filter: 'isFile'},
                    {expand: true, flatten: true, src: [`${core.node}propellerkit/dist/js/*.*` ], dest: `${core.lib}propellerkit/js/`, filter: 'isFile'},

                    {expand: true, flatten: true, src: [`${core.node}font-awesome/css/*.css` ], dest: `${core.lib}font-awesome/css/`, filter: 'isFile'},
                    {expand: true, flatten: true, src: [`${core.node}font-awesome/fonts/*` ], dest: `${core.lib}font-awesome/fonts/`, filter: 'isFile'},
                    {expand: true, flatten: true, src: [`${core.node}lodash/lodash*.*` ], dest: `${core.lib}lodash/`, filter: 'isFile'},
                    {expand: true, flatten: true, src: [`${core.node}luxon/build/global/luxon*.*` ], dest: `${core.lib}luxon/`, filter: 'isFile'},

                    {expand: true, flatten: true, src: [`${core.node}vue/dist/vue*.*` ], dest: `${core.lib}vue/`, filter: 'isFile'},
                ],
            },
        },

        terser: {
            js_app: {
                options: {
                    mangle: {
                        properties: false
                    },
                    sourceMap: true
                },
                files: [
                    {   expand: true, src: `**/*.js`, dest: `${core.js}`, cwd: `${core.js}`, ext: '.min.js' }
                ]
            }
        },

        cssmin: {
            options: {
                sourceMap: true
            },
            css_app: {
                files: [
                    { expand: true, cwd: `${core.css}`, src: [`*.css`, `!*.min.css`], dest: `${core.css}`, ext: '.min.css' }
                ]
            }
        }
    });

    // App Tasks
    grunt.registerTask('app:clean', ['clean:js_app', 'clean:css_app']);
    grunt.registerTask('app:js', ['clean:js_app', 'terser:js_app']);
    grunt.registerTask('app:css', ['clean:css_app', 'cssmin:css_app']);
    grunt.registerTask('app:build', ['app:js', 'app:css']);

    // Lib Tasks
    grunt.registerTask('lib:clean', ['clean:js_lib']);
    grunt.registerTask('lib:build', ['lib:clean', 'copy:js_lib']);

    // Load NPM Libs
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-terser");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
};
