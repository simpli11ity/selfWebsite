import { test, expect } from '@playwright/test';

test('home page on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const heading = page.locator('h1').first();
  await expect(heading).toBeVisible();
});

test('travel page on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/travel');
  
  const featured = page.locator('.featured');
  await expect(featured).toBeVisible();
});

test('projects page on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/projects');
  
  const featured = page.locator('.featured');
  await expect(featured).toBeVisible();
});

test('navigation on tablet', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('/');
  
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
});
