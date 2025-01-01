import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { Router } from '../../../../server/src'

const trpc = createTRPCProxyClient<Router>({
	links: [httpBatchLink({ url: 'http://localhost:3001/v2/trpc' })],
})

export { trpc }
