export function renderPageContainer() {
    const app = document.querySelector("#app");
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    app!.appendChild(wrapper);
}

export function renderTopBanner(name: string) {
    const banner = document.createElement("div");
    banner.classList.add("banner");
    const html = `<h1 class="banner__title">${name}</h1>`;
    banner.innerHTML = html;
    return banner;
}

export function renderAdminPage() {
    const wrapper = document.querySelector(".wrapper");
    wrapper!.appendChild(renderTopBanner("Admin Page"));
    // wrapper!.innerHTML = '';
}

export function startAdminPage() {
    document.addEventListener("DOMContentLoaded", renderAdminPage);
}