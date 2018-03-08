# project-sinoper
> A team project for UCI Coding Boot Camp

# Project Goal:
Build Something Awesome

### Project URL
[view project-sinoper](https://mediaduk.github.io/project-sinoper/) (https://mediaduk.github.io/project-sinoper/)

# Requirements:
1. Must uses at least two APIs
2. Must use AJAX to pull data
3. Must utilize at least one new library or technology that we haven’t discussed
4. Must have a polished frontend / UI
5. Must meet good quality coding standards (indentation, scoping, naming)
6. Must NOT use alerts, confirms, or prompts (look into modals!)
7. Must have some sort of repeating element (table, columns, etc)
8. Must use Bootstrap or Alternative CSS Framework
9. Must be Deployed (GitHub Pages or Firebase)
10. Must have User Input Validation

# Learning Resources
1. [official git docs](https://git-scm.com/doc)

2. [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


# Forking/Merging Instructions

1. fork, then clone repository
2. git remote -v (checks connection)
    A. need to connect to master repo:
        git remote add upstream (url to repo)
    B. check the new connection is there
        git remote -v
3. create a new branch
        git branch branchName
4. switch to your branch
        git checkout branchName
5. make changes
6. Add/Commit Changes
        git add -A (or git add fileName (for specific files))
        git commit -m "comments"
7. switch to master branch
        git checkout master
8. Merge
        git merge branchName
        git push origin master
9. Create Pull Request
        this is done in github
10. gitmaster then merges on their end (in github)
11. get changes that have been merged
        git fetch upstream
        git merge upstream/master
