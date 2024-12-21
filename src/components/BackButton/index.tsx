export function BackButton() {
  const handleGoBack = () => {
    window.history.back();
  };

  return <button onClick={handleGoBack} className="text-droidGold underline cursor-pointer hover:animate-pulse">{"< "}Back</button>;
}
