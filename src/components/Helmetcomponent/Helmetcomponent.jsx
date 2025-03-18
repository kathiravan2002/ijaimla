import { Helmet } from "react-helmet";

const Helmetcomponent = ({ title }) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="keywords" content="IJAIMLA, International Journal of Artificial Intelligence and Machine Learning Applications , Artificial Intelligence, Scientific Technology, Machine Learning, AI, Data Science, Robotics,  Machine Learning Applications, IoT, Cloud Computing" />
    <meta name="description" content="The International Journal of Artificial Intelligence and Machine Learning Applications (IJAIMLA) is a prestigious, open-access, peer-reviewed interdisciplinary journal dedicated to advancing research in Artificial Intelligence (AI) and Machine Learning (ML). Published quarterly, it serves as a platform for sharing cutting-edge studies, innovative theories, and practical applications in the rapidly evolving fields of AI and ML. The journal covers a broad spectrum of topics, including Deep Learning, Natural Language Processing, Computer Vision, Reinforcement Learning, and AI-driven Decision-making. Its mission is to foster scientific discovery and drive innovation by promoting collaboration among researchers, academicians, and industry professionals worldwide. With a commitment to high-quality scholarship, IJAIMLA provides an invaluable resource for those seeking to explore and contribute to the latest advancements in AI and ML, bridging the gap between theoretical research and real-world implementation while encouraging interdisciplinary approaches to solving complex challenges." />
    <meta name="author" content="IJAIMLA Editorial Team" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="International Journal of Artificial Intelligence and Machine Learning Applications(IJAIMLA)" />
    <meta property="og:description" content="The International Journal of Artificial Intelligence and Machine Learning Applications (IJAIMLA) is a prestigious, open-access, peer-reviewed interdisciplinary journal dedicated to advancing research in Artificial Intelligence (AI) and Machine Learning (ML). Published quarterly, it serves as a platform for sharing cutting-edge studies, innovative theories, and practical applications in the rapidly evolving fields of AI and ML. The journal covers a broad spectrum of topics, including Deep Learning, Natural Language Processing, Computer Vision, Reinforcement Learning, and AI-driven Decision-making. Its mission is to foster scientific discovery and drive innovation by promoting collaboration among researchers, academicians, and industry professionals worldwide. With a commitment to high-quality scholarship, IJAIMLA provides an invaluable resource for those seeking to explore and contribute to the latest advancements in AI and ML, bridging the gap between theoretical research and real-world implementation while encouraging interdisciplinary approaches to solving complex challenges." />
    <meta property="og:url" content="https://www.ijaimla.com/" />
    <meta property="og:image" content="https://ijaimla.com/assets/IJAIMLA.png" />

    <link rel="canonical" href="https://www.ijaimla.com/" />
    <link rel="icon" type="image/png" href="https://www.ijaimla.com//assets/Fav.png" />
  </Helmet>
  );
};

export default Helmetcomponent;