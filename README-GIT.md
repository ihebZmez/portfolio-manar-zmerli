## Get repository ready to work

```bash
# 1. Clone the repository
git clone <REPOSITORY_URL>

# 2. Go inside the project
cd signle_page-website-main

# 3. Fetch all branches
git fetch --all

# 4. Checkout the target branch
git checkout arem-group-website-customization

# 5. Pull latest updates
git pull origin arem-group-website-customization

```

## Work process GIT

```bash
git checkout main
git pull origin main
git checkout -b R-20102025-customization

# ... work ...

git add .
git commit -m "customization 1 application"
git push origin R-20102025-customization

# ... Once main is up-to-date and stable ...

git checkout main
git branch -d R-20102025-customization
git branch -D R-20102025-customization
git push origin --delete R-20102025-customization
git fetch -p
git branch
```
