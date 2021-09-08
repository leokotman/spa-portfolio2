import AboutAuthor from "./components/AboutAuthor.vue";
import TheFooter from "./components/TheFooter.vue";
import ProjectsList from "./components/projects/ProjectsList.vue";
import ProjectsPage from "./components/projects/ProjectsPage.vue";
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
    components: { default: ProjectsPage, footer: TheFooter },
    children: [
      { path: "/sites", name: "websites", component: ProjectsList },
      { path: "/games", name: "games", component: GamesProjects },
    ],
  },
  {
    path: "/contacts",
    name: "contacts",
    components: { default: ContactsPage, footer: TheFooter },
  },
];
