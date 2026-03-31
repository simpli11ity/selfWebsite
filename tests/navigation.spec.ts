import { test, expect } from '@playwright/test';

test('should navigate to home page', async ({ page }) => {
  await page.goto('/');
  expect(page.url()).toContain('/');
});

test('header navigation links exist', async ({ page }) => {
  await page.goto('/');
  
  const homeLink = page.locator('nav a[href="/"]').first();
  const travelLink = page.locator('nav a[href="/travel"]').first();
  const projectsLink = page.locator('nav a[href="/projects"]').first();
  
  await expect(homeLink).toBeVisible();
  await expect(travelLink).toBeVisible();
  await expect(projectsLink).toBeVisible();
});

test('navigate from home to travel', async ({ page }) => {
  await page.goto('/');
  await page.click('nav a[href="/travel"]');
  expect(page.url()).toContain('/travel');
});

test('navigate from home to projects', async ({ page }) => {
  await page.goto('/');
  await page.click('nav a[href="/projects"]');
  expect(page.url()).toContain('/projects');
});

test('github link is visible in header', async ({ page }) => {
  await page.goto('/');
  const githubLink = page.locator('header a[href*="github.com"]');
  await expect(githubLink).toBeVisible();
});
