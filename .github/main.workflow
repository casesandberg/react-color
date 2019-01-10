workflow "Codebase" {
  on = "push"
  resolves = ["Lint"]
}

action "Install Packages" {
  uses = "actions/npm@master"
  args = "install"
}

 action "Lint" {
  needs = "Install Packages"
  uses = "actions/npm@master"
  args = "run lint"
}
