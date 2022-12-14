import { Router } from 'express';
import health from '../modules/health/router/health.router';
import user from '../modules/user/router/user.router';
import { notFound, errorHandler, authRestrict } from '../middleware';

const router: Router = Router();

router.use('/health', health);
router.use('/', user);
//router.use('/home', [token2Context, authRestrict], user);

router.use(errorHandler);
router.get('*', notFound);

export = router;
