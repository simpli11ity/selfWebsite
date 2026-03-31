import { test, expect } from '@playwright/test';

test('should load projects page', async ({ page }) => {
  await page.goto('/projects');
  expect(page.url()).toContain('/projects');
});

test('should have featured project', async ({ page }) => {
  await page.goto('/projects');
  const featured = page.locator('.featured');
  await expect(featured).toBeVisible();
});

test('featured project should have image', async ({ page }) => {
  await page.goto('/projects');
  const featuredImage = page.locator('.featured img').first();
  await expect(featuredImage).toBeVisible();
});

test('featured project should have title', async ({ page }) => {
  await page.goto('/projects');
  const title = page.locator('.featured .title').first();
  await expect(title).toBeVisible();
});
