import {
  sleep,
  supabase,
} from '../../data';
import { addToast } from '../../toast';

const login = (email, password) => {
	return sleep(1000).then(() => {
		supabase.auth
			.signIn({ email, password })
			.then((data) => {
				if (data.error) {
					console.log(data.error);
					addToast(data.error.message, 'Authentification Failed', 'error');
				} else {
					addToast(`Signed In as ${data.user.email}`, 'Authentification', 'success');
				}
			})
			.catch((err) => {
				addToast(err, 'Error', 'error');
				// alert(err)
			});
	});
};
export default login;
