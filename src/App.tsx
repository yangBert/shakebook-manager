import * as React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routers from "./router";

const App: React.FC = () => {
  return (
    <main>
      <Router>
        <div>
          <Switch>
            {
              routers.map(item =>
                <Route path={item.path}>
                  {item.component}
                </Route>
              )
            }
          </Switch>
        </div>
      </Router>
    </main>
  )
}

export default App