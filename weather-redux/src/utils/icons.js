export default function(code) {
  let imageUrl;
  switch (code) {
    case '01d':
    case '01n':
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/754947-200.png';
      break;
    case '02d':
    case '02n':
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/754949-200.png';
      break;
    case '03d':
    case '03n':
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/754951-200.png';
      break;
    case '04d':
    case '04n':
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/754936-200.png';
      break;
    case '09d':
    case '09n':
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/754937-200.png';
      break;
    case '10d':
    case '10n':
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/754955-200.png';
      break;
    case '11d':
    case '11n':
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/754945-200.png';
      break;
    case '13d':
    case '13n':
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/754957-200.png';
      break;
    case '50d':
    case '50n':
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/754941-200.png';
      break;
    case 'search':
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/950829-200.png';
      break;
    default:
      imageUrl = 'https://d30y9cdsu7xlg0.cloudfront.net/png/119135-200.png';
      break;
  }

  return imageUrl;
}