import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');
  
  // Just check the page loaded and has basic content
  const title = page.locator('h1');
  await expect(title).toBeVisible();
  
  const content = await page.content();
  expect(content).toContain('Building Reliable Systems');
});

test('hero button exists', async ({ page }) => {
  await page.goto('/');
  
  const button = page.locator('.hero-actions a[href="/projects/"]');
  await expect(button).toBeVisible();
});
