1️⃣ Create a branch from main

```
git checkout main
git pull origin main        # make sure main is up-to-date
git checkout -b feature_branch
```

2️⃣ Work on your customization

```
# make your changes
git add .
git commit -m "Add custom feature"
git push origin feature_branch   # optional if you want to push to GitHub
```

3️⃣ Merge back to your main personal branch (optional)

```
git checkout custom_rex       # or main if your personal work is there
git merge feature_branch
git push origin custom_rex    # push merged updates
```

4️⃣ Delete the temporary branch
Locally:

```
git branch -d feature_branch
```

Remotely (if you pushed it):

```
git push origin --delete feature_branch
```
