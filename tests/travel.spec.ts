import { test, expect } from '@playwright/test';

test('should load travel page', async ({ page }) => {
  await page.goto('/travel');
  expect(page.url()).toContain('/travel');
});

test('should have featured travel post', async ({ page }) => {
  await page.goto('/travel');
  const featured = page.locator('.featured');
  await expect(featured).toBeVisible();
});

test('featured post should have image', async ({ page }) => {
  await page.goto('/travel');
  const featuredImage = page.locator('.featured img').first();
  await expect(featuredImage).toBeVisible();
});

test('featured post should have title', async ({ page }) => {
  await page.goto('/travel');
  const title = page.locator('.featured .title').first();
  await expect(title).toBeVisible();
});
