import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, 'https://www.findmind.ch/c/bp_survey');
}
