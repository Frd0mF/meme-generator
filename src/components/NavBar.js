import image from './meme-face.png'
export default function navBar () {
  return (
    <nav className="navbar">
        <img src={image} alt="meme-face"/>
        <h2>Meme Generator</h2>
    </nav>
  );
}
