# 📢 NOTICE

**THIS PROJECT IS NOT WORKING YET. IT IS STILL IN DEVELOPMENT. PLEASE DO NOT USE IT YET.**

## 🐛 ERROR MESSAGE

````bash
Error: write EPIPE
    at afterWriteDispatched (node:internal/stream_base_commons:160:15)
    at writeGeneric (node:internal/stream_base_commons:151:3)
    at Socket._writeGeneric (node:net:905:11)
    at Socket._write (node:net:917:8)
    at writeOrBuffer (node:internal/streams/writable:391:12)
    at _write (node:internal/streams/writable:332:10)
    at Socket.Writable.write (node:internal/streams/writable:336:10)
    at console.value (node:internal/console/constructor:299:16)
    at console.log (node:internal/console/constructor:376:26)
    at Fve (/var/task/sandbox.js:247:12817)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:157:8)
    at emitErrorCloseNT (node:internal/streams/destroy:122:3)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  errno: -32,
  code: 'EPIPE',
  syscall: 'write'
: Sandbox exited with code 1 and signal null
```

If you want to develop this project, please pull request 🙏🏻

---

# 🐙 OctoCatGPT

OctoCatGPT is a GitHub Probot App that uses OpenAI's GPT-4 to provide AI insights on issues and pull requests. Whenever an issue is opened or a pull request is created or updated, OctoCatGPT automatically reviews the content and posts a comment with AI insights.

## 🌟 Features

- 📝 Auto comments on new issues with AI insights
- 🔍 Reviews code changes in pull requests and provides AI insights

## 🚀 Setup

### 🖥️ Local Setup

1. 📂 Clone the repository:

   ```bash
   git clone https://github.com/PunGrumpy/octocatgpt.git
   cd octocatgpt
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
   git clone https://github.com/PunGrumpy/octocatgpt.git
   cd octocatgpt
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
````
