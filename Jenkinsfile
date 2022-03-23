pipeline {
    agent any

  stages {
      stage('Deploy for production') {
          when {
              branch "master"
          }
          steps {
             echo 'Deploy master branch!'
             echo 'Building docker images'
             sh '''
                docker build -t 164.132.55.71:5000/todofront:2.0 .
             '''
             echo 'Pushing docker images'
             sh 'docker push 164.132.55.71:5000/todofront:2.0'

             sh '''
                ssh -tt debian@164.132.55.71 <<EOF
                cd ahmed_workspace
                docker-compose pull
                docker-compose up -d
                EOF
             '''
         }
      }
  }
}
