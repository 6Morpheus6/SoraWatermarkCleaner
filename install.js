module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/linkedlist771/SoraWatermarkCleaner app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv_python: "3.12",
        venv: ".venv",
        path: "app",
        message: [
          "uv sync --force-reinstall --no-cache"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: ".venv",
          path: "app",
          // xformers: true
          // triton: true
          // sageattention: true
        }
      }
    }
  ]
}
