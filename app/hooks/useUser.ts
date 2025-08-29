import { useAccount } from 'jazz-tools/react'
import { AppAccount } from '@/jazz/schema'

export const useUser = () => {
	const { me } = useAccount(AppAccount, {
		resolve: {
			profile: true,
		},
	})

	return me
}
