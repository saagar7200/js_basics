// git & gitHub
// vcs

// git

//* repository / repo
// local
// remote

//* config identity
//? git config --global --list          -> list global config.
//? git config --global user.name "<user_name>"
//? git config --global user.email "<user_name>"
//? git config --global init.defaultbranch main
//? git config --global pull.rebase false

//* initialize empty git repo
//? git init

//* working directory (changes)
//* staging area
//* commit
//* repo

// wd -> staging -> local repo (commit)

//? git status
//? git add <file_path>
//? git add .  -> add all changes
//? git commit -m "<commit_message>"

//? git log -> log commit history
//? git log --oneline

// * branch
//? git branch -M main -> rename default branch

//? git branch  -> list all local branch
//? git branch <branch_name> -> create new branch
//? git switch <branch_name>  -> switch branch // git checkout branch_name
//? git switch -c <branch_name> //  git checkout -b <branch_name>   -> create & switch

//* merge
//? git merge <branch_name>

// main: a -> b
// new :      c -> d
// main: a -> b -> c -> d

// main: a -> b -> e -> f
//                          -> merge commit
// new :      b -> c -> d
// main: a -> b -> c -> d -> e -> f ->  merge commit

//* merge conflict
