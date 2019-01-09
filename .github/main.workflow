workflow "Codebase" {
  on = "push"
  resolves = ["Lint"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Bootstrap" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "postinstallOnly"
}

 action "Lint" {
  needs = "Bootstrap"
  uses = "actions/npm@master"
  runs = "lint"
}
