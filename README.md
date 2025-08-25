# 🚀 React CI/CD Deployment using Github Action to AWS EC2

This project is a simple **React application** deployed to an **AWS EC2 instance** using **GitHub Actions (CI/CD)**.  
It is mainly for testing and learning purposes to understand how to automatically build and deploy React apps from GitHub to EC2.  

---

## 📌 Features
- Built with **React (create-react-app)**.
- Automated deployment with **GitHub Actions**.
- Hosted on **AWS EC2** with **Apache web server**.
- CI/CD workflow triggers on every push to the `master` branch.

---

## 🛠️ Getting Started

## 1️⃣ Clone the Repository
```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
## 2️⃣ Install Dependencies
```
npm install --legacy-peer-deps
```
## 3️⃣ Run Locally
```
npm start
```

Visit: http://localhost:3000

## ⚙️ Deployment Setup
## 4️⃣ Build React App
```
npm run build
```

This will generate a build/ folder with production-ready static files.

## 5️⃣ GitHub Actions Workflow

A GitHub Actions workflow (.github/workflows/deploy.yml) is configured to:

Install dependencies.

Build the React app.

Deploy the build/ folder to EC2 via SSH.

## ☁️ AWS EC2 Setup

On your EC2 instance (Ubuntu):

## Update system
```
sudo apt update -y && sudo apt upgrade -y
```
## Install Apache
```
sudo apt install -y apache2
```
## Enable & start Apache
```
sudo systemctl enable apache2
sudo systemctl start apache2
```

## Your React app will be deployed to:
```
/var/www/html
```

## Accessible via:
```
http://<your-ec2-public-dns>
```

## 📂 Project Structure
```
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```
## 🤝 Contributing

Contributions are always welcome!
Feel free to fork this repo and submit a pull request with improvements.

## 📜 License

This project is licensed under the MIT License – see the LICENSE
 file for details.

## 🙏 Thanks!

Thank you for checking out this project.
Hope it helps you learn React deployment with GitHub Actions & AWS EC2 🚀

