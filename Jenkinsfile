pipeline {
    agent any

    environment {
        IMAGE_NAME = "samikshakamble39/my-app"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Samiksha-Kamble39/node.js_deployment_assignment.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub-creds') {
                        docker.image("${IMAGE_NAME}:latest").push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop my-app || true

                docker rm my-app || true

                docker pull samikshakamble39/my-app:latest

                docker run -d \
                  --name my-app \
                  -p 80:3000 \
                  samikshakamble39/my-app:latest
                '''
            }
        }
    }
}
