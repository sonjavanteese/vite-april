import {
  sleep,
  supabase,
} from '../../data';
import { addToast } from '../../toast';

const logout = () => {
	return sleep(1000).then(() => {
		supabase.auth
			.signOut()
			.then(() => {
				addToast('Successfully Signed Out', 'Logged Out', 'success');
			})
			.catch((err) => {
				addToast(err, 'Error', 'error');
				// alert(err)
			});
	});
};
export default logout;
