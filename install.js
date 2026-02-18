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
        path: "app",
        message: [
          "python -c \"f='pyproject.toml'; c=open(f).read(); c=c if '[tool.setuptools.packages.find]' in c else c+'\\n[tool.setuptools.packages.find]\\nwhere = [\\\".\\\"]\\ninclude = [\\\"sorawm\\\", \\\"sorawm.*\\\"]\\n'; open(f, 'w').write(c)\""
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
          'uv pip install "setuptools<70" wheel packaging',
          "uv pip install . --no-build-isolation"
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
