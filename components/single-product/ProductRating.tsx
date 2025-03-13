import { FaStar } from 'react-icons/fa'

function ProductRating({ productId }: { productId: string }) {
	const rating = 4.2
	const count = 25

	const className = `flex gap-1 items-center text-md mt-1 mb-4`
	const countValue = `(${count}) reviews`

	return (
		<div className={className}>
			<FaStar className="w-3 h-3" />
			{rating} {countValue}
		</div>
	)
}
export default ProductRating
