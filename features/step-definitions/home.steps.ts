import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Page } from 'playwright';

let page: Page;

Given('eu acesso o site da Base2', async () => {
  //const browser = await chromium.launch({ headless: true }); -- modo headless
  const browser = await chromium.launch({ headless: false, slowMo: 100 }); //modo não headless
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://base2.com.br');
});

Then('o título deve conter {string}', async (tituloEsperado: string) => {
  const titulo = await page.title();
  expect(titulo).toContain(tituloEsperado);
});
