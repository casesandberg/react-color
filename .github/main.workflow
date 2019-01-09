workflow "Codebase" {
  on = "push"
  resolves = ["Lint"]
}

 action "Lint" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "npm i && npm run lint"
}
