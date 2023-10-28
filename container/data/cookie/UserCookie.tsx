import CookieManager from '@react-native-cookies/cookies';
import { VoteProps } from '../../components/joke/Joke';

export const saveVoteCookie = (props: VoteProps) => {
  const cookieName = `joke_${props.id}`;
  const cookieValue = props.state ? 'like' : 'dislike';

  CookieManager.set('http://example.com', {
    name: cookieName,
    value: cookieValue
  }).then((done) => {
    console.log('CookieManager.set =>', done);
  });
}

export const getVotesCookie = () => {
  CookieManager.get('https://example.com')
    .then((cookies) => {
      console.log('CookieManager.get =>', cookies);
    });
}

export const clearCookie = () => {
  CookieManager.clearAll()
    .then((success) => {
      console.log('CookieManager.clearAll =>', success);
    });
}