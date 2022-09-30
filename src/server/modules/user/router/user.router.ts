import { Router } from 'express';
import { getUser } from '../controller/user.controller';

const router: Router = Router();

// Get the routes.

// Bind routes with controller.
router.get('/user', getUser);

export = router;
