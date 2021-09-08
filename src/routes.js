import AboutAuthor from "./components/AboutAuthor.vue";
import TheFooter from "./components/TheFooter.vue";
import ProjectsMenu from "./components/projects/ProjectsMenu.vue";
import PageProjects from "./components/projects/PageProjects.vue";
import GamesProjects from "./components/projects/GamesProjects.vue";
import ContactsPage from "./components/contacts/ContactsPage.vue";

export const routes = [
  {
    path: "/",
    name: "main",
    components: { default: AboutAuthor, footer: TheFooter },
  },
  {
    path: "/projects",
    name: "projects",
    components: { default: ProjectsMenu, footer: TheFooter },
    children: [
      { path: "/sites", name: "websites", component: PageProjects },
      { path: "/games", name: "games", component: GamesProjects },
    ],
  },
  {
    path: "/contacts",
    name: "contacts",
    components: { default: ContactsPage, footer: TheFooter },
  },
];
