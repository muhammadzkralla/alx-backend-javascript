import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {

	let obj = {};

	try {
		const user = await createUser();
		const photo = await uploadPhoto();
		obj = {photo: photo, user: user}
	} catch (err) {
		res = { photo: null, user: null };
	}

	return obj;
}
