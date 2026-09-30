---
title: 'Top 12 Git commands every developer should know'
description: 'Git is a version control system (VCS) used by developers to keep track of changes they make to code. To make sure you don’t forget these 12 Git commands in your next project, just bookmark this post and keep it as your secret weapon!'
type: 'blog'
url: '/en/blog/git-commands/'
legacy_url: 'https://disbug.io/en/blog/git-commands/'
canonical_url: 'https://disbug.io/en/blog/git-commands/'
published_at: '2024-07-10'
updated_at: '2024-07-10'
author: 'Akil Nachimuthu'
author_slug: 'akil-nachimuthu'
tags:
  - 'Software Development'
tag_slugs:
  - 'software-development'
image: '/static/blog/images/git-commands-public-090bbeb0e2bd.png'
---

Git is a version control system (VCS) used by developers to keep track of changes they make to code. In this article, we'll go over the most common Git commands and explain what they do. By the end, you'll be able to work with Git confidently and efficiently. Let's get started!

### What is a Git command?

Git is a version control system (VCS) used for software development. It allows multiple developers to work on the same project simultaneously and makes changes to files in a repository (a collection of files) very easily. Git commands are used to manage the files and repositories in Git.

### Top 12 Git commands for every developer

### Git clone

Git clone is used to create a copy of a repository (a collection of files) on your computer. This can be useful if you want to work on the same project but don't have access to the original source code.

To clone a repository, first use the git clone command to create a local copy.

For example:

git clone [https://github.com/username/repo.git](https://github.com/username/repo.git)

After cloning the repository, you can access the files by using the cd command and then the path to the repository directory: cd repo

You can also use the git clone --recursive command to clone the repository in its entirety. This will include any branches and tags that are contained within it.

### Git checkout

Git checkout is used to switch between different versions of a file in a repository. For example, you might use it when working on a project and want to see how changes you made last week compare with this week's version of the file.

When you checkout a tag, the changes that have been made to the files in the repository since that tag was created are downloaded and applied. When you checkout a commit, the changes that have been made to the files in the repository since the most recent commit are downloaded and applied.

Git checkout \[-b\] \[-f\] \[file...\]

The git checkout command allows you to switch between different branches in your repository. It also allows you to checkout a specific commit. You can use this command as follows:

git checkout <branch> <commit>

### Git branch

The Git branch command is used to keep track of the changes that have been made to a file or project. When you make a change to a file, you create a new commit object and add it to the appropriate branch. You can then use the Git branch command to see which commits are associated with which branch. This is useful for reviewing the changes that have been made to a project, and for knowing which commits are responsible for certain features or fixes.

For example, if you make some changes to a file and want to keep them separate from your master (an existing, stable version of the project) branch, you would use Git brad.

### Git merge

Git merge is used to combine changes made in different branches into one single branch - this makes it easier for developers working on the same project to see updates quickly. It also helps avoid unintentional errors when multiple people are working on the same codebase simultaneously.

### Git status

The 'git status' command produces a list of files in the current working directory, along with information about the status of each file. Understanding the output of this command can help you track the progress of your files and make changes more effectively.

Here is a brief summary of the different fields in the 'git status' output:

- The '# lines changed' field shows how many lines have been changed since the last commit.

- The '# files changed' field shows how many files have been changed since the last commit.

- The '@{N} lines modified' field shows the number of lines that have been modified on N commits ago. The first N commits are shown with a single asterisk (\*).

- The '@{N} files modified' field shows the number of files that have been modified on N commits ago. The first N commits are shown with a single asterisk (\*).

- The '@{U} lines untracked' field shows the number of lines that are not tracked by Git and are not currently in any branch.

### Git commit

The Git commit command is used to record a change you've made to a file and then store that change in the repository. Whenever someone else needs to access the changes you've made, they can use the Git commit command to retrieve them.

To use the Git commit command, you first need to know your current working directory - this is the directory in which you're currently working on the project. Next, you need to identify the file you want to commit your changes to. Finally, you use the Git commit command to record your changes and store them in the repository.

### Git push

Git push commands allow you to send changes you have made to a repository to other people who are also working on that repository. The most common use for this is when you want to share changes you have made with a team of collaborators. With Git push, everyone on the team can receive the same version of the project at the same time.

To use Git push, you first need to create a "push" repository. This is a special kind of repository that contains the files that will be sent through the Git push command. The next step is to create a "pull" request template file.

This file contains information about the changes that will be sent through the Git push command. The last step is to fill in the details of the pull request and submit it. Once the pull request has been submitted, anyone on the team can clone and merge it into their own copy of the project.

### Git pull

The Git pull command allows you to fetch changes made by other developers on a project. When you use the Git pull command, Git will check out the latest changes from the remote repository and merge them into your local copy. By default, the Git pull command will merge all changes made to the current branch.

### Git init

Git init is a command used to initialize a new Git repository. It is written in the shell, and typically runs from the root of a project directory. The following are some common usage examples:

1\. To create an empty Git repository in the current directory:

git init

2\. To create a Git repository for the current project using the default configuration:

git init --bare

3\. To create a Git repository for the current project using a specific configuration:

git init --repo=path/to/repo

4\. To update the contents of an existing Git repository:

git add . git commit -am 'added some files' git push origin master

### Git add

Git add \[file\]

The git add command is used to add files to the current git project. When git add is called, it will scan the working directory for files that have not been already added (by the Git commit or explicit git add commands) and will create a new commit for each file it finds.

### Git rm

Git rm is used to remove files from a repository. This can be useful if you want to delete a file from the project but don't want to risk accidentally deleting any other files in the same directory structure. It takes the following arguments:

1\. filename - The name of the file to be removed.

2\. force - If set, forces deletion even if there are other files with the same name in the repository.

3\. recursive - If set, recursively removes any child files of the target file.

### Get fetch

Get fetch is used to retrieve files from a Git repository. This can be useful if you want to get a copy of the latest version of a file without having to clone or checkout the repository first.

Git fetch \[options\]

- A | --all

Fetch all remote branches matching the given path. If no path is given, the current branch's branches will be fetched.

- B | --bisect

Fetch only the latest commit from each branch, or if there is no latest commit on a branch, then the branch's HEAD is used. If there are multiple commits on a branch, then the last commit is used.

- C | --color

Prettify diagnostic output using colors. Defaults to true.

- D | --no-merge

Do not merge in changes from the remote branch. This overrides any merge that may have been attempted on the local branch. If a merge was attempted and it failed, this flag will have no effect.

- F | --force

Force fetching of any branches which do not have a local version that agrees with the remote version. This will overwrite any local changes that are incompatible with the remote version.

### Conclusion

Git is a powerful tool for any developer to manage the project.

To make sure you don’t forget these 12 Git commands in your next project, just bookmark this post and keep it as your secret weapon! From fixing merge issues to knowing how branches work, we have listed all important Git tips here. Happy coding!
