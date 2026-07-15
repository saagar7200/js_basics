//* git -> vcs
//* github ->  gitlab , bitbucket

// setup   -> v1

// home page -> v2

// register page -> v3

// login -> v4

//! config
//* git config --global --list       -> list global config
//* git config --global user.name  '<your_name>'
//* git config --global user.email  '<your_email>'
//* git config --global init.defaultbranch main
//* git config --global pull.rebase false

//? repository / repo
// folder + .git
// project + history

//? local repo
//? remote repo

//? initialize empty git repository
//* git init

//? workflow
// working directory   -> ready-sate       -> local repo version   -> remote repo
// working directory    -> staging area   -> local repo
//  changes             -> staged changed  -> version
//?                           git add       git commit                 git push origin <branch_name>
//* git add <file_path>
//* git add .
//* git commit -m "<commit_message>"
//* git push origin <branch_name>

// u , m , a

//! branch
//* git branch   -> list all local branch
//* git branch <branch_name>   -> create new branch
//* git switch <branch_name>

//* merge
// git merge <branch_name>
