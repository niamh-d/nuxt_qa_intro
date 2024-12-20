import { setup, $fetch, createPage, url } from "@nuxt/test-utils/e2e";
import { describe, test, expect } from "vitest";

describe("app", async () => {
  await setup();

  test("contains number as string", async () => {
    const html = await $fetch("/");
    expect(html).toContain("Number:");
  });

  test("with playwright", async () => {
    const page = await createPage();
    await page.goto(url("/"), { waitUntil: "hydration" });
    const text = await page.textContent("span");
    const num = Number(text);
    expect(num).toBeGreaterThan(0);
    await page.click("button");
    const newText = await page.textContent("span");
    const newNum = Number(newText);
    expect(newNum).not.toBe(num);
  });
});
