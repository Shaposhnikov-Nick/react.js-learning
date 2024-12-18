import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";

const Error = () => {
  // автоматический редирект на главную страницу через 3 сек
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Heading text='Error 404' />
    </>
  );
};

export default Error;
