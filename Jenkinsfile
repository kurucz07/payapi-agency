pipeline {
    agent any 
    stages {
        stage('git repo & clean') { 
            steps {
               // sh "sudo rm -rfv payapi-agency"
                sh "git clone https://github.com/kurucz07/payapi-agency.git"
                sh "mvn clean -f payapi-agency"
            }
        }
        stage('install') { 
            steps {
                sh "mvn install -f payapi-agency"
            }
        }
        stage('test') { 
            steps {
                sh "mvn test -f payapi-agency"
            }
        }
       stage('package') { 
            steps {
                sh "mvn package -f payapi-agency"
            }
       }
    }
}
