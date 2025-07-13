import { useAccount } from 'jazz-tools/react'

export default function AccountMenu() {
	const { me } = useAccount()

	return <div className="shrink-0">{me?.profile?.name}</div>
}
