# 🚀 Vue App with Docker

This project is a Vue application containerized using Docker. It allows you to quickly set up and run the frontend environment with minimal configuration.

## 🛠 Prerequisites
Before running the application, ensure you have the following installed:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 📦 Setup & Run
Follow these steps to get started:

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```

2. **Start the container**
   ```sh
   docker compose up -d
   ```

3. **Access the application**
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 🔄 Stopping the Container
To stop and remove the container, run:
```sh
docker compose down
```

## 🛠 Development Mode
If you make changes to your code, they will be reflected instantly due to the mounted volume.

## ⚡️ Troubleshooting
- If you encounter permission issues, try running Docker with `sudo` (Linux users)
- If the frontend doesn't start, try rebuilding the container:
  ```sh
  docker compose up --build
  ```

## 📜 License
This project is licensed under the MIT License.

---

Happy coding! 🚀

