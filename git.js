//* git & github
// git -> vcs + branching

// github -> gitlab / bitbucket

//* repository / repo [folder + git history]
// local  -> local system repo
// remote -> github repo

//! commands
//* config
//? git config --global --list  -> list git global config
//? git config --global user.name "<user_name>"
//? git config --global user.email "<user_email>"
//? git config --global init.defaultbranch main

//* initialize empty git repository
//? git init

//!working flow
//* changes  ->  staging area [ready state] ->   new version
//* working directory -> staging area -> local repo
//! working directory => git add  -> staging area => git commit -m  -> local repo  => remote repo
//? git add <file_path>  -> git commit -m "<commit_message>" -> new version

//? git status -> shows branch current status

// git add <file_path>
//? git add . -> staged all changes

//! branch
//? git branch  -> list all local branch
//? git branch <branch_name> -> create new branch form current
//? git switch <branch_name>
//! merge
//? git merge <branch_name>

//* merge method
//? 1. fast forward
// main -> A -> B -> c -> D
// test         B -> c -> D

//? 2. 3-way merge
// main -> A -> B -> E -> F
//                               M
// test         B -> c -> D

//* merge conflict

//! git hub
//? remote

//? git remote -v  -> list remote repo list
//? git remote add origin  <remote_repo_url>
//? git remote remove origin  ->  remove  remote repo link

//? git push origin <branch_name>  -> push local commits to remote repo
//? git pull origin <branch_name>  ->  push remote commits to local repo

//* history
// git log
// git log --oneline
// git log --oneline --graph
// git log  test..main --oneline  -> commit difference  => main - test

// stash
//* git stash list
//* git stash -m "<stash message>"  -> add changes to stash with message
//* git stash apply
