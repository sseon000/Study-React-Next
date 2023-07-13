export const getDate = (myDate) => {
	const date = new Date(myDate)
	const yyyy = date.getFullYear()
	const mm = date.getMonth() + 1 ; // 여기서 +1을 하는 이유는 월을 0~11까지 받아오기때문입니다
	const dd = date.getDate()
	return `${yyyy}-${mm}-${dd}`
}