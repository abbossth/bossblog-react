import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";
import "./assets/css/media.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
import Loader from "./components/loader";
// import Layout from "./layout/layout";
// import Home from "./pages/home";
// import Profile from "./pages/profile";
// import About from "./pages/about";
// import Saved from "./pages/saved";
// import Topic from "./pages/topic";
// import Topics from "./pages/topics";
// import Privacy from "./pages/privacy";
// import NotFound from "./pages/404";
// import ProfileEdit from "./pages/profile-edit";
// import UserArticles from "./pages/user-articles";
// import WriteArticle from "./pages/write-article";
// import WriteArticleForm from "./pages/write-article-form";
// import Article from "./pages/article";
// import AuthorizedHome from "./pages/authorizedHome";
// import MobileSearch from "./pages/mobile-search";
const Layout = lazy(() => import("./layout/layout"));
const Home = lazy(() => import("./pages/home"));
const Profile = lazy(() => import("./pages/profile"));
const About = lazy(() => import("./pages/about"));
const Saved = lazy(() => import("./pages/saved"));
const Topic = lazy(() => import("./pages/topic"));
const Topics = lazy(() => import("./pages/topics"));
const Privacy = lazy(() => import("./pages/privacy"));
const NotFound = lazy(() => import("./pages/404"));
const ProfileEdit = lazy(() => import("./pages/profile-edit"));
const UserArticles = lazy(() => import("./pages/user-articles"));
const WriteArticle = lazy(() => import("./pages/write-article"));
const WriteArticleForm = lazy(() => import("./pages/write-article-form"));
const Article = lazy(() => import("./pages/article"));
const AuthorizedHome = lazy(() => import("./pages/authorizedHome"));
const MobileSearch = lazy(() => import("./pages/mobile-search"));

const App = () => {
  const loggedIn = useSelector((state) => state.loginReducer.loggedIn);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ProtectedRoute isSignedIn={loggedIn}>
          <Layout>
            <Routes>
              <Route path="/" element={<AuthorizedHome />} />
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
              <Route path="/mobile-search" element={<MobileSearch />}></Route>
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
              <Route path="/mobile-search" element={<MobileSearch />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Layout>
        )}
      </Suspense>
    </>
  );
};

export default App;
