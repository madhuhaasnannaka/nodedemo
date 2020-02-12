const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://localhost:9000/',
       token : '4ea57303c832f76242362c6cd9c9a73e63c27016',
       options : {
       'sonar.login': '4ea57303c832f76242362c6cd9c9a73e63c27016',
       'sonar.organization': 'lttsdevops',
       'sonar.projectKey': 'lttsdevops_sample-nodejs-project',
       'sonar.projectVersion': '1.0',
       'sonar.language': 'js',
       'sonar.sourceEncoding': 'UTF-8',
       //'sonar.sources': '.',
       'sonar.inclusions' : '**', // Entry point of your code
       'sonar.exclusions': '*.test.*',
       'sonar.tests': '.',
       'sonar.test.inclusions': '**/testing/**,**/*.spec.ts',
       'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
       'sonar.testExecutionReportPaths': 'test-report.xml'
       

       }
     }, () => {});
