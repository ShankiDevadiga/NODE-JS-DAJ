# Jenkins-Docker-Ansible Project

This project demonstrates the integration of Jenkins, Docker, and Ansible to automate the build, deployment, and management of a simple Node.js application. The application is built into a Docker image, pushed to Docker Hub, and deployed to AWS EC2 instances using Ansible.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Step 1: Set Up Jenkins](#step-1-set-up-jenkins)
  - [Step 2: Create GitHub Repository](#step-2-create-github-repository)
  - [Step 3: Dockerize the Application](#step-3-dockerize-the-application)
  - [Step 4: Deploy Using Ansible](#step-4-deploy-using-ansible)
- [Verification](#verification)
- [Future Enhancements](#future-enhancements)

## Project Overview

The goal of this project is to create a CI/CD pipeline that automates the process of building, testing, and deploying a Node.js application using Jenkins, Docker, and Ansible. The process includes:

1. **Jenkins:** Pulls the code from GitHub, builds the Docker image, and pushes it to Docker Hub.
2. **Docker:** Containerizes the Node.js application.
3. **Ansible:** Deploys the Docker container to AWS EC2 instances.

## Technologies Used

- **Jenkins:** Continuous Integration and Continuous Deployment (CI/CD) automation server.
- **Docker:** Containerization platform to package the application and its dependencies.
- **Ansible:** Automation tool to manage configurations and deploy applications.
- **Node.js:** JavaScript runtime environment for the application.
- **AWS EC2:** Cloud servers where the application is deployed.
- **GitHub:** Source code management and version control.

## Prerequisites

Before you begin, ensure you have the following:

- **AWS Account:** With access to EC2 instances.
- **GitHub Account:** For version control.
- **Docker Hub Account:** For storing Docker images.
- **Jenkins Installed:** On an AWS EC2 instance.
- **Ansible Installed:** On your local machine or another EC2 instance.

## Setup Instructions

### Step 1: Set Up Jenkins

1. Launch an EC2 instance and install Jenkins.
2. Install necessary plugins: Git, Docker, and Ansible.
3. Configure Jenkins to poll your GitHub repository and build the Docker image.

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub for your project.
2. Add your Node.js application files:
    - `app.js`: Basic Express application.
    - `package.json`: Node.js dependencies.
3. Push your code to GitHub.

### Step 3: Dockerize the Application

1. Create a `Dockerfile` to containerize the Node.js application.
2. Configure Jenkins to build the Docker image and push it to Docker Hub.

### Step 4: Deploy Using Ansible

1. Install Ansible on your local machine or another EC2 instance.
2. Create an `inventory.ini` file listing your EC2 instances.
3. Write an Ansible playbook (`deploy.yml`) to:
    - Install Docker on the target instances.
    - Pull the Docker image from Docker Hub.
    - Run the Docker container.

4. Run the Ansible playbook to deploy your application.

## Verification

1. **Access the Application:**
   - Open your browser and go to `http://<EC2-Public-IP>` to see your application running.

2. **Check Docker Container Status:**
   - SSH into your EC2 instance and run `sudo docker ps` to verify that the container is running.

## Future Enhancements

- **Add Unit Tests:** Integrate automated tests in the Jenkins pipeline.
- **Monitoring:** Set up monitoring tools like Prometheus and Grafana.
- **Scaling:** Implement auto-scaling for your EC2 instances.

---

This project showcases the power of combining Jenkins, Docker, and Ansible for efficient and automated CI/CD pipelines. Feel free to enhance and expand upon it based on your needs.
