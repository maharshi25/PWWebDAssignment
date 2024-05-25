

#Question 1
# Task 1: Initialize a Git repository for your JavaScript project.
git init

# Task 2: Create a file named script.js with a simple JavaScript function.
echo "function greet() { console.log('Hello, world!'); }" > script.js

# Task 3: Add and commit the changes.
git add script.js
git commit -m "Initial commit: Added script.js with a simple JavaScript function"


#Question 2
# Task 1: Create a new branch named feature-greeting.
git branch feature-greeting

# Task 2: Switch to the new branch.
git checkout feature-greeting

# Task 3: Add a new function in script.js that displays a personalized greeting.
echo "function greet(name) { console.log('Hello, ' + name + '!'); }" > script.js

# Task 4: Commit the changes in the feature branch.
git add script.js
git commit -m "Added personalized greeting function"

# Task 5: Merge feature-greeting into the main branch.
git checkout main
git merge feature-greeting

# Task 6: Switch back to the main branch.
git checkout main




#question 3
# Task 2: Push your local repository to the GitHub repository.
git remote add origin <repository_url>
git push -u origin main

# Task 4: Your team member should clone the repository and make a change.
git clone <repository_url>
# Team member makes changes in the cloned repository.

# Task 5: Fetch and merge the changes made by your team member.
git fetch origin
git merge origin/main



#Question 4 & 5
# Task 4:
# Create a new branch named feature-update.
git branch feature-update

# Switch to the new branch and make changes to script.js.
git checkout feature-update
# Make changes to script.js

# Commit the changes in the feature branch.
git add script.js
git commit -m "Updated script.js in feature branch"

# Switch back to the main branch and make different changes to script.js.
git checkout main
# Make different changes to script.js

# Commit the changes in the main branch.
git add script.js
git commit -m "Updated script.js in main branch"

# Attempt to merge feature-update into the main branch.
git merge feature-update

# Resolve any merge conflicts that occur.

# Task 5:
# Create a new file named obsolete.js.
echo "console.log('This file is obsolete');" > obsolete.js

# Add and commit the file to the repository.
git add obsolete.js
git commit -m "Added obsolete.js file"

# Realize that obsolete.js is unnecessary and should be removed.
git rm obsolete.js
git commit -m "Removed obsolete.js file"

# Undo the last commit where obsolete.js was added.
git reset --soft HEAD~1
