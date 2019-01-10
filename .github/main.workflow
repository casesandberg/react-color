workflow "Codebase" {
  on = "push"
  resolves = ["2. Lint"]
}

action "1. Install Packages" {
  uses = "actions/npm@master"
  args = "install"
}

 action "2. Lint" {
  needs = "Install Packages"
  uses = "actions/npm@master"
  runs = "run lint"
  args = ["-- --debug"]
}
