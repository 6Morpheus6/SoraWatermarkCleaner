module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: ".venv",
        env: { },
        path: "app",
        message: [
          "streamlit run app.py --server.headless true",
        ],
        on: [{
          "event": "/http:\/\/\\S+/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    }
  ]
}
