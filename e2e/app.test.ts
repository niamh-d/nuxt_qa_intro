import { setup, $fetch } from "@nuxt/test-utils/e2e";
import { describe, test, expect } from "vitest";

describe("app", async () => {
  await setup();

  test("contains number as string", async () => {
    const html = await $fetch("/");
    expect(html).toContain("Number:");
  });
});
