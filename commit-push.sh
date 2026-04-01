#!/bin/bash
set -e

echo "Staging all changes..."
git add -A

echo "Committing changes..."
git commit -m "feat: Complete website with footer, about, contact pages, SEO setup, 404 page, and fix icon imports"

echo "Pushing to main branch..."
git push origin main

echo "✅ All changes pushed successfully!"
