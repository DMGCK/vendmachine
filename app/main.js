import { BuyablesController } from "./Controllers/buyablesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  buyablesController = new BuyablesController()
}

window["app"] = new App();
