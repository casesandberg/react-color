workflow "Codebase" {
  on = "push"
  resolves = ["2. Lint"]
}

action "1. Install Packages" {
  uses = "actions/npm@master"
  args = "install"
}

 action "2. Lint" {
  needs = "1. Install Packages"
  uses = "actions/action-builder/shell@master"
  runs = "eslint"
  args = ['packages/**/*.js', '--debug']
}
