import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

describe("Tests de vista About", () => {
  it("Test2 - Probar la existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/about");
    await router.isReady();

    const wrapper = shallowMount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});

describe("Tests de vista Home", () => {
  it("Test2 - Probar la existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/");
    await router.isReady();

    const wrapper = shallowMount(HomeView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
  });
});
