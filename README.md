# 🐙 OctoCatGPT

OctoCatGPT is a GitHub Probot App that uses OpenAI's GPT-4 to provide AI insights on issues and pull requests. Whenever an issue is opened or a pull request is created or updated, OctoGPT automatically reviews the content and posts a comment with AI insights.

## 🌟 Features

- 📝 Auto comments on new issues with AI insights
- 🔍 Reviews code changes in pull requests and provides AI insights

## 🚀 Setup

### 🖥️ Local Setup

1. 📂 Clone the repository:

   ```bash
   git clone https://github.com/PunGrumpy/octogpt.git
   cd octogpt
   ```

2. 📦 Install dependencies:

   ```bash
   pnpm install
   ```

3. 📄 Copy the `.env.example` file to a new file named `.env`:

   ```bash
   cp .env.example .env
   ```

4. 🔑 Open the `.env` file and replace the placeholders with your actual values.

5. 🏃 Run the bot:
   ```bash
   pnpm start
   ```

### 🐳 Docker Setup

1. 📂 Clone the repository:

   ```bash
   git clone https://github.com/PunGrumpy/octogpt.git
   cd octogpt
   ```

2. 📄 Copy the `.env.example` file to a new file named `.env`:

   ```bash
   cp .env.example .env
   ```

3. 🔑 Open the `.env` file and replace the placeholders with your actual values.

4. 🐳 Build and run the Docker image:
   ```bash
   docker compose up --build -d
   ```

## 🤝 Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## 📜 License

This project is licensed under the ISC License - see the `LICENSE` file for details.
