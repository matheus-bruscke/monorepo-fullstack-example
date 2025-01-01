import { createTRPCReact } from '@trpc/react-query'
import type { Router } from '../../../../server/src'

const trpc = createTRPCReact<Router>()

export { trpc }
