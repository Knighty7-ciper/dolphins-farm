import { execSync } from 'child_process';

console.log('🚀 Starting deployment process...\n');

try {
  console.log('📝 Staging all changes...');
  execSync('git add -A', { stdio: 'inherit' });

  console.log('\n💾 Committing changes...');
  execSync('git commit -m "feat: Complete website with footer, about, contact pages, SEO setup, 404 page, and fix icon imports"', { stdio: 'inherit' });

  console.log('\n📤 Pushing to main branch...');
  execSync('git push origin main', { stdio: 'inherit' });

  console.log('\n✅ All changes pushed successfully to GitHub!');
  console.log('🔄 GitHub Actions will now build and deploy your site.');
} catch (error) {
  console.error('\n❌ Error during deployment:', error.message);
  process.exit(1);
}
