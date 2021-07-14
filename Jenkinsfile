pipeline {
    agent any 
    stages {

        stage('install') {
            steps {
                sh 'npm install'
                sh 'node run_server.js'
            }
        }

        stage('test') {
                   
            steps {
                    sh 'xvfb-run krcli --browser "chrome" --extension "/home/bthang/desktop/a2/a2/katalon-recorder-private/src" -t "./test/webapp.html" --driver "/home/bthang/desktop/chromedriver/chromedriver" --task-name "from jenkins256" --output-path "/home/bthang/.config/krcli/jenkins_output" ' 
                    sh 'zip -r ./jenkins_output.zip /home/bthang/.config/krcli/jenkins_output'
            }
            post {
                always {
                    archiveArtifacts 'jenkins_output.zip'
                }
            }
        }
  


    }
}