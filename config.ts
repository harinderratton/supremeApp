var MAIN_URL = 'http://13.58.91.205';
var SOCKET_URL_PORT='3001';

export const config = {
  	API_URL : MAIN_URL+'/newchurch/web/',
	ENC_SALT: 'gd58_N9!ysS',
  	IMAGES_URL: MAIN_URL+'/newchurch/public/free_videos/',
  	IMAGE_EXTENSIONS: ['image/png','image/jpg','image/jpeg','image/gif','image/bmp','image/webp']
};

export const social_config = {
  	FACEBOOK_ID: ''
};

export const socket_config = {
	SOCKET_URL: MAIN_URL+':'+SOCKET_URL_PORT,
};

 