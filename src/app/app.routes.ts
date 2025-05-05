import type { Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { LosTresPerritosComponent } from "./los-tres-perritos/los-tres-perritos.component"
import { LibreriaJulietaFierroComponent } from "./libreria-julieta-fierro/libreria-julieta-fierro.component"
import { LiberiaXComponent } from "./liberia-x/liberia-x.component"
import { JageComponent } from "./jage/jage.component"
import { DeCultoComponent } from "./de-culto/de-culto.component"
import { StandsEditorialesComponentComponent } from "./stands-editoriales-component/stands-editoriales-component.component"
import { TecnmComponent } from "./tecnm/tecnm.component"
import { TecnologiaComponent } from "./tecnologia/tecnologia.component"
import { VariosComponent } from "./varios/varios.component"


export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "tresperritos", component: LosTresPerritosComponent },
  { path: "julieta", component: LibreriaJulietaFierroComponent },
  { path: "libreriaX", component: LiberiaXComponent },
  { path: "jage", component: JageComponent },
  { path: "culto", component: DeCultoComponent },
  { path: "StandsEditoriales", component: StandsEditorialesComponentComponent },
  { path: "TecNM", component: TecnmComponent },
  { path: "Tecnologia", component: TecnologiaComponent },
  { path: "varios", component: VariosComponent },
  

  
  { path: "**", redirectTo: "" },
]