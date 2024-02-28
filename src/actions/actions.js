import axios from 'axios'

export const getNewImg = (url) => {
	return (dispatch) => {
		axios.get(url)
			.then((res) => {
				console.log(res.data);
				dispatch({
					type: 'get_new_img',
					payload:res.data
				})
			})
			.catch((err) => {
				console.log(err.message);
				dispatch({
					type: 'get_new_img_error',
					payload:err.message
				});
			});
	}
	
}