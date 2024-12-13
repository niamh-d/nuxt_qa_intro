import { mountSuspended } from "@nuxt/test-utils/runtime";
import { it, expect, describe } from "vitest";
import AppNumber from "./AppNumber.vue";

describe("AppNumber", () => {
  it("can mount the component", async () => {
    const component = await mountSuspended(AppNumber);
    expect(component.html()).toContain("Number:");
  });
});
