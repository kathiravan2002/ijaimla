import { Helmet } from "react-helmet";

const Helmetcomponent = ({ title }) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="keywords" content="IJAIMLA, International Journal of Artificial Intelligence and Machine Learning Applications , Artificial Intelligence, Scientific Technology, Machine Learning, AI, Data Science, Robotics,  Machine Learning Applications, IoT, Cloud Computing" />
    <meta name="description" content="IJAIMLA is a peer-reviewed journal publishing cutting-edge research on AI and ML, including deep learning, NLP, computer vision, and more" />
    <meta name="author" content="IJAIMLA Editorial Team" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="International Journal of Artificial Intelligence and Machine Learning Applications(IJAIMLA)" />
    <meta property="og:description" content="IJAIMLA is a peer-reviewed journal publishing cutting-edge research on AI and ML, including deep learning, NLP, computer vision, and more" />
    <meta property="og:url" content="https://www.ijaimla.com/" />
    <meta property="og:image" content="https://ijaimla.com/assets/IJAIMLA.png" />

    <link rel="canonical" href="https://www.ijaimla.com/" />
    <link rel="icon" type="image/png" href="https://www.ijaimla.com//assets/Fav.png" />
  </Helmet>
  );
};

export default Helmetcomponent;