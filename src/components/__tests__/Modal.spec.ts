import { describe, it, expect, vitest } from "vitest";
import { render, fireEvent } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";
import App from "@/App.vue";
import { useModalStore } from "@/stores/store";
import { createPinia, setActivePinia } from "pinia";

describe("store", () => {
  setActivePinia(createPinia());
  const store = useModalStore();

  it("should start at false", () => {
    expect(store.isModalVisible).toBe(false);
  });

  it("should be true after one click", () => {
    store.toggleModal();
    expect(store.isModalVisible).toBe(true);
  });

  it("should be false after another click", () => {
    store.toggleModal();
    expect(store.isModalVisible).toBe(false);
  });
});

describe("Modal", () => {
  setActivePinia(createPinia());

  const wrapper = render(App, {
    global: {
      plugins: [
        createTestingPinia({
          stubActions: false,
          createSpy: vitest.fn,
        }),
      ],
    },
  });

  const store = useModalStore();

  it("it should be hidden first", () => {
    expect(wrapper.queryByTestId("modal")).toBeNull();
    expect(document.body.classList[0]).not.toBeDefined();
  });

  it("it should be visible after clicking button once", async () => {
    const button = wrapper.getAllByText(/Demander une démo/)[0];
    expect(button).toBeDefined();
    await fireEvent.click(button);

    expect(store.toggleModal).toHaveBeenCalledOnce();
    expect(wrapper.getByTestId("modal")).toBeDefined();
    expect(document.body.classList[0]).toBe("no-scroll");
  });

  it("it should be hidden after clicking button twice", async () => {
    const button = wrapper.getAllByText(/Demander une démo/)[0];
    expect(button).toBeDefined();
    await fireEvent.click(button);

    expect(store.toggleModal).toHaveBeenCalledTimes(2);
    expect(wrapper.queryByTestId("modal")).toBeNull();
    expect(document.body.classList[0]).not.toBeDefined();
  });
});
