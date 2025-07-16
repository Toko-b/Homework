import { def } from "./logger.js";

def('hello');

import {createUser, deleteUser} from "./userService.js";

createUser('Giorgi');
deleteUser('152')