import dynamic from "next/dynamic";
import { getDictionary } from "./dictionaries";
import { ValidLocales } from "./langTypes";

export default async function Page({
  params: { lang },
}: {
  params: { lang: ValidLocales };
}) {
  const dict = await getDictionary(lang);

  const UserDataAfterLogin = dynamic(
    () => import("../../components/UserDataAfterLogin"),
    { ssr: false }
  );

  return (
    <>
      This is my homepage
      {dict.form.username}
      {dict.form.password}
      <UserDataAfterLogin />
    </>
  );
}
