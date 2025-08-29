import { startWorker } from 'jazz-tools/worker'
import { co } from 'jazz-tools'
import { AppRoot } from '@/jazz/schema'

export const WorkerAccount = co.account({
	profile: co.profile(),
	root: AppRoot,
})

export const jazz = await startWorker({
	syncServer: `wss://cloud.jazz.tools/?key=${process.env.PUBLIC_JAZZ_KEY}`,
	AccountSchema: WorkerAccount,
	accountID: process.env.PUBLIC_JAZZ_WORKER_ACCOUNT,
	accountSecret: process.env.JAZZ_WORKER_SECRET,
})
