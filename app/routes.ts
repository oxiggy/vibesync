import { type RouteConfig, index, route, layout } from '@react-router/dev/routes'

export default [
	index('routes/home.tsx'),
	layout('routes/app-layout.tsx', [route('dashboard', 'routes/dashboard.tsx'), route('games', 'routes/games.tsx'), route('games/:gameId', 'routes/game.tsx'), route('games/create', 'routes/game-create.tsx'),  route('forms', 'routes/forms.tsx'), route('forms/:formId', 'routes/form.tsx')]),
	route('api/game/create', 'routes/api/game/create.ts'),
] satisfies RouteConfig
