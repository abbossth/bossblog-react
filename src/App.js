import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";
import "./assets/css/media.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import Saved from "./pages/saved";
import Topic from "./pages/topic";
import Topics from "./pages/topics";
import Privacy from "./pages/privacy";
import NotFound from "./pages/404";
import ProfileEdit from "./pages/profile-edit";
import UserArticles from "./pages/user-articles";
import WriteArticle from "./pages/write-article";
import WriteArticleForm from "./pages/write-article-form";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useSelector } from "react-redux";
import Article from "./pages/article";

const App = () => {
  const loggedIn = useSelector((state) => state.loginReducer.loggedIn);
  return (
    <>
      <ProtectedRoute isSignedIn={loggedIn}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:profileId" element={<Profile />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/topics/:topicId" element={<Topic />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/about" element={<About />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/user-articles" element={<UserArticles />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
            <Route path="/write" element={<WriteArticle />} />
            <Route path="/write-form" element={<WriteArticleForm />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </ProtectedRoute>
      {!loggedIn && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/profile/:profileId" element={<Profile />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/topics/:topicId" element={<Topic />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
      )}
    </>
  );
};

export default App;
