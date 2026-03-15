# 3-tier-kubernetes-project-

📌 Project Overview

This project demonstrates the deployment of a 3-Tier Web Application Architecture using Docker containers and Kubernetes (Minikube).

**The application consists of:**

Frontend Layer – User interface that communicates with the backend API

Backend Layer – REST API handling business logic

Database Layer – MongoDB database storing application data

The goal of this project is to demonstrate containerization, Kubernetes deployments, service communication, and namespace management in a local Kubernetes cluster.

🏗 **Architecture**

        User Browser
             │
             ▼
      Frontend Service
             │
             ▼
        Backend API
             │
             ▼
          MongoDB


          
**Kubernetes Components Used**

  Deployment:- Manages application pods

  
  Service:- Enables communication between pods

  
  Namespace :- Isolates application resources

  
  Docker:- Containerization of applications
  
  
  Minikube :- Local Kubernetes cluster

  

**🧰 Tech Stack**

   Docker :- Containerization

   
   Kubernetes :- Container orchestration

   
   Minikube :- Local Kubernetes environment

   
   Python Flask :- Backend & Frontend services

   
   MongoDB :- NoSQL database


**📂 Project Structure**

3-tier-kubernetes-project
│
├── frontend
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── backend
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── k8s
│   ├── namespace.yaml
│   ├── mongodb-deployment.yaml
│   ├── mongodb-service.yaml
│   ├── backend-deployment.yaml
│   └── frontend-deployment.yaml
│
└── README.md


🐳 Docker Image Build

**Build the application images locally.**

docker build -t frontend-app ./frontend
docker build -t backend-app:v2 ./backend


**☸ Kubernetes Deployment**

1️. Start Minikube
minikube start

2️. Create Namespace
kubectl apply -f k8s/namespace.yaml

3️. Deploy Application
kubectl apply -f k8s/

4. Verify Deployment

5. Check the running pods
kubectl get pods -n three-tier

Expected output:

frontend     Running

backend      Running

mongodb      Running

6. Check services:
kubectl get svc -n three-tier

7. Access the Application

8. Expose the frontend service:
minikube service frontend-service -n three-tier

This will open the application in your browser.

**📊 Kubernetes Dashboard**

9. Launch the dashboard:
minikube dashboard

10. The dashboard provides a visual interface for:

Pods
Deployments
Services
Logs
Resource usage


**🎯 Key Learning Outcomes**

✔ Containerizing applications using Docker


✔ Deploying multi-tier applications on Kubernetes


✔ Managing Kubernetes Deployments and Services


✔ Using namespaces for resource isolation


✔ Running Kubernetes locally with Minikube




## 🔄 CI/CD Pipeline

A Continuous Integration and Continuous Deployment pipeline has been implemented using **GitHub Actions** to automate the build and deployment process.

### Workflow Overview

1. Code is pushed to the GitHub repository.

2. The CI/CD pipeline is automatically triggered.
   
3. Docker images for the frontend and backend services are built.
   
4. The images are pushed to Docker Hub.
   
5. Kubernetes deployments pull the latest images and update the running services.

### Pipeline Stages

- **Source Control:** GitHub repository
  
- **Build:** Docker image build for frontend and backend services
  
- **Push:** Images pushed to Docker Hub registry
  
- **Deploy:** Kubernetes deployments updated with the latest images


## 📊 Monitoring and Observability

Monitoring has been implemented to track the performance and health of the Kubernetes cluster and application services.

### Monitoring Stack

The monitoring stack consists of:

- :contentReference[oaicite:4]{index=4} for metrics collection
- :contentReference[oaicite:5]{index=5} for metrics visualization

Prometheus collects metrics from Kubernetes components, containers, and application pods. Grafana is used to build dashboards that visualize these metrics in real time.

### Metrics Monitored

The Grafana dashboard includes visualization of:

- CPU usage of pods and containers
  
- Memory usage
  
- Network receive and transmit bandwidth
  
- Pod throughput
  
- Storage I/O operations
  
- Cluster resource utilization


### Dashboard Configuration

The Grafana dashboard configuration is stored in the repository for reproducibility:


This allows the dashboard to be imported directly into Grafana to recreate the same monitoring setup.


### Monitoring Architecture

Kubernetes → Prometheus → Grafana Dashboard

Prometheus scrapes metrics from Kubernetes nodes, pods, and services, while Grafana queries Prometheus to display real-time monitoring dashboards.

**👤 Author**
Aneesh.S


Linkedin :- www.linkedin.com/in/aneesh-siva-a958b4249
