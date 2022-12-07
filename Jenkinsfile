pipeline {
    agent any 
    stages {
        stage('git repo & clean') { 
            steps {
                sh "rm -rfv payapi-agency"
                sh "git clone https://github.com/kurucz07/payapi-agency.git"
                sh "mvn clean -f ${/var/lib/jenkins/workspace/staticapp/payapi-agency}"
            }
        }
        stage('install') { 
            steps {
                sh "mvn install -f ${/var/lib/jenkins/workspace/staticapp/payapi-agency}"
            }
        }
        stage('test') { 
            steps {
                sh "mvn test -f ${/var/lib/jenkins/workspace/staticapp/payapi-agency}"
            }
        }
       stage('package') { 
            steps {
                sh "mvn package -f ${/var/lib/jenkins/workspace/staticapp/payapi-agency}"
            }
       }
    }
}
