import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "ajouter-contact",
    loadChildren: () =>
      import("./ajouter-contact/ajouter-contact.module").then(
        m => m.AjouterContactPageModule
      )
  },
  {
    path: "consulter-contact",
    loadChildren: () =>
      import("./consulter-contact/consulter-contact.module").then(
        m => m.ConsulterContactPageModule
      )
  },
  {
    path: "consulter-all-contact",
    loadChildren: () =>
      import("./consulter-all-contact/consulter-all-contact.module").then(
        m => m.ConsulterAllContactPageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
