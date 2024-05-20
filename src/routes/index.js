import configs from "../configs"
import { Home } from "../pages"
const PublicRoutes=[{
  path:configs.paths.home,
  element:<Home/>
}
]

const PrivateRoutes=[{}]


export {PublicRoutes,PrivateRoutes}