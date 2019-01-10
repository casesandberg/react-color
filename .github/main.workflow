workflow "Codebase" {
  on = "push"
  resolves = ["Linting"]
}

action "Installing Packages" {
  uses = "actions/npm@master"
  args = "install"
}

 action "Linting" {
  needs = "Installing Packages"
  uses = "actions/npm@master"
  args = "run lint"
}
