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

**Components**	        **Purpose**

  Deployment	        Manages application pods
  Service	            Enables communication between pods
  Namespace	          Isolates application resources
  Docker	            Containerization of applications
  Minikube	          Local Kubernetes cluster

**🧰 Tech Stack**

**Technology**	         **Usage**
   Docker	            Containerization
   Kubernetes	        Container orchestration
   Minikube	          Local Kubernetes environment
   Python Flask	      Backend & Frontend services
   MongoDB	          NoSQL database


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

1️⃣ Start Minikube
minikube start
2️⃣ Create Namespace
kubectl apply -f k8s/namespace.yaml
3️⃣ Deploy Application
kubectl apply -f k8s/

**🔍 Verify Deployment**

**Check the running pods:**

kubectl get pods -n three-tier

Expected output:

frontend     Running
backend      Running
mongodb      Running

**Check services:**

kubectl get svc -n three-tier

**🌐 Access the Application**

Expose the frontend service:

minikube service frontend-service -n three-tier

This will open the application in your browser.

**📊 Kubernetes Dashboard**

Launch the dashboard:

minikube dashboard

The dashboard provides a visual interface for:

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

**🚀 Future Improvements**

Possible enhancements for this project:

Implement CI/CD pipeline using GitHub Actions
Add monitoring stack using Prometheus and Grafana
Configure Ingress Controller for domain-based routing
Deploy to a cloud Kubernetes service such as Amazon EKS

**👤 Author**
Aneesh .S

GitHub:

https://github.com/YOUR_USERNAME
