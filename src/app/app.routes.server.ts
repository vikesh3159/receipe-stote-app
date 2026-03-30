import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'recipes',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'shopping-list',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'auth',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
