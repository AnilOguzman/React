import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Bir Hata Oluştu!</h1>
        <p>Böyle bir sayfa bulunamadı!</p>
      </main>
    </>
  );
};

export default ErrorPage;
