import router from '@/router';

describe('Router', () => {
  it('debería tener una ruta para About', () => {
    const route = router.options.routes.find(route => route.path === '/about');
    expect(route).toBeTruthy();
  });

  it('debería tener una ruta para Contact', () => {
    const route = router.options.routes.find(route => route.path === '/contact');
    expect(route).toBeTruthy();
  });
});
