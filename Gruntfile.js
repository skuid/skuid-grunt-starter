module.exports = function(grunt){

    var clientOptions = {
        'clientId':'{ClientId}',
        'clientSecret':'{ClientSecret}',
    };
    var orgCredsDev = {
        username: '{OrgUsername}',
        password: '{OrgPassword + OrgSecurityToken}'
    };

    var skuidPullConfig = {
        'options': clientOptions,
        'dev':{
            'options':{
                'username': orgCredsDev.username,
                'password': orgCredsDev.password,
                'dest': 'skuidpages/',
                'module': [''],
            }
        }
    };

    var skuidPushConfig = {
        'options': clientOptions,
        'dev': {
            'options': orgCredsDev,
            'files':{
                'src': [grunt.option('pages') || 'skuidpages/*'],
            }
        }
    };

    var pagePackConfig = {
        'options': clientOptions,
        'default':{
            options:{
                'username': orgCredsDev.username,
                'password': orgCredsDev.password,
                'dest': 'resources/',
                'module': [''],
                //use a custom extension instead of .json
                'extension': 'resource',
                'nameMap':{
                    //map No Module pages to the Pages file
                    '':'Pages'
                }
            }
        }
    };

    grunt.initConfig({
        'skuid-pull': skuidPullConfig,
        'skuid-push': skuidPushConfig,
        'skuid-page-pack': pagePackConfig
    });

    grunt.registerTask('pull-pages', ['skuid-pull:dev']);
    grunt.registerTask('push-pages', ['skuid-push:dev']);
    grunt.registerTask('page-pack', ['skuid-page-pack:default']);

    grunt.registerTask('default', ['skuid-pull:dev']);

    grunt.loadNpmTasks('skuid-grunt');

}
