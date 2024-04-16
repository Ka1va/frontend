pipeline {
  agent any
  stages {
    stage('add ssh_key') {
      when {
        branch 'dev_github'
      }
      environment{
        SSH_KEY = credentials('aws_key_ed')
      }
      steps {
        pwd

        }
      }
   }
}
