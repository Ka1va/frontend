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
        eval $(ssh-agent -s)
        echo "$SSH_KEY" | tr -d '\r' | ssh-add -
        ssh -o StrictHostKeyChecking=no ubuntu@ 54.193.204.29 "pwd"
        }
      }
   }
}
